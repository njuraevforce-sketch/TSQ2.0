export class Router {
    constructor() {
        this.routes = {
            '/': 'index',
            '/login': 'login', 
            '/register': 'register',
            '/vip': 'vip',
            '/team': 'team',
            '/fund': 'fund',
            '/mine': 'mine'
        };
        this.currentPage = null;
        this.init();
    }

    init() {
        window.addEventListener('popstate', () => this.handleRoute());
        
        document.addEventListener('click', (e) => {
            const link = e.target.closest('[data-route]');
            if (link) {
                e.preventDefault();
                this.navigate(link.getAttribute('data-route'));
            }
        });
        
        this.handleRoute();
    }

    async handleRoute() {
        const path = window.location.pathname;
        const page = this.routes[path] || 'index';
        
        if (this.currentPage !== page) {
            await this.loadPage(page);
            this.currentPage = page;
        }
    }

    async loadPage(page) {
        try {
            document.getElementById('app').innerHTML = '<div class="loading">Загрузка страницы...</div>';
            
            const module = await import(`./pages/${page}.js`);
            document.getElementById('app').innerHTML = module.render();
            
            if (module.init) {
                module.init();
            }
            
        } catch (error) {
            console.error('Error loading page:', error);
            document.getElementById('app').innerHTML = `
                <div style="text-align: center; padding: 50px;">
                    <h2>Ошибка загрузки страницы</h2>
                    <p>Страница не найдена или произошла ошибка</p>
                    <button onclick="window.router.navigate('/')" style="
                        background: #4e7771; 
                        color: white; 
                        border: none; 
                        padding: 10px 20px; 
                        border-radius: 5px; 
                        margin-top: 20px;
                        cursor: pointer;
                    ">На главную</button>
                </div>
            `;
        }
    }

    navigate(path) {
        window.history.pushState({}, '', path);
        this.handleRoute();
    }
}

window.router = new Router();
