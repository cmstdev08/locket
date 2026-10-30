// Locket 60s by anhtuaan08
(function(){
  // ===== HARD-CODED CAPTIONS =====
  // Mỗi caption: { text, backgroundType:'image', imageUrl, textColor, colors:[c1,c2], captionMinChars? }
  var CUSTOM_CAPTIONS = [
    {
      overlay_id: "caption:anhtuaan08_personal",       // index 0
      text: "👑Locket 60s by anhtuaan08",
      textColor: "#000000",
      colors: ["#FC466B", "#FCA311", "#FFDD00"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0                             // 0 = không pad
    }

       
        ,{
      overlay_id: "caption:anhtuaan08_personal:1",
      text: "Thiếu nữ e thẹn🏳️‍🌈",
      textColor: "#8C315F",
      colors: ["#7dd3fc","#f472b6","#a5b4fc"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    // Custom Caption by Anh Tuan iOS

];

  var useNativeImagePost = false;
  var recoverStandardCaption = false;
  var finished = false;
  function done(x){ if(!finished){ finished=true; $done(x||{}); } }

  try {
    var endpoint = String(($request && $request.url) || '');
    if (!/^https:\/\/(?:api\.locketcamera\.com|us-central1-locket-4252a\.cloudfunctions\.net)\/postMomentV2(?:\?.*)?$/.test(endpoint)) { done({}); return; }

    var raw = ($request && $request.body);
    if (typeof raw !== 'string' || raw.length > 1000000 || raw.length < 8) { done({}); return; }

    var payload;
    try { payload = JSON.parse(raw); } catch(e) { done({}); return; }
    if (!payload || typeof payload !== 'object' || !payload.data || typeof payload.data !== 'object' || Array.isArray(payload.data)) { done({}); return; }

    var overlays = Array.isArray(payload.data.overlays) ? payload.data.overlays : [];
    var selected = overlays.filter(function(x){
      return x && typeof x.overlay_id === 'string'
        && /^caption:anhtuaan08_personal(?::[0-9]+)?$/.test(x.overlay_id)
        && x.overlay_type === 'caption'
        && x.data && typeof x.data === 'object' && !Array.isArray(x.data);
    });

    var topCaption = typeof payload.data.caption === 'string' ? payload.data.caption : '';

    var standard = overlays.filter(function(x){
      return x && x.overlay_id === 'caption:standard'
        && x.overlay_type === 'caption'
        && x.data && typeof x.data === 'object' && !Array.isArray(x.data)
        && typeof x.data.text === 'string';
    });

    var standardWidthCandidate = selected.length === 0
      && standard.length === 1
      && topCaption
      && standard[0].data.text === topCaption
      && overlays.filter(function(x){ return x && x.overlay_type === 'caption'; }).length === 1;

    var standardRepair = recoverStandardCaption && standardWidthCandidate;

    if (!selected.length && !standardWidthCandidate
        && (!topCaption || overlays.some(function(x){ return x && x.overlay_type === 'caption'; }))) { done({}); return; }

    if (!Array.isArray(payload.data.recipients) || payload.data.recipients.length !== 0) { done({}); return; }

    var available = CUSTOM_CAPTIONS;
    var changed = false;

    if (standardRepair) {
      var standardMatches = available.filter(function(cap){
        return cap && cap.backgroundType === 'image'
          && cap.text === topCaption
          && typeof cap.imageUrl === 'string' && /^https:\/\//.test(cap.imageUrl);
      });
      if (standardMatches.length === 1) {
        var chosen = standardMatches[0], std = standard[0];
        std.data.type = 'static_content';
        std.data.max_lines = 1;
        std.data.background = { image:{ type:'image', source:'url', data: chosen.imageUrl } };
        if (typeof chosen.textColor === 'string' && chosen.textColor) std.data.text_color = chosen.textColor;
        std.alt_text = topCaption;
        changed = true;
      }
    }

    var isPublic = Array.isArray(payload.data.recipients) && payload.data.recipients.length === 0;
    var canStandardize = isPublic && selected.length === 1
      && !overlays.some(function(x){ return x && x.overlay_id === 'caption:standard'; });

    if (!selected.length && topCaption
        && !overlays.some(function(x){ return x && x.overlay_id === 'caption:standard'; })) {
      var matches = available.filter(function(cap){
        return cap && cap.backgroundType === 'image'
          && cap.text === topCaption
          && typeof cap.imageUrl === 'string' && /^https:\/\//.test(cap.imageUrl);
      });
      if (matches.length === 1) {
        var match = matches[0];
        var imageBackground = { image:{ type:'image', source:'url', data: match.imageUrl } };
        if (!useNativeImagePost && Array.isArray(match.colors) && match.colors.length === 2) imageBackground.colors = match.colors;
        var restored = {
          overlay_id: 'caption:standard', overlay_type: 'caption',
          data: {
            type: useNativeImagePost ? 'static_content' : 'standard',
            text: match.text, text_color: match.textColor || '#FFFFFF',
            max_lines: useNativeImagePost ? 1 : 4, background: imageBackground
          },
          alt_text: match.text
        };
        payload.data.overlays = overlays.concat([restored]);
        changed = true;
      }
    }

    selected.forEach(function(overlay){
      var suffix = overlay.overlay_id.slice('caption:anhtuaan08_personal'.length);
      var idx = suffix ? (suffix[0] === ':' ? Number(suffix.slice(1)) : NaN) : 0;
      if (!Number.isSafeInteger(idx) || idx < 0 || idx >= available.length) return;
      var cap = available[idx];
      if (!cap || cap.backgroundType !== 'image'
          || typeof cap.imageUrl !== 'string' || !/^https:\/\//.test(cap.imageUrl)) return;
      if (cap.text !== String(overlay.data.text).replace(/^\u2800+|\u2800+$/g, '')) return;

      var bg = overlay.data.background;
      if (bg !== undefined && (!bg || typeof bg !== 'object' || Array.isArray(bg))) return;
      var existing = bg && bg.image;
      var next = Object.assign({}, bg || {});
      next.image = Object.assign({},
        existing && typeof existing === 'object' && !Array.isArray(existing) ? existing : {},
        { type:'image', source:'url', data: cap.imageUrl });
      if (!existing || existing.type !== 'image' || existing.source !== 'url' || existing.data !== cap.imageUrl) {
        overlay.data.background = next;
        changed = true;
      }
      if (canStandardize && typeof cap.text === 'string' && cap.text.length <= 240
          && (payload.data.caption === undefined || payload.data.caption === null
              || payload.data.caption === '' || payload.data.caption === cap.text)) {
        overlay.overlay_id = 'caption:standard';
        overlay.data.type = useNativeImagePost ? 'static_content' : 'standard';
        overlay.data.max_lines = useNativeImagePost ? 1 : (overlay.data.max_lines || 4);
        if (useNativeImagePost) overlay.data.background = { image:{ type:'image', source:'url', data: cap.imageUrl } };
        overlay.alt_text = cap.text;
        payload.data.caption = cap.text;
        changed = true;
      }
    });

    function stripPlate(s){ return typeof s === 'string' ? s.replace(/^\u2800+|\u2800+$/g,'') : ''; }
    function plateCaption(raw, target){
      var n = [12,16,20,24,28,32].indexOf(target) >= 0 ? target : 0;
      if (!n) return raw;
      var count = Math.max(0, Math.min(64, n - Array.from(raw).length));
      if (!count) return raw;
      return '\u2800'.repeat(Math.floor(count/2)) + raw + '\u2800'.repeat(Math.ceil(count/2));
    }
    var rawCaption = stripPlate(topCaption);
    if (rawCaption) {
      var widthMatches = available.filter(function(cap){
        return cap && cap.backgroundType === 'image'
          && typeof cap.imageUrl === 'string' && /^https:\/\//.test(cap.imageUrl)
          && cap.text === rawCaption
          && [12,16,20,24,28,32].indexOf(cap.captionMinChars) >= 0;
      });
      if (widthMatches.length === 1) {
        var plate = plateCaption(rawCaption, widthMatches[0].captionMinChars);
        if (plate !== topCaption && plate.length <= 100) {
          payload.data.caption = plate;
          (Array.isArray(payload.data.overlays) ? payload.data.overlays : []).forEach(function(x){
            if (x && x.overlay_type === 'caption' && x.data && stripPlate(x.data.text) === rawCaption) {
              x.data.text = plate;
              x.alt_text = rawCaption;
              if (x.data.localized_text && typeof x.data.localized_text === 'object') {
                x.data.localized_text.vn = plate;
                x.data.localized_text.en = plate;
              }
            }
          });
          changed = true;
        }
      }
    }

    if (!changed) { done({}); return; }
    done({ body: JSON.stringify(payload) });
  } catch(e) { done({}); }
})();