/*! For license information please see ffabec46e606ce763e8af746e3ef806422190557-fed12af99637018ae4e8.js.LICENSE.txt */
(self.webpackChunktech_far_hub=self.webpackChunktech_far_hub||[]).push([[4155],{4184:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var l=typeof r;if("string"===l||"number"===l)e.push(r);else if(Array.isArray(r)){if(r.length){var i=a.apply(null,r);i&&e.push(i)}}else if("object"===l){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},991:function(e,t,r){"use strict";r.d(t,{n:function(){return u}});var n=r(7294),a=r(1883),l=r(4184),i=r.n(l),s=r(9583),o=r(1605),c=r(2787);const u=e=>{if(e&&"href"in e&&e.href){const{site:t}=(0,a.useStaticQuery)("1271460761"),r=t.siteMetadata.siteUrl,l=new o.h(e.href,r);let u=(e={...e}).children;return delete e.children,e={...e,href:l.authoritative},l.isExternal&&(e={...e,className:i()(e.className,"usa-link--external")}),l.isDownload&&(l.fileType===c.r.Pdf?u=n.createElement(n.Fragment,null,u,n.createElement(s.yRW,null)):l.fileType===c.r.Word?u=n.createElement(n.Fragment,null,u,n.createElement(s.baU,null)):l.fileType===c.r.Excel?u=n.createElement(n.Fragment,null,u,n.createElement(s.GzT,null)):(n.Fragment,s.aBF)),l.isAbsolute?n.createElement("a",e,u):(e={...e,href:(0,a.withPrefix)(l.authoritative)},l.isDownload?n.createElement("a",e,u):n.createElement(a.Link,{to:l.authoritative,className:e.className},u))}return n.createElement("a",e)}},6881:function(e,t,r){"use strict";r.d(t,{Z:function(){return _}});var n=r(7294),a=r(1151);const l=e=>{let{children:t}=e;return n.createElement("div",{className:"usa-alert usa-alert--warning"},n.createElement("div",{className:"usa-alert__body"},n.createElement("h4",{className:"usa-alert__heading"},"TODO or Question"),n.createElement("p",{className:"usa-alert__text"},t)))},i=e=>{let{children:t,heading:r}=e;return r=r||"Summary",n.createElement("div",{className:"usa-alert usa-alert--info"},n.createElement("div",{className:"usa-alert__body"},n.createElement("h4",{className:"usa-alert__heading"},r),n.createElement("p",{className:"usa-alert__text"},t)))};var s=r(958),o=r(1883);var c=e=>{let{children:t,media:r="/assets/img/ux-indonesia-8mikJ83LmSQ-unsplash.jpg",media_alt:a="A stock image",heading:l="External resources"}=e;return n.createElement(s.Card,{layout:"flagDefault",headerFirst:!0,gridLayout:{tablet:{col:12}},className:"tfh-lifecycleResouces"},n.createElement(s.CardHeader,null,n.createElement("h3",{className:"usa-card__heading"},l)),n.createElement(s.CardMedia,{exdent:!0},n.createElement("img",{src:(0,o.withPrefix)(r),alt:a})),n.createElement("div",{className:"tfh-lifecycleResouces-internal"},n.createElement(s.CardBody,null,t)))};const u=e=>{let{children:t}=e;return n.createElement("div",{className:"process-list"},(e=>{const t=n.createElement(s.Alert,{type:"warning",headingLevel:"h3",heading:"Error in process list"},"A process list must be an ordered list.",n.createElement("a",{href:"https://www.markdownguide.org/basic-syntax/#ordered-lists"},"See the markdown guide for examples."));if("ol"!==e.type)return t;const r=e=>e&&"object"==typeof e&&"type"in e;let a=e.props.children.filter(r);return a.every((e=>"li"==e.type))?n.createElement(s.ProcessList,null,a.map((e=>{if("string"==typeof e.props.children)return n.createElement(s.ProcessListItem,null,n.createElement(s.ProcessListHeading,{type:"h4"},e.props.children));{const t=e.props.children.filter(r);return n.createElement(s.ProcessListItem,null,n.createElement(s.ProcessListHeading,{type:"h4"},t[0].props.children),t.length>1&&t.slice(1))}}))):t})(t))};var m=r(5785);const d=e=>{let{children:t}=e;const r=n.createElement(s.Alert,{type:"warning",headingLevel:"h3",heading:"Error in process list"},"A MultiStep list must be an ordered list.",n.createElement("a",{href:"https://www.markdownguide.org/basic-syntax/#ordered-lists"},"See the markdown guide for examples."));if("ol"!==t.type)return r;const a=e=>e&&"object"==typeof e&&"type"in e;let l=t.props.children.filter(a);if(!l.every((e=>e&&"object"==typeof e&&"type"in e&&"li"==e.type)))return r;const[i,o]=n.useState([!0].concat((0,m.Z)(Array(l.length).fill(!1)))),c=[],u=[];return l.forEach(((e,t)=>{if(e&&"object"==typeof e&&"props"in e&&"children"in e.props){const r=e.props.children.filter(a);c.push(n.createElement("li",{className:"usa-step-indicator__segment "+(i[t]?"usa-step-indicator__segment--current":"usa-step-indicator__segment--complete"),onClick:()=>(e=>{o((()=>{const t=Array(i.length).fill(!1);return t[e]=!0,t}))})(t)},n.createElement("div",{className:"usa-step-indicator__segment-label"},r[0]))),u.push(n.createElement(n.Fragment,null,i[t]&&n.createElement("div",{className:"tfh-multistep__content-item"},r.slice(1))))}})),n.createElement(s.Card,null,n.createElement(s.CardBody,null,n.createElement("div",{className:"tfh-multistep"},n.createElement("div",{className:"usa-step-indicator","aria-label":"progress"},n.createElement("ol",{className:"usa-step-indicator__segments"},c)),n.createElement("div",{className:"tfh-multipstep__content-block"},u))))},h=e=>e&&"object"==typeof e&&"type"in e,p=e=>e&&"object"==typeof e&&"type"in e&&"ol"==e.type&&"props"in e&&"children"in e.props&&Array.isArray(e.props.children),f=e=>{let{children:t}=e;const r=n.createElement(s.Alert,{type:"warning",headingLevel:"h3",heading:"Error in Assessment"},"An assessment must be an ordered list with a score section at the end",n.createElement("a",{href:"https://www.markdownguide.org/basic-syntax/#ordered-lists"},"See the markdown guide for examples."));if(!t||!Array.isArray(t)||2!==t.length)return r;let a,l;if("object"!=typeof t[0]||!("type"in t[0])||"ol"!==t[0].type)return r;if(a=t[0],"object"!=typeof t[1])return r;l=t[1];let i=a.props.children.filter(h);if(!i.every((e=>e&&"object"==typeof e&&"type"in e&&"li"==e.type)))return r;const[o,c]=n.useState([!0].concat((0,m.Z)(Array(i.length+1).fill(!1)))),[u,d]=n.useState(Array(i.length).fill(1)),p=e=>{c((()=>{const t=Array(o.length).fill(!1);return t[e]=!0,t}))},f=(e,t)=>{d((()=>{const r=(0,m.Z)(u);return r[e]=t,r}))},E=i.map(((e,t)=>{let r,a="Next Question",l=!1;return t===i.length-1&&(a="Complete Assessment",l=!0),r=n.createElement("a",{onClick:()=>{p(t+1)},className:"tfh-assessment__next-question-link"},a),n.createElement(n.Fragment,null,o[t]&&n.createElement(g,{itemNumber:t,handleUpdate:f,currentScores:u},e),o[t]&&r)})),v=n.createElement(y,{scores:u,children:l.props.children,clickHandler:p});return E.push(n.createElement(n.Fragment,null,o[i.length]&&v)),n.createElement(n.Fragment,null,n.createElement(s.Card,{className:"tfh-assessment"},n.createElement(s.CardBody,null,E)))},g=e=>{let{children:t,itemNumber:r,handleUpdate:a,currentScores:l}=e;const i=n.createElement(s.Alert,{type:"warning",headingLevel:"h3",heading:"Error in Assessment Item"},"An assessment item must contain an ordered list",n.createElement("a",{href:"https://www.markdownguide.org/basic-syntax/#ordered-lists"},"See the markdown guide for examples."));if(!(t&&"object"==typeof t&&"props"in t&&"children"in t.props&&Array.isArray(t.props.children)))return i;const o=t.props.children.filter(h);if(!o.some(p))return i;const c=o.map((e=>{if(e&&p(e)&&"object"==typeof e&&"props"in e){const t=e.props.children.filter(h);return n.createElement(s.Fieldset,null,n.createElement("ol",{className:"add-list-reset"},t.map(((e,t)=>{const i=e.props.children,o=t+1,c="assessment-"+r,u="assessment-"+r+"-"+t;return n.createElement("li",null,n.createElement(s.Radio,{id:u,name:c,label:o+" - "+i,value:o,onClick:()=>a(r,o),checked:l[r]===o}))}))))}return e&&"object"==typeof e&&"type"in e&&"p"===e.type&&"props"in e&&"children"in e.props?n.createElement("h3",null,e.props.children):e}));return n.createElement("form",null,c)},y=e=>{let{children:t,scores:r=[],clickHandler:a}=e;const l=r.reduce(((e,t)=>+e+ +t)),i=n.createElement(s.Alert,{type:"warning",headingLevel:"h3",heading:"Error in score key"},"An assessment score must contain an ordered list of score ranges",n.createElement("a",{href:"https://www.markdownguide.org/basic-syntax/#ordered-lists"},"See the markdown guide for examples."));return t&&Array.isArray(t)&&t.some(p)?n.createElement(n.Fragment,null,n.createElement("h3",null,"Total: ",String(l)," Points"),t.filter(h).map((e=>{if(e)return e&&p(e)&&"object"==typeof e&&"props"in e?E(e.props.children.filter(h),l):e})),n.createElement("span",{onClick:()=>a(0),className:"usa-button"},"Retake Assessment"),n.createElement("span",{className:"usa-clearfix"})):i},E=(e,t)=>e.map((e=>{if(e.props.children.length>=2){const r=e.props.children.filter(h)[0],n=Children.onlyText(r).match(/\(\s*(?<lowBound>[0-9]+)\s*-\s*(?<highBound>[0-9]+).* points/);let a,l;if(n&&n.groups&&(a=Number(n.groups.lowBound),l=Number(n.groups.highBound),t>=a&&t<=l))return e}}));var v=r(991),b=r(1605);const w=e=>{if(e&&"src"in e&&e.src){const{site:t}=(0,o.useStaticQuery)("1271460761"),r=t.siteMetadata.siteUrl,a=new b.h(e.src,r);return a.isAbsolute||(e={...e,src:(0,o.withPrefix)(a.authoritative)}),n.createElement("img",e)}return n.createElement("img",e)};var _=e=>{let{children:t}=e;const r={Alert:l,Summary:i,ExternalResources:c,ProcessList:u,MultiStep:d,Assessment:f,AssessmentScore:y,a:v.n,img:w};return n.createElement(a.Zo,{components:r},t)}},5007:function(e,t,r){"use strict";var n=r(1865),a=r.n(n),l=r(958),i=r(1883),s=r(7294);t.Z=e=>{let{node:t,width:r=3}=e;return t.html&&t.frontmatter&&t.frontmatter.href&&t.frontmatter.heading?s.createElement(l.Card,{headerFirst:!0,gridLayout:{tablet:{col:r}},key:"resource-"+a()(t.frontmatter.heading)},s.createElement(l.CardHeader,null,s.createElement("h4",null,t.frontmatter.heading)),s.createElement(l.CardBody,{dangerouslySetInnerHTML:{__html:t.html}}),s.createElement(l.CardFooter,null,s.createElement(i.Link,{to:t.frontmatter.href,className:"usa-button"},"View"))):s.createElement(l.Card,{headerFirst:!0},s.createElement(l.CardHeader,null,"ERROR in Resouces Snippet"))}},4001:function(e,t,r){"use strict";r.d(t,{H:function(){return a}});var n=r(7294);const a=e=>{var t,r,a,l;let{frontmatter:i}=e;const s=null!==(t=null!==(r=null==i?void 0:i.meta_title)&&void 0!==r?r:null==i?void 0:i.heading)&&void 0!==t?t:"TechFAR Hub",o=null!==(a=null!==(l=null==i?void 0:i.meta_description)&&void 0!==l?l:null==i?void 0:i.promo_description)&&void 0!==a?a:null,c=null==i?void 0:i.robots,u=null==i?void 0:i.canonical;return n.createElement(n.Fragment,null,n.createElement("title",null,s),n.createElement("meta",{name:"title",content:s}),n.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),n.createElement("meta",{charSet:"utf-8"}),n.createElement("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge"}),o&&n.createElement("meta",{name:"description",content:o}),c&&n.createElement("meta",{name:"robots",content:c}),u&&n.createElement("link",{rel:"canonical",href:u}))}},2787:function(e,t,r){"use strict";let n;r.d(t,{r:function(){return n}}),function(e){e[e.Word=0]="Word",e[e.Pdf=1]="Pdf",e[e.Excel=2]="Excel",e[e.Other=3]="Other"}(n||(n={}))},1605:function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance");return e}r.d(t,{h:function(){return c}});var l=0;function i(e){return"__private_"+l+++"_"+e}var s=r(2787),o=i("siteUrl");let c=function(){function e(e,t){Object.defineProperty(this,o,{writable:!0,value:void 0}),this.original=e,a(this,o)[o]=t}var t,r,l;return e.prototype.isUrlAboslute=function(e){return/^(?:[a-z+]+:)?\/\//i.test(e)||e.startsWith("mailto")},t=e,(r=[{key:"originalIsAbsolute",get:function(){return this.isUrlAboslute(this.original)}},{key:"authoritative",get:function(){if(this.originalIsAbsolute){if(this.original.includes("://techfarhub.cio.gov"))return this.original.replace(/https?:\/\/techfarhub\.cio\.gov/i,"");if(this.original.includes("://techfarhub.usds.gov"))return this.original.replace(/https?:\/\/techfarhub\.usds\.gov/i,"")}return this.original}},{key:"authoritativeUrl",get:function(){return new URL(this.authoritative,a(this,o)[o])}},{key:"isAbsolute",get:function(){return this.isUrlAboslute(this.authoritative)}},{key:"isDownload",get:function(){return!/(\/|.htm|.html)$/i.test(this.authoritativeUrl.pathname)}},{key:"fileType",get:function(){return this.isDownload?/\.pdf$/i.test(this.authoritativeUrl.pathname)?s.r.Pdf:/\.docx?$/i.test(this.authoritativeUrl.pathname)?s.r.Word:/\.xlsx?$/i.test(this.authoritativeUrl.pathname)?s.r.Excel:s.r.Other:null}},{key:"isExternal",get:function(){return this.isAbsolute&&!this.authoritative.includes(a(this,o)[o])}}])&&n(t.prototype,r),l&&n(t,l),Object.defineProperty(t,"prototype",{writable:!1}),e}()},4405:function(e,t,r){"use strict";r.d(t,{w_:function(){return c}});var n=r(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(a),i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i.apply(this,arguments)},s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};function o(e){return e&&e.map((function(e,t){return n.createElement(e.tag,i({key:t},e.attr),o(e.child))}))}function c(e){return function(t){return n.createElement(u,i({attr:i({},e.attr)},t),o(e.child))}}function u(e){var t=function(t){var r,a=e.attr,l=e.size,o=e.title,c=s(e,["attr","size","title"]),u=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,c,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),o&&n.createElement("title",null,o),e.children)};return void 0!==l?n.createElement(l.Consumer,null,(function(e){return t(e)})):t(a)}},1151:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},ah:function(){return l}});var n=r(7294);const a=n.createContext({});function l(e){const t=n.useContext(a);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function s({components:e,children:t,disableParentContext:r}){let s=l(e);return r&&(s=e||i),n.createElement(a.Provider,{value:s},t)}}}]);
//# sourceMappingURL=ffabec46e606ce763e8af746e3ef806422190557-fed12af99637018ae4e8.js.map