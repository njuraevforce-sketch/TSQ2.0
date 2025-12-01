// Основной модуль приложения
class QuantumFarmApp {
    constructor() {
        this.currentSection = null;
        this.sections = ['home', 'get', 'assets', 'mine', 'login', 'register', 'company', 'invite', 'team', 'rules'];
        this.init();
    }

    async init() {
        // Скрываем таббар по умолчанию
        this.hideTabbar();
        
        // Загружаем начальную секцию
        await this.showSection('login');
        this.setupEventListeners();
        this.setupNavigation();
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
            this.showNavbar();
            document.body.classList.add('no-tabbar');
            
            // Устанавливаем заголовок для страниц быстрого доступа с кнопкой назад
            if (sectionId === 'company') this.setNavbarTitle('Company', true);
            else if (sectionId === 'invite') this.setNavbarTitle('Invite', true);
            else if (sectionId === 'team') this.setNavbarTitle('Team', true);
            else if (sectionId === 'rules') this.setNavbarTitle('Rules', true);
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
                navbarContent.innerHTML = `
                    <div class="u-navbar__content__back" id="navbar-back-btn">
                        <i class="fas fa-arrow-left"></i>
                    </div>
                    <div class="u-navbar__content__logo">
                        <img src="assets/logo.png" alt="Logo">
                    </div>
                    <div class="u-navbar__content__title">${title}</div>
                `;
                
                // Добавляем обработчик для кнопки назад
                document.getElementById('navbar-back-btn').addEventListener('click', () => {
                    window.showSection('home');
                });
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

    showBackButton(show = true) {
        const backBtn = document.querySelector('.u-navbar__content__back');
        if (backBtn) {
            backBtn.style.display = show ? 'block' : 'none';
        }
    }
}

// Инициализация приложения когда DOM готов
document.addEventListener('DOMContentLoaded', () => {
    new QuantumFarmApp();
});

// Глобальные утилиты
window.QuantumFarm = {
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
            // Fallback для старых браузеров
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            return true;
        }
    }
};
