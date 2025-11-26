// Регистрируем все uni-компоненты как кастомные элементы
class UniButton extends HTMLElement {
    connectedCallback() {
        const type = this.getAttribute('type') || 'default';
        const size = this.getAttribute('size') || '';
        const disabled = this.hasAttribute('disabled');
        const loading = this.hasAttribute('loading');
        
        this.className = `uni-button ${type} ${size} ${disabled ? 'disabled' : ''} ${loading ? 'loading' : ''}`;
        
        this.addEventListener('click', (e) => {
            if (disabled) {
                e.preventDefault();
                e.stopPropagation();
                return;
            }
            this.classList.add('button-hover');
            setTimeout(() => this.classList.remove('button-hover'), 150);
        });
    }
}

class UniTabbar extends HTMLElement {
    connectedCallback() {
        this.className = 'uni-tabbar';
        const position = this.getAttribute('position') || 'bottom';
        this.classList.add(`uni-tabbar-${position}`);
    }
}

class UniTabbarItem extends HTMLElement {
    connectedCallback() {
        this.className = 'uni-tabbar__item';
        
        this.addEventListener('click', () => {
            const route = this.getAttribute('data-route');
            if (route) {
                window.history.pushState({}, '', route);
                window.dispatchEvent(new PopStateEvent('popstate'));
            }
            
            this.parentElement.querySelectorAll('.uni-tabbar__item').forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
        });
    }
}

class UniInput extends HTMLElement {
    connectedCallback() {
        this.className = 'uni-input-wrapper';
        
        const placeholder = this.getAttribute('placeholder') || '';
        const value = this.getAttribute('value') || '';
        const type = this.getAttribute('type') || 'text';
        
        this.innerHTML = `
            <input class="uni-input-input" type="${type}" placeholder="${placeholder}" value="${value}">
            ${placeholder ? `<div class="uni-input-placeholder">${placeholder}</div>` : ''}
        `;
        
        const input = this.querySelector('input');
        const placeholderEl = this.querySelector('.uni-input-placeholder');
        
        if (placeholderEl) {
            input.addEventListener('input', () => {
                placeholderEl.style.display = input.value ? 'none' : 'block';
            });
            placeholderEl.style.display = input.value ? 'none' : 'block';
        }
    }
}

class UniModal extends HTMLElement {
    connectedCallback() {
        this.className = 'uni-modal';
    }
}

class UniActionsheet extends HTMLElement {
    connectedCallback() {
        this.className = 'uni-actionsheet';
    }
}

// Регистрируем все компоненты
customElements.define('uni-button', UniButton);
customElements.define('uni-tabbar', UniTabbar);
customElements.define('uni-tabbar__item', UniTabbarItem);
customElements.define('uni-input', UniInput);
customElements.define('uni-modal', UniModal);
customElements.define('uni-actionsheet', UniActionsheet);
