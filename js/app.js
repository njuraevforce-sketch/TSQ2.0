// Основной модуль приложения
class GLYApp {
    constructor() {
        this.currentSection = null;
        this.sections = ['home', 'get', 'assets', 'mine', 'login', 'register', 'company', 'invite', 'team', 'rules'];
        this.currentUser = null;
        this.supabase = null;
        this.init();
    }

    async init() {
        // Инициализация Supabase
        await this.initSupabase();
        
        // Проверка авторизации
        await this.checkAuth();
        
        // Скрываем таббар по умолчанию
        this.hideTabbar();
        
        // Загружаем начальную секцию
        if (this.currentUser) {
            await this.showSection('home');
        } else {
            await this.showSection('login');
        }
        
        this.setupEventListeners();
        this.setupNavigation();
        
        // Запускаем проверку обновления сигналов
        this.startSignalUpdateCheck();
    }

    async initSupabase() {
        // Создаем Supabase клиент с правильными заголовками
        this.supabase = supabase.createClient(
            'https://jxyazsguwkbklavamzyj.supabase.co',
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4eWF6c2d1d2tia2xhdmFtenlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ1NTI4MzMsImV4cCI6MjA4MDEyODgzM30.0udmTyDCvUrhhVDfQy4enClH7Cxif7gaX_V6RTZysAI',
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4eWF6c2d1d2tia2xhdmFtenlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ1NTI4MzMsImV4cCI6MjA4MDEyODgzM30.0udmTyDCvUrhhVDfQy4enClH7Cxif7gaX_V6RTZysAI',
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4eWF6c2d1d2tia2xhdmFtenlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ1NTI4MzMsImV4cCI6MjA4MDEyODgzM30.0udmTyDCvUrhhVDfQy4enClH7Cxif7gaX_V6RTZysAI`
                },
                db: {
                    schema: 'public'
                },
                auth: {
                    persistSession: true,
                    autoRefreshToken: true
                }
            }
        );
        
        window.supabase = this.supabase;
    }

    async checkAuth() {
        const storedUser = localStorage.getItem('gly_user');
        if (storedUser) {
            try {
                this.currentUser = JSON.parse(storedUser);
                
                // Пытаемся обновить данные пользователя из базы
                try {
                    const { data, error } = await this.supabase
                        .from('users')
                        .select('*')
                        .eq('id', this.currentUser.id)
                        .maybeSingle();  // Используем maybeSingle
                        
                    if (error) {
                        console.warn('Could not fetch user data:', error);
                        // Используем сохраненные данные
                        return;
                    }
                    
                    if (data) {
                        this.currentUser = data;
                        localStorage.setItem('gly_user', JSON.stringify(data));
                    }
                } catch (error) {
                    console.warn('Auth check error:', error);
                    // Продолжаем с сохраненными данными
                }
            } catch (e) {
                console.error('Error parsing stored user:', e);
                localStorage.removeItem('gly_user');
                this.currentUser = null;
            }
        }
    }

    setupEventListeners() {
        // Навигация по таббару
        document.querySelectorAll('.uni-tabbar__item').forEach(item => {
            item.addEventListener('click', (e) => {
                const section = e.currentTarget.getAttribute('data-section');
                this.showSection(section);
            });
        });
    }

    setupNavigation() {
        // Глобальные функции
        window.showSection = (sectionId) => {
            this.showSection(sectionId);
        };

        window.setNavbarTitle = (title) => {
            this.setNavbarTitle(title);
        };

        window.showBackButton = (show = true) => {
            this.showBackButton(show);
        };

        window.getCurrentUser = () => {
            return this.currentUser;
        };

        window.updateUserBalance = async (amount, type = 'deposit') => {
            return await this.updateUserBalance(amount, type);
        };

        window.performQuantification = async () => {
            return await this.performQuantification();
        };

        window.logout = () => {
            this.logout();
        };
    }

    async showSection(sectionId) {
        if (this.currentSection === sectionId) return;

        // Проверяем авторизацию для защищенных страниц
        const protectedSections = ['home', 'get', 'assets', 'mine', 'invite', 'team', 'rules'];
        if (protectedSections.includes(sectionId) && !this.currentUser) {
            await this.showSection('login');
            return;
        }

        // Скрыть текущую секцию
        if (this.currentSection) {
            document.getElementById(this.currentSection).classList.remove('active');
            if (this.currentSection !== 'login' && this.currentSection !== 'register' && 
                this.currentSection !== 'company' && this.currentSection !== 'invite' && 
                this.currentSection !== 'team' && this.currentSection !== 'rules') {
                const activeTab = document.querySelector(`[data-section="${this.currentSection}"]`);
                if (activeTab) {
                    activeTab.classList.remove('uni-tabbar__item--active');
                }
            }
        }

        // Показать новую секцию
        await this.loadSection(sectionId);
        document.getElementById(sectionId).classList.add('active');
        
        // Управление видимостью таббара и навбара
        if (sectionId === 'login' || sectionId === 'register') {
            this.hideTabbar();
            this.hideNavbar();
            document.body.classList.add('auth-page');
        } else if (sectionId === 'company' || sectionId === 'invite' || 
                   sectionId === 'team' || sectionId === 'rules') {
            this.hideTabbar();
            this.showNavbar();
            document.body.classList.add('no-tabbar');
            
            if (sectionId === 'company') this.setNavbarTitle('Company', true);
            else if (sectionId === 'invite') this.setNavbarTitle('Invite', true);
            else if (sectionId === 'team') this.setNavbarTitle('Team', true);
            else if (sectionId === 'rules') this.setNavbarTitle('Rules', true);
        } else {
            this.showTabbar();
            this.showNavbar();
            document.body.classList.remove('no-tabbar');
            this.setNavbarTitle('', false);
            
            // Устанавливаем активный таб
            document.querySelectorAll('.uni-tabbar__item').forEach(item => {
                item.classList.remove('uni-tabbar__item--active');
            });
            const currentTabItem = document.querySelector(`[data-section="${sectionId}"]`);
            if (currentTabItem) {
                currentTabItem.classList.add('uni-tabbar__item--active');
            }
        }

        this.currentSection = sectionId;
    }

    async loadSection(sectionId) {
        const sectionElement = document.getElementById(sectionId);
        
        try {
            // Динамически импортируем модуль секции
            const module = await import(`./${sectionId}.js`);
            
            // Вызываем функцию рендеринга секции
            if (module.default && typeof module.default === 'function') {
                sectionElement.innerHTML = module.default();
                
                // Инициализируем секцию после рендеринга
                if (module.init && typeof module.init === 'function') {
                    setTimeout(() => module.init(), 0);
                }
            }
        } catch (error) {
            console.error(`Error loading section ${sectionId}:`, error);
            sectionElement.innerHTML = `<div class="error">Error loading ${sectionId} section</div>`;
        }
    }

    hideTabbar() {
        const tabbar = document.querySelector('.uni-tabbar');
        if (tabbar) {
            tabbar.style.display = 'none';
        }
    }

    showTabbar() {
        const tabbar = document.querySelector('.uni-tabbar');
        if (tabbar) {
            tabbar.style.display = 'flex';
        }
    }

    hideNavbar() {
        const navbar = document.querySelector('.u-navbar');
        if (navbar) {
            navbar.style.display = 'none';
        }
        const navbarPlaceholder = document.querySelector('.u-navbar__placeholder');
        if (navbarPlaceholder) {
            navbarPlaceholder.style.display = 'none';
        }
    }

    showNavbar() {
        const navbar = document.querySelector('.u-navbar');
        if (navbar) {
            navbar.style.display = 'block';
        }
        const navbarPlaceholder = document.querySelector('.u-navbar__placeholder');
        if (navbarPlaceholder) {
            navbarPlaceholder.style.display = 'block';
        }
    }

    setNavbarTitle(title, showBackButton = false) {
        const navbarContent = document.querySelector('.u-navbar__content');
        if (navbarContent) {
            if (showBackButton) {
                navbarContent.innerHTML = `
                    <div class="u-navbar__content__back" id="navbar-back-btn">
                        <i class="fas fa-arrow-left"></i>
                    </div>
                    <div class="u-navbar__content__title">${title}</div>
                `;
                
                const backButton = document.getElementById('navbar-back-btn');
                if (backButton) {
                    backButton.addEventListener('click', () => {
                        window.showSection('home');
                    });
                }
            } else {
                navbarContent.innerHTML = `
                    <div class="u-navbar__content__logo">
                        <img src="assets/logo.png" alt="Logo">
                    </div>
                    <div class="u-navbar__content__title">${title}</div>
                `;
            }
        }
    }

    async updateUserBalance(amount, type = 'deposit') {
        if (!this.currentUser) return false;

        try {
            const newBalance = this.currentUser.balance + amount;
            
            // Обновляем в базе
            const { error } = await this.supabase
                .from('users')
                .update({ balance: newBalance })
                .eq('id', this.currentUser.id);
                
            if (error) throw error;
            
            // Обновляем текущего пользователя
            this.currentUser.balance = newBalance;
            localStorage.setItem('gly_user', JSON.stringify(this.currentUser));
            
            // Создаем транзакцию
            await this.supabase
                .from('transactions')
                .insert([{
                    user_id: this.currentUser.id,
                    type: type,
                    amount: amount,
                    status: 'completed',
                    description: `${type.charAt(0).toUpperCase() + type.slice(1)} ${amount > 0 ? '+' : ''}${amount} USDT`
                }]);
            
            return true;
        } catch (error) {
            console.error('Error updating balance:', error);
            return false;
        }
    }

    async performQuantification() {
        if (!this.currentUser) return { success: false, message: 'User not logged in' };
        
        if (this.currentUser.signals_available <= 0) {
            return { success: false, message: 'No signals available' };
        }
        
        try {
            // Получаем уровень VIP
            const vipLevel = this.currentUser.vip_level;
            const dailyPercent = await this.getVipPercent(vipLevel);
            const profitPerSignal = (this.currentUser.balance * (dailyPercent / 100)) / 3;
            
            // Обновляем баланс
            await this.updateUserBalance(profitPerSignal, 'quantification');
            
            // Уменьшаем количество сигналов
            const newSignals = this.currentUser.signals_available - 1;
            const { error } = await this.supabase
                .from('users')
                .update({ signals_available: newSignals })
                .eq('id', this.currentUser.id);
                
            if (error) throw error;
            
            // Обновляем текущего пользователя
            this.currentUser.signals_available = newSignals;
            localStorage.setItem('gly_user', JSON.stringify(this.currentUser));
            
            // Начисляем реферальные бонусы
            await this.distributeReferralProfit(profitPerSignal);
            
            return { 
                success: true, 
                profit: profitPerSignal,
                signals_left: newSignals 
            };
        } catch (error) {
            console.error('Error performing quantification:', error);
            return { success: false, message: 'Error performing quantification' };
        }
    }

    async getVipPercent(level) {
        const vipPercents = {
            1: 2.2,
            2: 2.8,
            3: 3.5,
            4: 4.0,
            5: 5.0,
            6: 6.0
        };
        return vipPercents[level] || 2.2;
    }

    async distributeReferralProfit(profit) {
        if (!this.currentUser) return;
        
        try {
            // Находим рефереров 3 уровней
            const referrals = await this.getReferralChain(this.currentUser.id);
            
            // Проценты для каждого уровня
            const levelPercents = { 1: 12, 2: 5, 3: 3 };
            
            for (const [level, referrerId] of Object.entries(referrals)) {
                if (referrerId) {
                    const percent = levelPercents[level];
                    const referralProfit = (profit * percent) / 100;
                    
                    // Обновляем баланс реферера напрямую
                    const { data: userData } = await this.supabase
                        .from('users')
                        .select('balance')
                        .eq('id', referrerId)
                        .maybeSingle();
                    
                    if (userData) {
                        const newBalance = userData.balance + referralProfit;
                        await this.supabase
                            .from('users')
                            .update({ balance: newBalance })
                            .eq('id', referrerId);
                    }
                    
                    // Создаем транзакцию
                    await this.supabase
                        .from('transactions')
                        .insert([{
                            user_id: referrerId,
                            type: 'referral',
                            amount: referralProfit,
                            status: 'completed',
                            description: `Referral level ${level} bonus`
                        }]);
                }
            }
        } catch (error) {
            console.error('Error distributing referral profit:', error);
        }
    }

    async getReferralChain(userId) {
        const chain = { 1: null, 2: null, 3: null };
        
        try {
            // Уровень 1
            const { data: level1 } = await this.supabase
                .from('referrals')
                .select('referrer_id')
                .eq('referred_id', userId)
                .eq('level', 1)
                .maybeSingle();
                
            if (level1) {
                chain[1] = level1.referrer_id;
                
                // Уровень 2
                const { data: level2 } = await this.supabase
                    .from('referrals')
                    .select('referrer_id')
                    .eq('referred_id', level1.referrer_id)
                    .eq('level', 1)
                    .maybeSingle();
                    
                if (level2) {
                    chain[2] = level2.referrer_id;
                    
                    // Уровень 3
                    const { data: level3 } = await this.supabase
                        .from('referrals')
                        .select('referrer_id')
                        .eq('referred_id', level2.referrer_id)
                        .eq('level', 1)
                        .maybeSingle();
                        
                    if (level3) {
                        chain[3] = level3.referrer_id;
                    }
                }
            }
        } catch (error) {
            console.error('Error getting referral chain:', error);
        }
        
        return chain;
    }

    startSignalUpdateCheck() {
        // Проверяем каждую минуту, нужно ли обновить сигналы
        setInterval(() => {
            this.checkAndUpdateSignals();
        }, 60000);
        
        // Первоначальная проверка
        this.checkAndUpdateSignals();
    }

    async checkAndUpdateSignals() {
        if (!this.currentUser) return;
        
        const now = new Date();
        const utcHour = now.getUTCHours();
        const today = now.toISOString().split('T')[0];
        const lastUpdate = this.currentUser.last_signal_update?.split('T')[0];
        
        // Если сейчас 18:00 UTC и сегодня еще не обновляли
        if (utcHour >= 18 && today !== lastUpdate) {
            try {
                // Обновляем сигналы
                const { error } = await this.supabase
                    .from('users')
                    .update({ 
                        signals_available: 3,
                        last_signal_update: now.toISOString()
                    })
                    .eq('id', this.currentUser.id);
                    
                if (!error) {
                    this.currentUser.signals_available = 3;
                    this.currentUser.last_signal_update = now.toISOString();
                    localStorage.setItem('gly_user', JSON.stringify(this.currentUser));
                    
                    // Обновляем VIP уровень
                    await this.updateVipLevel();
                }
            } catch (error) {
                console.error('Error updating signals:', error);
            }
        }
    }

    async updateVipLevel() {
        if (!this.currentUser) return;
        
        try {
            // Получаем количество АКТИВНЫХ рефералов 1 уровня (баланс ≥ 20 USDT)
            const { data: activeReferrals, error: refError } = await this.supabase
                .from('referrals')
                .select(`
                    referred:users!referred_id (
                        balance
                    )
                `)
                .eq('referrer_id', this.currentUser.id)
                .eq('level', 1)
                .gte('referred.balance', 20);
                
            if (refError) throw refError;
            
            const activeRefs = activeReferrals?.length || 0;
            
            // Определяем новый VIP уровень на основе баланса и АКТИВНЫХ рефералов
            let newVipLevel = 1;
            
            if (this.currentUser.balance >= 300 && activeRefs >= 2) newVipLevel = 2;
            if (this.currentUser.balance >= 1000 && activeRefs >= 5) newVipLevel = 3;
            if (this.currentUser.balance >= 3500 && activeRefs >= 8) newVipLevel = 4;
            if (this.currentUser.balance >= 6000 && activeRefs >= 15) newVipLevel = 5;
            if (this.currentUser.balance >= 12000 && activeRefs >= 25) newVipLevel = 6;
            
            // Если уровень изменился
            if (newVipLevel !== this.currentUser.vip_level) {
                const { error } = await this.supabase
                    .from('users')
                    .update({ vip_level: newVipLevel })
                    .eq('id', this.currentUser.id);
                    
                if (!error) {
                    this.currentUser.vip_level = newVipLevel;
                    localStorage.setItem('gly_user', JSON.stringify(this.currentUser));
                }
            }
        } catch (error) {
            console.error('Error updating VIP level:', error);
        }
    }

    logout() {
        localStorage.removeItem('gly_user');
        this.currentUser = null;
        window.showSection('login');
    }
}

// Инициализация приложения
document.addEventListener('DOMContentLoaded', () => {
    window.glyApp = new GLYApp();
});

// Глобальные утилиты
window.GLY = {
    formatCurrency: (amount) => {
        return new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(amount);
    },
    
    copyToClipboard: async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (err) {
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            return true;
        }
    },
    
    generateUserId: () => {
        return 'GLY' + Math.random().toString(36).substr(2, 9).toUpperCase();
    },
    
    generateInviteCode: () => {
        return Math.random().toString(36).substr(2, 8).toUpperCase();
    }
};
