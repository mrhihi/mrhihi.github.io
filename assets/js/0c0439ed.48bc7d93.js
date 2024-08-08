"use strict";(self.webpackChunkmrhihi_blog=self.webpackChunkmrhihi_blog||[]).push([[723],{506:(e,l,s)=>{s.r(l),s.d(l,{assets:()=>r,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=s(4848),o=s(8453);const i={slug:"win-clipboard-on-concole",title:"Windows \u5982\u4f55\u5728 Console \u4e2d\u4f7f\u7528\u526a\u8cbc\u7c3f\u7684\u5167\u5bb9",authors:"mrhihi",tags:["windows","nushell","clipboard"]},t=void 0,c={permalink:"/blog/win-clipboard-on-concole",editUrl:"https://github.com/mrhihi/mrhihi.github.io/tree/source/blog/2024-08-08-[windows]-Clipboard on console/index.md",source:"@site/blog/2024-08-08-[windows]-Clipboard on console/index.md",title:"Windows \u5982\u4f55\u5728 Console \u4e2d\u4f7f\u7528\u526a\u8cbc\u7c3f\u7684\u5167\u5bb9",description:"\u524d\u60c5\u63d0\u8981",date:"2024-08-08T00:00:00.000Z",tags:[{inline:!0,label:"windows",permalink:"/blog/tags/windows"},{inline:!0,label:"nushell",permalink:"/blog/tags/nushell"},{inline:!0,label:"clipboard",permalink:"/blog/tags/clipboard"}],readingTime:2.99,hasTruncateMarker:!1,authors:[{name:"mrhihi.paul",title:"Owner of this blog",url:"https://github.com/mrhihi",imageURL:"/img/mrhihi.png",key:"mrhihi"}],frontMatter:{slug:"win-clipboard-on-concole",title:"Windows \u5982\u4f55\u5728 Console \u4e2d\u4f7f\u7528\u526a\u8cbc\u7c3f\u7684\u5167\u5bb9",authors:"mrhihi",tags:["windows","nushell","clipboard"]},unlisted:!1,nextItem:{title:"macOS \u5982\u4f55\u5728 Console \u4e2d\u4f7f\u7528\u526a\u8cbc\u7c3f\u7684\u5167\u5bb9",permalink:"/blog/clipboard-on-concole"}},r={authorsImageUrls:[void 0]},d=[{value:"\u524d\u60c5\u63d0\u8981",id:"\u524d\u60c5\u63d0\u8981",level:2},{value:"Nushell \u4e0a\u5834",id:"nushell-\u4e0a\u5834",level:2},{value:"PowerShell Get-Clipboard",id:"powershell-get-clipboard",level:3},{value:"\u5b89\u88dd pasteboard \u4f7f\u7528 pbpaste &amp; pbcopy",id:"\u5b89\u88dd-pasteboard-\u4f7f\u7528-pbpaste--pbcopy",level:3},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:2}];function a(e){const l={a:"a",admonition:"admonition",br:"br",code:"code",del:"del",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.h2,{id:"\u524d\u60c5\u63d0\u8981",children:"\u524d\u60c5\u63d0\u8981"}),"\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.a,{href:"/blog/clipboard-on-concole",children:"\u6628\u5929\u63d0\u5230"})," macOS \u600e\u9ebc\u5728 Console \u4e2d\u7528\u6307\u4ee4\u4f7f\u7528\u526a\u8cbc\u7c3f\u7684\u5167\u5bb9\uff0c\u56e0\u70ba\u5e73\u6642\u5de5\u4f5c\u662f\u96d9\u5e73\u53f0\u6df7\u5408\u4f7f\u7528\uff0c\u6240\u4ee5\u597d\u5947\uff0c\u5728 Windows \u4e0b\u662f\u4e0d\u662f\u6709\u76f8\u61c9\u7684\u5be6\u4f5c\uff0c\u7c21\u55ae\u7684 ",(0,n.jsx)(l.del,{children:"\u641c\u5c0b"})," \u7814\u7a76\u4e00\u4e0b\u3002"]}),"\n",(0,n.jsx)(l.h2,{id:"nushell-\u4e0a\u5834",children:"Nushell \u4e0a\u5834"}),"\n",(0,n.jsx)(l.p,{children:"\u9996\u5148\uff0c\u5982\u4f55\u900f\u904e Console \u7684\u547d\u4ee4\u53d6\u5f97\u526a\u8cbc\u7c3f\u7684\u5167\u5bb9\u5462\uff1f\r\n\u6211 google \u4e86\u4e00\u4e0b\uff0c\u6709\u627e\u5230\u5e7e\u7a2e\u65b9\u5f0f\uff0c\u4e00\u7a2e\u662f\u900f\u904e PowerShell \u7684 Get-Clipboard \uff0c\u4e00\u7a2e\u662f\u900f\u904e\u5b89\u88dd pasteboard \uff0c\u9084\u6709\u5176\u4ed6\u7684\uff0c\u4f46\u6c92\u5565\u6642\u9593\u7814\u7a76\uff0c\u5148\u5c31\u9019\u5169\u7a2e\u5206\u5225\u8aaa\u660e\u3002"}),"\n",(0,n.jsx)(l.h3,{id:"powershell-get-clipboard",children:"PowerShell Get-Clipboard"}),"\n",(0,n.jsxs)(l.p,{children:["\u9019\u500b\u65b9\u6cd5\u6bd4\u8f03\u55ae\u7d14\uff0c\u4e0d\u9700\u8981\u984d\u5916\u5b89\u88dd\u5176\u4ed6\u5de5\u5177\u3002",(0,n.jsx)(l.br,{}),"\n","\u5148\u628a\u8981\u8655\u7406\u7684\u5167\u5bb9\u8907\u88fd\u5230\u526a\u8cbc\u7c3f\u4e2d\uff0c\u63a5\u8457\u6253\u958b Nushell \u4e26\u8f38\u5165\u9019\u6a23\u7684\u6307\u4ee4"]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-shell",children:"powershell get-clipboard | lines\n"})}),"\n",(0,n.jsxs)(l.p,{children:["\u7136\u5f8c\u6211\u5011\u5c31\u6703\u5f97\u5230\u9019\u6a23\u7684\u932f\u8aa4\u8a0a\u606f\r\n",(0,n.jsx)(l.img,{alt:"\u53d6\u51fa\u526a\u8cbc\u7c3f\u7de8\u78bc\u932f\u8aa4",src:s(2419).A+"",width:"525",height:"162"})]}),"\n",(0,n.jsx)(l.p,{children:"\u7de8\u78bc\u932f\u8aa4\uff0c Nushell \u5efa\u8b70\u6211\u5011\u7528 decode \u53bb\u8655\u7406\u975e UTF-8 \u7684\u5b57\u5143"}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-shell",children:'powershell get-clipboard | decode | lines | split column --regex "[:,]"\n'})}),"\n",(0,n.jsxs)(l.p,{children:["\u5b8c\u7f8e\r\n",(0,n.jsx)(l.img,{alt:"\u7de8\u78bc\u8655\u7406\u5f8c\u53d6\u51fa\u526a\u8cbc\u7c3f",src:s(3241).A+"",width:"817",height:"235"})]}),"\n",(0,n.jsx)(l.p,{children:"\u63a5\u8457\u518d\u628a\u7d50\u679c\u8f38\u5165\u5230\u526a\u8cbc\u7c3f\u4e2d\u5c31\u53ef\u4ee5\u6253\u5b8c\u6536\u5de5\u4e86\uff0c\u8f38\u5165\u5230\u526a\u8cbc\u7c3f\u9019\u500b\u52d5\u4f5c\uff0c\u53ef\u4ee5\u900f\u904e Windows \u5167\u5efa\u7684 Clip \u6307\u4ee4\u5b8c\u6210"}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-shell",children:'powershell get-clipboard | decode | lines | split column --regex "[:,]" | to csv -s "\\t" | clip\n'})}),"\n",(0,n.jsxs)(l.p,{children:["\u57f7\u884c\u5b8c\u9019\u884c\u6307\u4ee4\u5f8c\uff0c\u4e00\u6a23\u6c92\u6709\u8f38\u51fa\uff0c\u56e0\u70ba\u88ab\u5c0e\u5411\u526a\u8cbc\u7c3f\u88e1\u9762\uff0c\u7acb\u99ac\u8cbc\u51fa\u4f86\u770b\u770b\u7d50\u679c\uff0c\u65bc\u662f\u6211\u5011\u5c31\u6703\u5f97\u5230 ",(0,n.jsx)(l.strong,{children:"\u4e00\u5806\u4e82\u78bc"})," \u3002",(0,n.jsx)(l.br,{}),"\n",(0,n.jsx)(l.img,{alt:"\u8907\u88fd\u56de\u526a\u8cbc\u7c3f\u7de8\u78bc\u932f\u8aa4",src:s(8416).A+"",width:"441",height:"254"})]}),"\n",(0,n.jsx)(l.p,{children:"\u679c\u7136\uff0c\u600e\u9ebc\u4f86\u5c31\u8981\u600e\u9ebc\u56de\u53bb\uff0c\u52a0\u4e0a\u7de8\u78bc\u8b93\u4ed6\u8f49\u56de\u53bb Big5 \uff0c\u8abf\u6574\u4e00\u4e0b\u6307\u4ee4"}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-shell",children:'powershell get-clipboard | decode | lines | split column --regex "[:,]" | to csv -s "\\t" | encode big5 | clip\n'})}),"\n",(0,n.jsxs)(l.p,{children:["\u8cbc\u4e0a Excel \uff0c\u6253\u5b8c\u6536\u5de5",(0,n.jsx)(l.br,{}),"\n",(0,n.jsx)(l.img,{alt:"\u5b8c\u6210\u8655\u7406\u7684\u7d50\u679c",src:s(7243).A+"",width:"446",height:"262"})]}),"\n",(0,n.jsx)(l.admonition,{type:"tip",children:(0,n.jsxs)(l.p,{children:["\u53ef\u4ee5\u900f\u904e chcp 65001 \uff0c\u8b93 Console \u7de8\u78bc\u7528 Big5 \uff0c\u5c31\u53ef\u4ee5\u4e0d\u9700\u8981\u900f\u904e decode \u3001 encode \u505a\u7de8\u78bc\u8f49\u63db\u3002",(0,n.jsx)(l.br,{}),"\n","\u8981\u4fee\u6539 Console \u7684\u9810\u8a2d\u7de8\u78bc\uff0c\u53ef\u4ee5\u53c3\u8003 ",(0,n.jsx)(l.a,{href:"https://www.thinkinmd.com/post/2020/02/21/command-prompt-and-windows-powershell-default-use-utf-8/",children:"\u9019\u88e1"})," \u3002"]})}),"\n",(0,n.jsx)(l.h3,{id:"\u5b89\u88dd-pasteboard-\u4f7f\u7528-pbpaste--pbcopy",children:"\u5b89\u88dd pasteboard \u4f7f\u7528 pbpaste & pbcopy"}),"\n",(0,n.jsxs)(l.p,{children:["\u9019\u500b\u65b9\u6cd5\u53ea\u5dee\u9700\u8981\u5b89\u88dd\u7a0b\u5f0f\uff0c\u5176\u4ed6\u5c31\u8ddf macOS \u6c92\u5565\u592a\u5927\u7684\u5dee\u5225(\u7576\u7136\u9084\u662f\u8981\u8655\u7406\u7de8\u78bc)\u3002",(0,n.jsx)(l.br,{}),"\n","\u5b89\u88dd\u7684\u90e8\u4efd\u6211\u9078\u64c7\u7528 Chocolatey \uff0c\u7d30\u7c21\u8acb\u770b ",(0,n.jsx)(l.a,{href:"https://community.chocolatey.org/packages/pasteboard#testingResults",children:"\u9019\u88e1"})," \u3002"]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-shell",children:"choco install pasteboard\n"})}),"\n",(0,n.jsxs)(l.p,{children:["\u5269\u4e0b\u7684\u5c31\u53c3\u8003 ",(0,n.jsx)(l.a,{href:"/blog/clipboard-on-concole",children:"\u6628\u5929\u7684\u6307\u4ee4"})," \uff0c\u9019\u88e1\u5c31\u4e0d\u591a\u8d05\u8ff0\u4e86\u3002"]}),"\n",(0,n.jsx)(l.h2,{id:"\u53c3\u8003\u8cc7\u6599",children:"\u53c3\u8003\u8cc7\u6599"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsx)(l.li,{children:(0,n.jsx)(l.a,{href:"https://ss64.com/ps/get-clipboard.html",children:"https://ss64.com/ps/get-clipboard.html"})}),"\n",(0,n.jsx)(l.li,{children:(0,n.jsx)(l.a,{href:"https://ss64.com/nt/clip.html",children:"https://ss64.com/nt/clip.html"})}),"\n",(0,n.jsx)(l.li,{children:(0,n.jsx)(l.a,{href:"https://community.chocolatey.org/packages/pasteboard#testingResults",children:"https://community.chocolatey.org/packages/pasteboard#testingResults"})}),"\n",(0,n.jsx)(l.li,{children:(0,n.jsx)(l.a,{href:"https://www.thinkinmd.com/post/2020/02/21/command-prompt-and-windows-powershell-default-use-utf-8/",children:"https://www.thinkinmd.com/post/2020/02/21/command-prompt-and-windows-powershell-default-use-utf-8/"})}),"\n"]})]})}function h(e={}){const{wrapper:l}={...(0,o.R)(),...e.components};return l?(0,n.jsx)(l,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},7243:(e,l,s)=>{s.d(l,{A:()=>n});const n=s.p+"assets/images/pic3-14d07d4eee28e94c39e40932f1dd0e47.png"},2419:(e,l,s)=>{s.d(l,{A:()=>n});const n=s.p+"assets/images/pcic1-f08adf902600dcc2e1d5a1128be726ae.png"},3241:(e,l,s)=>{s.d(l,{A:()=>n});const n=s.p+"assets/images/pic2-5b18711f5497c58bce494e11e5d68fe3.png"},8416:(e,l,s)=>{s.d(l,{A:()=>n});const n=s.p+"assets/images/pic3-5b21dc1cc973fa6855b0ae5f1f0102e0.png"},8453:(e,l,s)=>{s.d(l,{R:()=>t,x:()=>c});var n=s(6540);const o={},i=n.createContext(o);function t(e){const l=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function c(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),n.createElement(i.Provider,{value:l},e.children)}}}]);