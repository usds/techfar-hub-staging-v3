"use strict";(self.webpackChunktech_far_hub=self.webpackChunktech_far_hub||[]).push([[7695],{2632:function(e,t,n){n.r(t),n.d(t,{Head:function(){return g},default:function(){return h}});var a=n(1151),r=n(7294);function l(e){const t=Object.assign({h3:"h3",ol:"ol",li:"li",a:"a",p:"p"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h3,{id:"01-get-started"},"01. Get Started"),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"/techfar-hub-staging-v3/branches/mattbowen-usds:v3-76-homepage-editing/get-started/"},"What is the TechFAR Hub?")),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"/techfar-hub-staging-v3/branches/mattbowen-usds:v3-76-homepage-editing/get-started/#how-to-use-techfar-hub"},"How to Use the TFH")),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://github.com/usds/techfar-hub-website-v3"},"How to Get Involved")),"\n"),"\n",r.createElement(t.h3,{id:"02-tfh-lifecycle"},"02. TFH Lifecycle"),"\n",r.createElement(t.p,null,"See how the TechFAR Hub takes an agile approach to digital acquisition."),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"/techfar-hub-staging-v3/branches/mattbowen-usds:v3-76-homepage-editing/pre-solicitation/"},"Pre-Solicitation")),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"/techfar-hub-staging-v3/branches/mattbowen-usds:v3-76-homepage-editing/solicitation/"},"Solicitation")),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"/techfar-hub-staging-v3/branches/mattbowen-usds:v3-76-homepage-editing/evaluation/"},"Evaluation")),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"/techfar-hub-staging-v3/branches/mattbowen-usds:v3-76-homepage-editing/contract-administration/"},"Contract Administration")),"\n"),"\n",r.createElement(t.h3,{id:"03-resources"},"03. Resources"),"\n",r.createElement(t.p,null,"View first-hand experiences of fellows acquisition professionals, get tools, access training, and more"),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"/techfar-hub-staging-v3/branches/mattbowen-usds:v3-76-homepage-editing/resources/templates-samples/agile-team-estimator/"},"Agile Estimator")),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"#"},"Sources Sought Tool")),"\n"))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(l,e)):l(e)},c=n(1244),s=n(5426),o=n(4001),m=n(5537);const u=e=>{let{data:t,children:n,pageContext:a}=e;return t.currentPage.frontmatter&&t.siblings&&t.currentPage.tableOfContents?r.createElement(m.Z,{frontmatter:t.currentPage.frontmatter,siblings:t.siblings,tableOfContents:t.currentPage.tableOfContents,pageContext:a,useNextLink:!1},r.createElement(s.Z,null,n)):r.createElement(c.Z,{pagePath:a.pagePath},r.createElement("h1",null,"Something went wrong"))};function h(e){return r.createElement(u,e,r.createElement(i,e))}const g=e=>{var t;let{data:n}=e;return r.createElement(o.H,{frontmatter:null===(t=n.currentPage)||void 0===t?void 0:t.frontmatter})}},5537:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(958),r=n(1883),l=n(7294),i=n(1244),c=n(5007);var s=()=>{const e=(0,r.useStaticQuery)("681239289");return l.createElement(a.CardGroup,null,e.allMarkdownRemark.edges.map((e=>{let{node:t}=e;return l.createElement(c.Z,{node:t,key:t.id})})))},o=n(991);const m=e=>{let{tags:t}=e;if(t&&t.length){const e=t.map((e=>{if(e)return l.createElement(o.n,{href:"/tags/"+e,key:"tag-"+e},e)}));return l.createElement("div",{className:"tfh-tagBox"},l.createElement("h4",null,"Tags"),e)}return null};var u=e=>{let{frontmatter:t,siblings:n,tableOfContents:c,pageContext:u,children:h,useNextLink:g=!1,showSiblings:f=!0}=e;const d=null==t?void 0:t.slug,E=2===u.pathParts.length,p=c.items?c.items.map((e=>{const t=f?"font-ui-3xs":"";return l.createElement("a",{href:e.url,key:e.url,className:t},e.title)})):[];let b=!1,v=null;const k=n.nodes.map((e=>{if(e&&e.frontmatter&&e.frontmatter.slug&&e.frontmatter.heading&&e.parent&&"relativeDirectory"in e.parent){const t="index"===e.frontmatter.slug?"":e.frontmatter.slug;if(E)return e.parent.relativeDirectory.startsWith(u.pathParts.join("/").slice(1))&&e.parent.relativePath!==u.filePath?e.frontmatter.link?l.createElement(o.n,{href:e.frontmatter.link},e.frontmatter.heading):l.createElement(r.Link,{to:"/"+e.parent.relativeDirectory+"/"+t},e.frontmatter.heading):null;if(e.frontmatter.slug===d&&e.parent.relativePath===u.filePath)return b=!0,l.createElement(l.Fragment,null,f&&l.createElement("a",{href:"#",className:"usa-current",key:"current"},e.frontmatter.heading),p.length>0&&l.createElement(a.SideNav,{items:p}));if(f){if(b&&(e.frontmatter.link||(v=e.frontmatter),b=!1),!e.frontmatter.link)return l.createElement(r.Link,{to:"/"+e.parent.relativeDirectory+"/"+t},e.frontmatter.heading);o.n,e.frontmatter.link,e.frontmatter.heading}}})).filter((e=>!!e));return l.createElement(i.Z,{breadCrumbs:u.breadCrumbs,pagePath:u.pagePath},l.createElement(a.Grid,{row:!0,gap:2,className:"margin-bottom-4"},l.createElement(a.Grid,{tablet:{col:2}},l.createElement("div",{className:"position-sticky top-0"},l.createElement(a.SideNav,{items:k}),(null==t?void 0:t.tags)&&l.createElement(m,{tags:t.tags}))),l.createElement(a.Grid,{tablet:{col:10}},l.createElement("h1",null,null==t?void 0:t.heading),h,g&&null!==v&&l.createElement("span",{className:"tfh-next-link"},l.createElement(r.Link,{to:u.parentPath+"/"+v.slug},l.createElement("strong",null,"Next: ",v.heading))))),l.createElement(a.Grid,{row:!0,className:"tfh-resources-bar"},l.createElement(a.Grid,{col:"fill"},l.createElement("hr",null),l.createElement("h3",{className:"font-ui-xl"},"Resources"),l.createElement(s,null))))}}}]);
//# sourceMappingURL=component---src-pages-template-default-tsx-content-file-path-home-runner-work-techfar-hub-website-v-3-techfar-hub-website-v-3-tech-far-hub-content-promos-homepage-right-rail-md-db1754030a141bd32fd7.js.map