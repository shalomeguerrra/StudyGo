const archivos = [
    "./",
    "./index.html",
    "./style.css",
    "./script.js"
];

self.addEventListener("install", function(event) {

    event.waitUntil(

        caches.open("studygo-v1").then(function(cache) {

            return cache.addAll(archivos);

        })

    );

});


self.addEventListener("fetch", function(event) {

    event.respondWith(

        caches.match(event.request).then(function(respuesta) {

            return respuesta || fetch(event.request);

        })

    );

});