const CACHE_NAME = 'gly-platform-v3.0';
const urlsToCache = [
    '/',
    '/index.html',
    '/css/style.css?v=3.0',
    '/js/app.js?v=3.0',
    '/js/home.js?v=3.0',
    '/js/mine.js?v=3.0',
    '/js/assets.js?v=3.0',
    '/js/team.js?v=3.0',
    '/js/deposit.js?v=3.0',
    '/js/withdraw.js?v=3.0',
    '/manifest.json',
    '/assets/logo.png?v=3.0',
    '/assets/favicon.ico?v=3.0',
    '/assets/trc20.png?v=3.0',
    '/assets/bsc20.png?v=3.0',
    '/assets/home.png?v=3.0',
    '/assets/get.png?v=3.0',
    '/assets/assets.png?v=3.0',
    '/assets/mine.png?v=3.0',
    '/assets/company.png?v=3.0',
    '/assets/deposit.png?v=3.0',
    '/assets/withdraw.png?v=3.0',
    '/assets/invite.png?v=3.0',
    '/assets/team.png?v=3.0',
    '/assets/rules.png?v=3.0',
    '/assets/avatar.png?v=3.0',
    '/assets/setting-address.png?v=3.0',
    '/assets/setting-password.png?v=3.0',
    '/assets/setting-service.png?v=3.0',
    '/assets/setting-language.png?v=3.0',
    '/assets/setting-change-password.png?v=3.0',
    '/assets/vip1.png?v=3.0',
    '/assets/vip2.png?v=3.0',
    '/assets/vip3.png?v=3.0',
    '/assets/vip4.png?v=3.0',
    '/assets/vip5.png?v=3.0',
    '/assets/vip6.png?v=3.0',
    '/assets/vipicon1.png?v=3.0',
    '/assets/vipicon2.png?v=3.0',
    '/assets/vipicon3.png?v=3.0',
    '/assets/vipicon4.png?v=3.0',
    '/assets/vipicon5.png?v=3.0',
    '/assets/vipicon6.png?v=3.0'
];

// Install event - Кешируем все файлы при установке
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Cache opened for version: v3.0');
                // Пытаемся добавить все файлы в кеш
                return cache.addAll(urlsToCache)
                    .then(() => {
                        console.log('All resources have been cached');
                    })
                    .catch(error => {
                        console.warn('Some resources failed to cache:', error);
                        // Продолжаем даже если некоторые файлы не закешировались
                    });
            })
    );
    
    // Активируем worker немедленно
    self.skipWaiting();
});

// Activate event - Очищаем старые кеши
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    // Удаляем все старые версии кеша
                    if (cacheName !== CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
        .then(() => {
            console.log('Service worker activated and old caches cleared');
            // Запрашиваем контроль над всеми клиентами
            return self.clients.claim();
        })
    );
});

// Fetch event - Улучшенная стратегия кеширования
self.addEventListener('fetch', event => {
    // Пропускаем не GET запросы
    if (event.request.method !== 'GET') {
        return;
    }
    
    // Пропускаем запросы к расширениям
    if (event.request.url.startsWith('chrome-extension://') || 
        event.request.url.startsWith('moz-extension://') ||
        event.request.url.startsWith('safari-extension://')) {
        return;
    }
    
    // Пропускаем API запросы
    if (event.request.url.includes('supabase.co') ||
        event.request.url.includes('trongrid.io') || 
        event.request.url.includes('moralis.io') ||
        event.request.url.includes('railway.app') ||
        event.request.url.includes('api.') ||
        event.request.url.includes('/api/')) {
        return;
    }

    // Обрабатываем запрос
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Если есть в кеше - возвращаем
                if (response) {
                    // Для изображений - возвращаем из кеша, но обновляем кеш в фоне
                    if (event.request.url.match(/\.(png|jpg|jpeg|gif|ico|svg|webp)$/)) {
                        // Обновляем изображение в фоне
                        event.waitUntil(
                            updateImageCache(event.request)
                        );
                    }
                    return response;
                }

                // Если нет в кеше - загружаем из сети
                return fetch(event.request)
                    .then(networkResponse => {
                        // Проверяем валидность ответа
                        if (!networkResponse || networkResponse.status !== 200) {
                            return networkResponse;
                        }

                        // Клонируем ответ для кеширования
                        const responseToCache = networkResponse.clone();

                        // Открываем кеш и сохраняем ответ
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            })
                            .catch(error => {
                                console.warn('Failed to cache response:', error);
                            });

                        return networkResponse;
                    })
                    .catch(error => {
                        console.log('Fetch failed:', error);
                        
                        // Для навигационных запросов возвращаем главную страницу
                        if (event.request.mode === 'navigate') {
                            return caches.match('/index.html');
                        }
                        
                        // Для изображений возвращаем заглушку
                        if (event.request.url.match(/\.(png|jpg|jpeg|gif|ico|svg|webp)$/)) {
                            return getImagePlaceholder(event.request);
                        }
                        
                        // Для других запросов возвращаем ошибку сети
                        return new Response('Network error. Please check your connection.', {
                            status: 408,
                            statusText: 'Network error',
                            headers: new Headers({
                                'Content-Type': 'text/plain; charset=utf-8'
                            })
                        });
                    });
            })
    );
});

