class Router {
    constructor() {
        this.routes = {};
        this.currentRoute = null;
    }

    addRoute(path, component) {
        this.routes[path] = component;
    }

    navigateTo(path) {
        if (this.routes[path]) {
            this.currentRoute = path;
            this.render();
        }
    }

    redirectTo(path) {
        this.navigateTo(path);
    }

    switchTab(path) {
        this.navigateTo(path);
    }

    render() {
        // Рендеринг текущего маршрута
        const app = document.getElementById('app');
        if (app && this.currentRoute && this.routes[this.currentRoute]) {
            app.innerHTML = '';
            const component = this.routes[this.currentRoute];
            if (typeof component === 'function') {
                const instance = new component();
                app.appendChild(instance.$el);
            }
        }
    }
}

// Глобальный роутер
window.router = new Router();
