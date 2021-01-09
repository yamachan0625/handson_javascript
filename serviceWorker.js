// self.addEventListener("install", (event) => {
//   console.log(`install:${event}`);
// });
// self.addEventListener("activate", (event) => {
//   console.log(`activate:${event}`);
// });

//index.html
{
  /* <html>
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <script>
      window.addEventListener("load", () => {
        //                                        scopeオブションはservice workerのたいす用となるパスを指定
        navigator.serviceWorker.register("/sw.js", { scope: "./v1/" }).then(
          (registration) => {
            console.log("ServiceWorker登録成功");
          },
          (err) => {
            console.log("ServiceWorker登録失敗: ", err);
          }
        );
      });
    </script>
  </body>
</html> */
}

self.addEventListener("fetch", (event) => {
  event.respondWith(
    new Promise((resolve, reject) => {
      const pathname = new URL(event.request.url).pathname;
      if (pathname.startsWith("/proxy/")) {
        if (pathname.endsWith(".html")) {
          resolve(new Response("Proxy World!"));
        } else {
          resolve(Response.error());
        }
      } else {
        resolve(fetch(event.request));
      }
    })
  );
});

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("v1").then((cache) => {
      return cache.addAll(["/v1/page1.html"]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        fetch(event.request).then((response) => {
          return caches.open("v1").then((cache) => {
            cache.put(event.request, response.clone());
            return response;
          });
        })
      );
    })
  );
});
