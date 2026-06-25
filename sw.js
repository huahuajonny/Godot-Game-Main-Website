// Service Worker 注册
const CACHE_NAME = 'godot-game-v1';
const urlsToCache = [
  '/Godot-Game-Main-Website/',
  '/Godot-Game-Main-Website/index.html',
  '/Godot-Game-Main-Website/games.json',
  '/Godot-Game-Main-Website/favicon.ico'
];

// 安装时缓存
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// 拦截请求并返回缓存
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});