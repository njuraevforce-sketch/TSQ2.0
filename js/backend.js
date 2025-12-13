// backend.js - Модуль входа для администратора
import { t, initLanguageSystem } from './translate.js';

export default function renderBackend() {
    return `
        <div class="auth-container" style="padding-top: 20px;">
            <div class="auth-logo">
                <img src="assets/logo.png" alt="Admin Logo">
            </div>
            
            <div class="auth-title">
                <h1 style="color: #FFD700;">Administrator Panel</h1>
                <p style="color: rgba(255,255,255,0.8);">Secure administrative access only</p>
            </div>
            
            <div class="auth-form" style="max-width: 350px;">
                <div class="form-group">
                    <label for="admin-username">Administrator ID</label>
                    <input type="text" id="admin-username" placeholder="Enter admin ID" required>
                </div>
                
                <div class="form-group">
                    <label for="admin-password">Password</label>
                    <input type="password" id="admin-password" placeholder="Enter password" required>
                    <button type="button" class="password-toggle" id="toggle-admin-password" style="right: 10px;">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
                
                <div id="admin-error" class="error" style="display: none; margin-bottom: 15px;"></div>
                
                <button id="admin-login-btn" class="auth-button" style="background: #FFD700; color: #333;">
                    <i class="fas fa-lock"></i> Access Administrator Panel
                </button>
                
                <div style="text-align: center; margin-top: 15px;">
                    <a href="#" onclick="window.showSection('login'); return false;" 
                       style="color: #4CAF50; text-decoration: none; font-size: 14px;">
                        ← Return to User Login
                    </a>
                </div>
            </div>
            
            <div style="margin-top: 30px; text-align: center; color: #ccc; font-size: 12px; padding: 10px;">
                <i class="fas fa-shield-alt"></i> Restricted to authorized personnel only
            </div>
        </div>
    `;
}

