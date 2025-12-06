const CACHE_NAME = 'gly-platform-v6.0';
const DYNAMIC_CACHE = 'gly-platform-dynamic-v6.0';
const urlsToCache = [
    '/',
    '/index.html',
    '/css/style.css?v=6.0',
    '/js/app.js?v=6.0',
    '/js/home.js?v=6.0',
    '/js/get.js?v=6.0',
    '/js/mine.js?v=6.0',
    '/js/assets.js?v=6.0',
    '/js/team.js?v=6.0',
    '/js/deposit.js?v=6.0',
    '/js/withdraw.js?v=6.0',
    '/js/translate.js?v=6.0',
    '/manifest.json',
    '/assets/logo.png?v=6.0',
    '/assets/favicon.ico?v=6.0',
    '/assets/trc20.png?v=6.0',
    '/assets/bsc20.png?v=6.0',
    '/assets/home.png?v=6.0',
    '/assets/get.png?v=6.0',
    '/assets/assets.png?v=6.0',
    '/assets/mine.png?v=6.0',
    '/assets/company.png?v=6.0',
    '/assets/deposit.png?v=6.0',
    '/assets/withdraw.png?v=6.0',
    '/assets/invite.png?v=6.0',
    '/assets/team.png?v=6.0',
    '/assets/rules.png?v=6.0',
    '/assets/avatar.png?v=6.0',
    '/assets/setting-address.png?v=6.0',
    '/assets/setting-password.png?v=6.0',
    '/assets/setting-service.png?v=6.0',
    '/assets/setting-language.png?v=6.0',
    '/assets/setting-change-password.png?v=6.0',
    '/assets/vip1.png?v=6.0',
    '/assets/vip2.png?v=6.0',
    '/assets/vip3.png?v=6.0',
    '/assets/vip4.png?v=6.0',
    '/assets/vip5.png?v=6.0',
    '/assets/vip6.png?v=6.0',
    '/assets/vipicon1.png?v=6.0',
    '/assets/vipicon2.png?v=6.0',
    '/assets/vipicon3.png?v=6.0',
    '/assets/vipicon4.png?v=6.0',
    '/assets/vipicon5.png?v=6.0',
    '/assets/vipicon6.png?v=6.0'
];

// Install event - Кешируем все файлы при установке
self.addEventListener('install', event => {
    console.log('[Service Worker] Installing version 6.0...');
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('[Service Worker] Cache opened:', CACHE_NAME);
                // Кешируем основные файлы
                return cache.addAll(urlsToCache.map(url => {
                    // Добавляем временную метку к URL для обхода кеша
                    const timestamp = Date.now();
                    return url.includes('?') ? `${url}&_=${timestamp}` : `${url}?_=${timestamp}`;
                }))
                .then(() => {
                    console.log('[Service Worker] All resources cached');
                    // Принудительная активация нового сервис-воркера
                    self.skipWaiting();
                })
                .catch(error => {
                    console.error('[Service Worker] Cache error:', error);
                    // Продолжаем даже при ошибках
                });
            })
    );
});

