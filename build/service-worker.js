"use strict";var precacheConfig=[["/react-yahtzee/index.html","f59b00880e211d6e2cefd3943c8daa44"],["/react-yahtzee/static/css/main.62aeb95d.css","6ca3194a459abb5513d034907fd10ceb"],["/react-yahtzee/static/js/main.d021ad49.js","789099602fdecefd08bd69b15176f418"],["/react-yahtzee/static/media/fa-brands-400.38975343.svg","38975343b586296e9b73e6b56cc3ec5d"],["/react-yahtzee/static/media/fa-brands-400.8e49b728.eot","8e49b728413079dfd9ee45d0c58d54e4"],["/react-yahtzee/static/media/fa-brands-400.9f018d10.woff","9f018d1025561e96439f7c0e9026301a"],["/react-yahtzee/static/media/fa-brands-400.9f4ce3dc.woff2","9f4ce3dc689981a1b87faab0f5484f9e"],["/react-yahtzee/static/media/fa-brands-400.b7d071b9.ttf","b7d071b9c3c197bff4af902070622423"],["/react-yahtzee/static/media/fa-regular-400.7980a636.woff2","7980a6361c25b4665dbbe92d4488783c"],["/react-yahtzee/static/media/fa-regular-400.7aaf5675.woff","7aaf5675efd6339e9aba53ecbe5f1e36"],["/react-yahtzee/static/media/fa-regular-400.859001f6.eot","859001f6ae8eb0bb3878aaa971b50fc6"],["/react-yahtzee/static/media/fa-regular-400.da8a235b.svg","da8a235bb207c74eea21507f3a86a53b"],["/react-yahtzee/static/media/fa-regular-400.f3334251.ttf","f33342516f7cbe46f1d6b68f9e7bbeda"],["/react-yahtzee/static/media/fa-solid-900.0be94a07.woff","0be94a07755ba9b88f2ebcac0f23a3da"],["/react-yahtzee/static/media/fa-solid-900.64b3e814.woff2","64b3e814a66c2719b15abf8f7998bd73"],["/react-yahtzee/static/media/fa-solid-900.7726a281.svg","7726a281c1d436eb038f78c6e9048c96"],["/react-yahtzee/static/media/fa-solid-900.e2675a61.eot","e2675a616b68f446fa6284c111554c7f"],["/react-yahtzee/static/media/fa-solid-900.f14c3b2f.ttf","f14c3b2ff7c821a4c838debbffd6ad2d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],r=new URL(a,self.location),n=createCacheKey(r,hashParamName,t,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,r),e=urlsToCacheKeys.has(t));var n="/react-yahtzee/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});