self.addEventListener('install', (event)=>{
    console.log('SW: Instalado');

    const myPromise = new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('Instalaciones finalizadas');
            resolve('ok');
        }, 3000);
    });
    event.waitUntil(myPromise)
});

self.addEventListener('activate', (event) => {
    console.log('SW: Activado');
})

self.addEventListener('fetch', (event)=>{
    if(event.request.url.includes('style.css')){
        const respueta =  new Response(
            `body{
                color: red;
                 background: rgb(0, 0, 0);
             }`,
            {
                headers:{
                    'Content-Type':'text/css'
                 }
             }
        );
         event.respondWith(respueta)
    }
    if(event.request.url.includes('/images/imagen1')){
        const generic = fetch('./images/imagen2.jpg');
        event.respondWith(generic);
    }
})
