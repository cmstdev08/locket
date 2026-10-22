export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // Block mọi /runtime — không còn license
    if (url.pathname === '/runtime') {
      return new Response('Gone', { status: 410 });
    }
    // Serve static files từ KV/R2 hoặc trả 404
    // Tùy bạn đang dùng cách nào để serve JS
    return new Response('Not Found', { status: 404 });
  }
};