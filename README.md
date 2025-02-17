# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## 撰寫說明

Docusaurus 有分 blog 跟 docs 兩種撰寫方式。  
blog 是單篇的文章， docs 可以做分類，因此這邊以後大部份會以 docs 的方式為主。  
開始撰寫的時候，在本機可以透過 `npm run start` 來啟動本地伺服器，即時觀看修改的結果。

```shell
  npm run start
```

最新文章的頁面，需要執行 `npm run new` 來更新 Src/LatestPosts/*.json 的資料。細節可以參考 [在首頁加上最新文章列表](https://ouch1978.github.io/docs/docusaurus/customization/add-new-post-list-into-home-page#%E6%88%91%E4%BD%BF%E7%94%A8%E7%9A%84%E8%A7%A3%E6%B1%BA%E6%96%B9%E6%A1%88)。

```shell
  npm run new
```

如果有執行 `npm run clear` 後在 build 的時候遇到問題，可以先執行 `npm run new` 再 `npm run build` 來解決。

```shell
  npm run clear
  npm run new
  npm run build
```

## 部署

寫完之後，檢示沒有問題，直接把檔案推到 master branch，Github 就會自動部署。  
[部署](https://github.com/mrhihi/mrhihi.github.io/actions)的歷程可以到 `https://github.com/mrhihi/mrhihi.github.io/actions` 這邊查看。  
