const CACHE_NAME = 'gly-platform-v6.4';
const urlsToCache = [
    '/',
    '/index.html',
    '/css/style.css?v=6.4',
    '/js/app.js?v=6.4',
    '/js/home.js?v=6.4',
    '/js/mine.js?v=6.4',
    '/js/assets.js?v=6.4',
    '/js/team.js?v=6.4',
    '/js/deposit.js?v=6.4',
    '/js/withdraw.js?v=6.4',
    '/manifest.json',
    '/assets/logo.png',
    '/assets/favicon.ico',
    '/assets/trc20.png',
    '/assets/bsc20.png',
    '/assets/home.png',
    '/assets/get.png',
    '/assets/assets.png',
    '/assets/mine.png',
    '/assets/company.png',
    '/assets/deposit.png',
    '/assets/withdraw.png',
    '/assets/invite.png',
    '/assets/team.png',
    '/assets/rules.png',
    '/assets/avatar.png',
    '/assets/setting-address.png',
    '/assets/setting-password.png',
    '/assets/setting-service.png',
    '/assets/setting-language.png',
    '/assets/setting-change-password.png',
    '/assets/vip1.png',
    '/assets/vip2.png',
    '/assets/vip3.png',
    '/assets/vip4.png',
    '/assets/vip5.png',
    '/assets/vip6.png',
    '/assets/vipicon1.png',
    '/assets/vipicon2.png',
    '/assets/vipicon3.png',
    '/assets/vipicon4.png',
    '/assets/vipicon5.png',
    '/assets/vipicon6.png'
];

// Установка - кешируем файлы
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log(`Установка кеша: ${CACHE_NAME}`);
                return cache.addAll(urlsToCache)
                    .catch(error => {
                        console.warn('Некоторые ресурсы не закешировались:', error);
                    });
            })
            .then(() => {
                console.log('Установка завершена');
                // Немедленная активация нового SW
                return self.skipWaiting();
            })
    );
});

// Активация - ОЧЕНЬ ВАЖНАЯ ЧАСТЬ
self.addEventListener('activate', event => {
    event.waitUntil(
        Promise.all([
            // 1. Удаляем ВСЕ старые кеши
            caches.keys().then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if (cacheName !== CACHE_NAME) {
                            console.log('Удаляем старый кеш:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            }),
            
            // 2. Очищаем старый localStorage
            cleanOldLocalStorage(),
            
            // 3. Берем контроль над ВСЕМИ клиентами немедленно
            self.clients.claim()
        ])
        .then(() => {
            console.log('Service Worker активирован');
            
            // 4. Отправляем ВСЕМ клиентам команду на перезагрузку
            return self.clients.matchAll()
                .then(clients => {
                    clients.forEach(client => {
                        console.log('Отправляем команду перезагрузки клиенту');
                        client.postMessage({
                            type: 'FORCE_RELOAD',
                            version: '6.4',
                            reason: 'Новая версия доступна'
                        });
                    });
                });
        })
    );
});

// Fetch - простая стратегия кеширования
self.addEventListener('fetch', event => {
    // Пропускаем не-GET и API запросы
    if (event.request.method !== 'GET') return;
    
    if (event.request.url.includes('api.') || 
        event.request.url.includes('/api/') ||
        event.request.url.includes('supabase.co') ||
        event.request.url.includes('trongrid.io')) {
        return fetch(event.request);
    }
    
    event.respondWith(
        caches.match(event.request)
            .then(cachedResponse => {
                // Есть в кеше - возвращаем
                if (cachedResponse) {
                    return cachedResponse;
                }
                
                // Нет в кеше - идем в сеть
                return fetch(event.request)
                    .then(networkResponse => {
                        if (!networkResponse || networkResponse.status !== 200) {
                            return networkResponse;
                        }
                        
                        // Клонируем для кеширования
                        const responseToCache = networkResponse.clone();
                        
                        // Кешируем для будущего использования
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });
                        
                        return networkResponse;
                    })
                    .catch(() => {
                        // При ошибке сети для HTML возвращаем главную страницу
                        if (event.request.mode === 'navigate') {
                            return caches.match('/index.html');
                        }
                        return new Response('Оффлайн', {
                            status: 503,
                            statusText: 'Service Unavailable'
                        });
                    });
            })
    );
});

// Функция очистки старого localStorage
function cleanOldLocalStorage() {
    return new Promise((resolve) => {
        try {
            // Удаляем старые версии
            const versions = ['1.0', '1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '1.8', '1.9', '2.0', '3.0', '6.0', '6.1', '6.3'];
            versions.forEach(version => {
                if (localStorage.getItem('app_version') === version) {
                    localStorage.removeItem('app_version');
                }
            });
            
            // Устанавливаем новую версию
            localStorage.setItem('app_version', '6.4');
            
            console.log('LocalStorage очищен');
            resolve();
        } catch (error) {
            console.log('Ошибка очистки localStorage:', error);
            resolve();
        }
    });
}

// Обработчик сообщений от клиентов
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

// Push уведомления
self.addEventListener('push', event => {
    let data = {};
    
    try {
        if (event.data) {
            data = event.data.json();
        }
    } catch (e) {
        data = {
            title: 'GLY Platform',
            body: event.data ? event.data.text() : 'New notification',
            icon: '/assets/logo.png'
        };
    }

    const options = {
        body: data.body || 'New notification from GLY Platform',
        icon: data.icon || '/assets/logo.png',
        badge: '/assets/logo.png',
        vibrate: [100, 50, 100],
        data: {
            url: data.url || '/',
            dateOfArrival: Date.now()
        }
    };

    event.waitUntil(
        self.registration.showNotification(data.title || 'GLY Platform', options)
    );
});

// Обработчик кликов по уведомлениям
self.addEventListener('notificationclick', event => {
    const notification = event.notification;
    
    event.waitUntil(
        clients.matchAll({
            type: 'window',
            includeUncontrolled: true
        }).then(clientList => {
            for (const client of clientList) {
                if (client.url.includes('/index.html') && 'focus' in client) {
                    client.focus();
                    notification.close();
                    return;
                }
            }
            
            if (clients.openWindow) {
                const url = notification.data && notification.data.url ? notification.data.url : '/';
                return clients.openWindow(url);
            }
        })
    );
    notification.close();
});
