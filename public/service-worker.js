//set up cache name and files to add to it
const CACHE_NAME = 'coffee-site-v1';
const CACHE_URLS =  ['index.html',                      
                     '404.html',
                     'coffee.html',
                     'order.html',
                     'order-confirmation.html',
                     'style/coffee.css',
                     'style/index.css',
                     'style/navigation.css',
                     'style/normalize.css',
                     'style/order.css',
                     'style/style.css', 
                     'style/vars.css',
                     'js/coffee.js',
                     'js/navigation.js',
                     'js/order-validation.js',
                     'service-worker.js',
                     'img/coffee_table_1x.webp',
                     'img/coffee_table_2x.webp',
                     'img/coffee_table_3x.webp',
                     'img/coffee_table.jpg',
                     'img/coffee-1x.jpg',
                     'img/coffee-2x.jpg',
                     'img/coffee-3x.jpg',
                     'img/coffee-1x.webp',
                     'img/coffee-2x.webp',
                     'img/coffee-3x.webp',
                     'img/coffee-large.jpg',
                     'img/deliver.jpg',
                     'img/header-large.webp',
                     'img/logo-largest-png.png',
                     'img/logo-webp-256.webp',
                     'img/logo-webp-492.webp',
                     'img/logo-webp-984.webp',
                     'img/menu_hamburger.svg',
                     'site.webmanifest',
                     'browserconfig.xml'];

//add all URLs to cache when installed
self.addEventListener("install", function(event){
    console.log("Service worker installed");
    event.waitUntil(
        //create and open cache
        caches.open(CACHE_NAME)
            .then(function(cache){
                console.log("Cache opened");
                //add all URLs to cache
                return cache.addAll(CACHE_URLS);
        })
    );
});

//user has navigated to page - fetch required assets
self.addEventListener("fetch", function(event){
    event.respondWith(
        caches.match(event.request).then(function(response){
            //check whether asset is in cache
            if(response){
                //asset in cache, so return it
                console.log(`Return ${event.request.url} from cache`);
                return response;
            }
            //asset not in cache so fetch asset from network
            console.log(`Fetch ${event.request.url} from network`);
            return fetch(event.request);
        })
    );
});


//On activate update the cache with the new version and clean out old caches
self.addEventListener('activate', function(event) {
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (cacheName.startsWith('cat-site-') && CACHE_NAME !== cacheName) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });
  