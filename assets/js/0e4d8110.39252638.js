"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["6940"],{42265:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>u,default:()=>x,assets:()=>h,toc:()=>p,frontMatter:()=>d});var r=JSON.parse('{"id":"api/plugins/plugin-sitemap","title":"\uD83D\uDCE6 plugin-sitemap","description":"This plugin creates sitemaps for your site so that search engine crawlers can crawl your site more accurately.","source":"@site/docs/api/plugins/plugin-sitemap.mdx","sourceDirName":"api/plugins","slug":"/api/plugins/@docusaurus/plugin-sitemap","permalink":"/docs/api/plugins/@docusaurus/plugin-sitemap","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugins/plugin-sitemap.mdx","tags":[],"version":"current","lastUpdatedBy":"William Black","lastUpdatedAt":1734711419000,"sidebarPosition":10,"frontMatter":{"sidebar_position":10,"slug":"/api/plugins/@docusaurus/plugin-sitemap"},"sidebar":"api","previous":{"title":"\uD83D\uDCE6 plugin-pwa","permalink":"/docs/api/plugins/@docusaurus/plugin-pwa"},"next":{"title":"\uD83D\uDCE6 plugin-vercel-analytics","permalink":"/docs/api/plugins/@docusaurus/plugin-vercel-analytics"}}'),s=n("24246"),i=n("80980"),l=n("46291"),a=n("67860"),o=n("29974"),c=n("14920");let d={sidebar_position:10,slug:"/api/plugins/@docusaurus/plugin-sitemap"},u="\uD83D\uDCE6 plugin-sitemap",h={},p=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Types",id:"types",level:3},{value:"<code>CreateSitemapItemsFn</code>",id:"CreateSitemapItemsFn",level:4},{value:"Example configuration",id:"ex-config",level:3}];function m(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"-plugin-sitemap",children:"\uD83D\uDCE6 plugin-sitemap"})}),"\n","\n",(0,s.jsx)(t.p,{children:"This plugin creates sitemaps for your site so that search engine crawlers can crawl your site more accurately."}),"\n",(0,s.jsx)(t.admonition,{title:"production only",type:"warning",children:(0,s.jsxs)(t.p,{children:["This plugin is always inactive in development and ",(0,s.jsx)(t.strong,{children:"only active in production"})," because it works on the build output."]})}),"\n",(0,s.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(l.Z,{groupId:"npm2yarn",children:[(0,s.jsx)(a.Z,{value:"npm",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm install --save @docusaurus/plugin-sitemap\n"})})}),(0,s.jsx)(a.Z,{value:"yarn",label:"Yarn",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"yarn add @docusaurus/plugin-sitemap\n"})})}),(0,s.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"pnpm add @docusaurus/plugin-sitemap\n"})})})]}),"\n",(0,s.jsxs)(t.admonition,{type:"tip",children:[(0,s.jsxs)(t.p,{children:["If you use the preset ",(0,s.jsx)(t.code,{children:"@docusaurus/preset-classic"}),", you don't need to install this plugin as a dependency."]}),(0,s.jsxs)(t.p,{children:["You can configure this plugin through the ",(0,s.jsx)(t.a,{href:"/docs/using-plugins#docusauruspreset-classic",children:"preset options"}),"."]})]}),"\n",(0,s.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(t.p,{children:"Accepted fields:"}),"\n",(0,s.jsx)(o.Z,{children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"lastmod"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"'date' | 'datetime' | null"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"null"})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"date"})," is YYYY-MM-DD. ",(0,s.jsx)(t.code,{children:"datetime"})," is a ISO 8601 datetime. ",(0,s.jsx)(t.code,{children:"null"})," is disabled. See ",(0,s.jsx)(t.a,{href:"https://www.sitemaps.org/protocol.html#xmlTagDefinitions",children:"sitemap docs"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"changefreq"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string | null"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"'weekly'"})}),(0,s.jsxs)(t.td,{children:["See ",(0,s.jsx)(t.a,{href:"https://www.sitemaps.org/protocol.html#xmlTagDefinitions",children:"sitemap docs"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"priority"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"number | null"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"0.5"})}),(0,s.jsxs)(t.td,{children:["See ",(0,s.jsx)(t.a,{href:"https://www.sitemaps.org/protocol.html#xmlTagDefinitions",children:"sitemap docs"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ignorePatterns"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string[]"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"[]"})}),(0,s.jsx)(t.td,{children:"A list of glob patterns; matching route paths will be filtered from the sitemap. Note that you may need to include the base URL in here."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"filename"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"sitemap.xml"})}),(0,s.jsx)(t.td,{children:"The path to the created sitemap file, relative to the output directory. Useful if you have two plugin instances outputting two files."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"createSitemapItems"})}),(0,s.jsx)(t.td,{children:(0,s.jsxs)("code",{children:[(0,s.jsx)(t.a,{href:"#CreateSitemapItemsFn",children:"CreateSitemapItemsFn"})," | undefined"]})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"undefined"})}),(0,s.jsx)(t.td,{children:"An optional function which can be used to transform and / or filter the items in the sitemap."})]})]})]})}),"\n",(0,s.jsx)(t.h3,{id:"types",children:"Types"}),"\n",(0,s.jsx)(t.h4,{id:"CreateSitemapItemsFn",children:(0,s.jsx)(t.code,{children:"CreateSitemapItemsFn"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"type CreateSitemapItemsFn = (params: {\n  siteConfig: DocusaurusConfig;\n  routes: RouteConfig[];\n  defaultCreateSitemapItems: CreateSitemapItemsFn;\n}) => Promise<SitemapItem[]>;\n"})}),"\n",(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsx)(t.p,{children:"This plugin also respects some site config:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/docs/api/docusaurus-config#noIndex",children:(0,s.jsx)(t.code,{children:"noIndex"})}),": results in no sitemap generated"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/docs/api/docusaurus-config#trailingSlash",children:(0,s.jsx)(t.code,{children:"trailingSlash"})}),": determines if the URLs in the sitemap have trailing slashes"]}),"\n"]})]}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsxs)(t.mdxAdmonitionTitle,{children:["About ",(0,s.jsx)(t.code,{children:"lastmod"})]}),(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"lastmod"})," option will only output a sitemap ",(0,s.jsx)(t.code,{children:"<lastmod>"})," tag if plugins provide ",(0,s.jsx)(t.a,{href:"/docs/api/plugin-methods/lifecycle-apis#addRoute",children:"route metadata"})," attributes ",(0,s.jsx)(t.code,{children:"sourceFilePath"})," and/or ",(0,s.jsx)(t.code,{children:"lastUpdatedAt"}),"."]}),(0,s.jsxs)(t.p,{children:["All the official content plugins provide the metadata for routes backed by a content file (Markdown, MDX or React page components), but it is possible third-party plugin authors do not provide this information, and the plugin will not be able to output a ",(0,s.jsx)(t.code,{children:"<lastmod>"})," tag for their routes."]})]}),"\n",(0,s.jsx)(t.h3,{id:"ex-config",children:"Example configuration"}),"\n",(0,s.jsx)(t.p,{children:"You can configure this plugin through preset options or plugin options."}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"Most Docusaurus users configure this plugin through the preset options."})}),"\n","\n",(0,s.jsx)(c.Z,{pluginName:"@docusaurus/plugin-sitemap",presetOptionName:"sitemap",code:"{\n  lastmod: 'date',\n  changefreq: 'weekly',\n  priority: 0.5,\n  ignorePatterns: ['/tags/**'],\n  filename: 'sitemap.xml',\n  createSitemapItems: async (params) => {\n    const {defaultCreateSitemapItems, ...rest} = params;\n    const items = await defaultCreateSitemapItems(rest);\n    return items.filter((item) => !item.url.includes('/page/'));\n  },\n}"}),"\n",(0,s.jsxs)(t.p,{children:["You can find your sitemap at ",(0,s.jsx)(t.code,{children:"/sitemap.xml"}),"."]})]})}function x(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},67860:function(e,t,n){n.d(t,{Z:()=>l});var r=n("24246");n("27378");var s=n("90496");let i="tabItem_pnkT";function l(e){let{children:t,hidden:n,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(i,l),hidden:n,children:t})}},46291:function(e,t,n){n.d(t,{Z:()=>v});var r=n("24246"),s=n("27378"),i=n("90496"),l=n("12451"),a=n("3620"),o=n("89637"),c=n("74417"),d=n("46918"),u=n("58247");function h(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||s.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:t,tabValues:n}=e;return n.some(e=>e.value===t)}var m=n("8903");let x="tabList_Qoir",f="tabItem_AQgk";function g(e){let{className:t,block:n,selectedValue:s,selectValue:a,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),u=e=>{let t=e.currentTarget,n=o[c.indexOf(t)].value;n!==s&&(d(t),a(n))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{let n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1]}}t?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t),children:o.map(e=>{let{value:t,label:n,attributes:l}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>{c.push(e)},onKeyDown:h,onClick:u,...l,className:(0,i.Z)("tabs__item",f,l?.className,{"tabs__item--active":s===t}),children:n??t},t)})})}function j(e){let{lazy:t,children:n,selectedValue:l}=e,a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){let e=a.find(e=>e.props.value===l);return e?(0,s.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:a.map((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==l}))})}function b(e){let t=function(e){let{defaultValue:t,queryString:n=!1,groupId:r}=e,i=function(e){let{values:t,children:n}=e;return(0,s.useMemo)(()=>{let e=t??h(n).map(e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}});return!function(e){let t=(0,d.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,n])}(e),[l,m]=(0,s.useState)(()=>(function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let r=n.find(e=>e.default)??n[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:t,tabValues:i})),[x,f]=function(e){let{queryString:t=!1,groupId:n}=e,r=(0,a.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n}),l=(0,c._X)(i);return[l,(0,s.useCallback)(e=>{if(!i)return;let t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})},[i,r])]}({queryString:n,groupId:r}),[g,j]=function(e){var t;let{groupId:n}=e;let r=(t=n)?`docusaurus.tab.${t}`:null,[i,l]=(0,u.Nk)(r);return[i,(0,s.useCallback)(e=>{if(!!r)l.set(e)},[r,l])]}({groupId:r}),b=(()=>{let e=x??g;return p({value:e,tabValues:i})?e:null})();return(0,o.Z)(()=>{b&&m(b)},[b]),{selectedValue:l,selectValue:(0,s.useCallback)(e=>{if(!p({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);m(e),f(e),j(e)},[f,j,i]),tabValues:i}}(e);return(0,r.jsxs)("div",{className:(0,i.Z)("tabs-container",x),children:[(0,r.jsx)(g,{...t,...e}),(0,r.jsx)(j,{...t,...e})]})}function v(e){let t=(0,m.Z)();return(0,r.jsx)(b,{...e,children:h(e.children)},String(t))}},82234:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(24246);n(27378);var s=n(8903);function i(e){let{children:t,fallback:n}=e;return(0,s.Z)()?(0,r.jsx)(r.Fragment,{children:t?.()}):n??null}},29974:function(e,t,n){n.d(t,{Z:()=>c});var r=n("24246"),s=n("27378"),i=n("60415"),l=n("3620");let a="apiTable_e8hp",o=s.forwardRef(function(e,t){let{name:n,children:a}=e,o=function(e){let t=e;for(;(0,s.isValidElement)(t);)[t]=s.Children.toArray(t.props.children);if("string"!=typeof t)throw Error(`Could not extract APITable row name from JSX tree:
${JSON.stringify(e,null,2)}`);return t}(a),c=n?`${n}-${o}`:o,d=`#${c}`,u=(0,l.k6)();return(0,i.Z)().collectAnchor(c),(0,r.jsx)("tr",{id:c,tabIndex:0,ref:u.location.hash===d?t:void 0,onClick:e=>{let t="TD"===e.target.tagName.toUpperCase(),n=!!window.getSelection()?.toString();t&&!n&&u.push(d)},onKeyDown:e=>{"Enter"===e.key&&u.push(d)},children:a.props.children})});function c(e){let{children:t,name:n}=e;if("table"!==t.type)throw Error("Bad usage of APITable component.\nIt is probably that your Markdown table is malformed.\nMake sure to double-check you have the appropriate number of columns for each table row.");let[i,l]=s.Children.toArray(t.props.children),c=(0,s.useRef)(null);(0,s.useEffect)(()=>{c.current?.focus()},[c]);let d=s.Children.map(l.props.children,e=>(0,r.jsx)(o,{name:n,ref:c,children:e}));return(0,r.jsxs)("table",{className:a,children:[i,(0,r.jsx)("tbody",{children:d})]})}},14920:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(24246);n(27378);var s=n(64152),i=n(59064),l=n(80661),a=n(46291),o=n(67860),c=n(45960);let d=void 0;function u(e){let{code:t,pluginName:n,presetOptionName:u}=e,h=(0,i.zu)(d).path;return(0,r.jsxs)(a.Z,{groupId:"api-config-ex",children:[(0,r.jsxs)(o.Z,{value:"preset",label:(0,l.I)({message:"Preset options"}),children:[(0,r.jsx)("p",{children:(0,r.jsx)(l.Z,{id:"apiDocs.configTabs.presetOptions.description",values:{presetLink:(0,r.jsx)(s.Z,{to:`${h}/using-plugins#docusauruspreset-classic`,children:(0,r.jsx)(l.Z,{children:"preset options"})})},children:"If you use a preset, configure this plugin through the {presetLink}:"})}),(0,r.jsx)(c.Z,{language:"js",title:"docusaurus.config.js",children:`module.exports = {
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        // highlight-start
        ${u}: ${t.replace(/\n/g,"\n        ")},
        // highlight-end
      },
    ],
  ],
};`})]}),(0,r.jsxs)(o.Z,{value:"plugin",label:(0,l.I)({message:"Plugin options"}),children:[(0,r.jsx)("p",{children:(0,r.jsx)(l.Z,{children:"If you are using a standalone plugin, provide options directly to the plugin:"})}),(0,r.jsx)(c.Z,{language:"js",title:"docusaurus.config.js",children:`module.exports = {
  plugins: [
    [
      '${n}',
      // highlight-start
      ${t.replace(/\n/g,"\n      ")},
      // highlight-end
    ],
  ],
};`})]})]})}},45960:function(e,t,n){n.d(t,{Z:()=>el});var r,s={};n.r(s),n.d(s,{ButtonExample:()=>E});var i=n("24246"),l=n("27378"),a=n("90496"),o=n("8903"),c=n("10075"),d=n("80661"),u=n("30056"),h=n("82234"),p=n("22687"),m=n("31058"),x=n("70341");function f(){let{prism:e}=(0,x.L)(),{colorMode:t}=(0,m.I)(),n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var g=n("18605");let j="playgroundContainer_6Ior",b="playgroundHeader_Tvsk",v="playgroundEditor_TySg",y="playgroundPreview_mApW";function k(e){let{children:t}=e;return(0,i.jsx)("div",{className:(0,a.Z)(b),children:t})}function w(){return(0,i.jsx)("div",{children:"Loading..."})}function C(){return(0,i.jsx)(h.Z,{fallback:(0,i.jsx)(w,{}),children:()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(g.Z,{fallback:e=>(0,i.jsx)(p.Ac,{...e}),children:(0,i.jsx)(c.i5,{})}),(0,i.jsx)(c.IF,{})]})})}function B(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(k,{children:(0,i.jsx)(d.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks",children:"Result"})}),(0,i.jsx)("div",{className:y,children:(0,i.jsx)(C,{})})]})}function N(){let e=(0,o.Z)();return(0,i.jsx)(c.uz,{className:v},String(e))}function I(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(k,{children:(0,i.jsx)(d.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks",children:"Live Editor"})}),(0,i.jsx)(N,{})]})}let T=e=>`${e};`;function S(e){let{children:t,transformCode:n,...r}=e,{siteConfig:{themeConfig:s}}=(0,u.Z)(),{liveCodeBlock:{playgroundPosition:l}}=s,a=f(),o=r.metastring?.includes("noInline")??!1;return(0,i.jsx)("div",{className:j,children:(0,i.jsx)(c.nu,{code:t?.replace(/\n$/,""),noInline:o,transformCode:n??T,theme:a,...r,children:"top"===l?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(B,{}),(0,i.jsx)(I,{})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(I,{}),(0,i.jsx)(B,{})]})})})}function E(e){return(0,i.jsx)("button",{type:"button",...e,style:{backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer",...e.style}})}let Z={React:l,...l,...s};var L=n("2235"),A=n("6324"),_=n.n(A);let $=/title=(?<quote>["'])(?<title>.*?)\1/,D=/\{(?<range>[\d,-]+)\}/,F={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},O={...F,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},M=Object.keys(F);function R(e,t){let n=e.map(e=>{let{start:n,end:r}=O[e];return`(?:${n}\\s*(${t.flatMap(e=>[e.line,e.block?.start,e.block?.end].filter(Boolean)).join("|")})\\s*${r})`}).join("|");return RegExp(`^\\s*(?:${n})\\s*$`)}let P="codeBlockContainer_jDV4";function V(e){let{as:t,...n}=e,r=function(e){let t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach(e=>{let[r,s]=e,i=t[r];i&&"string"==typeof s&&(n[i]=s)}),n}(f());return(0,i.jsx)(t,{...n,style:r,className:(0,a.Z)(n.className,P,L.k.common.codeBlock)})}let q={codeBlockContent:"codeBlockContent_vx7S",codeBlockTitle:"codeBlockTitle_bdru",codeBlock:"codeBlock_Gebt",codeBlockStandalone:"codeBlockStandalone_i_cY",codeBlockLines:"codeBlockLines_FJaf",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_FU9Q",buttonGroup:"buttonGroup_cUGO"};function W(e){let{children:t,className:n}=e;return(0,i.jsx)(V,{as:"pre",tabIndex:0,className:(0,a.Z)(q.codeBlockStandalone,"thin-scrollbar",n),children:(0,i.jsx)("code",{className:q.codeBlockLines,children:t})})}var H=n("31008");let U={attributes:!0,characterData:!0,childList:!0,subtree:!0};var Y=n("7316");let z={codeLine:"codeLine_qRmp",codeLineNumber:"codeLineNumber_dS_J",codeLineContent:"codeLineContent_XF5l"};function G(e){let{line:t,classNames:n,showLineNumbers:r,getLineProps:s,getTokenProps:l}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");let o=s({line:t,className:(0,a.Z)(n,r&&z.codeLine)}),c=t.map((e,t)=>(0,i.jsx)("span",{...l({token:e})},t));return(0,i.jsxs)("span",{...o,children:[r?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:z.codeLineNumber}),(0,i.jsx)("span",{className:z.codeLineContent,children:c})]}):c,(0,i.jsx)("br",{})]})}var Q=n("84171");function X(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function J(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}let K={copyButtonCopied:"copyButtonCopied_OkN_",copyButtonIcons:"copyButtonIcons_OqsO",copyButtonIcon:"copyButtonIcon_PgCn",copyButtonSuccessIcon:"copyButtonSuccessIcon_bsQG"};function ee(e){let{code:t,className:n}=e,[r,s]=(0,l.useState)(!1),o=(0,l.useRef)(void 0),c=(0,l.useCallback)(()=>{(0,Q.Z)(t),s(!0),o.current=window.setTimeout(()=>{s(!1)},1e3)},[t]);return(0,l.useEffect)(()=>()=>window.clearTimeout(o.current),[]),(0,i.jsx)("button",{type:"button","aria-label":r?(0,d.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,d.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,d.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,a.Z)("clean-btn",n,K.copyButton,r&&K.copyButtonCopied),onClick:c,children:(0,i.jsxs)("span",{className:K.copyButtonIcons,"aria-hidden":"true",children:[(0,i.jsx)(X,{className:K.copyButtonIcon}),(0,i.jsx)(J,{className:K.copyButtonSuccessIcon})]})})}function et(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let en={wordWrapButtonIcon:"wordWrapButtonIcon_MQXS",wordWrapButtonEnabled:"wordWrapButtonEnabled_TBIH"};function er(e){let{className:t,onClick:n,isEnabled:r}=e,s=(0,d.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,i.jsx)("button",{type:"button",onClick:n,className:(0,a.Z)("clean-btn",t,r&&en.wordWrapButtonEnabled),"aria-label":s,title:s,children:(0,i.jsx)(et,{className:en.wordWrapButtonIcon,"aria-hidden":"true"})})}function es(e){var t,n,r;let{children:s,className:o="",metastring:c,title:d,showLineNumbers:u,language:h}=e,{prism:{defaultLanguage:p,magicComments:m}}=(0,x.L)();let g=(t=h??function(e){let t=e.split(" ").find(e=>e.startsWith("language-"));return t?.replace(/language-/,"")}(o)??p,t?.toLowerCase()),j=f(),b=function(){let[e,t]=(0,l.useState)(!1),[n,r]=(0,l.useState)(!1),s=(0,l.useRef)(null),i=(0,l.useCallback)(()=>{let n=s.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t(e=>!e)},[s,e]),a=(0,l.useCallback)(()=>{let{scrollWidth:e,clientWidth:t}=s.current;r(e>t||s.current.querySelector("code").hasAttribute("style"))},[s]);return!function(e,t){let[n,r]=(0,l.useState)(),s=(0,l.useCallback)(()=>{r(e.current?.closest("[role=tabpanel][hidden]"))},[e,r]);(0,l.useEffect)(()=>{s()},[s]),!function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:U,r=(0,H.zX)(t),s=(0,H.Ql)(n);(0,l.useEffect)(()=>{let t=new MutationObserver(r);return e&&t.observe(e,s),()=>t.disconnect()},[e,r,s])}(n,e=>{e.forEach(e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),s())})},{attributes:!0,characterData:!1,childList:!1,subtree:!1})}(s,a),(0,l.useEffect)(()=>{a()},[e,a]),(0,l.useEffect)(()=>(window.addEventListener("resize",a,{passive:!0}),()=>{window.removeEventListener("resize",a)}),[a]),{codeBlockRef:s,isEnabled:e,isCodeScrollable:n,toggle:i}}();let v=(n=c,(n?.match($)?.groups.title??"")||d),{lineClassNames:y,code:k}=function(e,t){let n=e.replace(/\n$/,""),{language:r,magicComments:s,metastring:i}=t;if(i&&D.test(i)){let e=i.match(D).groups.range;if(0===s.length)throw Error(`A highlight range has been given in code block's metastring (\`\`\` ${i}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);let t=s[0].className;return{lineClassNames:Object.fromEntries(_()(e).filter(e=>e>0).map(e=>[e-1,[t]])),code:n}}if(void 0===r)return{lineClassNames:{},code:n};let l=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return R(["js","jsBlock"],t);case"jsx":case"tsx":return R(["js","jsBlock","jsx"],t);case"html":return R(["js","jsBlock","html"],t);case"python":case"py":case"bash":return R(["bash"],t);case"markdown":case"md":return R(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return R(["tex"],t);case"lua":case"haskell":return R(["lua"],t);case"sql":return R(["lua","jsBlock"],t);case"wasm":return R(["wasm"],t);case"vb":case"vba":case"visual-basic":return R(["vb","rem"],t);case"vbnet":return R(["vbnet","rem"],t);case"batch":return R(["rem"],t);case"basic":return R(["rem","f90"],t);case"fsharp":return R(["js","ml"],t);case"ocaml":case"sml":return R(["ml"],t);case"fortran":return R(["f90"],t);case"cobol":return R(["cobol"],t);default:return R(M,t)}}(r,s),a=n.split("\n"),o=Object.fromEntries(s.map(e=>[e.className,{start:0,range:""}])),c=Object.fromEntries(s.filter(e=>e.line).map(e=>{let{className:t,line:n}=e;return[n,t]})),d=Object.fromEntries(s.filter(e=>e.block).map(e=>{let{className:t,block:n}=e;return[n.start,t]})),u=Object.fromEntries(s.filter(e=>e.block).map(e=>{let{className:t,block:n}=e;return[n.end,t]}));for(let e=0;e<a.length;){let t=a[e].match(l);if(!t){e+=1;continue}let n=t.slice(1).find(e=>void 0!==e);c[n]?o[c[n]].range+=`${e},`:d[n]?o[d[n]].start=e:u[n]&&(o[u[n]].range+=`${o[u[n]].start}-${e-1},`),a.splice(e,1)}n=a.join("\n");let h={};return Object.entries(o).forEach(e=>{let[t,{range:n}]=e;_()(n).forEach(e=>{h[e]??=[],h[e].push(t)})}),{lineClassNames:h,code:n}}(s,{metastring:c,language:g,magicComments:m});let w=u??(r=c,!!r?.includes("showLineNumbers"));return(0,i.jsxs)(V,{as:"div",className:(0,a.Z)(o,g&&!o.includes(`language-${g}`)&&`language-${g}`),children:[v&&(0,i.jsx)("div",{className:q.codeBlockTitle,children:v}),(0,i.jsxs)("div",{className:q.codeBlockContent,children:[(0,i.jsx)(Y.y$,{theme:j,code:k,language:g??"text",children:e=>{let{className:t,style:n,tokens:r,getLineProps:s,getTokenProps:l}=e;return(0,i.jsx)("pre",{tabIndex:0,ref:b.codeBlockRef,className:(0,a.Z)(t,q.codeBlock,"thin-scrollbar"),style:n,children:(0,i.jsx)("code",{className:(0,a.Z)(q.codeBlockLines,w&&q.codeBlockLinesWithNumbering),children:r.map((e,t)=>(0,i.jsx)(G,{line:e,getLineProps:s,getTokenProps:l,classNames:y[t],showLineNumbers:w},t))})})}}),(0,i.jsxs)("div",{className:q.buttonGroup,children:[(b.isEnabled||b.isCodeScrollable)&&(0,i.jsx)(er,{className:q.codeButton,onClick:()=>b.toggle(),isEnabled:b.isEnabled}),(0,i.jsx)(ee,{className:q.codeButton,code:k})]})]})]})}let ei=(r=function(e){var t;let{children:n,...r}=e,s=(0,o.Z)();let a=(t=n,l.Children.toArray(t).some(e=>(0,l.isValidElement)(e))?t:Array.isArray(t)?t.join(""):t),c="string"==typeof a?es:W;return(0,i.jsx)(c,{...r,children:a},String(s))},function(e){return e.live?(0,i.jsx)(S,{scope:Z,...e}):(0,i.jsx)(r,{...e})});function el(e){return(0,i.jsx)(ei,{...e})}}}]);