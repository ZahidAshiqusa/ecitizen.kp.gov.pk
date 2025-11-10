{
  "success": true,
  "message": "Content is not HTML, skipping asset/metadata extraction.",
  "headers": {
    "cf-cache-status": "MISS",
    "cf-ray": "99c25651c4728989-SIN",
    "connection": "keep-alive",
    "content-type": "text/javascript",
    "date": "Mon, 10 Nov 2025 03:07:01 GMT",
    "etag": "W/\"5fa-60a191ccd645b-gzip\"",
    "last-modified": "Tue, 14 Nov 2023 09:07:13 GMT",
    "server": "cloudflare",
    "transfer-encoding": "chunked",
    "vary": "Accept-Encoding"
  },
  "sourceCode": "const preLoad = function () {\n    return caches.open(\"offline\").then(function (cache) {\n        // caching index and important routes\n        return cache.addAll(filesToCache);\n    });\n};\n\nself.addEventListener(\"install\", function (event) {\n    event.waitUntil(preLoad());\n});\n\nconst filesToCache = [\n    '/',\n    '/offline.html'\n];\n\nconst checkResponse = function (request) {\n    return new Promise(function (fulfill, reject) {\n        fetch(request).then(function (response) {\n            if (response.status !== 404) {\n                fulfill(response);\n            } else {\n                reject();\n            }\n        }, reject);\n    });\n};\n\nconst addToCache = function (request) {\n    return caches.open(\"offline\").then(function (cache) {\n        return fetch(request).then(function (response) {\n            return cache.put(request, response);\n        });\n    });\n};\n\nconst returnFromCache = function (request) {\n    return caches.open(\"offline\").then(function (cache) {\n        return cache.match(request).then(function (matching) {\n            if (!matching || matching.status === 404) {\n                return cache.match(\"offline.html\");\n            } else {\n                return matching;\n            }\n        });\n    });\n};\n\nself.addEventListener(\"fetch\", function (event) {\n    event.respondWith(checkResponse(event.request).catch(function () {\n        return returnFromCache(event.request);\n    }));\n    if(!event.request.url.startsWith('http')){\n        event.waitUntil(addToCache(event.request));\n    }\n});\n",
  "assets": {},
  "metadata": {},
  "requestedUrl": "https://ecitizen.kp.gov.pk/sw.js",
  "correctedUrl": "https://ecitizen.kp.gov.pk/sw.js",
  "finalUrl": "https://ecitizen.kp.gov.pk/sw.js",
  "status": 200,
  "statusText": "OK"
}