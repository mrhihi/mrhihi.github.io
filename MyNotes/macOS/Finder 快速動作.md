# 如何自訂 Finder 選取項目上按右鍵的快速動作

- 參考： https://medium.com/@javaok1987/open-with-vscode-5be5e3ab4ac2
- 建立快速動作
  1. 在 Automator 中，新增一個快速動作
  2. 選擇「打開 Finder 項目」，拖曳到中間以建立工作流程
  3. 在打開檔案的應用程式中，選取想要開啟的 App
  4. 儲存工作流程(Command + S)
- 使用快速動作
  - 在 Finder 中，先點欲開啟的項目，按右鍵
  - 在右鍵選單中，選擇「快速動作」，先前設定的開啟程式就會在選單中
- 其他
  - 新增出來的工作流程會存在 ~/Library/Services 裡
  - 2022-04-20
    - 用 ln 的方式，原始的工作流程檔案都放在 Dropbox/Code Snippet/AppleScript-Services

