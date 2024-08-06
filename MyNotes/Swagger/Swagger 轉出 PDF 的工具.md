- 工具們說明

  - swagger2markup-cli：把 swagger 的 json 轉成 asciidoc 格式的工具
    - 用 Homebrew 安裝 swagger2markup-cli
      - 參考： https://github.com/docs4dev/docs4dev/tree/master/spring-cloud
  - asciidoctor：把 asciidoc 格式轉成 PDF 的工具
    - 用 Homebrew 安裝 asciidoctor
      - 參考：
        - https://formulae.brew.sh/formula/asciidoctor#default
        - https://docs.asciidoctor.org/pdf-converter/latest/install/
    - 轉 PDF 中文問題解決方式： https://docs.asciidoctor.org/pdf-converter/latest/theme/cjk/
  - asciidocfx：有 UI 介面的轉換工具
    - 用 Homebrew 安裝 asciidocfx
      - 參考：
        - https://asciidocfx.com/#install-on-mac- 工具們的安裝
- swagger2markup 執行方式：

```bash
	# 把 swagger 的文件描述 JSON 轉成 asciidoc 格式
	swagger2markup convert -i PUBLIC.json -d ./outdir -c swagger2markup.properties
	# 參數說明：
	#    -i : 從 DataHub Swagger UI 下載的 json 檔
	#    -d : 欲輸出的目錄名子
	#    -c : swagger2markup 的參數設定
	#         DataHub API 文件建議輸出的設定
	#            swagger2markup.flatBodyEnabled=false
	#            swagger2markup.interDocumentCrossReferencesEnabled=false
	#            swagger2markup.generatedExamplesEnabled=true
	#            swagger2markup.lineSeparator=WINDOWS
	#            swagger2markup.outputLanguage=ZH
	#            swagger2markup.requestExamplesQueryArrayStyle=multiple[]
	#            swagger2markup.pathsDocument=1-paths
	#            swagger2markup.definitionsDocument =2-definitions
	#            swagger2markup.overviewDocument=9-overview
	#            swagger2markup.securityDocument=9-security
	#            swagger2markup.separatedOperationsEnabled=true
	#            swagger2markup.separatedDefinitionsEnabled=false
	#            swagger2markup.propertyOrderBy=AS_IS
```

- asciidoctor 執行方式：

```bash
	# 把 asciidoc 格式的文件轉成 html
	asciidoctor API.adoc
	# 把 asciidoc 格式的文件轉成 PDF
	asciidoctor-pdf -a scripts=cjk -a pdf-theme=./themes/pdf.yml -a pdf-fontsdir=./themes outdir/Step-2/API.adoc
    # 參數說明：
	#   -a scripts=cjk ： 處理亞洲語系(Chinese、Japanese、Korean)
	#   -a pdf-theme ： 指定使用 theme 設定檔位置
    #   -a pdf-fontsdir ： theme 設定檔中的使用的字型檔位置
	# theme 參關說明請參考上面中文字解決方式的連結
```

- 產生 API 文件的流程：

  1. 進入 DataHub Swagger UI ( http://mrhihivm-2019/DataHub/swagger/ui/index )
  2. 選擇 PUBLIC 版本
     ![img](images/截圖%202023-03-09%20下午3.40.50.png)
  3. 點 swagger/docs/PUBLIC 下載文件描述 json ，另存成檔案
  4. 執行 swagger2markup ，將 json 輸出成 asciidoc 格式
     - (搭配 ScriptCS 自動處理直接跳到下一節 )
  5. 處理 operations 中各 adoc 檔的 Response ，改寫成以下格式

  ```JSON
  {
    "HttpStatusCode": 200,
    "ErrorCode": "",
    "Result": [ ... ],
    "ExtraData": {}
  }
  ```
  6. 合併
     1.paths.adoc
     operations\*.adoc
     2-definitions.adoc
     === 各檔案開頭加入「 <<< 」換頁  ===
  7. 產生 PDF
     7-1. 用 asciidocfx
     7-1-1. 打開轉出的檔案
     7-1-2. 按 asciidocfx 右上角的 Browser 產生 html
     7-1-3. 用 Browser 列印成 pdf
     7-1. 用 asciidoctor
     7-2-1. 參考上面 asciidoctor 執行方式下指令即可。
- 搭配 ScriptCS 自動處理：

  - 腳本路徑： /Users/[User]/Library/CloudStorage/Dropbox/Code Snippet/HiScript/donteScript/GenRadarApiDoc
  - 將前項下載的 json 檔放在 GenRadarApiDoc 目錄裡，檔名預設為 PUBLIC.json
  - 執行： Run.sh
    *產生的檔案名稱寫死在 Run.sh 裡面，需先調整版本號*
  - 以上執行完畢後，結果就會產生在 outdir 目錄
- 其他說明：

  - 編碼轉換：  https://www.ifreesite.com/unicode-ascii-ansi.htm

    - 這個在改寫 swagger2markup-cli 語系的時候會用到
    - 改寫語系流程

    ```bash
    # 原始檔案： /opt/homebrew/Cellar/swagger2markup-cli/1.3.3_3/libexec/swagger2markup-cli-1.3.3-x.jar
    # 解壓縮:
    mkdir swagger2markup-cli-1.3.3
    cd swagger2markup-cli-1.3.3
    /opt/homebrew/opt/openjdk@11/libexec/openjdk.jdk/Contents/Home/bin/jar x ../swagger2markup-cli-1.3.3.x.jar

    # 利用線上轉碼工具 https://www.ifreesite.com/unicode-ascii-ansi.htm
    # 把 labels_zh.properties 改成繁體 /opt/homebrew/Cellar/swagger2markup-cli/1.3.3_3/libexec/swagger2markup-cli-1.3.3/io/github/swagger2markup/lang/labels_zh.properties

    # 壓縮 jar：
    # 這個步驟沒辦法直接用 jar cf 處理，因為壓縮出來的 jaz 檔裡面會多一層目錄出來，最後試出來的方式，是把目錄裡的檔案，拉到 Keka 裡壓縮成 封裝.zip 再搬出來改檔案名成 swagger2markup-cli-1.3.3.jar
    ```
  - 中國人寫的線上轉換成 PDF 的工具

    - https://github.com/docs4dev/docs4dev/tree/master/spring-cloud
