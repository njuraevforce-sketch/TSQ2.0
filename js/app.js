// Основной модуль приложения
class GLYApp {
    constructor() {
        this.currentSection = null;
        this.currentUser = null;
        this.sections = ['home', 'get', 'assets', 'mine', 'login', 'register', 'company', 'invite', 'team', 'rules'];
        this.supabaseUrl = 'https://jxyazsguwkbklavamzyj.supabase.co';
        this.supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4eWF6c2d1d2tia2xhdmFtenlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ1NTI4MzMsImV4cCI6MjA4MDEyODgzM30.0udmTyDCvUrhhVDfQy4enClH7Cxif7gaX_V6RTZysAI';
        this.init();
    }

    async init() {
        // Проверяем авторизацию
        await this.checkAuth();
        this.setupEventListeners();
        this.setupNavigation();
    }

    async checkAuth() {
        const token = localStorage.getItem('gly_token');
        const userData = localStorage.getItem('gly_user');
        
        if (token && userData) {
            this.currentUser = JSON.parse(userData);
            await this.showSection('home');
        } else {
            await this.showSection('login');
        }
    }

    async login(user) {
        this.currentUser = user;
        localStorage.setItem('gly_token', user.id);
        localStorage.setItem('gly_user', JSON.stringify(user));
        await this.showSection('home');
    }

    logout() {
        this.currentUser = null;
        localStorage.removeItem('gly_token');
        localStorage.removeItem('gly_user');
        this.showSection('login');
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
        // Глобальная функция для навигации
        window.showSection = (sectionId) => {
            this.showSection(sectionId);
        };

        // Глобальная функция для установки заголовка
        window.setNavbarTitle = (title) => {
            this.setNavbarTitle(title);
        };

        // Глобальная функция для показа кнопки назад
        window.showBackButton = (show = true) => {
            this.showBackButton(show);
        };
    }

    async showSection(sectionId) {
        if (this.currentSection === sectionId) return;

        // Скрыть текущую секцию
        if (this.currentSection) {
            document.getElementById(this.currentSection).classList.remove('active');
            if (this.currentSection !== 'login' && this.currentSection !== 'register' && 
                this.currentSection !== 'company' && this.currentSection !== 'invite' && 
                this.currentSection !== 'team' && this.currentSection !== 'rules') {
                document.querySelector(`[data-section="${this.currentSection}"]`).classList.remove('uni-tabbar__item--active');
            }
        }

        // Показать новую секцию
        await this.loadSection(sectionId);
        document.getElementById(sectionId).classList.add('active');
        
        // Управление видимостью таббара и навбара
        if (sectionId === 'login' || sectionId === 'register' || 
            sectionId === 'company' || sectionId === 'invite' || 
            sectionId === 'team' || sectionId === 'rules') {
            this.hideTabbar();
            this.hideNavbar(); // Скрываем навбар на auth страницах
            document.body.classList.add('no-tabbar');
        } else {
            this.showTabbar();
            this.showNavbar();
            document.body.classList.remove('no-tabbar');
            this.setNavbarTitle('', false);
            document.querySelector(`[data-section="${sectionId}"]`).classList.add('uni-tabbar__item--active');
        }

        this.currentSection = sectionId;
    }

    async loadSection(sectionId) {
        const sectionElement = document.getElementById(sectionId);
        
        // Если секция уже загружена, не загружаем повторно
        if (sectionElement.innerHTML.trim() !== '') return;

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
                // ТОЛЬКО стрелка назад и заголовок (без логотипа)
                navbarContent.innerHTML = `
                    <div class="u-navbar__content__back" id="navbar-back-btn">
                        <i class="fas fa-arrow-left"></i>
                    </div>
                    <div class="u-navbar__content__title">${title}</div>
                `;
                
                // Добавляем обработчик для кнопки назад
                const backButton = document.getElementById('navbar-back-btn');
                if (backButton) {
                    backButton.addEventListener('click', () => {
                        window.showSection('home');
                    });
                }
            } else {
                // Для главных страниц - только логотип и заголовок
                navbarContent.innerHTML = `
                    <div class="u-navbar__content__logo">
                        <img src="assets/logo.png" alt="Logo">
                    </div>
                    <div class="u-navbar__content__title">${title}</div>
                `;
            }
        }
    }

    showBackButton(show = true) {
        const backBtn = document.querySelector('.u-navbar__content__back');
        if (backBtn) {
            backBtn.style.display = show ? 'flex' : 'none';
        }
    }
}

