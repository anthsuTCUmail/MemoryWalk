# 校史時光導覽

手機版自主導覽試用專案。純 HTML、CSS 與 JavaScript，無需建置或伺服器，支援 GitHub Pages 專案子目錄。

## 本機預覽

在此資料夾執行 `npm start`，開啟 http://localhost:4173 。請勿直接雙擊 HTML（模組載入需要 HTTP）。手機相機請於部署後的 HTTPS 網址測試。

## 部署到 GitHub Pages

1. 在 GitHub 建立儲存庫，上傳本資料夾全部網站檔案，包含 `assets/` 和 `vendor/`。
2. 前往儲存庫 Settings → Pages。
3. Build and deployment 選 Deploy from a branch，選擇 main 與 / (root)，按 Save。
4. 等待 GitHub 顯示實際網址，例如 `https://你的帳號.github.io/儲存庫名稱/`。
5. 開啟該網站，點頁尾「展區 QR code」，核對網址後產生四張 QR code，可列印或另存 PDF。
6. 用 iPhone Safari 與 Android Chrome 實際測試後再張貼。QR code 一旦列印，請保持網址與展區編號不變。

官方設定說明：https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 展區內容與聲音

- 修改 `data.js` 的 stations：展區標題、副標與文字。既有 id 請保留。
- `roles`：四位角色的名稱、說明與色彩。
- `assets/audio/01-young-man.mp3` 等共 12 份為實際 MP3 示範檔。以同檔名替換即可更新錄音。
- 示範音檔由 macOS 的 Eddy、Flo、Grandpa、Grandma 台灣中文合成聲音產生，不代表真人配音品質；年齡／性別風格需正式錄音驗收。
- macOS 已安裝相關聲音與 ffmpeg 時，可執行 `node scripts/generate-audio.mjs` 重新產生。
- 角色插畫為專案內的 SVG，不依賴外部圖片與字型。

## 操作行為

入口選角 → 掃描或手動選站 → 播放。直接開啟 `#station=01` 等展區網址時，首次先選角，有記錄則直接進入該站。暫停保留進度、停止回到開頭；離開播放頁停止聲音，離開掃描頁關閉相機。更換角色後從該站開頭播放。

波形讀取實際音訊分析資料，暫停時靜止；開啟減少動態效果時採靜態波形。瀏覽器阻擋自動播放時，訪客可按播放開始。網路與音檔錯誤、相機權限拒絕均提供提示。

僅以 localStorage 保存角色 ID，不記錄訪客資料。相機畫面只在手機本機解碼，不儲存或上傳。沒有分析追蹤、帳號或後台。

## 驗證

執行 `npm test`：驗證展區網址解析、12 份音檔存在，以及 QR code 產生後能被掃描器還原。

需現場補驗：iPhone／Android 的相機授權、牆面 QR code 距離與反光、耳機輸出、自動播放限制、現場網路。

## 第三方元件

- jsQR 1.4.0（Apache-2.0）：https://github.com/cozmo/jsQR
- qrcode-generator 1.4.4（MIT）：https://github.com/kazuhikoarase/qrcode-generator

元件保存在 vendor 內，訪客無需連線至 CDN。
