(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[704],{49101:function(He,pe,u){"use strict";u.d(pe,{Z:function(){return z}});var J=u(28991),P=u(67294),t={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},S=t,ye=u(27029),ge=function(j,Ie){return P.createElement(ye.Z,(0,J.Z)((0,J.Z)({},j),{},{ref:Ie,icon:S}))};ge.displayName="PlusOutlined";var z=P.forwardRef(ge)},25414:function(){},51752:function(He,pe,u){"use strict";u.d(pe,{Z:function(){return ra}});var J=u(22122),P=u(96156),t=u(67294),S=u(28481),ye=u(90484),ge=u(81253),z=u(28991),Ve=u(94184),j=u.n(Ve),Ie=u(50344),wt=u(31131),ze=u(21770),je=u(85061),ce=u(75164),Fe=u(4084);function Ue(e){var o=(0,t.useRef)(),n=(0,t.useRef)(!1);function r(){for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];n.current||(ce.Z.cancel(o.current),o.current=(0,ce.Z)(function(){e.apply(void 0,i)}))}return(0,t.useEffect)(function(){return function(){n.current=!0,ce.Z.cancel(o.current)}},[]),r}function Mt(e){var o=(0,t.useRef)([]),n=(0,t.useState)({}),r=(0,S.Z)(n,2),a=r[1],i=(0,t.useRef)(typeof e=="function"?e():e),l=Ue(function(){var s=i.current;o.current.forEach(function(p){s=p(s)}),o.current=[],i.current=s,a({})});function c(s){o.current.push(s),l()}return[i.current,c]}var Y=u(15105);function At(e,o){var n,r=e.prefixCls,a=e.id,i=e.active,l=e.tab,c=l.key,s=l.tab,p=l.disabled,y=l.closeIcon,v=e.closable,E=e.renderWrapper,N=e.removeAriaLabel,T=e.editable,g=e.onClick,I=e.onRemove,K=e.onFocus,O=e.style,Z=e.className,f="".concat(r,"-tab");t.useEffect(function(){return I},[]);var V=T&&v!==!1&&!p;function A(m){p||g(m)}function B(m){m.preventDefault(),m.stopPropagation(),T.onEdit("remove",{key:c,event:m})}var $=t.createElement("div",{key:c,ref:o,className:j()(f,Z,(n={},(0,P.Z)(n,"".concat(f,"-with-remove"),V),(0,P.Z)(n,"".concat(f,"-active"),i),(0,P.Z)(n,"".concat(f,"-disabled"),p),n)),style:O,onClick:A},t.createElement("div",{role:"tab","aria-selected":i,id:a&&"".concat(a,"-tab-").concat(c),className:"".concat(f,"-btn"),"aria-controls":a&&"".concat(a,"-panel-").concat(c),"aria-disabled":p,tabIndex:p?null:0,onClick:function(b){b.stopPropagation(),A(b)},onKeyDown:function(b){[Y.Z.SPACE,Y.Z.ENTER].includes(b.which)&&(b.preventDefault(),A(b))},onFocus:K},s),V&&t.createElement("button",{type:"button","aria-label":N||"remove",tabIndex:0,className:"".concat(f,"-remove"),onClick:function(b){b.stopPropagation(),B(b)}},y||T.removeIcon||"\xD7"));return E?E($):$}var Lt=t.forwardRef(At),Ge={width:0,height:0,left:0,top:0};function Wt(e,o,n){return(0,t.useMemo)(function(){for(var r,a=new Map,i=o.get((r=e[0])===null||r===void 0?void 0:r.key)||Ge,l=i.left+i.width,c=0;c<e.length;c+=1){var s=e[c].key,p=o.get(s);if(!p){var y;p=o.get((y=e[c-1])===null||y===void 0?void 0:y.key)||Ge}var v=a.get(s)||(0,z.Z)({},p);v.right=l-v.left-v.width,a.set(s,v)}return a},[e.map(function(r){return r.key}).join("_"),o,n])}var Ye={width:0,height:0,left:0,top:0,right:0};function Ot(e,o,n,r,a){var i=a.tabs,l=a.tabPosition,c=a.rtl,s,p,y;["top","bottom"].includes(l)?(s="width",p=c?"right":"left",y=Math.abs(o.left)):(s="height",p="top",y=-o.top);var v=o[s],E=n[s],N=r[s],T=v;return E+N>v&&(T=v-N),(0,t.useMemo)(function(){if(!i.length)return[0,0];for(var g=i.length,I=g,K=0;K<g;K+=1){var O=e.get(i[K].key)||Ye;if(O[p]+O[s]>y+T){I=K-1;break}}for(var Z=0,f=g-1;f>=0;f-=1){var V=e.get(i[f].key)||Ye;if(V[p]<y){Z=f+1;break}}return[Z,I]},[e,y,T,l,i.map(function(g){return g.key}).join("_"),c])}var Xe=u(10985),Bt=u(70271);function Dt(e,o){var n=e.prefixCls,r=e.editable,a=e.locale,i=e.style;return!r||r.showAdd===!1?null:t.createElement("button",{ref:o,type:"button",className:"".concat(n,"-nav-add"),style:i,"aria-label":(a==null?void 0:a.addAriaLabel)||"Add tab",onClick:function(c){r.onEdit("add",{event:c})}},r.addIcon||"+")}var Je=t.forwardRef(Dt);function Kt(e,o){var n=e.prefixCls,r=e.id,a=e.tabs,i=e.locale,l=e.mobile,c=e.moreIcon,s=c===void 0?"More":c,p=e.moreTransitionName,y=e.style,v=e.className,E=e.editable,N=e.tabBarGutter,T=e.rtl,g=e.removeAriaLabel,I=e.onTabClick,K=(0,t.useState)(!1),O=(0,S.Z)(K,2),Z=O[0],f=O[1],V=(0,t.useState)(null),A=(0,S.Z)(V,2),B=A[0],$=A[1],m="".concat(r,"-more-popup"),b="".concat(n,"-dropdown"),k=B!==null?"".concat(m,"-").concat(B):null,d=i==null?void 0:i.dropdownAriaLabel;function R(h,M){h.preventDefault(),h.stopPropagation(),E.onEdit("remove",{key:M,event:h})}var w=t.createElement(Xe.ZP,{onClick:function(M){var F=M.key,H=M.domEvent;I(F,H),f(!1)},id:m,tabIndex:-1,role:"listbox","aria-activedescendant":k,selectedKeys:[B],"aria-label":d!==void 0?d:"expanded dropdown"},a.map(function(h){var M=E&&h.closable!==!1&&!h.disabled;return t.createElement(Xe.sN,{key:h.key,id:"".concat(m,"-").concat(h.key),role:"option","aria-controls":r&&"".concat(r,"-panel-").concat(h.key),disabled:h.disabled},t.createElement("span",null,h.tab),M&&t.createElement("button",{type:"button","aria-label":g||"remove",tabIndex:0,className:"".concat(b,"-menu-item-remove"),onClick:function(H){H.stopPropagation(),R(H,h.key)}},h.closeIcon||E.removeIcon||"\xD7"))}));function L(h){for(var M=a.filter(function(_){return!_.disabled}),F=M.findIndex(function(_){return _.key===B})||0,H=M.length,ae=0;ae<H;ae+=1){F=(F+h+H)%H;var ne=M[F];if(!ne.disabled){$(ne.key);return}}}function q(h){var M=h.which;if(!Z){[Y.Z.DOWN,Y.Z.SPACE,Y.Z.ENTER].includes(M)&&(f(!0),h.preventDefault());return}switch(M){case Y.Z.UP:L(-1),h.preventDefault();break;case Y.Z.DOWN:L(1),h.preventDefault();break;case Y.Z.ESC:f(!1);break;case Y.Z.SPACE:case Y.Z.ENTER:B!==null&&I(B,h);break}}(0,t.useEffect)(function(){var h=document.getElementById(k);h&&h.scrollIntoView&&h.scrollIntoView(!1)},[B]),(0,t.useEffect)(function(){Z||$(null)},[Z]);var Q=(0,P.Z)({},T?"marginRight":"marginLeft",N);a.length||(Q.visibility="hidden",Q.order=1);var ie=j()((0,P.Z)({},"".concat(b,"-rtl"),T)),U=l?null:t.createElement(Bt.Z,{prefixCls:b,overlay:w,trigger:["hover"],visible:Z,transitionName:p,onVisibleChange:f,overlayClassName:ie,mouseEnterDelay:.1,mouseLeaveDelay:.1},t.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:Q,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":m,id:"".concat(r,"-more"),"aria-expanded":Z,onKeyDown:q},s));return t.createElement("div",{className:j()("".concat(n,"-nav-operations"),v),style:y,ref:o},U,t.createElement(Je,{prefixCls:n,locale:i,editable:E}))}var $t=t.memo(t.forwardRef(Kt),function(e,o){return o.tabMoving}),ke=(0,t.createContext)(null),Ht=.1,Qe=.01,Se=20,qe=Math.pow(.995,Se);function Vt(e,o){var n=(0,t.useState)(),r=(0,S.Z)(n,2),a=r[0],i=r[1],l=(0,t.useState)(0),c=(0,S.Z)(l,2),s=c[0],p=c[1],y=(0,t.useState)(0),v=(0,S.Z)(y,2),E=v[0],N=v[1],T=(0,t.useState)(),g=(0,S.Z)(T,2),I=g[0],K=g[1],O=(0,t.useRef)();function Z(m){var b=m.touches[0],k=b.screenX,d=b.screenY;i({x:k,y:d}),window.clearInterval(O.current)}function f(m){if(!!a){m.preventDefault();var b=m.touches[0],k=b.screenX,d=b.screenY;i({x:k,y:d});var R=k-a.x,w=d-a.y;o(R,w);var L=Date.now();p(L),N(L-s),K({x:R,y:w})}}function V(){if(!!a&&(i(null),K(null),I)){var m=I.x/E,b=I.y/E,k=Math.abs(m),d=Math.abs(b);if(Math.max(k,d)<Ht)return;var R=m,w=b;O.current=window.setInterval(function(){if(Math.abs(R)<Qe&&Math.abs(w)<Qe){window.clearInterval(O.current);return}R*=qe,w*=qe,o(R*Se,w*Se)},Se)}}var A=(0,t.useRef)();function B(m){var b=m.deltaX,k=m.deltaY,d=0,R=Math.abs(b),w=Math.abs(k);R===w?d=A.current==="x"?b:k:R>w?(d=b,A.current="x"):(d=k,A.current="y"),o(-d,-d)&&m.preventDefault()}var $=(0,t.useRef)(null);$.current={onTouchStart:Z,onTouchMove:f,onTouchEnd:V,onWheel:B},t.useEffect(function(){function m(R){$.current.onTouchStart(R)}function b(R){$.current.onTouchMove(R)}function k(R){$.current.onTouchEnd(R)}function d(R){$.current.onWheel(R)}return document.addEventListener("touchmove",b,{passive:!1}),document.addEventListener("touchend",k,{passive:!1}),e.current.addEventListener("touchstart",m,{passive:!1}),e.current.addEventListener("wheel",d),function(){document.removeEventListener("touchmove",b),document.removeEventListener("touchend",k)}},[])}function zt(){var e=(0,t.useRef)(new Map);function o(r){return e.current.has(r)||e.current.set(r,t.createRef()),e.current.get(r)}function n(r){e.current.delete(r)}return[o,n]}function _e(e,o){var n=t.useRef(e),r=t.useState({}),a=(0,S.Z)(r,2),i=a[1];function l(c){var s=typeof c=="function"?c(n.current):c;s!==n.current&&o(s,n.current),n.current=s,i({})}return[n.current,l]}var et=function(o){var n=o.position,r=o.prefixCls,a=o.extra;if(!a)return null;var i,l={};return a&&(0,ye.Z)(a)==="object"&&!t.isValidElement(a)?l=a:l.right=a,n==="right"&&(i=l.right),n==="left"&&(i=l.left),i?t.createElement("div",{className:"".concat(r,"-extra-content")},i):null};function jt(e,o){var n,r=t.useContext(ke),a=r.prefixCls,i=r.tabs,l=e.className,c=e.style,s=e.id,p=e.animated,y=e.activeKey,v=e.rtl,E=e.extra,N=e.editable,T=e.locale,g=e.tabPosition,I=e.tabBarGutter,K=e.children,O=e.onTabClick,Z=e.onTabScroll,f=(0,t.useRef)(),V=(0,t.useRef)(),A=(0,t.useRef)(),B=(0,t.useRef)(),$=zt(),m=(0,S.Z)($,2),b=m[0],k=m[1],d=g==="top"||g==="bottom",R=_e(0,function(x,C){d&&Z&&Z({direction:x>C?"left":"right"})}),w=(0,S.Z)(R,2),L=w[0],q=w[1],Q=_e(0,function(x,C){!d&&Z&&Z({direction:x>C?"top":"bottom"})}),ie=(0,S.Z)(Q,2),U=ie[0],h=ie[1],M=(0,t.useState)(0),F=(0,S.Z)(M,2),H=F[0],ae=F[1],ne=(0,t.useState)(0),_=(0,S.Z)(ne,2),ue=_[0],Ee=_[1],we=(0,t.useState)(0),xe=(0,S.Z)(we,2),de=xe[0],Me=xe[1],Ce=(0,t.useState)(0),se=(0,S.Z)(Ce,2),Ze=se[0],D=se[1],re=(0,t.useState)(null),Te=(0,S.Z)(re,2),X=Te[0],oa=Te[1],ia=(0,t.useState)(null),it=(0,S.Z)(ia,2),le=it[0],sa=it[1],la=(0,t.useState)(0),st=(0,S.Z)(la,2),ca=st[0],ua=st[1],da=(0,t.useState)(0),lt=(0,S.Z)(da,2),va=lt[0],fa=lt[1],ma=Mt(new Map),ct=(0,S.Z)(ma,2),ba=ct[0],ha=ct[1],Re=Wt(i,ba,H),ut="".concat(a,"-nav-operations-hidden"),ve=0,fe=0;d?v?(ve=0,fe=Math.max(0,H-X)):(ve=Math.min(0,X-H),fe=0):(ve=Math.min(0,le-ue),fe=0);function Ae(x){return x<ve?ve:x>fe?fe:x}var dt=(0,t.useRef)(),pa=(0,t.useState)(),vt=(0,S.Z)(pa,2),Pe=vt[0],ft=vt[1];function Le(){ft(Date.now())}function We(){window.clearTimeout(dt.current)}Vt(f,function(x,C){function W(G,te){G(function(oe){var be=Ae(oe+te);return be})}if(d){if(X>=H)return!1;W(q,x)}else{if(le>=ue)return!1;W(h,C)}return We(),Le(),!0}),(0,t.useEffect)(function(){return We(),Pe&&(dt.current=window.setTimeout(function(){ft(0)},100)),We},[Pe]);function mt(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:y,C=Re.get(x)||{width:0,height:0,left:0,right:0,top:0};if(d){var W=L;v?C.right<L?W=C.right:C.right+C.width>L+X&&(W=C.right+C.width-X):C.left<-L?W=-C.left:C.left+C.width>-L+X&&(W=-(C.left+C.width-X)),h(0),q(Ae(W))}else{var G=U;C.top<-U?G=-C.top:C.top+C.height>-U+le&&(G=-(C.top+C.height-le)),q(0),h(Ae(G))}}var ya=Ot(Re,{width:X,height:le,left:L,top:U},{width:de,height:Ze},{width:ca,height:va},(0,z.Z)((0,z.Z)({},e),{},{tabs:i})),bt=(0,S.Z)(ya,2),ga=bt[0],Sa=bt[1],Ne={};g==="top"||g==="bottom"?Ne[v?"marginRight":"marginLeft"]=I:Ne.marginTop=I;var ht=i.map(function(x,C){var W=x.key,G=x.className;return t.createElement(Lt,{id:s,prefixCls:a,key:W,tab:x,style:C===0?void 0:Ne,className:G,closable:x.closable,editable:N,active:W===y,renderWrapper:K,removeAriaLabel:T==null?void 0:T.removeAriaLabel,ref:b(W),onClick:function(oe){O(W,oe)},onRemove:function(){k(W)},onFocus:function(){mt(W),Le(),!!f.current&&(v||(f.current.scrollLeft=0),f.current.scrollTop=0)}})}),Oe=Ue(function(){var x,C,W,G,te,oe,be,Ke,$e,Ra=((x=f.current)===null||x===void 0?void 0:x.offsetWidth)||0,Pa=((C=f.current)===null||C===void 0?void 0:C.offsetHeight)||0,Zt=((W=B.current)===null||W===void 0?void 0:W.offsetWidth)||0,Tt=((G=B.current)===null||G===void 0?void 0:G.offsetHeight)||0,Na=((te=A.current)===null||te===void 0?void 0:te.offsetWidth)||0,Ia=((oe=A.current)===null||oe===void 0?void 0:oe.offsetHeight)||0;oa(Ra),sa(Pa),ua(Zt),fa(Tt);var Rt=(((be=V.current)===null||be===void 0?void 0:be.offsetWidth)||0)-Zt,Pt=(((Ke=V.current)===null||Ke===void 0?void 0:Ke.offsetHeight)||0)-Tt;ae(Rt),Ee(Pt);var Nt=($e=A.current)===null||$e===void 0?void 0:$e.className.includes(ut);Me(Rt-(Nt?0:Na)),D(Pt-(Nt?0:Ia)),ha(function(){var It=new Map;return i.forEach(function(ka){var kt=ka.key,he=b(kt).current;he&&It.set(kt,{width:he.offsetWidth,height:he.offsetHeight,left:he.offsetLeft,top:he.offsetTop})}),It})}),Ea=i.slice(0,ga),xa=i.slice(Sa+1),pt=[].concat((0,je.Z)(Ea),(0,je.Z)(xa)),Ca=(0,t.useState)(),yt=(0,S.Z)(Ca,2),Za=yt[0],Ta=yt[1],ee=Re.get(y),gt=(0,t.useRef)();function St(){ce.Z.cancel(gt.current)}(0,t.useEffect)(function(){var x={};return ee&&(d?(v?x.right=ee.right:x.left=ee.left,x.width=ee.width):(x.top=ee.top,x.height=ee.height)),St(),gt.current=(0,ce.Z)(function(){Ta(x)}),St},[ee,d,v]),(0,t.useEffect)(function(){mt()},[y,ee,Re,d]),(0,t.useEffect)(function(){Oe()},[v,I,y,i.map(function(x){return x.key}).join("_")]);var Et=!!pt.length,me="".concat(a,"-nav-wrap"),Be,De,xt,Ct;return d?v?(De=L>0,Be=L+X<H):(Be=L<0,De=-L+X<H):(xt=U<0,Ct=-U+le<ue),t.createElement("div",{ref:o,role:"tablist",className:j()("".concat(a,"-nav"),l),style:c,onKeyDown:function(){Le()}},t.createElement(et,{position:"left",extra:E,prefixCls:a}),t.createElement(Fe.Z,{onResize:Oe},t.createElement("div",{className:j()(me,(n={},(0,P.Z)(n,"".concat(me,"-ping-left"),Be),(0,P.Z)(n,"".concat(me,"-ping-right"),De),(0,P.Z)(n,"".concat(me,"-ping-top"),xt),(0,P.Z)(n,"".concat(me,"-ping-bottom"),Ct),n)),ref:f},t.createElement(Fe.Z,{onResize:Oe},t.createElement("div",{ref:V,className:"".concat(a,"-nav-list"),style:{transform:"translate(".concat(L,"px, ").concat(U,"px)"),transition:Pe?"none":void 0}},ht,t.createElement(Je,{ref:B,prefixCls:a,locale:T,editable:N,style:(0,z.Z)((0,z.Z)({},ht.length===0?void 0:Ne),{},{visibility:Et?"hidden":null})}),t.createElement("div",{className:j()("".concat(a,"-ink-bar"),(0,P.Z)({},"".concat(a,"-ink-bar-animated"),p.inkBar)),style:Za}))))),t.createElement($t,(0,J.Z)({},e,{removeAriaLabel:T==null?void 0:T.removeAriaLabel,ref:A,prefixCls:a,tabs:pt,className:!Et&&ut,tabMoving:!!Pe})),t.createElement(et,{position:"right",extra:E,prefixCls:a}))}var tt=t.forwardRef(jt);function Ft(e){var o=e.id,n=e.activeKey,r=e.animated,a=e.tabPosition,i=e.rtl,l=e.destroyInactiveTabPane,c=t.useContext(ke),s=c.prefixCls,p=c.tabs,y=r.tabPane,v=p.findIndex(function(E){return E.key===n});return t.createElement("div",{className:j()("".concat(s,"-content-holder"))},t.createElement("div",{className:j()("".concat(s,"-content"),"".concat(s,"-content-").concat(a),(0,P.Z)({},"".concat(s,"-content-animated"),y)),style:v&&y?(0,P.Z)({},i?"marginRight":"marginLeft","-".concat(v,"00%")):null},p.map(function(E){return t.cloneElement(E.node,{key:E.key,prefixCls:s,tabKey:E.key,id:o,animated:y,active:E.key===n,destroyInactiveTabPane:l})})))}function at(e){var o=e.prefixCls,n=e.forceRender,r=e.className,a=e.style,i=e.id,l=e.active,c=e.animated,s=e.destroyInactiveTabPane,p=e.tabKey,y=e.children,v=t.useState(n),E=(0,S.Z)(v,2),N=E[0],T=E[1];t.useEffect(function(){l?T(!0):s&&T(!1)},[l,s]);var g={};return l||(c?(g.visibility="hidden",g.height=0,g.overflowY="hidden"):g.display="none"),t.createElement("div",{id:i&&"".concat(i,"-panel-").concat(p),role:"tabpanel",tabIndex:l?0:-1,"aria-labelledby":i&&"".concat(i,"-tab-").concat(p),"aria-hidden":!l,style:(0,z.Z)((0,z.Z)({},g),a),className:j()("".concat(o,"-tabpane"),l&&"".concat(o,"-tabpane-active"),r)},(l||N||n)&&y)}var Ut=["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"],nt=0;function Gt(e){return(0,Ie.Z)(e).map(function(o){if(t.isValidElement(o)){var n=o.key!==void 0?String(o.key):void 0;return(0,z.Z)((0,z.Z)({key:n},o.props),{},{node:o})}return null}).filter(function(o){return o})}function Yt(e,o){var n,r=e.id,a=e.prefixCls,i=a===void 0?"rc-tabs":a,l=e.className,c=e.children,s=e.direction,p=e.activeKey,y=e.defaultActiveKey,v=e.editable,E=e.animated,N=E===void 0?{inkBar:!0,tabPane:!1}:E,T=e.tabPosition,g=T===void 0?"top":T,I=e.tabBarGutter,K=e.tabBarStyle,O=e.tabBarExtraContent,Z=e.locale,f=e.moreIcon,V=e.moreTransitionName,A=e.destroyInactiveTabPane,B=e.renderTabBar,$=e.onChange,m=e.onTabClick,b=e.onTabScroll,k=(0,ge.Z)(e,Ut),d=Gt(c),R=s==="rtl",w;N===!1?w={inkBar:!1,tabPane:!1}:N===!0?w={inkBar:!0,tabPane:!0}:w=(0,z.Z)({inkBar:!0,tabPane:!1},(0,ye.Z)(N)==="object"?N:{});var L=(0,t.useState)(!1),q=(0,S.Z)(L,2),Q=q[0],ie=q[1];(0,t.useEffect)(function(){ie((0,wt.Z)())},[]);var U=(0,ze.Z)(function(){var D;return(D=d[0])===null||D===void 0?void 0:D.key},{value:p,defaultValue:y}),h=(0,S.Z)(U,2),M=h[0],F=h[1],H=(0,t.useState)(function(){return d.findIndex(function(D){return D.key===M})}),ae=(0,S.Z)(H,2),ne=ae[0],_=ae[1];(0,t.useEffect)(function(){var D=d.findIndex(function(Te){return Te.key===M});if(D===-1){var re;D=Math.max(0,Math.min(ne,d.length-1)),F((re=d[D])===null||re===void 0?void 0:re.key)}_(D)},[d.map(function(D){return D.key}).join("_"),M,ne]);var ue=(0,ze.Z)(null,{value:r}),Ee=(0,S.Z)(ue,2),we=Ee[0],xe=Ee[1],de=g;Q&&!["left","right"].includes(g)&&(de="top"),(0,t.useEffect)(function(){r||(xe("rc-tabs-".concat(nt)),nt+=1)},[]);function Me(D,re){m==null||m(D,re),F(D),$==null||$(D)}var Ce={id:we,activeKey:M,animated:w,tabPosition:de,rtl:R,mobile:Q},se,Ze=(0,z.Z)((0,z.Z)({},Ce),{},{editable:v,locale:Z,moreIcon:f,moreTransitionName:V,tabBarGutter:I,onTabClick:Me,onTabScroll:b,extra:O,style:K,panes:c});return B?se=B(Ze,tt):se=t.createElement(tt,Ze),t.createElement(ke.Provider,{value:{tabs:d,prefixCls:i}},t.createElement("div",(0,J.Z)({ref:o,id:r,className:j()(i,"".concat(i,"-").concat(de),(n={},(0,P.Z)(n,"".concat(i,"-mobile"),Q),(0,P.Z)(n,"".concat(i,"-editable"),v),(0,P.Z)(n,"".concat(i,"-rtl"),R),n),l)},k),se,t.createElement(Ft,(0,J.Z)({destroyInactiveTabPane:A},Ce,{animated:w}))))}var rt=t.forwardRef(Yt);rt.TabPane=at;var Xt=rt,Jt=Xt,Qt=u(44545),qt=u(49101),_t=u(54549),ea=u(21687),ta=u(65632),aa=u(97647),na=function(e,o){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&o.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)o.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function ot(e){var o=e.type,n=e.className,r=e.size,a=e.onEdit,i=e.hideAdd,l=e.centered,c=e.addIcon,s=na(e,["type","className","size","onEdit","hideAdd","centered","addIcon"]),p=s.prefixCls,y=s.moreIcon,v=y===void 0?t.createElement(Qt.Z,null):y,E=t.useContext(ta.E_),N=E.getPrefixCls,T=E.direction,g=N("tabs",p),I;o==="editable-card"&&(I={onEdit:function(Z,f){var V=f.key,A=f.event;a==null||a(Z==="add"?A:V,Z)},removeIcon:t.createElement(_t.Z,null),addIcon:c||t.createElement(qt.Z,null),showAdd:i!==!0});var K=N();return(0,ea.Z)(!("onPrevClick"in s)&&!("onNextClick"in s),"Tabs","`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead."),t.createElement(aa.Z.Consumer,null,function(O){var Z,f=r!==void 0?r:O;return t.createElement(Jt,(0,J.Z)({direction:T,moreTransitionName:"".concat(K,"-slide-up")},s,{className:j()((Z={},(0,P.Z)(Z,"".concat(g,"-").concat(f),f),(0,P.Z)(Z,"".concat(g,"-card"),["card","editable-card"].includes(o)),(0,P.Z)(Z,"".concat(g,"-editable-card"),o==="editable-card"),(0,P.Z)(Z,"".concat(g,"-centered"),l),Z),n),editable:I,moreIcon:v,prefixCls:g}))})}ot.TabPane=at;var ra=ot},18106:function(He,pe,u){"use strict";var J=u(65056),P=u.n(J),t=u(25414),S=u.n(t)}}]);