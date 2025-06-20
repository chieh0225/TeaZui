# 🧋 茶醉 - 手搖飲電商網站

六角學院 2024 網頁切版專題

專題執行時間：2024 年 7 月 ~ 2024 年 10 月

<br />

## 網站介紹
<p align="center">
  <img src="https://firebasestorage.googleapis.com/v0/b/chieh-assets.firebasestorage.app/o/TeaZui-index-sent-screenshot%20(1).png?alt=media&token=be228582-9e8e-430c-90e8-006ae28b350c" alt="TeaZui reservation" />
</p>

提供一個線上購買、寄杯與兌換手搖飲的功能網站，讓幸福滋味隨時可得！

(此網站僅供學習使用，無任何商業用途、並非真實營運！)

👉 [展示頁面 Display Page](https://chieh0225.github.io/TeaZui/)

<br />

## 使用技術
- Vite 開發環境
- Bootstrap
- SCSS
- AOS 動畫
- RWD 響應式網頁設計
- Git 版本控制

<br />

## Node.js 版本
- 專案的 Node.js 版本需為 v16 以上
- 查看自己版本指令：`node -v`

<br />

## 指令列表
- `npm install` - 初次下載該範例專案後，需要使用 npm install 來安裝套件
- `npm run dev` - 執行開發模式
  - 若沒有自動開啟瀏覽器，可嘗試手動在瀏覽器上輸入
    `http://localhost:5173/<專案名稱>/pages/index.html`
- `npm run build` - 執行編譯模式（不會開啟瀏覽器）
- `npm ru deploy` - 自動化部署

### 注意事項
- 已將 pages 資料夾內的 index.html 預設為首頁，建議不要任意修改 index.html 的檔案名稱
- .gitignore 檔案是用來忽略掉不該上傳到 GitHub 的檔案（例如 node_modules），請不要移除 .gitignore

<br />


## 開發模式的監聽
vite 專案執行開發模式 `npm run dev` 後即會自動監聽，不需要使用 `Live Sass Compiler` 的 `Watch SCSS` 功能

<br />

## 部署 gh-pages 流程說明
### Windows 版本
1. 在 GitHub 建立一個新的 Repository
2. 部署前請務必先將原始碼上傳到 GitHub Repository 也就是初始化 GitHub，因此通常第一步驟會在專案終端機輸入以下指令
```cmd
git init # 若已經初始化過就可以不用輸入
git add .
git commit -m 'first commit'
git branch -M main
git remote add origin [GitHub Repositories Url]
git push -u origin main // 僅限第一次輸入，往後只需要輸入 git push
```
3. 修改 vite.config.js 第 28 行，將你的 Github Repo 的名字填入
4. 初始化完畢後，執行 `npm run deploy` 指令進行自動化部署

<br />

## 團隊成員  

- [Chieh](https://github.com/chieh0225) — 負責項目：環境建置、飲品菜單頁、門市據點頁、線上寄杯頁
- [Hedwig](https://github.com/Xuannn1120) — 負責項目：首頁、品牌介紹頁、最新消息頁、購物車流程
- 專題教練：圈圈
- 設計審核助教：Karas Chen
- UI / UX 設計師：Hanyin Chen

<br />
