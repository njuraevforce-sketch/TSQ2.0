// backend.js - Модуль входа для администратора - ИСПРАВЛЕННЫЙ ВЕРСИЯ 2
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
                    <input type="text" id="admin-username" placeholder="Enter admin ID" value="admin" required>
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
    
    // Функция проверки учетных данных администратора - ПРОСТАЯ ВЕРСИЯ
    async function verifyAdminCredentials(username, password) {
        try {
            // Ищем пользователя с именем 'admin'
            const { data: adminUser, error } = await window.supabase
                .from('users')
                .select('*')
                .eq('username', 'admin')
                .maybeSingle();
            
            if (error || !adminUser) {
                console.log('Admin user not found, creating temporary...');
                // Создаем временного администратора для демонстрации
                return { 
                    success: true, 
                    user: {
                        id: 'admin_temp',
                        username: 'admin',
                        email: 'admin@example.com',
                        balance: 0,
                        vip_level: 6,
                        signals_available: 3,
                        is_admin: true
                    } 
                };
            }
            
            // ПРОСТАЯ ПРОВЕРКА ПАРОЛЯ - ДЛЯ ТЕСТИРОВАНИЯ
            // В реальном приложении используйте безопасное хэширование!
            
            // Стандартный пароль для тестирования
            const TEST_PASSWORD = 'Admin@1234';
            
            // Проверяем разные варианты полей с паролем
            if (adminUser.password_hash === password || 
                adminUser.admin_password === password || 
                password === TEST_PASSWORD) {
                return { success: true, user: adminUser };
            }
            
            return { success: false, message: 'Invalid password' };
            
        } catch (error) {
            console.error('Admin verification error:', error);
            return { success: false, message: 'System error' };
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
        const originalText = loginBtn.innerHTML;
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
                loginBtn.innerHTML = originalText;
                loginBtn.disabled = false;
            }
            
        } catch (error) {
            console.error('Admin login error:', error);
            showError('Authentication error. Please try again.');
            loginBtn.innerHTML = originalText;
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

// Глобальные функции для администратора - ИСПРАВЛЕННЫЕ
window._realCheckAdminSession = function() {
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
        
        return null;
    } catch (error) {
        console.error('Admin session check error:', error);
        return null;
    }
};

// Функция для безопасного выхода администратора
window._realAdminLogout = function() {
    localStorage.removeItem('gly_admin_session');
    
    // Возвращаем на страницу входа администратора
    setTimeout(() => {
        window.location.hash = 'backend';
        if (window.glyApp && window.glyApp.showSection) {
            window.glyApp.showSection('backend');
        }
    }, 500);
};

// Также экспортируем под старыми именами для совместимости
window.checkAdminSession = window._realCheckAdminSession;
window.adminLogout = window._realAdminLogout;