export async function init() {
    // Initialize language
    initLanguageSystem();
    
    // Скрываем таббар и навбар для страницы админ-входа
    document.body.classList.add('auth-page');
    document.body.classList.add('no-tabbar');
    
    // Прячем стандартный навбар
    const navbar = document.querySelector('.u-navbar');
    const navbarPlaceholder = document.querySelector('.u-navbar__placeholder');
    const tabbar = document.querySelector('.uni-tabbar');
    
    if (navbar) navbar.style.display = 'none';
    if (navbarPlaceholder) navbarPlaceholder.style.display = 'none';
    if (tabbar) tabbar.style.display = 'none';
    
    // Получаем элементы
    const usernameInput = document.getElementById('admin-username');
    const passwordInput = document.getElementById('admin-password');
    const loginBtn = document.getElementById('admin-login-btn');
    const errorElement = document.getElementById('admin-error');
    const togglePasswordBtn = document.getElementById('toggle-admin-password');
    
    // Функция проверки учетных данных администратора
    async function verifyAdminCredentials(username, password) {
        try {
            // Проверяем существование пользователя admin в базе данных
            const { data: adminUser, error } = await window.supabase
                .from('users')
                .select('*')
                .eq('username', username)
                .eq('is_admin', true)
                .maybeSingle();
            
            if (error || !adminUser) {
                return { success: false, message: 'Administrator account not found' };
            }
            
            // Проверяем пароль (в продакшене нужно использовать хэширование)
            // Сейчас проверяем прямую строку для демонстрации
            // НА ПРОДАКШЕНЕ НУЖНО ИСПОЛЬЗОВАТЬ ХЭШИРОВАНИЕ!
            
            // Проверяем наличие поля admin_password
            if (adminUser.admin_password && adminUser.admin_password === password) {
                return { success: true, user: adminUser };
            }
            
            // Альтернативная проверка: если пароль в специальном поле
            if (adminUser.password_hash && adminUser.password_hash === password) {
                return { success: true, user: adminUser };
            }
            
            // Если нет специального поля, используем дефолтный пароль для админа
            // ВАЖНО: Измените этот пароль в продакшене!
            const DEFAULT_ADMIN_PASSWORD = 'AdminSecure@' + new Date().getFullYear();
            
            if (password === DEFAULT_ADMIN_PASSWORD) {
                return { success: true, user: adminUser };
            }
            
            return { success: false, message: 'Invalid password' };
            
        } catch (error) {
            console.error('Admin verification error:', error);
            return { success: false, message: 'System error during authentication' };
        }
    }
    
    // Функция показа ошибки
    function showError(message) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
    
    // Обработчик входа администратора
    async function handleAdminLogin() {
        const username = usernameInput.value.trim();
        const password = passwordInput.value;
        
        // Валидация
        if (!username) {
            showError('Please enter administrator ID');
            return;
        }
        
        if (!password) {
            showError('Please enter password');
            return;
        }
        
        // Показываем загрузку
        loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Authenticating...';
        loginBtn.disabled = true;
        errorElement.style.display = 'none';
        
        try {
            // Проверяем учетные данные
            const result = await verifyAdminCredentials(username, password);
            
            if (result.success) {
                // Создаем сессию администратора
                const adminUser = result.user;
                
                // Сохраняем в localStorage с маркером администратора
                localStorage.setItem('gly_admin_session', JSON.stringify({
                    user: adminUser,
                    timestamp: Date.now(),
                    is_admin: true,
                    source: 'backend_login'
                }));
                
                // Также обновляем основной user для совместимости
                localStorage.setItem('gly_user', JSON.stringify(adminUser));
                
                // Обновляем текущего пользователя в приложении
                if (window.glyApp) {
                    window.glyApp.currentUser = adminUser;
                }
                
                // Показываем успешное сообщение
                loginBtn.innerHTML = '<i class="fas fa-check"></i> Access Granted!';
                loginBtn.style.background = '#4CAF50';
                
                // Ждем немного и переходим в админ-панель
                setTimeout(() => {
                    window.location.hash = 'admin';
                    if (window.glyApp && window.glyApp.showSection) {
                        window.glyApp.showSection('admin');
                    }
                }, 1000);
                
            } else {
                showError(result.message || 'Authentication failed');
                loginBtn.innerHTML = '<i class="fas fa-lock"></i> Access Administrator Panel';
                loginBtn.disabled = false;
            }
            
        } catch (error) {
            console.error('Admin login error:', error);
            showError('Authentication system error. Please try again.');
            loginBtn.innerHTML = '<i class="fas fa-lock"></i> Access Administrator Panel';
            loginBtn.disabled = false;
        }
    }
    
    // Переключение видимости пароля
    if (togglePasswordBtn) {
        togglePasswordBtn.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
        });
    }
    
    // Назначаем обработчики событий
    loginBtn.addEventListener('click', handleAdminLogin);
    
    // Ввод по Enter
    usernameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleAdminLogin();
    });
    
    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleAdminLogin();
    });
    
    // Очистка ошибок при фокусе
    usernameInput.addEventListener('focus', () => {
        errorElement.style.display = 'none';
    });
    
    passwordInput.addEventListener('focus', () => {
        errorElement.style.display = 'none';
    });
    
    // Автофокус на поле username
    setTimeout(() => {
        usernameInput.focus();
    }, 100);
}

// Глобальная функция для проверки прав администратора
window.checkAdminSession = function() {
    try {
        // Проверяем администраторскую сессию
        const adminSession = localStorage.getItem('gly_admin_session');
        if (adminSession) {
            const session = JSON.parse(adminSession);
            // Проверяем, не истекла ли сессия (12 часов)
            const sessionAge = Date.now() - session.timestamp;
            if (sessionAge < 12 * 60 * 60 * 1000) {
                return session.user;
            } else {
                localStorage.removeItem('gly_admin_session');
                return null;
            }
        }
        
        // Проверяем обычного пользователя с правами админа
        const userData = localStorage.getItem('gly_user');
        if (userData) {
            const user = JSON.parse(userData);
            if (user.username === 'admin' || user.is_admin === true) {
                return user;
            }
        }
        
        return null;
    } catch (error) {
        console.error('Admin session check error:', error);
        return null;
    }
};

// Функция для безопасного выхода администратора
window.adminLogout = function() {
    localStorage.removeItem('gly_admin_session');
    localStorage.removeItem('gly_user');
    
    // Сбрасываем текущего пользователя в приложении
    if (window.glyApp) {
        window.glyApp.currentUser = null;
    }
    
    // Возвращаем на страницу входа администратора
    setTimeout(() => {
        window.location.hash = 'backend';
        if (window.glyApp && window.glyApp.showSection) {
            window.glyApp.showSection('backend');
        }
    }, 500);
};
