// Locket 60s by anhtuaan08
(function(){
  // ===== HARD-CODED CONFIG =====
  var GOLD_EXPIRES_AT = "9999-01-29T10:10:14Z";
  var GOLD_JOINED_AT  = "2008-06-15";               // ngày mua Gold
  var BADGE_USERNAMES = ["anhtuaan08"];             // lowercase, không @
  var WIDGET_FRAME_URL = "https://i.ibb.co/0VJyfqCV/Thi-t-k-ch-a-c-t-n-2-1.png";

  // Caption cá nhân — phải khớp với CUSTOM_CAPTIONS trong caption-post.js
  var MY_CAPTIONS = [
    {
      overlay_id: "caption:anhtuaan08_personal",       // index 0
      text: "💗Thảo có đáng iu hăm?",
      textColor: "#8C315F",
      colors: ["#FBC2EB", "#FAD0C4", "#FFD1FF"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0                             // 0 = không pad
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:1",       // index 0
      text: "💗Dthw zaaaa💗",
      textColor: "#7B2454",
      colors: ["#FFAFCC", "#FFC8DD", "#CDB4DB"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0                             // 0 = không pad
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:2",       // index 0
      text: "iu hămm💕",
      textColor: "#000000",
      colors: ["#FF00CC", "#FF4D6D", "#7A00FF"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0                             // 0 = không pad
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:3",       // index 0
      text: "👑Locket 60s by anhtuaan08",
      textColor: "#000000",
      colors: ["#FC466B", "#FCA311", "#FFDD00"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0                             // 0 = không pad
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:4",       // index 0
      text: "👑Thảo có đẹp gái hăm💗",
      textColor: "#000000",
      colors: ["#FC466B", "#FCA311", "#FFDD00"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0                             // 0 = không pad
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:5",       // index 0
      text: "Thảo có xinh gái hăm💗",
      textColor: "#000000",
      colors: ["#FC466B", "#FCA311", "#FFDD00"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
      captionMinChars: 0                             // 0 = không pad
    }
    ,{
      overlay_id: "caption:anhtuaan08_personal:6",
      text: "LGBT🏳️‍🌈",
      textColor: "#8C315F",
      colors: ["#7dd3fc","#f472b6","#a5b4fc"],
      imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png"
    }
    ,{
     overlay_id: "caption:anhtuaan08_personal:7",
     text: "✨Ngon hămm",
     textColor: "#ffffff",
     colors: ["#c026d3","#9333ea","#4f46e5"],
     imageUrl: "https://i.ibb.co/RTm5P1n9/kitty-1.png"
    }
    // Custom Caption by Anh Tuan iOS
    // Thêm caption khác ở đây:
    // { overlay_id: "caption:anhtuaan08_personal:1", text: "...", textColor: "#...", colors: ["#...","#..."], imageUrl: "https://..." }
  ];

  var url = String($request.url || "");

  // ============================================================
  // 1. REVENUECAT — fake Gold subscription
  // ============================================================
  if (/^https:\/\/api\.revenuecat\.com\//.test(url)) {
    try {
      var ua = ($request.headers["User-Agent"] || $request.headers["user-agent"] || "");
      var obj = JSON.parse($response.body);
      var goldSub = {
        auto_resume_date: null, display_name: "locket_1600_1y", is_sandbox: true,
        ownership_type: "PURCHASED", billing_issues_detected_at: null,
        management_url: "https://apps.apple.com/account/subscriptions",
        period_type: "normal", price: { amount: 399000.0, currency: "VND" },
        expires_date: GOLD_EXPIRES_AT, grace_period_expires_date: null,
        refunded_at: null, unsubscribe_detected_at: null,
        original_purchase_date: GOLD_JOINED_AT + "T10:10:15Z",
        purchase_date: GOLD_JOINED_AT + "T10:10:14Z",
        store: "app_store", store_transaction_id: "2000001108724193"
      };
      var goldEnt = {
        grace_period_expires_date: null,
        purchase_date: GOLD_JOINED_AT + "T10:10:14Z",
        product_identifier: "locket_1600_1y",
        expires_date: GOLD_EXPIRES_AT
      };
      if (ua.indexOf("Locket") !== -1) {
        obj.subscriber = obj.subscriber || {};
        obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
        obj.subscriber.entitlements = obj.subscriber.entitlements || {};
        obj.Attention = "Chúc mừng bạn! Vui lòng không bán hoặc chia sẻ cho người khác!";
        goldEnt.product_identifier = "Gold";
        obj.subscriber.subscriptions["Gold"] = goldSub;
        obj.subscriber.entitlements["Gold"] = goldEnt;
      }
      $done({ body: JSON.stringify(obj) });
    } catch (e) { $done({}); }
    return;
  }

  // ============================================================
  // 2. FIREBASE REMOTE CONFIG — enable Gold features + inject captions
  // ============================================================
  if (/^https:\/\/firebaseremoteconfig\.googleapis\.com\/v1\/projects\/locket-4252a\//.test(url)) {
    try {
      var obj = JSON.parse($response.body);
      obj.Attention = "Chúc mừng bạn! Vui lòng không bán hoặc chia sẻ cho người khác!";
      obj.entries = obj.entries || {};
      var originalEntries = Object.assign({}, obj.entries);

      // --- Gold + paywall ---
      Object.assign(obj.entries, {
        feature_gates: JSON.stringify({
          app_icon_picker: "enabled", camera_roll: "enabled", camera_theme: "enabled",
          locket_views: "enabled", long_captions: "enabled", longer_video: "enabled",
          unlimited_friends: "enabled", priority_support: "enabled", profile_badge: "enabled",
          remove_ads: "enabled", video: "enabled", custom_widget_frames: "enabled",
          streak_recovery: "enabled"
        }),
        upsell_features: JSON.stringify({
          app_icon_picker: true, camera_roll: true, camera_theme: true,
          locket_views: true, remove_ads: true, custom_widget_frames: true
        }),
        paywall_presentation_config: JSON.stringify({
          uid: "paywall_testflight", onboarding: false, after_sent_moment: false,
          on_foreground: false, interval: 2592000, profile_banner: true
        }),
        feature_discovery_popup_config: JSON.stringify({
          tag: "LOCKET GOLD", tag_gradient: true, tag_style: "gold_gradient",
          title: "Lên Locket Gold rồi nè",
          feature_set: [{ title: "Chúc mừng vợ đã lên gold", body: "hotline: 0898 376 962",
            imageURL: "https://i.ibb.co/ymX8cdHg/n-n-2.png" }],
          primary_button_title: "Xong", campaign: "locket_gold_welcome_v3",
          start_at: "2020-01-01T00:00:00", end_at: "2099-12-31T23:59:59",
          use_local_time_zone: true
        }),
        android_subscribe_gold_button_enabled: "false",
        profile_badge_visible: "true",
        lunar_new_year_app_icon_enabled: "true",
        settings_instagram_url: "https://www.instagram.com/anhtuaan.08/",
        settings_tiktok_url: "https://tiktok.com/@anhtuaan08__"
      });

      // --- Ads + Sentry off ---
      Object.assign(obj.entries, {
        history_ads_mode: "off", history_ads_prefetch_count: "0",
        history_ads_prefetch_immediate: "false", history_ads_prefetch_reroute: "false",
        history_ads_dynamic_insertion: "false",
        history_ads_refresh_prefetch_on_foreground: "false",
        history_ads_floor_price: "0", history_ads_floor_price_att: "0",
        history_ad_log_displayed_on_background: "false", history_ads_debug_menu: "false",
        sentry_sample_rate: "0", sentry_network_tracing: "false",
        sentry_performance_tracking: "false", sentry_trace_sample_rate: "0",
        sentry_profiles_sample_rate: "0"
      });

      // --- Camera / video / filters ---
      Object.assign(obj.entries, {
        camera: JSON.stringify({
          gold_max_duration: 60.0, goldMaxDuration: 60.0, max_duration: 60.0, maxDuration: 60.0,
          ultra_wide: true, ultraWide: true, volume_button: true, volumeButton: true,
          flash_button: true, telephoto: true, srgb: true, lanczos: true,
          quality_mbps: 0.6, qualityMbps: 0.6
        }),
        camera_roll: JSON.stringify({
          gold_max_duration: 30.0, goldMaxDuration: 30.0, video_max_duration: 30.0,
          videoMaxDuration: 30.0, max_duration: 30.0, maxDuration: 30.0,
          trim_max_duration: 30.0, trimMaxDuration: 30.0, camera_roll_max_duration: 30.0,
          quality_mbps: 0.6, qualityMbps: 0.6, flash_button: true
        }),
        live_photos: JSON.stringify({ capture: true, video: true, viewing: true,
          catch_up: true, widget_looping_mode: "never" }),
        camera_filter_config: JSON.stringify({
          allows_custom_filters: true, show_filter_button: true,
          sheet_enabled: true, open_sheet_immediately: true,
          sheet_filters: [
            { title:{en:"Goofy"}, filter_ids:["okay_wig","influencer","looks_maxxing","toothless","bye_brows"] },
            { title:{en:"Looks"}, filter_ids:["bowling_ball","blonde_bleached","beard","bob_cut","buns","tatted","mohawk","braces","bye_brows"] },
            { title:{en:"Celebrate"}, filter_ids:["slimed","princess","disco_lights","cash_money","happy_birthday"] },
            { title:{en:"Cute"}, filter_ids:["cutesy","sticker_face","flower_crown","love_bug"] },
            { title:{en:"Costumes"}, filter_ids:["wedding","cowboy_cowgirl","giraffe","clown"] },
            { title:{en:"Holidays"}, filter_ids:["easter_bunney_cutout","easter_chick_cutout","bearded","leprechaun","lucky_face","sweet_hearts","elf_cutout","santa_cutout","frosty"] }
          ],
          picker_filters: ["okay_wig","influencer","looks_maxxing","toothless","bye_brows",
            "bowling_ball","blonde_bleached","beard","bob_cut","buns","tatted","mohawk",
            "braces","slimed","princess","disco_lights","cash_money","happy_birthday",
            "cutesy","sticker_face","flower_crown","love_bug","wedding","cowboy_cowgirl",
            "giraffe","clown","easter_bunney_cutout","easter_chick_cutout","bearded",
            "leprechaun","lucky_face","sweet_hearts","elf_cutout","santa_cutout","frosty"]
        }),
        camera_roll_preview_enabled: "true", camera_roll_video_enabled: "true",
        camera_roll_video_upload_enabled: "true", internal_camera_roll_video_upload_enabled: "true",
        longer_camera_roll_videos_enabled: "true", video_sound_enabled: "true",
        microphone_enabled: "true", camera_microphone_enabled: "true",
        audio_session_deactivation_enabled: "true", zoom_enabled: "true",
        upload_main: "false", upload_main_image_quality: "0.6",
        upload_main_image_size: "1440", upload_thumbnail_image_quality: "0.8",
        upload_thumbnail_image_size: "1020"
      });

      // --- Friends ---
      Object.assign(obj.entries, {
        max_friends_count: "999999", friend_limit_mode: "0",
        soft_friend_limit_threshold_count: "999999", show_friend_limit_on_cam: "false",
        signup_max_friends_count: "999999", celebrity_inbox_limit: "999999",
        friend_limit_geo_override: JSON.stringify({ experiments:{}, area_code_overrides:{} }),
        new_friends_monitoring_enabled: "true", improved_friend_suggestions: "true",
        show_friend_suggestions_by_default: "true", emoji_friend_suggestions: "true",
        prompt_contact_permissions_on_search: "true",
        populate_phone_numbers_from_suggest_friends: "true",
        hide_friends_enabled: "true", hide_invite_links: "false",
        hide_skip_contacts: "true", show_all_contacts: "true",
        show_invite_suggestions: "true", show_no_friends_bottom_sheet: "false",
        signup_allow_skip_add_friends: "true"
      });

      // --- Streak ---
      try {
        var streak = JSON.parse(obj.entries.streak_config || "{}");
        streak.minimum_recovery_count = 0;
        streak.minimum_display_count = 0;
        obj.entries.streak_config = JSON.stringify(streak);
      } catch (e) {}

      // --- Moments / chat ---
      Object.assign(obj.entries, {
        moment_views_enabled: "true", moment_views_v2: "true", record_moment_views: "true",
        notify_moment_views: "true", get_moment_views_as_cloud_function: "true",
        moment_reactions_v2: "true", chat_reactions_enabled: "true",
        conversation_reactions: "true", typing_indicators_enabled: "true",
        unsend_message_enabled: "true", reply_prototype_enabled: "true",
        messages_integration: "true", conversations_enabled: "true",
        fetch_moments_in_conversation: "true", hide_chat_button: "false",
        groups_enabled: "true", send_to_self_only_mode: "always_enabled",
        time_travel_rewind_v2_enabled: "true", calendar_delete_moment_enabled: "true",
        calendar_rewind_enabled: "false", locket_yearbook_story_sharing_encouraged: "true",
        rollcall_enabled: "true", rollcall_comment_actions: "true",
        rollcall_profile_button: "true", rollcall_prompt_export_after_share: "true",
        rollcall_confirm_skip_tagging: "false", rollcall_tap_to_tag_enabled: "false"
      });

      // --- Widget / UI ---
      Object.assign(obj.entries, {
        widget_frame_event_max_images: "5", android_widget_frame_event_enabled: "true",
        widget_badge_enabled: "true", widget_badge_v2: "true",
        widget_stale_state_enabled: "false", widget_last_sent_indicator: "false",
        widget_sync_token_reload_mode: "clearTokenNever",
        widget_frame_event: JSON.stringify({
          uid: "anhtu4nn_ig_2026", url: WIDGET_FRAME_URL,
          use_local_time_zone: true, placement: "below",
          start_at: "2020-01-01T00:00:00", end_at: "2099-12-31T23:59:59"
        }),
        live_activity_onboarding: "true", live_activity_onboarding_variant: "friending",
        register_live_activity_push_to_start_token: "true",
        live_activity_remove_stale_start_token: "true",
        notification_preferences_live_activities: "true",
        notification_preferences: "true", notification_reply_body_visible: "true",
        prompt_notification_permissions_after_friending: "true",
        activity_bar_enabled: "true", journal_activity_bar_enabled: "true",
        journal_settings: JSON.stringify({
          debug_menu_enabled: false, focus_animation: false, compact_header: true,
          friends_button: false, reverse_scroll_direction: false,
          streak_visualization: true, streak_visualization_style: "gradient",
          streak_header_minimum_count: 0, streak_visualization_minimum_count: 2,
          overlay_indicators: { location:false, music:true, static_content:true, weather:true }
        }),
        qr_code_config: JSON.stringify({ profile_enabled:true, scanning_enabled:true }),
        custom_profile_pics: "true", profile_menu_v2_enabled: "true"
      });

      // --- Cache / storage ---
      Object.assign(obj.entries, {
        cdn_domain_replacements: JSON.stringify({ "firebasestorage.googleapis.com": "cdn.locketcamera.com" }),
        cdn_domain_replacements_video: "true",
        storage_bucket: "gs://locket-img", storage_bucket_video: "gs://locket-video",
        image_cache_max_age_sec: "157680000", image_cache_max_size: "400000000",
        history_cache_age_days: "1000", user_cache_max_age_sec: "60",
        friends_cache_max_age_sec: "60", image_fetch_cache: "true",
        image_cache_use_shared: "true", use_doc_dir_for_image_cache: "true",
        efficient_history_cache_invalidation: "true",
        timestamp_based_history_fetches: "true", get_latest_moment_v2: "true",
        fetch_users_from_cloud_function: "true", refresh_interval: "60",
        firestore_refresh_v2: "true", firestore_refresh_v3: "true",
        keychain_access_retries: "true", blocked_users_cached_sync_enabled: "true",
        beta_features_enabled: "true", join_testflight_enabled: "true",
        safety_center: "true", help_center: "true", support_v2: "true",
        privacy_choices_setting: "true", request_att_permission: "true",
        invite_link_preview_variant: "4",
        share_history_config: JSON.stringify({ prompt_enabled:false, fetching_enabled:true }),
        share_history_prompt_enabled: "false", use_thumbnails_for_sharing: "true",
        use_thumbnails_in_timeline: "true", persist_onboarding_step: "true",
        onboarding_contact_permission_step: "true"
      });

      // --- Overlays base config ---
      Object.assign(obj.entries, {
        overlay_navigator_enabled: "true",
        overlays_v2_config: JSON.stringify({ suggestions_enabled: true }),
        captions_enabled: "true", music_caption_enabled: "true",
        music_caption_song_preview_enabled: "true", link_caption_link_enabled: "true",
        overlay_dynamic_captions: JSON.stringify([
          "standard","poll","color_palette","review","music","location","weather","time",
          "streak","star_sign","party_time","locket_count","good_morning","goodnight",
          "ootd","miss_you","custom","phunu_2010","halloween_2026"
        ])
      });

      // ===== INJECT CUSTOM CAPTIONS INTO overlay_items =====
      try {
        var groups = [];
        try {
          groups = JSON.parse(originalEntries.overlay_items || "[]");
          if (!Array.isArray(groups)) groups = [];
        } catch(e) { groups = []; }

        var sectionName = "🎨 Captions được thêm by anhtuaan08";
        var customItems = MY_CAPTIONS.map(function(c){
          return {
            overlay_id: c.overlay_id,
            source: "remote",
            caption: {
              type: "static_content",
              text: c.text,
              max_lines: 1,
              text_color: c.textColor || "#FFFFFF",
              background: { colors: c.colors || ["#222222", "#333333"] },
              localized_text: { vn: c.text, en: c.text }
            }
          };
        });

        var idx = groups.findIndex(function(g){ return g && g.section === sectionName; });
        if (idx >= 0) {
          var existing = Array.isArray(groups[idx].items) ? groups[idx].items : [];
          // Xóa item cũ trùng overlay_id (tránh duplicate khi reload)
          existing = existing.filter(function(it){
            return !customItems.some(function(ci){ return ci.overlay_id === it.overlay_id; });
          });
          groups[idx].items = existing.concat(customItems);
        } else {
          groups.push({ section: sectionName, items: customItems });
        }

        obj.entries.overlay_items = JSON.stringify(groups);
      } catch(e) {
        // Nếu lỗi, giữ overlay_items gốc
        if (originalEntries.overlay_items) {
          obj.entries.overlay_items = originalEntries.overlay_items;
        }
      }

      // --- Gold badge flags ---
      Object.assign(obj.entries, {
        gold_badge_profile_menu: "true", gold_since_badge: "true",
        gold_since_badge_enabled: "true", locket_gold_badge: "true",
        locket_gold_badge_small: "true", profile_badge_enabled: "true",
        profile_badge_visible: "true", profile_gold_badge: "true"
      });

      // --- Merge config gốc + custom (giữ key không bị override) ---
      function readConfig(v){
        try {
          var p = typeof v === "string" ? JSON.parse(v) : v;
          return (p && typeof p === "object" && !Array.isArray(p)) ? p : {};
        } catch(e){ return {}; }
      }
      ["feature_gates","upsell_features","camera","camera_roll","live_photos",
       "journal_settings","qr_code_config","overlays_v2_config"].forEach(function(k){
        if (Object.prototype.hasOwnProperty.call(obj.entries, k)) {
          obj.entries[k] = JSON.stringify(Object.assign(
            readConfig(originalEntries[k]), readConfig(obj.entries[k])
          ));
        }
      });

      $done({ body: JSON.stringify(obj) });
    } catch (e) { $done({}); }
    return;
  }

  // ============================================================
  // 3. PROFILE BADGE — gắn badge Gold cho BADGE_USERNAMES
  // ============================================================
  if (/^https:\/\/(api\.locketcamera\.com|us-central1-locket-4252a\.cloudfunctions\.net)\/(?:[^?#]*\/)?(fetchUserV2|getUserByUsername|changeProfileInfo|updateUser|createUser)(?:[/?#]|$)/.test(url)) {
    try {
      var VIP_UIDS = [];
      var VIP_USERNAMES = BADGE_USERNAMES;

      function normalizeUsername(s){
        return (typeof s === "string" ? s : "").trim().replace(/^@/, "").toLowerCase();
      }
      var normalizedNames = VIP_USERNAMES.map(normalizeUsername).filter(Boolean);
      var nameSet = new Set(normalizedNames);
      var uidSet = new Set(VIP_UIDS.map(function(v){ return String(v||"").trim(); }).filter(Boolean));
      var store = (typeof $persistentStore !== "undefined") ? $persistentStore : null;

      function cacheKey(u){ return "LOCKET_VIP_UID_FOR_" + u; }
      if (store) {
        normalizedNames.forEach(function(n){
          var c = store.read(cacheKey(n));
          if (c) uidSet.add(String(c).trim());
        });
      }

      var rawBody = $response && $response.body;
      var httpStatus = String(($response && ($response.status || $response.statusCode)) || "");
      var statusMatch = httpStatus.match(/\b([1-5]\d\d)\b/);
      if (typeof rawBody !== "string" || !rawBody.trim() ||
          (statusMatch && Number(statusMatch[1]) >= 300)) {
        $done({});
      } else {
        var data = JSON.parse(rawBody);
        var resultStatus = data && data.result && data.result.status;
        if (typeof resultStatus === "number" && resultStatus >= 300) {
          $done({});
        } else {
          var lookupUsername = "";
          var urlPath = url.split("?")[0].split("#")[0];
          if (/\/getUserByUsername\/?$/.test(urlPath) && $request && typeof $request.body === "string") {
            try {
              var rb = JSON.parse($request.body);
              lookupUsername = normalizeUsername((rb.data && rb.data.username) || rb.username);
            } catch(_) {}
          }

          var targets = [];
          var nodesVisited = 0;
          function visit(value, depth){
            if (!value || typeof value !== "object" || depth > 7 || ++nodesVisited > 4000) return;
            if (Array.isArray(value)) { value.forEach(function(it){ visit(it, depth+1); }); return; }
            if ((typeof value.uid === "string" && value.uid.trim()) ||
                (typeof value.username === "string" && value.username.trim())) {
              targets.push(value);
            }
            ["result","data","user","users","friends","profile","profiles","items","results"].forEach(function(k){
              if (value[k] && typeof value[k] === "object") visit(value[k], depth+1);
            });
          }
          visit(data, 0);

          var changes = 0;
          var isSingleLookup = lookupUsername && nameSet.has(lookupUsername) && targets.length === 1;
          targets.forEach(function(target){
            var uid = typeof target.uid === "string" ? target.uid.trim() : "";
            var username = normalizeUsername(target.username);
            var matchesUsername = !!username && nameSet.has(username);
            var matchesUid = !!uid && uidSet.has(uid);
            var matchesLookup = !username && !!uid && isSingleLookup;
            if (!(matchesUsername || matchesUid || matchesLookup)) return;

            if (uid && (matchesUsername || matchesLookup)) {
              uidSet.add(uid);
              if (store) store.write(uid, cacheKey(matchesUsername ? username : lookupUsername));
            }
            target.badge = "locket_gold";
            target.is_gold = true;
            target.gold_badge = true;
            if (Array.isArray(target.badges)) {
              if (target.badges.indexOf("locket_gold") === -1) target.badges.push("locket_gold");
            } else if (target.badges === undefined || target.badges === null) {
              target.badges = ["locket_gold"];
            }
            ++changes;
          });
          $done(changes ? { body: JSON.stringify(data) } : {});
        }
      }
    } catch (e) { $done({}); }
    return;
  }

  $done({});
})();