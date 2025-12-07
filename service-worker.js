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

// Install
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
            .then(() => self.skipWaiting())
    );
});

// Activate
self.addEventListener('activate', event => {
    event.waitUntil(
        Promise.all([
            // Clean old caches
            caches.keys().then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if (cacheName !== CACHE_NAME) {
                            return caches.delete(cacheName);
                        }
                    })
                );
            }),
            // Take control immediately
            self.clients.claim()
        ])
    );
});

// Fetch - SIMPLIFIED VERSION
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
    
    event.respondWith(
        caches.match(event.request)
            .then(cachedResponse => {
                if (cachedResponse) {
                    return cachedResponse;
                }
                
                return fetch(event.request)
                    .then(response => {
                        // Don't cache non-successful responses
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }
                        
                        // Clone the response for caching
                        const responseToCache = response.clone();
                        
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            })
                            .catch(err => console.warn('Cache put error:', err));
                        
                        return response;
                    })
                    .catch(() => {
                        // If offline and requesting HTML, return index.html
                        if (event.request.mode === 'navigate') {
                            return caches.match('/index.html');
                        }
                        return new Response('Offline', {
                            status: 503,
                            headers: { 'Content-Type': 'text/plain' }
                        });
                    });
            })
    );
});

// Clean old localStorage
function cleanOldLocalStorage() {
    try {
        const versions = ['1.0', '1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '1.8', '1.9', '2.0', '3.0', '6.0', '6.1', '6.3'];
        versions.forEach(version => {
            if (localStorage.getItem('app_version') === version) {
                localStorage.removeItem('app_version');
            }
        });
        localStorage.setItem('app_version', '6.4');
    } catch (e) {
        console.log('Error cleaning localStorage:', e);
    }
}

// Message handling
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

// Notifications
self.addEventListener('push', event => {
    const options = {
        body: event.data ? event.data.text() : 'New notification',
        icon: '/assets/logo.png',
        badge: '/assets/logo.png'
    };
    
    event.waitUntil(
        self.registration.showNotification('GLY Platform', options)
    );
});

self.addEventListener('notificationclick', event => {
    event.notification.close();
    
    event.waitUntil(
        clients.matchAll({ type: 'window' })
            .then(clientList => {
                for (const client of clientList) {
                    if (client.url.includes('/index.html') && 'focus' in client) {
                        return client.focus();
                    }
                }
                if (clients.openWindow) {
                    return clients.openWindow('/');
                }
            })
    );
});
