const CACHE_NAME = 'gly-platform-v18.0';
const urlsToCache = [
    '/',
    '/index.html',
    '/css/style.css?v=18.0',
    '/js/app.js?v=18.0',
    '/js/mine.js?v=18.0',
    '/js/assets.js?v=18.0',
    '/js/team.js?v=18.0',
    '/js/deposit.js?v=18.0',
    '/js/withdraw.js?v=18.0',
    '/js/admin.js?v=18.0',
    '/js/backend.js?v=18.0',
    '/js/translate.js?v=18.0',
    '/js/home.js?v=18.0',
    '/js/get.js?v=18.0',
    '/js/register.js?v=18.0',
    '/js/company.js?v=18.0',
    '/js/invite.js?v=18.0',
    '/js/rules.js?v=18.0',
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

// Install
self.addEventListener('install', event => {
    console.log('Installing Service Worker version:', CACHE_NAME);
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Caching files for version:', CACHE_NAME);
                return cache.addAll(urlsToCache);
            })
            .then(() => {
                console.log('All files cached successfully for v18.0');
                return self.skipWaiting();
            })
            .catch(error => {
                console.error('Cache error:', error);
            })
    );
});

// Activate
self.addEventListener('activate', event => {
    console.log('Activating Service Worker v18.0');
    event.waitUntil(
        Promise.all([
            // Clean old caches
            caches.keys().then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if (cacheName !== CACHE_NAME) {
                            console.log('Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            }),
            // Take control immediately
            self.clients.claim()
        ])
        .then(() => {
            // Обновляем версию в localStorage
            try {
                // Сохраняем важные данные перед очисткой
                const userData = localStorage.getItem('gly_user');
                const adminSession = localStorage.getItem('gly_admin_session');
                const language = localStorage.getItem('gly_language');
                
                // Очищаем старые версии приложения
                const oldVersions = [
                    '1.0', '1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '1.8', '1.9',
                    '2.0', '3.0', '6.0', '6.1', '6.3', '6.4', '6.5', '7.0', '10.0', '11.0',
                    '12.0', '13.0', '14.0', '17.0', '17.1', '17.2'
                ];
                
                oldVersions.forEach(version => {
                    localStorage.removeItem(`app_version_${version}`);
                });
                
                // Восстанавливаем важные данные
                if (userData) localStorage.setItem('gly_user', userData);
                if (adminSession) localStorage.setItem('gly_admin_session', adminSession);
                if (language) localStorage.setItem('gly_language', language);
                
                // Устанавливаем новую версию
                localStorage.setItem('app_version', '18.0');
                console.log('LocalStorage updated to version 18.0');
                
                // Отправляем сообщение всем клиентам о перезагрузке
                self.clients.matchAll().then(clients => {
                    clients.forEach(client => {
                        client.postMessage({
                            type: 'FORCE_RELOAD',
                            version: '18.0',
                            message: 'New version available. Reloading...'
                        });
                    });
                });
            } catch (error) {
                console.log('Error updating localStorage:', error);
            }
        })
    );
});

// Fetch
self.addEventListener('fetch', event => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') return;
    
    const url = new URL(event.request.url);
    
    // Skip non-HTTP/HTTPS requests
    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
        return;
    }
    
    // Skip API requests
    if (url.hostname.includes('supabase.co') ||
        url.hostname.includes('trongrid.io') ||
        url.hostname.includes('api.')) {
        return fetch(event.request);
    }
    
    // Skip requests with cache-busting parameters (they should be handled by cache)
    event.respondWith(
        caches.match(event.request, {ignoreSearch: true})
            .then(cachedResponse => {
                if (cachedResponse) {
                    return cachedResponse;
                }
                
                return fetch(event.request)
                    .then(response => {
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }
                        
                        const responseToCache = response.clone();
                        
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            })
                            .catch(err => console.warn('Cache put error:', err));
                        
                        return response;
                    })
                    .catch(() => {
                        if (event.request.mode === 'navigate') {
                            return caches.match('/index.html');
                        }
                        return new Response('Offline', {
                            status: 503,
                            statusText: 'Service Unavailable',
                            headers: { 'Content-Type': 'text/plain' }
                        });
                    });
            })
    );
});

// Message handling
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        console.log('Received SKIP_WAITING message');
        self.skipWaiting();
    }
});

// Notifications
self.addEventListener('push', event => {
    const options = {
        body: event.data ? event.data.text() : 'New notification from GLY Platform',
        icon: '/assets/logo.png',
        badge: '/assets/logo.png',
        vibrate: [200, 100, 200],
        data: {
            url: '/'
        }
    };
    
    event.waitUntil(
        self.registration.showNotification('GLY Platform', options)
    );
});

self.addEventListener('notificationclick', event => {
    event.notification.close();
    
    const promiseChain = clients.matchAll({
        type: 'window',
        includeUncontrolled: true
    }).then(windowClients => {
        let matchingClient = null;
        
        for (let i = 0; i < windowClients.length; i++) {
            const windowClient = windowClients[i];
            if (windowClient.url.includes('/index.html')) {
                matchingClient = windowClient;
                break;
            }
        }
        
        if (matchingClient) {
            return matchingClient.focus();
        } else {
            return clients.openWindow('/');
        }
    });
    
    event.waitUntil(promiseChain);
});

// Background sync (для оффлайн операций)
self.addEventListener('sync', event => {
    if (event.tag === 'sync-transactions') {
        console.log('Background sync for transactions');
        // Здесь можно добавить логику синхронизации
    }
});
