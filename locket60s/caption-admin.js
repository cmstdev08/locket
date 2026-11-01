// Locket 60s by anhtuaan08
(function(){
  // ===== HARD-CODED CAPTIONS =====
  // Mỗi caption: { text, backgroundType:'image', imageUrl, textColor, colors:[c1,c2], captionMinChars? }
  var CUSTOM_CAPTIONS = [
     {
      overlay_id: "caption:anhtuaan08_personal",
      text: "🏎️Đẹp trai nhất locket",
      textColor: "#fbbf24",
      colors: ["#22d3ee","#0ea5e9","#2563eb"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:1",
      text: "👑Locket 60s by anhtuaan08",
      textColor: "#ffffff",
      colors: ["#fbbf24","#f43f5e","#9333ea"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:2",
      text: "Thiếu nữ e thẹn🏳️‍🌈",
      textColor: "#8C315F",
      colors: ["#f472b6","#c084fc","#818cf8"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:3",
      text: "🔥Only 1% can see this secret",
      textColor: "#ffffff",
      colors: ["#dc2626","#f97316","#fbbf24"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:4",
      text: "💅Xinh đẹp nhưng hơi chảnh xíu",
      textColor: "#ffffff",
      colors: ["#ec4899","#f43f5e","#c026d3"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:5",
      text: "👀Nhìn cái giề mà nhìn quài zợ",
      textColor: "#000000",
      colors: ["#facc15","#f59e0b","#f97316"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:6",
      text: "💸Không khoe nhưng tiền đầy ví",
      textColor: "#ffffff",
      colors: ["#34d399","#14b8a6","#0891b2"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:7",
      text: "⚡Ngoan xinh yêu của gia đình",
      textColor: "#ffffff",
      colors: ["#6366f1","#a855f7","#ec4899"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:8",
      text: "😎Lướt Locket cả ngày không chán",
      textColor: "#38bdf8",
      colors: ["#0f172a","#1e293b","#0f172a"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:9",
      text: "🥳Vô tri một chút nhưng vui cả ngày",
      textColor: "#000000",
      colors: ["#fcd34d","#facc15","#fb923c"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:10",
      text: "💗Thảo có đáng iu hăm?",
      textColor: "#8C315F",
      colors: ["#f472b6","#fda4af","#d8b4fe"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:11",
      text: "🔒Trái tim này đã khóa chính chủ",
      textColor: "#ffffff",
      colors: ["#f43f5e","#ec4899","#ef4444"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:12",
      text: "❤️I love you 3000 my bae",
      textColor: "#ffffff",
      colors: ["#ef4444","#e11d48","#db2777"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:13",
      text: "🌹Em là ngoại lệ duy nhất của anh",
      textColor: "#ffffff",
      colors: ["#f472b6","#f43f5e","#9333ea"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:14",
      text: "💌Tự dưng nhớ người ta ghê á",
      textColor: "#ffffff",
      colors: ["#c084fc","#f472b6","#fb7185"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:15",
      text: "🥰Càng nhìn càng thấy mê cậu",
      textColor: "#ffffff",
      colors: ["#d946ef","#ec4899","#fb7185"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:16",
      text: "💑Bức ảnh này chỉ gửi cho em thôi",
      textColor: "#8C315F",
      colors: ["#fb7185","#f472b6","#fcd34d"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:17",
      text: "💕Hôm nay cậu có nhớ tớ không nè?",
      textColor: "#8C315F",
      colors: ["#7dd3fc","#f472b6","#fda4af"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:18",
      text: "🌟Cậu là tia nắng ấm áp của tớ",
      textColor: "#ffffff",
      colors: ["#fcd34d","#fb923c","#fb7185"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:19",
      text: "🍓Bên cạnh cậu lúc nào cũng ngọt",
      textColor: "#ffffff",
      colors: ["#fb7185","#f87171","#ec4899"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:20",
      text: "💗Dthw zaaaa iu hămm💕",
      textColor: "#ffffff",
      colors: ["#f472b6","#e879f9","#818cf8"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:21",
      text: "🐱Meow meow bé mèo ngoan xinh yêu",
      textColor: "#8C315F",
      colors: ["#f472b6","#d8b4fe","#a5b4fc"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:22",
      text: "🐰Chú thỏ nhỏ đi lạc vào tim cậu",
      textColor: "#8C315F",
      colors: ["#fda4af","#f472b6","#fef08a"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:23",
      text: "🍓Một chiếc bé dâu tây mọng nước",
      textColor: "#ffffff",
      colors: ["#f87171","#fb7185","#f472b6"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:24",
      text: "🌸Bé hạt tiêu siêu cấp đáng yêu",
      textColor: "#8C315F",
      colors: ["#f472b6","#fda4af","#d8b4fe"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:25",
      text: "🍰Hôm nay ngọt ngào như chiếc bánh",
      textColor: "#8C315F",
      colors: ["#fde68a","#fbcfe8","#fda4af"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:26",
      text: "🍼Em bé hôm nay xin một ngụm trà sữa",
      textColor: "#000000",
      colors: ["#fcd34d","#fdba74","#f472b6"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:27",
      text: "🧸Một chiếc gấu bông biết đi",
      textColor: "#000000",
      colors: ["#fbbf24","#fb923c","#fde047"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:28",
      text: "🎀Công chúa hôm nay hơi dỗi một xíu",
      textColor: "#ffffff",
      colors: ["#f472b6","#e879f9","#c084fc"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:29",
      text: "🌼Tặng cậu nụ cười tươi nhất hôm nay",
      textColor: "#000000",
      colors: ["#fde047","#fcd34d","#fdba74"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:30",
      text: "👑Thảo có xinh gái hăm💗",
      textColor: "#000000",
      colors: ["#fcd34d","#fb923c","#fb7185"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:31",
      text: "💎Phong thái của một người thành công",
      textColor: "#ffffff",
      colors: ["#fbbf24","#eab308","#d97706"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:32",
      text: "👑Sinh ra để đội vương miện",
      textColor: "#fbbf24",
      colors: ["#9333ea","#c026d3","#f59e0b"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:33",
      text: "🥂Thần thái không thể sao chép",
      textColor: "#fbbf24",
      colors: ["#0f172a","#451a03","#0f172a"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:34",
      text: "🏆Bản giới hạn - Không thể thay thế",
      textColor: "#ffffff",
      colors: ["#f59e0b","#f43f5e","#9333ea"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:35",
      text: "💰Bận rộn kiếm tiền và xinh đẹp",
      textColor: "#ffffff",
      colors: ["#10b981","#0d9488","#0891b2"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:36",
      text: "🏰Chàng hoàng tử trong truyện cổ tích",
      textColor: "#fbbf24",
      colors: ["#2563eb","#4f46e5","#9333ea"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:37",
      text: "⭐Đẳng cấp Locket Gold 60s vĩnh viễn",
      textColor: "#000000",
      colors: ["#facc15","#f59e0b","#f43f5e"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:38",
      text: "🚀Không đi theo đám đông - Tự tạo lối đi",
      textColor: "#ffffff",
      colors: ["#06b6d4","#2563eb","#4338ca"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:39",
      text: "🎖️Chiến thắng chính mình mỗi ngày",
      textColor: "#ffffff",
      colors: ["#dc2626","#d97706","#eab308"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:40",
      text: "✨Hôm nay trời đẹp, lòng bình yên☕",
      textColor: "#ffffff",
      colors: ["#22d3ee","#38bdf8","#3b82f6"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:41",
      text: "🎧Now playing: Our Little Secret 🎶",
      textColor: "#ffffff",
      colors: ["#34d399","#14b8a6","#0ea5e9"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:42",
      text: "🌆Hoàng hôn buông nhẹ mang theo nỗi nhớ",
      textColor: "#ffffff",
      colors: ["#f97316","#f43f5e","#9333ea"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:43",
      text: "🌧️Nghe mưa rơi và thưởng thức ly trà",
      textColor: "#38bdf8",
      colors: ["#334155","#075985","#0f172a"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:44",
      text: "🍃Sống chậm lại, yêu thương bản thân",
      textColor: "#ffffff",
      colors: ["#2dd4bf","#10b981","#16a34a"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:45",
      text: "🌌Bầu trời hôm nay có nhiều vì sao",
      textColor: "#38bdf8",
      colors: ["#312e81","#581c87","#020617"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:46",
      text: "📖Ghi lại những khoảnh khắc đẹp nhất",
      textColor: "#ffffff",
      colors: ["#d97706","#ea580c","#44403c"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:47",
      text: "💭Gió thoảng mây trôi lòng nhẹ nhõm",
      textColor: "#ffffff",
      colors: ["#38bdf8","#818cf8","#c084fc"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:48",
      text: "🌊Lắng nghe tiếng sóng vỗ về tâm hồn",
      textColor: "#ffffff",
      colors: ["#60a5fa","#06b6d4","#14b8a6"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:49",
      text: "✨Mỗi ngày trôi qua đều là một món quà",
      textColor: "#000000",
      colors: ["#fb7185","#fbbf24","#34d399"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:50",
      text: "😭Cho tui về với vợ tui",
      textColor: "#000000",
      colors: ["#fb7185","#fbbf24","#34d399"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0
    }
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