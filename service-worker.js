const CACHE_NAME = 'gly-platform-v7.0';
const urlsToCache = [
    '/',
    '/index.html',
    '/css/style.css?v=7.0',
    '/js/app.js?v=7.0',
    '/js/home.js?v=7.0',
    '/js/mine.js?v=7.0',
    '/js/assets.js?v=7.0',
    '/js/team.js?v=7.0',
    '/js/deposit.js?v=7.0',
    '/js/withdraw.js?v=7.0',
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
    console.log('🚀 Installing Service Worker version:', CACHE_NAME);
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('✅ Caching files for version:', CACHE_NAME);
                return cache.addAll(urlsToCache);
            })
            .then(() => {
                console.log('✅ All files cached successfully');
                // Немедленно активируем новый SW
                return self.skipWaiting();
            })
            .catch(error => {
                console.error('❌ Cache error:', error);
                // Даже при ошибке пытаемся активировать
                return self.skipWaiting();
            })
    );
});

// Activate
self.addEventListener('activate', event => {
    console.log('🚀 Activating new Service Worker version:', CACHE_NAME);
    
    event.waitUntil(
        Promise.all([
            // Очистка ВСЕХ старых кешей
            caches.keys().then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        // Удаляем ВСЕ старые версии кеша
                        if (cacheName !== CACHE_NAME) {
                            console.log('🗑️ Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            }),
            
            // Немедленно берем контроль над всеми клиентами
            self.clients.claim(),
            
            // Принудительное обновление localStorage
            (async () => {
                try {
                    // Удаляем все старые версии из localStorage
                    const oldVersions = [
                        '1.0', '1.1', '1.2', '1.3', '1.4', '1.5', 
                        '1.6', '1.7', '1.8', '1.9', '2.0', '3.0', 
                        '6.0', '6.1', '6.3', '6.4', '6.5'
                    ];
                    
                    // Получаем все ключи localStorage
                    const allKeys = [];
                    for (let i = 0; i < localStorage.length; i++) {
                        allKeys.push(localStorage.key(i));
                    }
                    
                    // Удаляем ключи, связанные со старыми версиями
                    oldVersions.forEach(version => {
                        // Удаляем различные варианты ключей с версиями
                        localStorage.removeItem(`app_version_${version}`);
                        localStorage.removeItem(`version_${version}`);
                        localStorage.removeItem(`gly_version_${version}`);
                        localStorage.removeItem(`cache_version_${version}`);
                    });
                    
                    // Устанавливаем новую версию
                    localStorage.setItem('app_version', '7.0');
                    localStorage.setItem('gly_current_version', '7.0');
                    localStorage.setItem('last_update', new Date().toISOString());
                    
                    console.log('✅ LocalStorage updated to version 7.0');
                } catch (error) {
                    console.log('⚠️ Error updating localStorage:', error);
                }
            })()
        ])
        .then(() => {
            // Принудительно сообщаем всем клиентам о необходимости обновления
            return self.clients.matchAll()
                .then(clients => {
                    clients.forEach(client => {
                        console.log('🔄 Sending force update to client:', client.id);
                        client.postMessage({
                            type: 'FORCE_UPDATE',
                            version: '7.0',
                            timestamp: Date.now(),
                            critical: true,
                            message: 'Critical update available. App will reload.',
                            action: 'RELOAD_NOW'
                        });
                    });
                });
        })
        .then(() => {
            // Дополнительная проверка через 2 секунды
            setTimeout(() => {
                self.clients.matchAll().then(clients => {
                    clients.forEach(client => {
                        client.postMessage({
                            type: 'UPDATE_REMINDER',
                            version: '7.0',
                            timestamp: Date.now(),
                            message: 'Update to version 7.0 completed. Please ensure you have the latest version.'
                        });
                    });
                });
            }, 2000);
            
            console.log('✅ Service Worker activated successfully for version 7.0');
        })
        .catch(error => {
            console.error('❌ Activation error:', error);
        })
    );
});

// Fetch
self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    
    // Пропускаем не-GET запросы
    if (event.request.method !== 'GET') return;
    
    // Пропускаем не-HTTP(S) запросы
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return;
    
    // Пропускаем API запросы и динамические данные
    if (url.hostname.includes('supabase.co') ||
        url.hostname.includes('trongrid.io') ||
        url.hostname.includes('api.') ||
        url.href.includes('/api/') ||
        url.search.includes('no-cache=true') ||
        url.search.includes('bypass-cache=true')) {
        return fetch(event.request);
    }
    
    // Для HTML страниц используем стратегию Network First
    if (event.request.headers.get('Accept')?.includes('text/html') || 
        event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request)
                .then(response => {
                    // Клонируем ответ для кеширования
                    const responseToCache = response.clone();
                    caches.open(CACHE_NAME)
                        .then(cache => {
                            cache.put(event.request, responseToCache);
                        });
                    return response;
                })
                .catch(() => {
                    // Если сеть недоступна, используем кеш
                    return caches.match(event.request)
                        .then(cachedResponse => {
                            return cachedResponse || caches.match('/index.html');
                        });
                })
        );
        return;
    }
    
    // Для статических ресурсов используем Cache First
    event.respondWith(
        caches.match(event.request)
            .then(cachedResponse => {
                if (cachedResponse) {
                    // Отправляем метрику использования кеша
                    self.clients.matchAll().then(clients => {
                        clients.forEach(client => {
                            client.postMessage({
                                type: 'CACHE_HIT',
                                url: event.request.url,
                                timestamp: Date.now()
                            });
                        });
                    });
                    return cachedResponse;
                }
                
                // Если в кеше нет, загружаем из сети
                return fetch(event.request)
                    .then(response => {
                        // Проверяем валидность ответа
                        if (!response || response.status !== 200) {
                            return response;
                        }
                        
                        // Клонируем для кеширования
                        const responseToCache = response.clone();
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            })
                            .catch(err => console.warn('Cache put error:', err));
                        
                        return response;
                    })
                    .catch(() => {
                        // Fallback для оффлайн режима
                        if (event.request.mode === 'navigate') {
                            return caches.match('/index.html');
                        }
                        
                        // Для изображений можно вернуть placeholder
                        if (event.request.url.match(/\.(jpg|png|gif|svg)$/)) {
                            return caches.match('/assets/logo.png');
                        }
                        
                        return new Response('Offline content not available', {
                            status: 503,
                            headers: { 'Content-Type': 'text/plain' }
                        });
                    });
            })
    );
});

