const STATIC_CACHE_NAME = 'static-cache-v1.1';
const INMUTABLE_CACHE_NAME = 'inmutable-cache-v1.1';
const DYNAMIC_CACHE_NAME = 'dynamic-cache-v1.1';


self.addEventListener('install', (event) => {
    console.log("SW: Instalado");
    const promis = caches.open(STATIC_CACHE_NAME).then((cache) => {
        cache.addAll([
            '/',
            '/index',
            '/manifest.json',
            '/images/icons/images/icons/android-launchericon-72-72.png',
            '/images/icons/android-launchericon-96-96.png',
            '/images/icons/android-launchericon-144-144.png',
            '/images/icons/android-launchericon-192-192.png',
            '/images/icons/android-launchericon-512-512.png',
            '/images/icons/android-launchericon-48-48.png',
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css',
            'https://us.123rf.com/450wm/julialav/julialav1911/julialav191100015/133924751-mu%C3%B1ecas-tejidas-como-ni%C3%B1os-peque%C3%B1os-con-su%C3%A9teres-coloridos-sosteniendo-campanas-cerca-de-abetos-y-re.jpg?ver=6'
        ])
    })
    event.waitUntil(promis)
})

//primero intento siempre ir a web y si no cache
self.addEventListener('fetch', (event) =>{
    //console.log(event.request);
    const res = fetch(event.request).then((respWeb) => {
        caches.open(DYNAMIC_CACHE_NAME).then((cacheDynamic) =>{
            cacheDynamic.put(event.request, respWeb);
    
        })
        return respWeb.clone();
    }).catch(() => {
        return caches.match(event.request) //aqui se deberia manejar la implementacion de una respuesta predeterminada con un  then que contenga un if
    })

    event.respondWith(res);
})

