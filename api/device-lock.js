// Vercel Serverless Function: Quản lý và khóa thiết bị (Device Lock) chống chia sẻ Key
const fs = require('fs');
const path = require('path');

module.exports = async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const { key, deviceId, action } = req.body || {};

    if (!key) {
      return res.status(400).json({ success: false, message: 'Thiếu mã Key!' });
    }

    const cleanKey = key.trim().toUpperCase();
    const cleanDevId = (deviceId || '').trim();

    // 1. Đọc access-keys.json
    let keysFilePath = path.join(process.cwd(), 'access-keys.json');
    let keysData = null;

    if (fs.existsSync(keysFilePath)) {
      try {
        keysData = JSON.parse(fs.readFileSync(keysFilePath, 'utf8'));
      } catch (_) {}
    }

    // Nếu không đọc được file local, thử fetch từ GitHub raw
    if (!keysData) {
      const ghRepo = process.env.GITHUB_REPO || 'cmstdev08/locket';
      const ghBranch = process.env.GITHUB_BRANCH || 'master';
      const rawRes = await fetch(`https://raw.githubusercontent.com/${ghRepo}/${ghBranch}/access-keys.json?t=${Date.now()}`);
      if (rawRes.ok) {
        keysData = await rawRes.json();
      }
    }

    if (!keysData || !Array.isArray(keysData.keys)) {
      return res.status(500).json({ success: false, message: 'Không thể tải cơ sở dữ liệu Access Keys!' });
    }

    // Kiểm tra Master Key Admin
    if (cleanKey === (keysData.adminMasterKey || 'ANHTUAN_ADMIN_2026').toUpperCase()) {
      return res.status(200).json({
        success: true,
        isMaster: true,
        message: 'Master Key hợp lệ! Toàn quyền mọi thiết bị.'
      });
    }

    const targetKey = keysData.keys.find(k => (k.key || '').toUpperCase() === cleanKey);
    if (!targetKey) {
      return res.status(404).json({ success: false, message: 'Mã Key không tồn tại trên hệ thống!' });
    }

    // Master Key hoặc key miễn trừ
    if (targetKey.isMaster || cleanKey === 'LOCKET60S-0898376962' || cleanKey === 'LOCKET60S-0934956647') {
      return res.status(200).json({
        success: true,
        isMaster: true,
        message: 'Key Master / VIP đặc quyền!'
      });
    }

    const maxDev = targetKey.maxDevices !== undefined ? targetKey.maxDevices : 1;
    let usedDevs = Array.isArray(targetKey.usedDevices) ? targetKey.usedDevices : [];

    // Xử lý Action Reset từ Admin
    if (action === 'reset') {
      targetKey.usedDevices = [];
      try {
        fs.writeFileSync(keysFilePath, JSON.stringify(keysData, null, 2), 'utf8');
      } catch (_) {}
      return res.status(200).json({
        success: true,
        message: `Đã reset thiết bị cho Key ${cleanKey} về 0 máy thành công!`
      });
    }

    if (!cleanDevId) {
      return res.status(400).json({ success: false, message: 'Thiếu mã định danh thiết bị (Device ID)!' });
    }

    // Kiểm tra thiết bị đã kích hoạt
    const isAlreadyBound = usedDevs.includes(cleanDevId);

    if (isAlreadyBound) {
      return res.status(200).json({
        success: true,
        isBound: true,
        usedCount: usedDevs.length,
        maxDevices: maxDev,
        message: 'Thiết bị chính chủ hợp lệ!'
      });
    }

    // Thiết bị MỚI: Kiểm tra có vượt giới hạn không
    if (usedDevs.length >= maxDev) {
      return res.status(403).json({
        success: false,
        error: 'DEVICE_LIMIT_REACHED',
        usedCount: usedDevs.length,
        maxDevices: maxDev,
        message: `Key này đã kích hoạt trên ${usedDevs.length}/${maxDev} thiết bị khác! Vui lòng liên hệ Admin để đổi máy.`
      });
    }

    // Chưa vượt: Khóa cứng thiết bị này vào Key
    usedDevs.push(cleanDevId);
    targetKey.usedDevices = usedDevs;

    // Ghi vào file local
    try {
      fs.writeFileSync(keysFilePath, JSON.stringify(keysData, null, 2), 'utf8');
    } catch (_) {}

    // Đồng bộ lên GitHub nếu có token
    const ghToken = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
    const ghRepo = process.env.GITHUB_REPO || 'cmstdev08/locket';
    const ghBranch = process.env.GITHUB_BRANCH || 'master';

    if (ghToken) {
      try {
        const getUrl = `https://api.github.com/repos/${ghRepo}/contents/access-keys.json?ref=${ghBranch}`;
        const checkRes = await fetch(getUrl, {
          headers: {
            'Authorization': `Bearer ${ghToken}`,
            'Accept': 'application/vnd.github.v3+json'
          }
        });
        if (checkRes.ok) {
          const fileData = await checkRes.json();
          const sha = fileData.sha;
          const b64 = Buffer.from(JSON.stringify(keysData, null, 2)).toString('base64');

          await fetch(`https://api.github.com/repos/${ghRepo}/contents/access-keys.json`, {
            method: 'PUT',
            headers: {
              'Authorization': `Bearer ${ghToken}`,
              'Content-Type': 'application/json',
              'Accept': 'application/vnd.github.v3+json'
            },
            body: JSON.stringify({
              message: `🔒 Khóa thiết bị [${cleanDevId}] cho Key ${cleanKey} (${usedDevs.length}/${maxDev})`,
              content: b64,
              sha: sha,
              branch: ghBranch
            })
          });
        }
      } catch (eCommit) {
        console.warn('Lỗi push device lock lên GitHub:', eCommit);
      }
    }

    return res.status(200).json({
      success: true,
      isBound: true,
      isNewBind: true,
      usedCount: usedDevs.length,
      maxDevices: maxDev,
      message: `Khóa máy thành công (${usedDevs.length}/${maxDev})!`
    });
  } catch (err) {
    console.error('Lỗi API device-lock:', err);
    return res.status(500).json({ success: false, message: 'Lỗi máy chủ khi xử lý khóa thiết bị: ' + err.message });
  }
};