// Функция для обновления изображений в кеше
function updateImageCache(request) {
    return fetch(request)
        .then(response => {
            // Проверяем валидность ответа
            if (!response || response.status !== 200) {
                throw new Error('Invalid response');
            }

            // Клонируем ответ
            const responseToCache = response.clone();

            // Обновляем кеш
            return caches.open(CACHE_NAME)
                .then(cache => {
                    return cache.put(request, responseToCache);
                });
        })
        .catch(error => {
            console.log('Background image update failed:', error);
            // Не делаем ничего при ошибке - оставляем старую версию в кеше
        });
}

// Функция для получения заглушки для изображений
function getImagePlaceholder(request) {
    const url = request.url;
    
    // Пытаемся найти похожее изображение в кеше
    return caches.open(CACHE_NAME)
        .then(cache => {
            return cache.keys()
                .then(keys => {
                    // Ищем изображения с похожим именем
                    const imageKeys = keys.filter(key => 
                        key.url.match(/\.(png|jpg|jpeg|gif|ico|svg|webp)$/)
                    );
                    
                    if (imageKeys.length > 0) {
                        // Возвращаем первое найденное изображение
                        return cache.match(imageKeys[0]);
                    }
                    
                    // Если изображений нет, возвращаем пустой ответ
                    return new Response('', {
                        status: 404,
                        statusText: 'Image not found'
                    });
                });
        })
        .catch(error => {
            console.log('Error getting image placeholder:', error);
            return new Response('', {
                status: 404,
                statusText: 'Image not found'
            });
        });
}

// Handle push notifications
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
            icon: '/assets/logo.png?v=3.0'
        };
    }

    const options = {
        body: data.body || 'New notification from GLY Platform',
        icon: data.icon || '/assets/logo.png?v=3.0',
        badge: '/assets/logo.png?v=3.0',
        vibrate: [100, 50, 100],
        data: {
            url: data.url || '/',
            dateOfArrival: Date.now()
        },
        actions: [
            {
                action: 'open',
                title: 'Open App',
                icon: '/assets/logo.png?v=3.0'
            },
            {
                action: 'close',
                title: 'Close',
                icon: '/assets/logo.png?v=3.0'
            }
        ]
    };

    event.waitUntil(
        self.registration.showNotification(data.title || 'GLY Platform', options)
    );
});

// Handle notification click
self.addEventListener('notificationclick', event => {
    const notification = event.notification;
    const action = event.action;

    if (action === 'close') {
        notification.close();
    } else {
        // Открываем приложение
        event.waitUntil(
            clients.matchAll({
                type: 'window',
                includeUncontrolled: true
            }).then(clientList => {
                // Ищем уже открытое окно
                for (const client of clientList) {
                    if (client.url.includes('/index.html') && 'focus' in client) {
                        client.focus();
                        notification.close();
                        return;
                    }
                }
                
                // Если окно не найдено, открываем новое
                if (clients.openWindow) {
                    const url = notification.data && notification.data.url ? notification.data.url : '/';
                    return clients.openWindow(url);
                }
            })
        );
    }
    notification.close();
});

// Background sync (if supported)
if ('sync' in self.registration) {
    self.addEventListener('sync', event => {
        if (event.tag === 'sync-data') {
            event.waitUntil(
                syncAppData()
            );
        }
    });
}

// Periodic sync (if supported)
if ('periodicSync' in self.registration) {
    self.addEventListener('periodicsync', event => {
        if (event.tag === 'update-cache') {
            event.waitUntil(
                updateStaticCache()
            );
        }
    });
}

// Функция синхронизации данных приложения
function syncAppData() {
    return Promise.all([
        // Здесь можно добавить синхронизацию данных
        console.log('Background sync started')
    ]);
}

// Функция периодического обновления кеша
function updateStaticCache() {
    return caches.open(CACHE_NAME)
        .then(cache => {
            // Обновляем важные файлы
            const importantFiles = urlsToCache.filter(url => 
                url.includes('.css') || url.includes('.js') || url.includes('index.html')
            );
            
            return Promise.all(
                importantFiles.map(url => {
                    return fetch(url)
                        .then(response => {
                            if (response.ok) {
                                return cache.put(url, response);
                            }
                        })
                        .catch(error => {
                            console.warn('Failed to update:', url, error);
                        });
                })
            );
        })
        .then(() => {
            console.log('Static cache updated');
        });
}

// Обработка сообщений от клиентов
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
    
    if (event.data && event.data.type === 'UPDATE_CACHE') {
        updateStaticCache();
    }
});

// Предварительная загрузка критически важных ресурсов
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'PRECACHE_ASSETS') {
        const assets = event.data.assets || [];
        if (assets.length > 0) {
            event.waitUntil(
                caches.open(CACHE_NAME)
                    .then(cache => {
                        return Promise.all(
                            assets.map(asset => {
                                return fetch(asset)
                                    .then(response => {
                                        if (response.ok) {
                                            return cache.put(asset, response);
                                        }
                                    })
                                    .catch(error => {
                                        console.warn('Failed to precache:', asset, error);
                                    });
                            })
                        );
                    })
            );
        }
    }
});
