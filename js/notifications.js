class GLYNotifications {
    constructor() {
        this.notificationContainer = null;
        this.init();
    }

    init() {
        // Create notification container
        this.notificationContainer = document.createElement('div');
        this.notificationContainer.className = 'gly-notifications';
        this.notificationContainer.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9999;
            max-width: 300px;
        `;
        document.body.appendChild(this.notificationContainer);
    }

    showNotification(message, type = 'info', duration = 3000) {
        const notification = document.createElement('div');
        notification.className = `gly-notification gly-notification-${type}`;
        notification.style.cssText = `
            background: rgba(0,0,0,0.8);
            color: white;
            padding: 15px;
            margin-bottom: 10px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            animation: slideIn 0.3s ease;
        `;
        
        notification.innerHTML = `
            <div style="display: flex; align-items: center;">
                <div style="flex: 1;">${message}</div>
                <button class="gly-notification-close" style="background: none; border: none; color: #ccc; cursor: pointer; margin-left: 10px;">×</button>
            </div>
        `;
        
        this.notificationContainer.appendChild(notification);
        
        // Close button
        notification.querySelector('.gly-notification-close').addEventListener('click', () => {
            this.removeNotification(notification);
        });
        
        // Auto remove
        if (duration > 0) {
            setTimeout(() => {
                this.removeNotification(notification);
            }, duration);
        }
        
        return notification;
    }

    removeNotification(notification) {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode === this.notificationContainer) {
                this.notificationContainer.removeChild(notification);
            }
        }, 300);
    }

    // Helper methods
    success(message, duration = 3000) {
        return this.showNotification(message, 'success', duration);
    }

    error(message, duration = 3000) {
        return this.showNotification(message, 'error', duration);
    }

    info(message, duration = 3000) {
        return this.showNotification(message, 'info', duration);
    }

    loading(message) {
        const notification = document.createElement('div');
        notification.className = 'gly-notification gly-notification-loading';
        notification.style.cssText = `
            background: rgba(0,0,0,0.8);
            color: white;
            padding: 15px;
            margin-bottom: 10px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            animation: slideIn 0.3s ease;
        `;
        
        notification.innerHTML = `
            <div style="display: flex; align-items: center;">
                <div style="margin-right: 10px;">
                    <div class="gly-spinner" style="width: 20px; height: 20px; border: 2px solid #f3f3f3; border-top: 2px solid #3498db; border-radius: 50%; animation: spin 1s linear infinite;"></div>
                </div>
                <div style="flex: 1;">${message}</div>
            </div>
        `;
        
        this.notificationContainer.appendChild(notification);
        
        return {
            hide: () => this.removeNotification(notification),
            update: (newMessage) => {
                const textDiv = notification.querySelector('div:nth-child(2)');
                if (textDiv) textDiv.textContent = newMessage;
            }
        };
    }

    confirm(message, title = 'Confirm') {
        return new Promise((resolve) => {
            const modal = document.createElement('div');
            modal.className = 'gly-confirm-modal';
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0,0,0,0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
            `;
            
            modal.innerHTML = `
                <div style="background: white; border-radius: 10px; padding: 20px; max-width: 300px; width: 90%;">
                    <h3 style="margin-top: 0; color: #333;">${title}</h3>
                    <p style="color: #666; margin-bottom: 20px;">${message}</p>
                    <div style="text-align: right;">
                        <button id="gly-confirm-cancel" style="background: #ccc; color: #333; border: none; padding: 8px 15px; border-radius: 5px; margin-right: 10px; cursor: pointer;">Cancel</button>
                        <button id="gly-confirm-ok" style="background: #4e7771; color: white; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer;">OK</button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            modal.querySelector('#gly-confirm-cancel').addEventListener('click', () => {
                document.body.removeChild(modal);
                resolve(false);
            });
            
            modal.querySelector('#gly-confirm-ok').addEventListener('click', () => {
                document.body.removeChild(modal);
                resolve(true);
            });
        });
    }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    .gly-notification-success {
        border-left: 4px solid #52c41a;
    }
    
    .gly-notification-error {
        border-left: 4px solid #ff4d4f;
    }
    
    .gly-notification-info {
        border-left: 4px solid #1890ff;
    }
`;
document.head.appendChild(style);

// Initialize
window.GLYNotifications = new GLYNotifications();
