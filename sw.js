// Service Worker for GLY App
const CACHE_NAME = 'gly-cache-v1.0';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/app.js',
  '/js/home.js',
  '/js/get.js',
  '/js/assets.js',
  '/js/mine.js',
  '/js/company.js',
  '/js/invite.js',
  '/js/team.js',
  '/js/rules.js',
  '/js/login.js',
  '/js/register.js',
  '/manifest.json',
  '/assets/logo.png',
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
  '/assets/company.MP4',
  '/assets/partners.png',
  '/assets/doc.png',
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
  '/assets/vipicon6.png',
  '/assets/settings_address.png',
  '/assets/settings_password.png',
  '/assets/settings_support.png',
  '/assets/settings_language.png',
  '/assets/settings_change_password.png'
];

// Install event - cache assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache.map(url => {
          // Add timestamp to prevent caching issues
          return url + '?v=1.0';
        }));
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
    .then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', event => {
  // Skip Supabase requests and external resources
  if (event.request.url.includes('supabase.co') ||
      event.request.url.includes('api.qrserver.com') ||
      event.request.url.includes('api.coingecko.com') ||
      event.request.url.includes('cdnjs.cloudflare.com') ||
      event.request.url.includes('cdn.jsdelivr.net')) {
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
        
        return fetch(fetchRequest).then(response => {
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
          // Return offline page or fallback
          return caches.match('/');
        });
      })
  );
});

// Handle skip waiting message
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Background sync for offline data
self.addEventListener('sync', event => {
  if (event.tag === 'sync-transactions') {
    event.waitUntil(syncTransactions());
  }
});

async function syncTransactions() {
  console.log('Syncing transactions...');
  // Implement background sync logic here
}
