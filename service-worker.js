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

// Install event - Кешируем все файлы при установке
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Cache opened for version: v6.4');
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
            // Удаляем все старые версии из localStorage
            return cleanOldLocalStorage();
        })
        .then(() => {
            // Запрашиваем контроль над всеми клиентами
            return self.clients.claim();
        })
        .then(() => {
            // Сигнализируем всем клиентам о новой версии
            return self.clients.matchAll().then(clients => {
                clients.forEach(client => {
                    client.postMessage({
                        type: 'NEW_VERSION',
                        version: '6.4'
                    });
                });
            });
        })
    );
});

// Fetch event - Улучшенная стратегия кеширования
self.addEventListener('fetch', event => {
    // Пропускаем не GET запросы
    if (event.request.method !== 'GET') {
        return;
    }
    
    const url = new URL(event.request.url);
    
    // Пропускаем все не HTTP/HTTPS запросы
    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
        return;
    }
    
    // Пропускаем запросы к расширениям
    if (event.request.url.startsWith('chrome-extension://') || 
        event.request.url.startsWith('moz-extension://') ||
        event.request.url.startsWith('safari-extension://') ||
        event.request.url.startsWith('chrome://') ||
        event.request.url.startsWith('file://')) {
        return;
    }
    
    // Пропускаем API запросы
    if (event.request.url.includes('supabase.co') ||
        event.request.url.includes('trongrid.io') || 
        event.request.url.includes('moralis.io') ||
        event.request.url.includes('railway.app') ||
        event.request.url.includes('api.') ||
        event.request.url.includes('/api/')) {
        return fetch(event.request);
    }

    // Обрабатываем запрос
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Если есть в кеше - возвращаем
                if (response) {
                    // Для CSS и JS файлов - проверяем версию
                    if (event.request.url.match(/\.(css|js)$/)) {
                        const url = new URL(event.request.url);
                        if (url.searchParams.get('v') !== '6.4') {
                            // Обновляем файл в фоне
                            event.waitUntil(
                                updateFileCache(event.request)
                            );
                        }
                    }
                    return response;
                }

                // Если нет в кеше - загружаем из сети
                return fetch(event.request)
                    .then(networkResponse => {
                        // Проверяем валидность ответа
                        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                            return networkResponse;
                        }

                        // Проверяем, что это HTTP/HTTPS ответ
                        const responseUrl = new URL(networkResponse.url);
                        if (responseUrl.protocol !== 'http:' && responseUrl.protocol !== 'https:') {
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

// Функция для обновления файлов в кеше (особенно CSS/JS)
function updateFileCache(request) {
    const url = new URL(request.url);
    
    // Проверяем, что это HTTP/HTTPS запрос
    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
        return Promise.reject(new Error('Unsupported protocol'));
    }
    
    return fetch(request)
        .then(response => {
            // Проверяем валидность ответа
            if (!response || response.status !== 200 || response.type !== 'basic') {
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
        .then(() => {
            console.log('Updated cache for:', request.url);
        })
        .catch(error => {
            console.log('Background file update failed:', error);
            // Не делаем ничего при ошибке - оставляем старую версию в кеше
        });
}

// Функция для получения заглушки для изображений
function getImagePlaceholder(request) {
    const url = new URL(request.url);
    
    // Проверяем, что это HTTP/HTTPS запрос
    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
        return Promise.resolve(new Response('', {
            status: 404,
            statusText: 'Unsupported protocol'
        }));
    }
    
    // Пытаемся найти похожее изображение в кеше
    return caches.open(CACHE_NAME)
        .then(cache => {
            return cache.keys()
                .then(keys => {
                    // Ищем изображения с похожим именем и только HTTP/HTTPS
                    const imageKeys = keys.filter(key => {
                        const keyUrl = new URL(key.url);
                        return (keyUrl.protocol === 'http:' || keyUrl.protocol === 'https:') &&
                               key.url.match(/\.(png|jpg|jpeg|gif|ico|svg|webp)$/);
                    });
                    
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
        },
        actions: [
            {
                action: 'open',
                title: 'Open App',
                icon: '/assets/logo.png'
            },
            {
                action: 'close',
                title: 'Close',
                icon: '/assets/logo.png'
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

// Функция очистки старого localStorage
function cleanOldLocalStorage() {
    return new Promise((resolve) => {
        try {
            // Удаляем старые версии app_version
            const versions = ['1.0', '1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '1.8', '1.9', '2.0', '3.0', '6.0', '6.1', '6.3'];
            versions.forEach(version => {
                if (localStorage.getItem('app_version') === version) {
                    localStorage.removeItem('app_version');
                }
            });
            
            // Устанавливаем новую версию
            localStorage.setItem('app_version', '6.4');
            
            // Очищаем кеш CSS и JS версий
            const keys = Object.keys(localStorage);
            keys.forEach(key => {
                if (key.includes('cache_version') || key.includes('css_version') || key.includes('js_version')) {
                    localStorage.removeItem(key);
                }
            });
            
            console.log('Old localStorage cleaned');
            resolve();
        } catch (error) {
            console.log('Error cleaning localStorage:', error);
            resolve();
        }
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

// Функция периодического обновления кеша
function updateStaticCache() {
    return caches.open(CACHE_NAME)
        .then(cache => {
            // Обновляем важные файлы (только HTTP/HTTPS)
            const importantFiles = urlsToCache.filter(url => 
                (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('/')) &&
                (url.includes('.css') || url.includes('.js') || url.includes('index.html'))
            );
            
            return Promise.all(
                importantFiles.map(url => {
                    const fullUrl = url.startsWith('/') ? self.location.origin + url : url;
                    return fetch(fullUrl)
                        .then(response => {
                            if (response.ok) {
                                return cache.put(fullUrl, response);
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
                                // Проверяем, что это HTTP/HTTPS URL
                                const url = new URL(asset, self.location.origin);
                                if (url.protocol !== 'http:' && url.protocol !== 'https:') {
                                    return Promise.resolve();
                                }
                                
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

// Сигнал всем клиентам о принудительном обновлении
self.addEventListener('activate', event => {
    event.waitUntil(
        self.clients.matchAll().then(clients => {
            clients.forEach(client => {
                client.postMessage({
                    type: 'FORCE_RELOAD',
                    version: '6.4',
                    reason: 'New version with scroll fixes'
                });
            });
        })
    );
});
