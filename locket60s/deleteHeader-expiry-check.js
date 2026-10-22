// Locket 60s by anhtuaan08
(function(){
  try {
    var headers = Object.assign({}, $request.headers || {});
    var key = Object.keys(headers).find(function(k){
      return k.toLowerCase() === 'x-revenuecat-etag';
    });
    if (key) headers[key] = '';
    else headers['X-RevenueCat-ETag'] = '';
    $done({ headers: headers });
  } catch (e) {
    $done({});
  }
})();