"use strict";(self.webpackChunkbrave_wallet_docs=self.webpackChunkbrave_wallet_docs||[]).push([[265],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,h=m["".concat(d,".").concat(u)]||m[u]||c[u]||i;return n?r.createElement(h,o(o({ref:t},l),{},{components:n})):r.createElement(h,o({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6705:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>o,metadata:()=>s,assets:()=>d,toc:()=>p,default:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2},o="Methods",s={unversionedId:"ethereum/provider-api/methods",id:"ethereum/provider-api/methods",title:"Methods",description:"ethereum.request",source:"@site/docs/ethereum/provider-api/methods.md",sourceDirName:"ethereum/provider-api",slug:"/ethereum/provider-api/methods",permalink:"/ethereum/provider-api/methods",editUrl:"https://github.com/brave/brave-wallet-docs/edit/main/docs/ethereum/provider-api/methods.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Adding custom tokens",permalink:"/ethereum/use-cases/adding-custom-tokens"},next:{title:"Events",permalink:"/ethereum/provider-api/events"}},d={},p=[{value:"<code>ethereum.request</code>",id:"ethereumrequest",level:2},{value:"<code>ethereum.isConnected</code>",id:"ethereumisconnected",level:2},{value:"<code>ethereum.enable</code> (deprecated)",id:"ethereumenable-deprecated",level:2},{value:"<code>ethereum.sendAsync</code> (deprecated)",id:"ethereumsendasync-deprecated",level:2},{value:"<code>ethereum.send</code> (deprecated)",id:"ethereumsend-deprecated",level:2}],l={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"methods"},"Methods"),(0,a.kt)("h2",{id:"ethereumrequest"},(0,a.kt)("inlineCode",{parentName:"h2"},"ethereum.request")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ethereum.request")," is used to submit an RPC request to the remote EVM node.  For some methods, the provider itself handles the response."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface RequestArguments {\n  readonly method: string;\n  readonly params?: readonly unknown[] | object;\n}\n\nProvider.request(args: RequestArguments): Promise<unknown>;\n")),(0,a.kt)("p",null,"The promise either resolves with a response object, or rejects with an ",(0,a.kt)("a",{parentName:"p",href:"errors"},"error"),"."),(0,a.kt)("h2",{id:"ethereumisconnected"},(0,a.kt)("inlineCode",{parentName:"h2"},"ethereum.isConnected")),(0,a.kt)("p",null,"Returns true if the page is connected to the RPC networks and is able to make RPC requests."),(0,a.kt)("p",null,"This method is not related to accounts and if an account has permission for the current page. For that you'd want to use ",(0,a.kt)("inlineCode",{parentName:"p"},"eth_accounts")," to see if an account has permission or ",(0,a.kt)("inlineCode",{parentName:"p"},"eth_requestAccounts")," to ask for permission if permission aren't currently granted."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"Provider.isConnected(): boolean;\n")),(0,a.kt)("h2",{id:"ethereumenable-deprecated"},(0,a.kt)("inlineCode",{parentName:"h2"},"ethereum.enable")," (deprecated)"),(0,a.kt)("p",null,"Allows a website to request permissions."),(0,a.kt)("p",null,"This method is superseded by a ",(0,a.kt)("inlineCode",{parentName:"p"},"ethereum.request")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"eth_requestAccounts"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"Provider.request({ method: 'eth_requestAccounts' })\n")),(0,a.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Deprecated API")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This API is deprecated but is available in Brave Wallet."))),(0,a.kt)("h2",{id:"ethereumsendasync-deprecated"},(0,a.kt)("inlineCode",{parentName:"h2"},"ethereum.sendAsync")," (deprecated)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"Provider.sendAsync(request: Object, callback: Function): void;\n")),(0,a.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Deprecated API")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This API is deprecated but is available in Brave Wallet.\nThis method is superseded by ",(0,a.kt)("inlineCode",{parentName:"p"},"ethereum.request"),"."))),(0,a.kt)("h2",{id:"ethereumsend-deprecated"},(0,a.kt)("inlineCode",{parentName:"h2"},"ethereum.send")," (deprecated)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"Provider.send(...args: unknown[]): unknown;\n")),(0,a.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Deprecated API")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This API is deprecated but is available in Brave Wallet.\nThis method is superseded by ",(0,a.kt)("inlineCode",{parentName:"p"},"ethereum.request"),"."))))}c.isMDXComponent=!0}}]);