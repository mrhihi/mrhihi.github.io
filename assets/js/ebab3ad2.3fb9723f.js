"use strict";(self.webpackChunkmrhihi_blog=self.webpackChunkmrhihi_blog||[]).push([[317],{1279:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var l=s(4848),t=s(8453);const c={slug:"clipboard-on-concole",title:"macOS \u5982\u4f55\u5728 Console \u4e2d\u4f7f\u7528\u526a\u8cbc\u7c3f\u7684\u5167\u5bb9",authors:"mrhihi",tags:["macOS","nushell","clipboard"]},i="\u524d\u60c5\u63d0\u8981",o={permalink:"/blog/clipboard-on-concole",editUrl:"https://github.com/mrhihi/mrhihi.github.io/tree/source/blog/2024-08-07-[macos]-Clipboard on console/index.mdx",source:"@site/blog/2024-08-07-[macos]-Clipboard on console/index.mdx",title:"macOS \u5982\u4f55\u5728 Console \u4e2d\u4f7f\u7528\u526a\u8cbc\u7c3f\u7684\u5167\u5bb9",description:"\u5de5\u4f5c\u4e2d\uff0c\u6642\u5e38\u6703\u8907\u88fd\u4e00\u5806\u6587\u5b57\u8cc7\u6599\u5230\u526a\u8cbc\u7c3f\u4e2d\uff0c\u518d\u8cbc\u5230\u6587\u5b57\u7de8\u8f2f\u5668\u4e0a\u505a\u5f8c\u88fd\uff0c\u5982\u679c\u9019\u6cb1\u8cc7\u6599\u6709\u8868\u683c\u7d50\u69cb\u5230\u4e5f\u597d\u8655\u7406\uff0c\u504f\u504f\u6709\u6642\u5019\uff0c\u5b83\u5011\u5c31\u662f\u4e00\u6574\u6cb1\uff1a",date:"2024-08-07T00:00:00.000Z",tags:[{inline:!0,label:"macOS",permalink:"/blog/tags/mac-os"},{inline:!0,label:"nushell",permalink:"/blog/tags/nushell"},{inline:!0,label:"clipboard",permalink:"/blog/tags/clipboard"}],readingTime:2.18,hasTruncateMarker:!1,authors:[{name:"mrhihi.paul",title:"Owner of this blog",url:"https://github.com/mrhihi",imageURL:"/img/mrhihi.png",key:"mrhihi"}],frontMatter:{slug:"clipboard-on-concole",title:"macOS \u5982\u4f55\u5728 Console \u4e2d\u4f7f\u7528\u526a\u8cbc\u7c3f\u7684\u5167\u5bb9",authors:"mrhihi",tags:["macOS","nushell","clipboard"]},unlisted:!1},r={authorsImageUrls:[void 0]},h=[];function a(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"\u5de5\u4f5c\u4e2d\uff0c\u6642\u5e38\u6703\u8907\u88fd\u4e00\u5806\u6587\u5b57\u8cc7\u6599\u5230\u526a\u8cbc\u7c3f\u4e2d\uff0c\u518d\u8cbc\u5230\u6587\u5b57\u7de8\u8f2f\u5668\u4e0a\u505a\u5f8c\u88fd\uff0c\u5982\u679c\u9019\u6cb1\u8cc7\u6599\u6709\u8868\u683c\u7d50\u69cb\u5230\u4e5f\u597d\u8655\u7406\uff0c\u504f\u504f\u6709\u6642\u5019\uff0c\u5b83\u5011\u5c31\u662f\u4e00\u6574\u6cb1\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"\u5929\u7a7a:\u85cd\u8272,\u767d\u96f2:\u98c4\u52d5\r\n\u6d77\u6d6a:\u7ffb\u6efe,\u6c99\u7058:\u6eab\u6696\r\n\u661f\u661f:\u9583\u720d,\u591c\u7a7a:\u5be7\u975c\r\n\u98a8:\u8f15\u62c2,\u6a39\u8449:\u6416\u66f3\r\n\u82b1:\u76db\u958b,\u9999\u6c23:\u56db\u6ea2\r\n\u5c71:\u5dcd\u5ce8,\u96f2\u9727:\u7e5a\u7e5e\r\n\u6cb3\u6d41:\u5954\u9a30,\u6e05\u6f88:\u898b\u5e95\r\n\u96e8:\u6ef4\u843d,\u5098\u4e0b:\u7d30\u8a9e\r\n\u65e5\u51fa:\u66d9\u5149,\u6668\u66e6:\u521d\u73fe\r\n\u57ce\u5e02:\u7e41\u83ef,\u71c8\u706b:\u8f1d\u714c\n"})}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsx)(n.p,{children:"\u611f\u8b1d ChatGPT \u53cb\u60c5\u8d0a\u52a9"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u4e0a\u9017\u865f\u7684\u524d\u5f8c\u90fd\u6709\u4e00\u7d44 Key",":Value"," \u7684\u8cc7\u6599\uff0c",(0,l.jsx)(n.br,{}),"\n","\u60f3\u8981\u628a\u4ed6\u5011\u505a\u6210\u56db\u6b04\u8cc7\u6599\u653e\u5230 excel \u4e0a\u9762\u53bb\uff0c\u6709\u5f88\u591a\u65b9\u5f0f\u53ef\u4ee5\u8655\u7406\uff0c",(0,l.jsx)(n.br,{}),"\n","\u4f46\u6211\u5e38\u5e38\u5728\u60f3\uff0c\u5982\u679c\u53ef\u4ee5\u8907\u88fd\u9032\u526a\u8cbc\u7c3f\u5f8c\uff0c\u518d\u8cbc\u51fa\u4f86\uff0c\u5c31\u8b8a\u6210\u6211\u60f3\u8981\u7684\u6a23\u5b50\u8a72\u6709\u591a\u597d\u3002"]}),"\n",(0,l.jsx)(n.h1,{id:"\u642d\u914d-nushell-\u8a66\u8a66",children:"\u642d\u914d Nushell \u8a66\u8a66"}),"\n",(0,l.jsx)(n.p,{children:"Nushell \u53ef\u4ee5\u7528\u7c21\u55ae\u7684\u6307\u4ee4\u8655\u7406\u8868\u683c\u7684\u8cc7\u6599\uff0c\u5982\u679c\u53ef\u4ee5\u628a\u526a\u8cbc\u7c3f\u7684\u8cc7\u6599\u50b3\u9032 STDIO \u8b93 Nushell \u8655\u7406\uff0c\u8655\u7406\u5b8c\u5f8c\u518d\u8907\u88fd\u56de\u526a\u8cbc\u7c3f\uff0c\u611f\u89ba\u61c9\u8a72\u662f\u500b\u4e0d\u932f\u7684\u65b9\u5f0f\u3002\r\n\u7136\u5f8c\u6211\u627e\u5230\u4e86\uff0c\u5728 macOS \u4e0b pbpaste \u8ddf pbcopy \u5169\u500b\u597d\u7528\u7684\u6307\u4ee4\uff1a"}),"\n",(0,l.jsxs)(n.p,{children:["pbpaste: \u628a\u526a\u8cbc\u7c3f\u7684\u5167\u5bb9\u8cbc\u5230 STDIO",(0,l.jsx)(n.br,{}),"\n","pbcopy: \u628a STDIO \u8f38\u51fa\u8907\u88fd\u56de\u526a\u8cbc\u7c3f"]}),"\n",(0,l.jsx)(n.p,{children:"\u65bc\u662f\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'pbpaste | lines | split column --regex "[:,]"\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"split-column",src:s(3737).A+"",width:"428",height:"269"})}),"\n",(0,l.jsx)(n.p,{children:"\u63a5\u8457\u53ea\u8981\u628a table \u8f49\u6210 Tab \u5206\u9694\uff0c\u7136\u5f8c\u518d\u8907\u88fd\u56de\u526a\u8cbc\u7c3f\u5c31\u5927\u5de5\u544a\u6210"}),"\n",(0,l.jsx)(n.p,{children:"\u6240\u4ee5\u6539\u4e00\u4e0b\u8a9e\u6cd5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'pbpaste | lines | split column --regex "[:,]" | to csv -s "\\t" | pbcopy\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u9019\u500b\u6b65\u9a5f\u56e0\u70ba\u662f\u8f38\u51fa\u5230\u526a\u8cbc\u7c3f\u4e0a\uff0c\u6240\u4ee5 Console \u4e0a\u4e0d\u6703\u6709\u8f38\u51fa",(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.img,{alt:"data to excel",src:s(3026).A+"",width:"673",height:"33"})]}),"\n",(0,l.jsxs)(n.p,{children:["\u7136\u5f8c\u6211\u5011\u5c31\u53ef\u4ee5\u5feb\u6a02\u7684\u8cbc\u5230 Excel \u4e0a\u4e86\uff1a",(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.img,{alt:"data to excel",src:s(7243).A+"",width:"446",height:"262"})]}),"\n",(0,l.jsx)(n.h1,{id:"\u53c3\u8003\u8cc7\u6599",children:"\u53c3\u8003\u8cc7\u6599"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://ss64.com/mac/pbpaste.html",children:"https://ss64.com/mac/pbpaste.html"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://ss64.com/mac/pbcopy.html",children:"https://ss64.com/mac/pbcopy.html"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://www.nushell.sh/commands/docs/to_csv.html",children:"https://www.nushell.sh/commands/docs/to_csv.html"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://www.nushell.sh/commands/docs/split_column.html",children:"https://www.nushell.sh/commands/docs/split_column.html"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},3737:(e,n,s)=>{s.d(n,{A:()=>l});const l=s.p+"assets/images/pic1-4a42c933a5ca156f3747d3ae81c5fec2.png"},3026:(e,n,s)=>{s.d(n,{A:()=>l});const l=s.p+"assets/images/pic2-1db1ddfc1da5a94edf29bd0745ef01b4.png"},7243:(e,n,s)=>{s.d(n,{A:()=>l});const l=s.p+"assets/images/pic3-14d07d4eee28e94c39e40932f1dd0e47.png"},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var l=s(6540);const t={},c=l.createContext(t);function i(e){const n=l.useContext(c);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),l.createElement(c.Provider,{value:n},e.children)}}}]);