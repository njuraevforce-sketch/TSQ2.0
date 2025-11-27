class Router {
    constructor() {
        this.routes = {};
        this.currentRoute = null;
        this.app = null;
    }

    addRoute(path, component) {
        this.routes[path] = component;
    }

    navigateTo(path) {
        if (this.routes[path]) {
            this.currentRoute = path;
            if (this.app) {
                this.app.currentPage = this.routes[path];
            }
        }
    }

    init(app) {
        this.app = app;
    }
}

// Глобальный роутер
window.router = new Router();