// Activate event - Очищаем старые кеши и берем контроль
self.addEventListener('activate', event => {
    console.log('[Service Worker] Activating version 6.0...');
    
    event.waitUntil(
        Promise.all([
            // Очищаем старые кеши
            caches.keys().then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if (cacheName !== CACHE_NAME && cacheName !== DYNAMIC_CACHE) {
                            console.log('[Service Worker] Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            }),
            
            // Очищаем localStorage от старых версий
            cleanOldLocalStorage(),
            
            // Берем контроль над всеми клиентами
            self.clients.claim()
        ])
        .then(() => {
            console.log('[Service Worker] Activated and ready');
            
            // Отправляем сообщение всем клиентам о новой версии
            return self.clients.matchAll().then(clients => {
                clients.forEach(client => {
                    client.postMessage({
                        type: 'FORCE_RELOAD',
                        version: '6.0',
                        timestamp: Date.now(),
                        reason: 'Critical update with VIP improvements'
                    });
                });
            });
        })
    );
});

// Fetch event - Умная стратегия кеширования
self.addEventListener('fetch', event => {
    const request = event.request;
    const url = new URL(request.url);
    
    // Пропускаем не-GET запросы
    if (request.method !== 'GET') {
        return;
    }
    
    // Пропускаем запросы к API и внешним ресурсам
    if (url.hostname.includes('supabase.co') ||
        url.hostname.includes('trongrid.io') ||
        url.hostname.includes('moralis.io') ||
        url.hostname.includes('railway.app') ||
        url.hostname.includes('api.') ||
        url.pathname.includes('/api/')) {
        return;
    }
    
    // Пропускаем расширения браузера
    if (url.protocol.includes('chrome-extension') || 
        url.protocol.includes('moz-extension') ||
        url.protocol.includes('safari-extension')) {
        return;
    }
    
    // Для HTML-страниц используем стратегию "сеть сначала"
    if (request.headers.get('Accept')?.includes('text/html') || 
        url.pathname === '/' || 
        url.pathname.endsWith('.html')) {
        event.respondWith(networkFirstStrategy(request));
        return;
    }
    
    // Для CSS, JS и изображений используем стратегию "кеш с обновлением"
    if (url.pathname.match(/\.(css|js|png|jpg|jpeg|gif|ico|svg|webp|woff|woff2|ttf|eot)$/)) {
        event.respondWith(cacheFirstStrategy(request));
        return;
    }
    
    // Для остальных файлов - "сеть сначала"
    event.respondWith(networkFirstStrategy(request));
});

// Стратегия "сеть сначала" для критически важных ресурсов
async function networkFirstStrategy(request) {
    try {
        // Пытаемся получить свежий ресурс из сети
        const networkResponse = await fetch(request);
        
        if (networkResponse && networkResponse.status === 200) {
            // Клонируем ответ для кеширования
            const responseToCache = networkResponse.clone();
            
            // Сохраняем в кеш
            caches.open(DYNAMIC_CACHE)
                .then(cache => cache.put(request, responseToCache))
                .catch(err => console.warn('[Service Worker] Cache put error:', err));
            
            return networkResponse;
        }
        throw new Error('Network response failed');
    } catch (error) {
        console.log('[Service Worker] Network failed, trying cache:', error);
        
        // Пытаемся получить из кеша
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
            return cachedResponse;
        }
        
        // Для навигационных запросов возвращаем index.html
        if (request.mode === 'navigate') {
            return caches.match('/index.html');
        }
        
        // Для остальных возвращаем заглушку или ошибку
        return new Response('Network error. Please check your connection.', {
            status: 408,
            headers: { 'Content-Type': 'text/plain; charset=utf-8' }
        });
    }
}

// Стратегия "кеш сначала" для статических ресурсов
async function cacheFirstStrategy(request) {
    // Пытаемся получить из кеша
    const cachedResponse = await caches.match(request);
    
    if (cachedResponse) {
        // Проверяем возраст кеша для CSS/JS файлов
        if (request.url.match(/\.(css|js)$/)) {
            // Обновляем кеш в фоне
            event.waitUntil(updateCacheInBackground(request));
        }
        return cachedResponse;
    }
    
    // Если нет в кеше, загружаем из сети
    try {
        const networkResponse = await fetch(request);
        
        if (networkResponse && networkResponse.status === 200) {
            // Клонируем для кеширования
            const responseToCache = networkResponse.clone();
            
            // Сохраняем в кеш
            caches.open(CACHE_NAME)
                .then(cache => cache.put(request, responseToCache))
                .catch(err => console.warn('[Service Worker] Static cache error:', err));
        }
        
        return networkResponse;
    } catch (error) {
        console.log('[Service Worker] Cache miss and network failed:', error);
        
        // Для изображений пытаемся найти заглушку
        if (request.url.match(/\.(png|jpg|jpeg|gif|ico|svg|webp)$/)) {
            const placeholder = await getImagePlaceholder(request.url);
            if (placeholder) return placeholder;
        }
        
        // Возвращаем пустой ответ с соответствующим типом
        const contentType = getContentType(request.url);
        return new Response('', {
            status: 404,
            headers: { 'Content-Type': contentType }
        });
    }
}

// Фоновая проверка обновлений кеша
async function updateCacheInBackground(request) {
    try {
        const networkResponse = await fetch(request);
        
        if (networkResponse && networkResponse.status === 200) {
            // Проверяем изменился ли контент
            const cachedResponse = await caches.match(request);
            
            if (!cachedResponse) {
                // Если нет в кеше, сохраняем
                const cache = await caches.open(CACHE_NAME);
                await cache.put(request, networkResponse.clone());
                console.log('[Service Worker] Cache updated:', request.url);
                return;
            }
            
            // Сравниваем содержимое
            const cachedText = await cachedResponse.text();
            const networkText = await networkResponse.text();
            
            if (cachedText !== networkText) {
                // Обновляем кеш если файл изменился
                const cache = await caches.open(CACHE_NAME);
                await cache.put(request, networkResponse.clone());
                console.log('[Service Worker] Cache refreshed:', request.url);
                
                // Отправляем сообщение о новом файле
                self.clients.matchAll().then(clients => {
                    clients.forEach(client => {
                        client.postMessage({
                            type: 'ASSET_UPDATED',
                            url: request.url,
                            timestamp: Date.now()
                        });
                    });
                });
            }
        }
    } catch (error) {
        console.log('[Service Worker] Background update failed:', error);
    }
}

// Получение заглушки для изображений
async function getImagePlaceholder(url) {
    try {
        const cache = await caches.open(CACHE_NAME);
        const keys = await cache.keys();
        
        // Ищем похожее изображение
        const imageKey = keys.find(key => {
            const keyUrl = key.url;
            return keyUrl.match(/\.(png|jpg|jpeg|gif|ico|svg|webp)$/) && 
                   keyUrl.includes('logo') || keyUrl.includes('avatar');
        });
        
        if (imageKey) {
            return await cache.match(imageKey);
        }
    } catch (error) {
        console.log('[Service Worker] Placeholder error:', error);
    }
    return null;
}

// Определение типа контента по URL
function getContentType(url) {
    if (url.endsWith('.css')) return 'text/css';
    if (url.endsWith('.js')) return 'application/javascript';
    if (url.endsWith('.png')) return 'image/png';
    if (url.endsWith('.jpg') || url.endsWith('.jpeg')) return 'image/jpeg';
    if (url.endsWith('.gif')) return 'image/gif';
    if (url.endsWith('.svg')) return 'image/svg+xml';
    if (url.endsWith('.ico')) return 'image/x-icon';
    if (url.endsWith('.webp')) return 'image/webp';
    if (url.endsWith('.woff')) return 'font/woff';
    if (url.endsWith('.woff2')) return 'font/woff2';
    if (url.endsWith('.ttf')) return 'font/ttf';
    if (url.endsWith('.eot')) return 'application/vnd.ms-fontobject';
    return 'text/plain';
}

// Очистка старого localStorage
async function cleanOldLocalStorage() {
    try {
        // Список старых версий для очистки
        const oldVersions = ['1.0', '1.1', '1.2', '1.3', '1.4', '1.5', 
                           '1.6', '1.7', '1.8', '1.9', '2.0', '3.0', 
                           '4.0', '5.0', '5.1', '5.2', '5.3', '5.4'];
        
        // Удаляем старые версии
        oldVersions.forEach(version => {
            if (localStorage.getItem('app_version') === version) {
                localStorage.removeItem('app_version');
            }
        });
        
        // Устанавливаем новую версию
        localStorage.setItem('app_version', '6.0');
        
        // Очищаем старые кеш-метки
        const keys = Object.keys(localStorage);
        keys.forEach(key => {
            if (key.includes('_cache_') || 
                key.includes('_version_') || 
                key.startsWith('old_') ||
                key.endsWith('_v1') || 
                key.endsWith('_v2') ||
                key.endsWith('_v3') ||
                key.endsWith('_v4') ||
                key.endsWith('_v5')) {
                localStorage.removeItem(key);
                console.log('[Service Worker] Removed old localStorage key:', key);
            }
        });
        
        console.log('[Service Worker] localStorage cleaned for version 6.0');
    } catch (error) {
        console.error('[Service Worker] Error cleaning localStorage:', error);
    }
}

// Периодическое обновление кеша (если поддерживается)
if ('periodicSync' in self.registration) {
    self.addEventListener('periodicsync', event => {
        if (event.tag === 'update-assets') {
            event.waitUntil(updateCriticalAssets());
        }
    });
}

// Обновление критически важных ассетов
async function updateCriticalAssets() {
    console.log('[Service Worker] Periodic sync started');
    
    const criticalAssets = [
        '/index.html',
        '/css/style.css',
        '/js/app.js',
        '/js/translate.js'
    ];
    
    try {
        const cache = await caches.open(CACHE_NAME);
        
        for (const asset of criticalAssets) {
            try {
                const response = await fetch(`${asset}?v=6.0&_=${Date.now()}`);
                if (response.ok) {
                    await cache.put(asset, response);
                    console.log('[Service Worker] Updated:', asset);
                }
            } catch (error) {
                console.warn('[Service Worker] Failed to update:', asset, error);
            }
        }
        
        console.log('[Service Worker] Periodic sync completed');
    } catch (error) {
        console.error('[Service Worker] Periodic sync error:', error);
    }
}

// Обработка push-уведомлений
self.addEventListener('push', event => {
    const data = event.data ? event.data.json() : {};
    
    const options = {
        body: data.body || 'New update available',
        icon: '/assets/logo.png?v=6.0',
        badge: '/assets/logo.png?v=6.0',
        tag: 'app-update',
        renotify: true,
        requireInteraction: true,
        vibrate: [200, 100, 200],
        data: {
            url: data.url || '/',
            version: '6.0',
            timestamp: Date.now()
        },
        actions: [
            {
                action: 'open',
                title: 'Open App',
                icon: '/assets/logo.png?v=6.0'
            },
            {
                action: 'reload',
                title: 'Reload',
                icon: '/assets/refresh.png?v=6.0'
            }
        ]
    };

    event.waitUntil(
        self.registration.showNotification(
            data.title || 'GLY Platform Update',
            options
        )
    );
});

// Обработка кликов по уведомлениям
self.addEventListener('notificationclick', event => {
    const notification = event.notification;
    const action = event.action;
    
    notification.close();
    
    if (action === 'open' || action === 'reload') {
        event.waitUntil(
            clients.matchAll({
                type: 'window',
                includeUncontrolled: true
            }).then(clientList => {
                // Ищем открытые окна приложения
                const appClient = clientList.find(client => 
                    client.url.includes('/index.html') && 'focus' in client
                );
                
                if (appClient) {
                    // Фокусируем существующее окно
                    appClient.focus();
                    
                    if (action === 'reload') {
                        // Отправляем команду на перезагрузку
                        appClient.postMessage({
                            type: 'FORCE_RELOAD',
                            version: '6.0'
                        });
                    }
                } else {
                    // Открываем новое окно
                    return clients.openWindow('/');
                }
            })
        );
    }
});

// Обработка сообщений от клиентов
self.addEventListener('message', event => {
    const data = event.data;
    
    if (!data) return;
    
    switch (data.type) {
        case 'SKIP_WAITING':
            console.log('[Service Worker] Skip waiting requested');
            self.skipWaiting();
            break;
            
        case 'UPDATE_CACHE':
            console.log('[Service Worker] Manual cache update requested');
            updateCriticalAssets();
            break;
            
        case 'CLEAR_CACHE':
            console.log('[Service Worker] Clear cache requested');
            caches.keys().then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        console.log('[Service Worker] Deleting cache:', cacheName);
                        return caches.delete(cacheName);
                    })
                );
            });
            break;
            
        case 'GET_VERSION':
            console.log('[Service Worker] Version info requested');
            event.source.postMessage({
                type: 'VERSION_INFO',
                version: '6.0',
                cacheName: CACHE_NAME,
                timestamp: Date.now()
            });
            break;
            
        case 'CHECK_UPDATES':
            console.log('[Service Worker] Checking for updates');
            checkForUpdates();
            break;
    }
});

