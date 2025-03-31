# GitHub Pages 部署指南

## 第一步：創建 GitHub 倉庫

1. 登入您的 GitHub 帳號
2. 點擊右上角的 "+" 圖標，選擇 "New repository"
3. 在 "Repository name" 欄位中輸入：`financial-lecture`（或您喜歡的任何名稱）
4. 保持倉庫為 "Public"（這樣 GitHub Pages 才能免費使用）
5. 不需要勾選 "Add a README file" 或其他選項
6. 點擊 "Create repository" 按鈕

## 第二步：上傳網站文件

### 方法一：使用 GitHub 網頁界面（適合初學者）

1. 在新創建的倉庫頁面，點擊 "uploading an existing file" 鏈接
2. 將您下載的網站文件壓縮包解壓縮到本地文件夾
3. 將所有文件拖拽到 GitHub 上傳區域
4. 在 "Commit changes" 區域輸入描述，如 "Initial website upload"
5. 點擊 "Commit changes" 按鈕

### 方法二：使用 Git 命令行（適合有經驗的用戶）

```bash
# 克隆倉庫到本地
git clone https://github.com/您的用戶名/financial-lecture.git

# 進入倉庫目錄
cd financial-lecture

# 解壓下載的網站文件到此目錄
# 然後執行以下命令

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial website upload"

# 推送到 GitHub
git push origin main
```

## 第三步：啟用 GitHub Pages

1. 在您的倉庫頁面，點擊 "Settings" 標籤
2. 在左側導航欄中，點擊 "Pages"
3. 在 "Source" 部分，選擇 "Deploy from a branch"
4. 在 "Branch" 下拉菜單中，選擇 "main"，然後選擇 "/ (root)"
5. 點擊 "Save" 按鈕
6. 等待幾分鐘，GitHub 會自動部署您的網站
7. 部署完成後，您會在頁面頂部看到一個綠色的成功消息，其中包含您的網站 URL，通常格式為：
   `https://您的用戶名.github.io/financial-lecture/`

## 第四步：訪問您的網站

1. 點擊 GitHub Pages 設置頁面提供的 URL 鏈接
2. 恭喜！您的財經演講網站現在已經永久部署在 GitHub Pages 上了

## 注意事項

- GitHub Pages 部署可能需要幾分鐘時間才能生效
- 如果您的網站沒有正確顯示，請檢查 URL 是否正確，以及是否所有文件都已上傳
- `.nojekyll` 文件已包含在上傳文件中，這確保了 GitHub 不會使用 Jekyll 處理您的網站
- 如果您想使用自定義域名，可以在 GitHub Pages 設置中的 "Custom domain" 部分進行配置

## 更新網站

當您想更新網站內容時，只需重複上傳步驟，將新文件上傳到同一倉庫即可。GitHub Pages 會自動更新您的網站。
