
if(navigator.serviceWorker){
    //identificar si estoy en local o github

    if(window.location.hostname==='localhost'){
        navigator.serviceWorker.register('/sw.js');
    }else{
        navigator.serviceWorker.register('./sw2.js');
    }
}
//github.io/nombeRepot