// Улучшенная обработка сообщений
self.addEventListener('message', event => {
    console.log('📨 Service Worker received message:', event.data);
    
    switch (event.data?.type) {
        case 'SKIP_WAITING':
            console.log('⏩ Skipping waiting phase');
            self.skipWaiting();
            break;
            
        case 'UPDATE_CHECK':
            console.log('🔍 Update check requested');
            event.ports[0]?.postMessage({
                type: 'UPDATE_INFO',
                currentVersion: '7.0',
                cacheName: CACHE_NAME,
                timestamp: Date.now()
            });
            break;
            
        case 'CLEAR_CACHE':
            console.log('🧹 Clearing cache requested');
            caches.delete(CACHE_NAME).then(() => {
                event.ports[0]?.postMessage({
                    type: 'CACHE_CLEARED',
                    success: true
                });
            });
            break;
    }
});

// Уведомления
self.addEventListener('push', event => {
    const options = {
        body: event.data?.text() || 'New update available! Version 7.0 is here.',
        icon: '/assets/logo.png',
        badge: '/assets/logo.png',
        tag: 'version-update',
        renotify: true,
        actions: [
            { action: 'reload', title: 'Reload App' },
            { action: 'dismiss', title: 'Dismiss' }
        ]
    };
    
    event.waitUntil(
        self.registration.showNotification('🎉 GLY Platform Update', options)
    );
});

self.addEventListener('notificationclick', event => {
    event.notification.close();
    
    if (event.action === 'reload') {
        event.waitUntil(
            self.clients.matchAll()
                .then(clients => {
                    if (clients.length) {
                        clients[0].focus();
                        clients[0].postMessage({
                            type: 'FORCE_RELOAD',
                            reason: 'notification_click'
                        });
                    } else {
                        clients.openWindow('/');
                    }
                })
        );
    }
    
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

// Фоновая синхронизация (для будущих версий)
self.addEventListener('sync', event => {
    console.log('🔄 Background sync:', event.tag);
    if (event.tag === 'update-check') {
        event.waitUntil(checkForUpdates());
    }
});

async function checkForUpdates() {
    // Проверка обновлений в фоне
    try {
        const response = await fetch('/version.json?t=' + Date.now());
        const data = await response.json();
        
        if (data.version !== '7.0') {
            // Уведомляем о новой версии
            self.registration.showNotification('New Version Available', {
                body: `Version ${data.version} is available. Click to update.`,
                icon: '/assets/logo.png',
                tag: 'new-version'
            });
        }
    } catch (error) {
        console.log('Update check failed:', error);
    }
}

// Периодическая синхронизация (если поддерживается)
// Оборачиваем в IIFE (Immediately Invoked Function Expression) с async
(async () => {
    if (self.registration && 'periodicSync' in self.registration) {
        try {
            await self.registration.periodicSync.register('update-check', {
                minInterval: 24 * 60 * 60 * 1000 // 1 день
            });
            console.log('✅ Periodic sync registered');
        } catch (error) {
            console.log('Periodic sync not supported:', error);
        }
    }
})();
