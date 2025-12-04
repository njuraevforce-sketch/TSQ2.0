const CACHE_NAME = 'gly-platform-v1.8';
const urlsToCache = [
    '/',
    '/index.html',
    '/css/style.css?v=1.8',
    '/js/app.js?v=1.8',
    '/manifest.json',
    '/assets/logo.png?v=1.8',
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

// Install event
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Cache opened for version: v1.8');
                return cache.addAll(urlsToCache);
            })
            .catch(error => {
                console.error('Cache installation failed:', error);
            })
    );
    
    // Activate worker immediately
    self.skipWaiting();
});

// Activate event
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    // Delete old caches
                    if (cacheName !== CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
        .then(() => {
            // Claim all clients
            return self.clients.claim();
        })
    );
});

// Fetch event with cache-first strategy
self.addEventListener('fetch', event => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') {
        return;
    }
    
    // Skip chrome-extension requests
    if (event.request.url.startsWith('chrome-extension://')) {
        return;
    }
    
    // Skip Supabase API requests
    if (event.request.url.includes('supabase.co')) {
        return;
    }
    
    // Skip TronGrid and Moralis API requests
    if (event.request.url.includes('trongrid.io') || 
        event.request.url.includes('moralis.io') ||
        event.request.url.includes('railway.app')) {
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache hit - return response
                if (response) {
                    return response;
                }

                // Clone the request
                const fetchRequest = event.request.clone();

                return fetch(fetchRequest)
                    .then(response => {
                        // Check if we received a valid response
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // Clone the response
                        const responseToCache = response.clone();

                        // Cache the new resource
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    })
                    .catch(error => {
                        console.log('Fetch failed; returning offline page:', error);
                        
                        // For navigation requests, return the offline page
                        if (event.request.mode === 'navigate') {
                            return caches.match('/index.html');
                        }
                        
                        // For other requests, return a placeholder
                        return new Response('Network error', {
                            status: 408,
                            statusText: 'Network error',
                            headers: new Headers({
                                'Content-Type': 'text/plain'
                            })
                        });
                    });
            })
    );
});

// Handle push notifications
self.addEventListener('push', event => {
    const options = {
        body: event.data ? event.data.text() : 'New notification from GLY',
        icon: 'assets/logo.png',
        badge: 'assets/logo.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions: [
            {
                action: 'explore',
                title: 'Open App',
                icon: 'assets/logo.png'
            },
            {
                action: 'close',
                title: 'Close',
                icon: 'assets/logo.png'
            }
        ]
    };

    event.waitUntil(
        self.registration.showNotification('GLY Platform', options)
    );
});

// Handle notification click
self.addEventListener('notificationclick', event => {
    const notification = event.notification;
    const action = event.action;

    if (action === 'close') {
        notification.close();
    } else {
        // Default action - open the app
        event.waitUntil(
            clients.matchAll({
                type: 'window',
                includeUncontrolled: true
            }).then(clientList => {
                for (const client of clientList) {
                    if (client.url === '/' && 'focus' in client) {
                        return client.focus();
                    }
                }
                if (clients.openWindow) {
                    return clients.openWindow('/');
                }
            })
        );
    }
    notification.close();
});

// Background sync (if supported)
self.addEventListener('sync', event => {
    if (event.tag === 'sync-transactions') {
        event.waitUntil(
            // Here you would sync any pending transactions
            console.log('Background sync for transactions')
        );
    }
});

// Periodic sync (if supported)
self.addEventListener('periodicsync', event => {
    if (event.tag === 'update-prices') {
        event.waitUntil(
            // Here you would update cryptocurrency prices
            console.log('Periodic sync for price updates')
        );
    }
});
