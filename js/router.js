class Router {
    constructor() {
        this.routes = {
            '/': 'index',
            '/vip': 'vip', 
            '/team': 'team',
            '/fund': 'fund',
            '/mine': 'mine',
            '/login': 'login',
            '/register': 'register'
        };
        this.init();
    }

    init() {
        window.addEventListener('popstate', () => this.handleRoute());
        document.addEventListener('DOMContentLoaded', () => this.handleRoute());
        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-route]')) {
                e.preventDefault();
                this.navigate(e.target.getAttribute('data-route'));
            }
        });
    }

    navigate(path) {
        window.history.pushState({}, '', path);
        this.handleRoute();
    }

    async handleRoute() {
        const path = window.location.pathname;
        const page = this.routes[path] || 'index';
        
        try {
            const module = await import(`./${page}.js`);
            document.getElementById('app').innerHTML = module.render();
            if (module.init) module.init();
        } catch (error) {
            console.error('Failed to load page:', error);
            document.getElementById('app').innerHTML = '<div class="loading">Ошибка загрузки страницы</div>';
        }
    }
}

export { Router };
