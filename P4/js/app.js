if(navigator.serviceWorker){
    if(window.location.hostname==='localhost'){
        navigator.serviceWorker.register('/sw.js');
    }else{
        navigator.serviceWorker.register('./sw.js');
    }
}