// Проверка обновлений
async function checkForUpdates() {
    try {
        // Загружаем манифест для проверки версии
        const response = await fetch('/manifest.json?_=' + Date.now());
        const manifest = await response.json();
        
        const currentVersion = '6.0';
        
        if (manifest.version && manifest.version !== currentVersion) {
            // Новая версия доступна
            self.clients.matchAll().then(clients => {
                clients.forEach(client => {
                    client.postMessage({
                        type: 'NEW_VERSION_AVAILABLE',
                        current: currentVersion,
                        available: manifest.version,
                        timestamp: Date.now()
                    });
                });
            });
        }
    } catch (error) {
        console.error('[Service Worker] Update check failed:', error);
    }
}

// Фоновая синхронизация (если поддерживается)
if ('sync' in self.registration) {
    self.addEventListener('sync', event => {
        if (event.tag === 'sync-data') {
            event.waitUntil(syncUserData());
        }
    });
}

// Синхронизация пользовательских данных
async function syncUserData() {
    console.log('[Service Worker] Background sync started');
    
    try {
        // Здесь можно добавить синхронизацию данных пользователя
        // Например, сохраненных форм, настроек и т.д.
        
        console.log('[Service Worker] Background sync completed');
    } catch (error) {
        console.error('[Service Worker] Background sync error:', error);
    }
}

// Предварительная загрузка ресурсов
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'PRECACHE_ASSETS') {
        const assets = event.data.assets || [];
        console.log('[Service Worker] Precaching assets:', assets.length);
        
        event.waitUntil(
            caches.open(CACHE_NAME)
                .then(cache => {
                    const promises = assets.map(asset => {
                        return fetch(asset + '?v=6.0&_=' + Date.now())
                            .then(response => {
                                if (response.ok) {
                                    return cache.put(asset, response);
                                }
                            })
                            .catch(error => {
                                console.warn('[Service Worker] Precaching failed:', asset, error);
                            });
                    });
                    return Promise.all(promises);
                })
                .then(() => {
                    console.log('[Service Worker] Precaching completed');
                })
        );
    }
});
