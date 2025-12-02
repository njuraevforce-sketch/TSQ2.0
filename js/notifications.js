// Custom notifications manager
class NotificationManager {
    constructor() {
        this.container = null;
        this.init();
    }

    init() {
        this.container = document.createElement('div');
        this.container.className = 'notification-container';
        document.body.appendChild(this.container);
    }

    show(message, type = 'info', duration = 3000) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">${message}</div>
            <div class="notification-progress"></div>
        `;

        this.container.appendChild(notification);

        // Show animation
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);

        // Progress bar
        const progress = notification.querySelector('.notification-progress');
        if (duration && progress) {
            progress.style.animation = `progress ${duration}ms linear`;
        }

        // Auto close
        if (duration) {
            setTimeout(() => {
                this.close(notification);
            }, duration);
        }

        return notification;
    }

    close(notification) {
        notification.classList.remove('show');
        setTimeout(() => {
            if (this.container.contains(notification)) {
                this.container.removeChild(notification);
            }
        }, 300);
    }

    loading(message = 'Loading...') {
        const loading = document.createElement('div');
        loading.className = 'notification notification-loading';
        loading.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-spinner fa-spin"></i> ${message}
            </div>
        `;

        this.container.appendChild(loading);
        setTimeout(() => {
            loading.classList.add('show');
        }, 10);

        return {
            close: () => this.close(loading),
            update: (newMessage) => {
                const content = loading.querySelector('.notification-content');
                if (content) {
                    content.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${newMessage}`;
                }
            }
        };
    }

    alert(message, title = 'Alert') {
        return new Promise((resolve) => {
            const dialog = this.createDialog(message, title, 'alert', resolve);
            this.container.appendChild(dialog);
            setTimeout(() => {
                dialog.classList.add('show');
            }, 10);
        });
    }

    confirm(message, title = 'Confirm') {
        return new Promise((resolve) => {
            const dialog = this.createDialog(message, title, 'confirm', resolve);
            this.container.appendChild(dialog);
            setTimeout(() => {
                dialog.classList.add('show');
            }, 10);
        });
    }

    createDialog(message, title, type, resolve) {
        const dialog = document.createElement('div');
        dialog.className = 'notification-dialog';
        dialog.innerHTML = `
            <div class="dialog-overlay"></div>
            <div class="dialog-content">
                <div class="dialog-header">${title}</div>
                <div class="dialog-body">${message}</div>
                <div class="dialog-footer">
                    ${type === 'confirm' ? 
                        '<button class="dialog-btn dialog-cancel">Cancel</button>' : 
                        ''
                    }
                    <button class="dialog-btn dialog-ok">OK</button>
                </div>
            </div>
        `;

        const overlay = dialog.querySelector('.dialog-overlay');
        const cancelBtn = dialog.querySelector('.dialog-cancel');
        const okBtn = dialog.querySelector('.dialog-ok');

        const close = (result) => {
            dialog.classList.remove('show');
            setTimeout(() => {
                if (this.container.contains(dialog)) {
                    this.container.removeChild(dialog);
                }
                resolve(result);
            }, 300);
        };

        overlay.addEventListener('click', () => {
            if (type === 'alert') {
                close(true);
            } else {
                close(false);
            }
        });

        if (cancelBtn) {
            cancelBtn.addEventListener('click', () => close(false));
        }

        okBtn.addEventListener('click', () => close(true));

        return dialog;
    }
}

// Create global instance
window.Notify = new NotificationManager();
