"use strict";(self.webpackChunktech_far_hub=self.webpackChunktech_far_hub||[]).push([[3159],{1125:function(e,t,n){n.d(t,{b:function(){return a}});var r=n(7294);const a=e=>{let{children:t}=e;return r.createElement("div",{className:"usa-alert usa-alert--warning"},r.createElement("div",{className:"usa-alert__body"},r.createElement("h4",{className:"usa-alert__heading"},"TODO or Question"),r.createElement("p",{className:"usa-alert__text"},t)))}},2412:function(e,t,n){n.d(t,{Z:function(){return R}});var r=n(7294),a=n(1151),l=n(1125);const i=e=>{let{children:t,heading:n}=e;return n=n||"Summary",r.createElement("div",{className:"usa-alert usa-alert--info"},r.createElement("div",{className:"usa-alert__body"},r.createElement("h4",{className:"usa-alert__heading"},n),r.createElement("p",{className:"usa-alert__text"},t)))};var o=n(958),s=n(1883);var c=e=>{let{children:t,media:n="/assets/img/ux-indonesia-8mikJ83LmSQ-unsplash.jpg",media_alt:a="A stock image",heading:l="External resources"}=e;return r.createElement(o.Card,{layout:"flagDefault",headerFirst:!0,gridLayout:{tablet:{col:12}},className:"tfh-lifecycleResouces"},r.createElement(o.CardHeader,null,r.createElement("h3",{className:"usa-card__heading"},l)),r.createElement(o.CardMedia,{exdent:!0},r.createElement("img",{src:(0,s.withPrefix)(n),alt:a})),r.createElement("div",{className:"tfh-lifecycleResouces-internal"},r.createElement(o.CardBody,null,t)))};const m=e=>{let{children:t}=e;return r.createElement("div",{className:"process-list"},(e=>{const t=r.createElement(o.Alert,{type:"warning",headingLevel:"h3",heading:"Error in process list"},"A process list must be an ordered list.",r.createElement("a",{href:"https://www.markdownguide.org/basic-syntax/#ordered-lists"},"See the markdown guide for examples."));if("ol"!==e.type)return t;const n=e=>e&&"object"==typeof e&&"type"in e;let a=e.props.children.filter(n);return a.every((e=>"li"==e.type))?r.createElement(o.ProcessList,null,a.map((e=>{if("string"==typeof e.props.children)return r.createElement(o.ProcessListItem,null,r.createElement(o.ProcessListHeading,{type:"h4"},e.props.children));{const t=e.props.children.filter(n);return r.createElement(o.ProcessListItem,null,r.createElement(o.ProcessListHeading,{type:"h4"},t[0].props.children),t.length>1&&t.slice(1))}}))):t})(t))};var d=n(5785);const u=e=>{let{children:t}=e;const n=r.createElement(o.Alert,{type:"warning",headingLevel:"h3",heading:"Error in process list"},"A MultiStep list must be an ordered list.",r.createElement("a",{href:"https://www.markdownguide.org/basic-syntax/#ordered-lists"},"See the markdown guide for examples."));if("ol"!==t.type)return n;const a=e=>e&&"object"==typeof e&&"type"in e;let l=t.props.children.filter(a);if(!l.every((e=>e&&"object"==typeof e&&"type"in e&&"li"==e.type)))return n;const[i,s]=r.useState([!0].concat((0,d.Z)(Array(l.length).fill(!1)))),c=[],m=[];return l.forEach(((e,t)=>{if(e&&"object"==typeof e&&"props"in e&&"children"in e.props){const n=e.props.children.filter(a);c.push(r.createElement("li",{className:"usa-step-indicator__segment "+(i[t]?"usa-step-indicator__segment--current":"usa-step-indicator__segment--complete"),onClick:()=>(e=>{s((()=>{const t=Array(i.length).fill(!1);return t[e]=!0,t}))})(t)},r.createElement("div",{className:"usa-step-indicator__segment-label"},n[0]))),m.push(r.createElement(r.Fragment,null,i[t]&&r.createElement("div",{className:"tfh-multistep__content-item"},n.slice(1))))}})),r.createElement(o.Card,null,r.createElement(o.CardBody,null,r.createElement("div",{className:"tfh-multistep"},r.createElement("div",{className:"usa-step-indicator","aria-label":"progress"},r.createElement("ol",{className:"usa-step-indicator__segments"},c)),r.createElement("div",{className:"tfh-multipstep__content-block"},m))))};var p=e=>(0,r.isValidElement)(e)&&Boolean(e.props.children);var E=e=>(0,r.isValidElement)(e)&&p(e)&&r.Children.toArray(e.props.children).reduce(((e,t)=>e||(0,r.isValidElement)(t)),!1);const h=(e,t)=>r.Children.toArray(e).filter(t).map((e=>(0,r.isValidElement)(e)&&E(e)?(0,r.cloneElement)(e,{...e.props,children:h(e.props.children,t)}):e));var g=h;const f=(e,t)=>{let n;return r.Children.toArray(e).find(((e,a,l)=>t(e,a,l)?(n=e,!0):!(!(0,r.isValidElement)(e)||!E(e))&&(n=f(e.props.children,t),void 0!==n))),n};var v=f;const y=(e,t)=>{r.Children.forEach(e,((e,n)=>{(0,r.isValidElement)(e)&&E(e)&&y(e.props.children,t),t(e,n)}))};var w=y;const b=(e,t)=>r.Children.toArray(e).map(((e,n,a)=>(0,r.isValidElement)(e)&&E(e)?t((0,r.cloneElement)(e,{...e.props,children:b(e.props.children,t)})):t(e,n,a)));var k=b;var C=(e,t)=>r.Children.toArray(e).filter(t);var L=e=>(0,r.isValidElement)(e)?"string"==typeof e.type?e.type:e.type.name:null;var S=(e,t=[],n="rest")=>{const a=t.map((e=>"string"==typeof e?e:e.name));return r.Children.toArray(e).reduce(((e,t)=>{const r=L(t),l=null!==r&&a.includes(r)?r:n;return void 0===e[l]&&(e[l]=[]),e[l]=[...e[l],t],e}),{})};const A=e=>null==e||"boolean"==typeof e||"{}"===JSON.stringify(e)?"":e.toString(),N=e=>e instanceof Array||(0,r.isValidElement)(e)?r.Children.toArray(e).reduce(((e,t)=>{let n="";return n=(0,r.isValidElement)(t)&&p(t)?N(t.props.children):(0,r.isValidElement)(t)&&!p(t)?"":A(t),e.concat(n)}),""):A(e);var _=N;var F=e=>g(e,(e=>(0,r.isValidElement)(e))),x={...r.Children,deepFilter:g,deepFind:v,deepForEach:w,deepMap:k,filter:C,getElementName:L,groupByType:S,hasChildren:p,hasComplexChildren:E,onlyText:_,onlyValid:F};const D=e=>e&&"object"==typeof e&&"type"in e,G=e=>e&&"object"==typeof e&&"type"in e&&"ol"==e.type&&"props"in e&&"children"in e.props&&Array.isArray(e.props.children),P=e=>{let{children:t,scores:n=[]}=e;const a=n.reduce(((e,t)=>+e+ +t)),l=r.createElement(o.Alert,{type:"warning",headingLevel:"h3",heading:"Error in score key"},"An assessment score must contain an ordered list of score ranges",r.createElement("a",{href:"https://www.markdownguide.org/basic-syntax/#ordered-lists"},"See the markdown guide for examples."));return t&&Array.isArray(t)&&t.some(G)?r.createElement(r.Fragment,null,r.createElement("h3",null,"Total: ",String(a)," Points"),t.filter(D).map((e=>{if(e)return G(e)?(t=e.props.children.filter(D),n=a,t.map((e=>{if(e.props.children.length>=2){const t=e.props.children.filter(D)[0],r=x.onlyText(t).match(/\(\s*(?<lowBound>[0-9]+)\s*-\s*(?<highBound>[0-9]+).* points/);let a,l;if(r&&r.groups&&(a=Number(r.groups.lowBound),l=Number(r.groups.highBound),n>=a&&n<=l))return e}}))):e;var t,n}))):l},T=e=>{let{children:t,itemNumber:n,handleUpdate:a}=e;const l=r.createElement(o.Alert,{type:"warning",headingLevel:"h3",heading:"Error in process list"},"An assessment item must contain an ordered list",r.createElement("a",{href:"https://www.markdownguide.org/basic-syntax/#ordered-lists"},"See the markdown guide for examples."));if(!(t&&"object"==typeof t&&"props"in t&&"children"in t.props&&Array.isArray(t.props.children)))return l;const i=t.props.children.filter(D);if(!i.some(G))return l;const s=i.map((e=>{if(e&&G(e)){const t=e.props.children.filter(D);return r.createElement(o.Fieldset,null,r.createElement("ol",{className:"add-list-reset"},t.map(((e,t)=>{const l=e.props.children,i=t+1,s="assessment-"+n,c="assessment-"+n+"-"+t;return r.createElement("li",null,r.createElement(o.Radio,{id:c,name:s,label:i+" - "+l,value:i,onClick:()=>a(n,i)}))}))))}return e&&"object"==typeof e&&"type"in e&&"p"===e.type&&"props"in e&&"children"in e.props?r.createElement("h3",null,e.props.children):e}));return r.createElement("form",null,s)},B=e=>{let{children:t}=e;const n=r.createElement(o.Alert,{type:"warning",headingLevel:"h3",heading:"Error in process list"},"An assessment must be an ordered list with a score section at the end",r.createElement("a",{href:"https://www.markdownguide.org/basic-syntax/#ordered-lists"},"See the markdown guide for examples."));if(!t||!Array.isArray(t)||2!==t.length)return n;let a,l;if("object"!=typeof t[0]||!("type"in t[0])||"ol"!==t[0].type)return n;if(a=t[0],"object"!=typeof t[1])return n;l=t[1];let i=a.props.children.filter(D);if(!i.every((e=>e&&"object"==typeof e&&"type"in e&&"li"==e.type)))return n;const[s,c]=r.useState([!0].concat((0,d.Z)(Array(i.length+1).fill(!1)))),[m,u]=r.useState(Array(i.length).fill(1)),p=(e,t)=>{u((()=>{const n=(0,d.Z)(m);return n[e]=t,n}))},E=i.map(((e,t)=>{let n,a="Next Question",l=!1;return t===i.length-1&&(a="Complete Assessment",l=!0),n=r.createElement("a",{onClick:()=>{(e=>{c((()=>{const t=Array(s.length).fill(!1);return t[e]=!0,t}))})(t+1)},className:"tfh-assessment__next-question-link"},a),r.createElement(r.Fragment,null,s[t]&&r.createElement(T,{itemNumber:t,handleUpdate:p},e),s[t]&&n)})),h=r.createElement(P,{scores:m,children:l.props.children});return E.push(r.createElement(r.Fragment,null,s[i.length]&&h)),r.createElement(r.Fragment,null,r.createElement(o.Card,{className:"tfh-assessment"},r.createElement(o.CardBody,null,E)))};var R=e=>{let{children:t}=e;const n={Alert:l.b,Summary:i,ExternalResources:c,ProcessList:m,MultiStep:u,Assessment:B,AssessmentScore:P};return r.createElement(a.Zo,{components:n},t)}},5007:function(e,t,n){var r=n(958),a=n(1883),l=n(7294);t.Z=e=>{let{node:t,width:n=3}=e;return t.html&&t.frontmatter&&t.frontmatter.href?l.createElement(r.Card,{headerFirst:!0,gridLayout:{tablet:{col:n}}},l.createElement(r.CardHeader,null,l.createElement("h4",null,t.frontmatter.heading)),l.createElement(r.CardBody,{dangerouslySetInnerHTML:{__html:t.html}}),l.createElement(r.CardFooter,null,l.createElement(a.Link,{to:t.frontmatter.href,className:"usa-button"},"View"))):l.createElement(r.Card,{headerFirst:!0},l.createElement(r.CardHeader,null,"ERROR in Resouces Snippet"))}},4001:function(e,t,n){n.d(t,{H:function(){return a}});var r=n(7294);const a=e=>{var t,n,a,l;let{frontmatter:i}=e;const o=null!==(t=null!==(n=null==i?void 0:i.meta_title)&&void 0!==n?n:null==i?void 0:i.heading)&&void 0!==t?t:"TechFAR Hub",s=null!==(a=null!==(l=null==i?void 0:i.meta_description)&&void 0!==l?l:null==i?void 0:i.promo_description)&&void 0!==a?a:null,c=null==i?void 0:i.robots,m=null==i?void 0:i.canonical;return r.createElement(r.Fragment,null,r.createElement("title",null,o),r.createElement("meta",{name:"title",content:o}),r.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),r.createElement("meta",{charSet:"utf-8"}),r.createElement("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge"}),s&&r.createElement("meta",{name:"description",content:s}),c&&r.createElement("meta",{name:"robots",content:c}),m&&r.createElement("link",{rel:"canonical",href:m}))}},6861:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(7294),a=n(1883),l=n(958),i=n(5785);const o=1024;var s=function(e){(0,r.useEffect)(e,[])},c=function(e){var t=(0,r.useRef)(e);t.current=e,s((function(){return function(){return t.current()}}))},m=function(e){var t=(0,r.useRef)(0),n=(0,r.useState)(e),a=n[0],l=n[1],i=(0,r.useCallback)((function(e){cancelAnimationFrame(t.current),t.current=requestAnimationFrame((function(){l(e)}))}),[]);return c((function(){cancelAnimationFrame(t.current)})),[a,i]};var d="undefined"!=typeof window,u=function(e,t){void 0===e&&(e=1/0),void 0===t&&(t=1/0);var n=m({width:d?window.innerWidth:e,height:d?window.innerHeight:t}),a=n[0],l=n[1];return(0,r.useEffect)((function(){if(d){var e=function(){l({width:window.innerWidth,height:window.innerHeight})};return function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.addEventListener&&e.addEventListener.apply(e,t)}(window,"resize",e),function(){!function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}(window,"resize",e)}}}),[]),a};var p=e=>{let{isNavExpanded:t,onNavExpanded:n}=e;const{width:s}=u(),[c,m]=r.useState(Array(6).fill(!1)),d=e=>{m((t=>{let n;return s>=o?(n=new Array(c.length).fill(!1),n[e]=!t[e]):(n=(0,i.Z)(c),n[e]=!t[e]),n}))},p=[r.createElement(a.Link,{to:"/get-started/"},"Get Started"),r.createElement(a.Link,{to:"/get-started/#how-to-use-techfar-hub"},"How to Use TFH")],E=[r.createElement("a",{href:"#privacy",key:"privacy"},"Privacy Policy"),r.createElement("a",{href:"#latest-updates",key:"updates"},"Latest Updates")],h=[r.createElement(a.Link,{to:"/pre-solicitation/agile-overview/"},"Agile overview"),r.createElement(a.Link,{to:"/pre-solicitation/planning-for-agile/"},"Planning for Agile"),r.createElement(a.Link,{to:"/pre-solicitation/market-research/"},"Market Research"),r.createElement(a.Link,{to:"/pre-solicitation/requirements-development/"},"Requirements Development")],g=[r.createElement(a.Link,{to:"/solicitation/contract-design/"},"Contract Design"),r.createElement(a.Link,{to:"/solicitation/vehicles/"},"Vehicles"),r.createElement(a.Link,{to:"/solicitation/performance-based-contracting/"},"Performance Based Contracting"),r.createElement(a.Link,{to:"/solicitation/small-business-programs/"},"Small Business Program"),r.createElement(a.Link,{to:"/solicitation/terms-conditions/"},"Terms and Conditions"),r.createElement(a.Link,{to:"/solicitation/protests/"},"Protests")],f=[r.createElement(a.Link,{to:"/evaluation/technical-evaluation/"},"Technical Evaluation"),r.createElement(a.Link,{to:"/evaluation/price-evaluation"},"Price Evaluation")],v=[r.createElement(a.Link,{to:"/contract-administration/contract-administration-and-audit-services/"},"Contract Administration and Audit Services"),r.createElement(a.Link,{to:"/contract-administration/modifications/"},"Modifications"),r.createElement(a.Link,{to:"/contract-administration/subcontracting-policies-procedures/"},"Subcontracting Policies and Procedure"),r.createElement(a.Link,{to:"/contract-administration/quality-assurance"},"Quality Assurance"),r.createElement(a.Link,{to:"/contract-administration/terminating-agile-contracts"},"Terminating Agile Contracts")],y=[r.createElement(a.Link,{to:"/resources/learning-center"},"Learning Center"),r.createElement(a.Link,{to:"/resources/case-studies/"},"Case Studies"),r.createElement(a.Link,{to:"/resources/templates-samples/"},"Templates and Samples"),r.createElement(a.Link,{to:"/resources/policy-guidance/"},"Policy and Guidance"),r.createElement(a.Link,{to:"/resources/contract-solutions-vehicles"},"Contract Solutions and Vehicles")],w=[r.createElement(r.Fragment,null,r.createElement(l.NavDropDownButton,{onToggle:()=>{d(0)},menuId:"getStartedDropdown",isOpen:c[0],label:"Get Started",isCurrent:!1}),r.createElement(l.Menu,{key:"getStarted",items:p,isOpen:c[0]})),r.createElement(r.Fragment,null,r.createElement(l.NavDropDownButton,{onToggle:()=>{d(1)},menuId:"preSolicitationDropdown",isOpen:c[1],label:"Pre-Solicitation",isCurrent:!1}),r.createElement(l.Menu,{key:"preSolicitation",items:h,isOpen:c[1]})),r.createElement(r.Fragment,null,r.createElement(l.NavDropDownButton,{onToggle:()=>{d(2)},menuId:"solicitationDropdown",isOpen:c[2],label:"Solicitation",isCurrent:!1}),r.createElement(l.Menu,{key:"solicitation",items:g,isOpen:c[2]})),r.createElement(r.Fragment,null,r.createElement(l.NavDropDownButton,{onToggle:()=>{d(3)},menuId:"evaluationDropdown",isOpen:c[3],label:"Evaluation",isCurrent:!1}),r.createElement(l.Menu,{key:"evaluation",items:f,isOpen:c[3]})),r.createElement(r.Fragment,null,r.createElement(l.NavDropDownButton,{onToggle:()=>{d(4)},menuId:"contractAdminDropdown",isOpen:c[4],label:"Contract Administration",isCurrent:!1}),r.createElement(l.Menu,{key:"contractAdministration",items:v,isOpen:c[4]})),r.createElement(r.Fragment,null,r.createElement(l.NavDropDownButton,{onToggle:()=>{d(5)},menuId:"resourcesDropdown",isOpen:c[5],label:"Resources",isCurrent:!1}),r.createElement(l.Menu,{key:"resources",items:y,isOpen:c[5]}))];return r.createElement(r.Fragment,null,r.createElement(l.ExtendedNav,{primaryItems:w,secondaryItems:E,mobileExpanded:t,onToggleMobileNav:n},r.createElement(l.Search,{onSubmit:()=>!1})))};var E=()=>{const e=[r.createElement(l.SocialLink,{key:"facebook",name:"Facebook",href:"https://www.facebook.com/unitedstatesdigitalservice"}),r.createElement(l.SocialLink,{key:"twitter",name:"Twitter",href:"https://twitter.com/USDS"}),r.createElement(l.SocialLink,{key:"instagram",name:"Instagram",href:"https://www.instagram.com/usdigitalservice"})];return r.createElement("footer",{className:"usa-footer usa-footer--big"},r.createElement(l.GridContainer,{className:"usa-footer__return-to-top"},r.createElement("a",{href:"#"},"Return to top")),r.createElement(l.GridContainer,null,r.createElement(l.Grid,{row:!0},r.createElement(l.Grid,{tablet:{col:12}},r.createElement(l.Grid,{row:!0,gap:6},r.createElement(l.Grid,{tablet:{col:3}},r.createElement(l.Grid,{row:!0},r.createElement("img",{src:(0,a.withPrefix)("/images/usds-logo-footer.svg"),alt:"United States Digital Service"})),r.createElement(l.Grid,{row:!0},"U.S. Digital Service")),r.createElement(l.Grid,{tablet:{col:2}},r.createElement(l.FooterNav,{"aria-label":"Footer navigation",size:"big",links:[r.createElement(a.Link,{to:"/get-started/"},"Get Started"),r.createElement(a.Link,{to:"/pre-solicitation/"},"Pre-Solicitation"),r.createElement(a.Link,{to:"/solicitation/"},"Solicitation"),r.createElement(a.Link,{to:"/evaluation/"},"Evaluation"),r.createElement(a.Link,{to:"/contract-administration/"},"Contract Administration")]})),r.createElement(l.Grid,{tablet:{col:2}},r.createElement(l.FooterNav,{"aria-label":"Footer navigation",size:"big",links:[r.createElement(a.Link,{to:"/resources/learning-center/"},"Learning Center"),r.createElement(a.Link,{to:"/resources/case-studies/"},"Case Studies"),r.createElement(a.Link,{to:"/resources/templates-samples/"},"Templates and Samples"),r.createElement(a.Link,{to:"/resources/policy-guidance/"},"Policy and Guidance"),r.createElement(a.Link,{to:"/resources/contract-solutions-vehicles/"},"Contract Solutions and Vehicles")]})),r.createElement(l.Grid,{tablet:{col:3}},r.createElement(l.FooterNav,{"aria-label":"Footer navigation",size:"big",links:[r.createElement("a",{href:"https://www.acquisition.gov/"},"Acquisition.gov"),r.createElement("a",{href:"https://www.fai.gov/periodic-table"},"FAR Periodic Table"),r.createElement("a",{href:"https://www.usds.gov/apply"},"Apply to USDS"),r.createElement(a.Link,{to:"/resources/learning-center/history-of-tfh"},"History of TFH"),r.createElement("a",{href:"https://github.com/usds/techfar-hub-website-v3"},"Contribute to this site")]})),r.createElement(l.Grid,{tablet:{col:2}},r.createElement(l.Grid,{row:!0,className:"usa-footer__social-heading"},r.createElement("strong",null,"Follow USDS")),r.createElement(l.Grid,{row:!0},r.createElement(l.SocialLinks,{links:e}))))))))};const h=e=>{let{breadCrumbs:t}=e;const n=[];return t.forEach(((e,i)=>{i<t.length-1?n.push(r.createElement(l.Breadcrumb,null,r.createElement(l.BreadcrumbLink,{href:(0,a.withPrefix)(e.path)},r.createElement("span",null,e.label)))):n.push(r.createElement(l.Breadcrumb,{current:!0},r.createElement("span",null,e.label)))})),r.createElement(l.BreadcrumbBar,null,n)};var g=e=>{let{children:t,breadCrumbs:n,className:i}=e;const[o,s]=r.useState(!1),c=()=>s((e=>!e));return r.createElement(r.Fragment,null,r.createElement(l.GovBanner,null),r.createElement(l.Header,{extended:!0},r.createElement("div",{className:"usa-navbar"},r.createElement(l.Title,null,r.createElement(a.Link,{to:"/"},"TechFAR Hub"),r.createElement("em",{className:"tfh-tagline"},r.createElement("img",{className:"tfh-tagline-logo",src:(0,a.withPrefix)("/images/usds-logo-footer.svg"),alt:"United States Digital Service"}),r.createElement("span",null,"U.S. DIGITAL SERVICE"))),r.createElement(l.NavMenuButton,{onClick:c,label:"Menu"})),r.createElement("div",{className:"tfh-nav-border"}),r.createElement(l.GridContainer,{className:"tfh-nav-grid"},r.createElement(l.Grid,{row:!0},r.createElement(p,{isNavExpanded:o,onNavExpanded:c})))),r.createElement("main",{id:"main-content",className:i},r.createElement(l.GridContainer,null,r.createElement("hr",{className:"tfh-top-hr"}),r.createElement(l.Grid,{row:!0},n&&r.createElement(l.Grid,{col:"fill"},r.createElement(h,{breadCrumbs:n})," ")),r.createElement(l.Grid,{row:!0},r.createElement(l.Grid,{col:"fill"},t)))),r.createElement(E,null))}},1151:function(e,t,n){n.d(t,{Zo:function(){return o},ah:function(){return l}});var r=n(7294);const a=r.createContext({});function l(e){const t=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function o({components:e,children:t,disableParentContext:n}){let o=l(e);return n&&(o=e||i),r.createElement(a.Provider,{value:o},t)}}}]);
//# sourceMappingURL=2917f5a5e266499d0802c47f6e58a46eaa4ce194-0836fcf2b4be9f77e1de.js.map