// Инициализация приложения когда DOM готов
document.addEventListener('DOMContentLoaded', () => {
    window.app = new GLYApp();
});

// Глобальные утилиты
window.GLY = {
    supabase: null,
    
    initSupabase() {
        if (!this.supabase) {
            this.supabase = supabase.createClient(app.supabaseUrl, app.supabaseKey);
        }
        return this.supabase;
    },

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

    // Функции для работы с пользователями
    async registerUser(userData) {
        const supabase = this.initSupabase();
        const { data, error } = await supabase
            .from('users')
            .insert([userData])
            .select()
            .single();
            
        if (error) throw error;
        return data;
    },

    async loginUser(username, password) {
        const supabase = this.initSupabase();
        const { data, error } = await supabase
            .from('users')
            .select('*')
            .eq('username', username)
            .eq('password', password)
            .single();
            
        if (error) throw error;
        return data;
    },

    async updateUserBalance(userId, amount) {
        const supabase = this.initSupabase();
        const { data, error } = await supabase
            .from('users')
            .update({ balance: amount })
            .eq('id', userId)
            .select()
            .single();
            
        if (error) throw error;
        return data;
    },

    async updateUserVIPLevel(userId, vipLevel) {
        const supabase = this.initSupabase();
        const { data, error } = await supabase
            .from('users')
            .update({ vip_level: vipLevel })
            .eq('id', userId)
            .select()
            .single();
            
        if (error) throw error;
        return data;
    },

    // Функции для реферальной системы
    async addReferral(referrerId, referredId, level) {
        const supabase = this.initSupabase();
        const { data, error } = await supabase
            .from('referrals')
            .insert([{
                referrer_id: referrerId,
                referred_id: referredId,
                level: level
            }]);
            
        if (error) throw error;
        return data;
    },

    async getReferrals(userId) {
        const supabase = this.initSupabase();
        const { data, error } = await supabase
            .from('referrals')
            .select(`
                level,
                referred_user:users!referred_id(username, balance, created_at)
            `)
            .eq('referrer_id', userId);
            
        if (error) throw error;
        return data;
    },

    async getReferralsCount(userId) {
        const supabase = this.initSupabase();
        const { data, error } = await supabase
            .from('referrals')
            .select('level')
            .eq('referrer_id', userId);
            
        if (error) throw error;
        
        const counts = {1: 0, 2: 0, 3: 0};
        data.forEach(ref => {
            counts[ref.level] = (counts[ref.level] || 0) + 1;
        });
        
        return counts;
    },

    // Функции для транзакций
    async addTransaction(transactionData) {
        const supabase = this.initSupabase();
        const { data, error } = await supabase
            .from('transactions')
            .insert([transactionData]);
            
        if (error) throw error;
        return data;
    },

    async getUserTransactions(userId) {
        const supabase = this.initSupabase();
        const { data, error } = await supabase
            .from('transactions')
            .select('*')
            .eq('user_id', userId)
            .order('created_at', { ascending: false });
            
        if (error) throw error;
        return data;
    },

    // Функция для проверки и обновления VIP уровня
    async checkAndUpdateVIPLevel(userId) {
        const supabase = this.initSupabase();
        
        // Получаем текущего пользователя
        const { data: user } = await supabase
            .from('users')
            .select('*')
            .eq('id', userId)
            .single();
            
        if (!user) return;
        
        // Получаем количество рефералов
        const referralCounts = await this.getReferralsCount(userId);
        const level1Refs = referralCounts[1] || 0;
        
        // Определяем новый VIP уровень на основе баланса и рефералов
        let newVipLevel = 1;
        const balance = parseFloat(user.balance);
        
        if (balance >= 20 && balance < 100) newVipLevel = 1;
        else if (balance >= 100 && level1Refs >= 2) newVipLevel = 2;
        else if (level1Refs >= 5) newVipLevel = 3;
        else if (level1Refs >= 7) newVipLevel = 4;
        else if (level1Refs >= 15) newVipLevel = 5;
        else if (level1Refs >= 25) newVipLevel = 6;
        
        // Обновляем VIP уровень если изменился
        if (newVipLevel !== user.vip_level) {
            await this.updateUserVIPLevel(userId, newVipLevel);
            user.vip_level = newVipLevel;
            
            // Обновляем текущего пользователя в приложении
            if (app.currentUser && app.currentUser.id === userId) {
                app.currentUser.vip_level = newVipLevel;
                localStorage.setItem('gly_user', JSON.stringify(app.currentUser));
            }
        }
        
        return newVipLevel;
    }
};
