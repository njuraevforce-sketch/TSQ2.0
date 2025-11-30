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
    }

    async showSection(sectionId) {
        if (this.currentSection === sectionId) return;

        // Скрыть текущую секцию
        if (this.currentSection) {
            document.getElementById(this.currentSection).classList.remove('active');
            if (this.currentSection !== 'login' && this.currentSection !== 'register') {
                document.querySelector(`[data-section="${this.currentSection}"]`).classList.remove('uni-tabbar__item--active');
            }
        }

        // Показать новую секцию
        await this.loadSection(sectionId);
        document.getElementById(sectionId).classList.add('active');
        
        // Управление видимостью таббара и навбара
        if (sectionId === 'login' || sectionId === 'register') {
            this.hideTabbar();
            this.hideNavbar();
        } else {
            this.showTabbar();
            this.showNavbar();
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
