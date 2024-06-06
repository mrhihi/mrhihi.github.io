# Office Viewer(Markdown Editor)

## Description

  好東西，所見即所得寫 Markdown 。

  保哥介紹：[連結](https://www.facebook.com/will.fans/posts/pfbid0PYkSaWMTXBiSwzXongcKkHkGhqNM1XNm8SU6BLuqB7DHCFUn44dLRzGpHVSQzeRul)

  Marketplace：[連結](https://marketplace.visualstudio.com/items?itemName=cweijan.vscode-office&fbclid=IwAR2ZfEhrPSTClQZjYFAn10BSNCS3FytSQqf-ZliaHwYXO0Yvd2ZbCYmag0w)

  Home Page： [連結](https://github.com/cweijan/vscode-office)

## 使用心得

* 預設會設定成 VS Code 預設 Markdown 編輯器
  * 想要改成原來 VS 編輯 Source 的樣子
    * Step1: [cmd ]+ [shift] + [P]
    * Step2: 輸入「open user settings」
      ![img](images/截圖%202024-02-06%20上午9.22.50.png)
    * Step3: 找到 "workbench.editorAssociations" 的位置
      ![img](images/截圖%202024-02-06%20上午9.23.46.png)
      加入
      ```json
      {
          "workbench.editorAssociations": {
              "*.md": "default"
          }
      }
      ```
* 想要用 Source 編輯的切換
  * 點編輯畫面最上方 Visual Code 的圖示
    ![img](截圖%202024-02-06%20上午9.32.16.png)
