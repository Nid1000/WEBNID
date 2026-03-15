module.exports=[92631,a=>{"use strict";a.s(["Toaster",()=>Y,"toast",()=>D],92631);var b,c=a.i(94481);let d={data:""},e=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,f=/\/\*[^]*?\*\/|  +/g,g=/\n+/g,h=(a,b)=>{let c="",d="",e="";for(let f in a){let g=a[f];"@"==f[0]?"i"==f[1]?c=f+" "+g+";":d+="f"==f[1]?h(g,f):f+"{"+h(g,"k"==f[1]?"":b)+"}":"object"==typeof g?d+=h(g,b?b.replace(/([^,])+/g,a=>f.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,b=>/&/.test(b)?b.replace(/&/g,a):a?a+" "+b:b)):f):null!=g&&(f=/^--/.test(f)?f:f.replace(/[A-Z]/g,"-$&").toLowerCase(),e+=h.p?h.p(f,g):f+":"+g+";")}return c+(b&&e?b+"{"+e+"}":e)+d},i={},j=a=>{if("object"==typeof a){let b="";for(let c in a)b+=c+j(a[c]);return b}return a};function k(a){let b,c,k=this||{},l=a.call?a(k.p):a;return((a,b,c,d,k)=>{var l,m,n,o;let p=j(a),q=i[p]||(i[p]=(a=>{let b=0,c=11;for(;b<a.length;)c=101*c+a.charCodeAt(b++)>>>0;return"go"+c})(p));if(!i[q]){let b=p!==a?a:(a=>{let b,c,d=[{}];for(;b=e.exec(a.replace(f,""));)b[4]?d.shift():b[3]?(c=b[3].replace(g," ").trim(),d.unshift(d[0][c]=d[0][c]||{})):d[0][b[1]]=b[2].replace(g," ").trim();return d[0]})(a);i[q]=h(k?{["@keyframes "+q]:b}:b,c?"":"."+q)}let r=c&&i.g?i.g:null;return c&&(i.g=i[q]),l=i[q],m=b,n=d,(o=r)?m.data=m.data.replace(o,l):-1===m.data.indexOf(l)&&(m.data=n?l+m.data:m.data+l),q})(l.unshift?l.raw?(b=[].slice.call(arguments,1),c=k.p,l.reduce((a,d,e)=>{let f=b[e];if(f&&f.call){let a=f(c),b=a&&a.props&&a.props.className||/^go/.test(a)&&a;f=b?"."+b:a&&"object"==typeof a?a.props?"":h(a,""):!1===a?"":a}return a+d+(null==f?"":f)},"")):l.reduce((a,b)=>Object.assign(a,b&&b.call?b(k.p):b),{}):l,k.target||d,k.g,k.o,k.k)}k.bind({g:1});let l,m,n,o=k.bind({k:1});function p(a,b){let c=this||{};return function(){let d=arguments;function e(f,g){let h=Object.assign({},f),i=h.className||e.className;c.p=Object.assign({theme:m&&m()},h),c.o=/ *go\d+/.test(i),h.className=k.apply(c,d)+(i?" "+i:""),b&&(h.ref=g);let j=a;return a[0]&&(j=h.as||a,delete h.as),n&&j[0]&&n(h),l(j,h)}return b?b(e):e}}var q=(a,b)=>"function"==typeof a?a(b):a,r=(()=>{let a=0;return()=>(++a).toString()})(),s=(()=>{let a;return()=>a})(),t="default",u=(a,b)=>{let{toastLimit:c}=a.settings;switch(b.type){case 0:return{...a,toasts:[b.toast,...a.toasts].slice(0,c)};case 1:return{...a,toasts:a.toasts.map(a=>a.id===b.toast.id?{...a,...b.toast}:a)};case 2:let{toast:d}=b;return u(a,{type:+!!a.toasts.find(a=>a.id===d.id),toast:d});case 3:let{toastId:e}=b;return{...a,toasts:a.toasts.map(a=>a.id===e||void 0===e?{...a,dismissed:!0,visible:!1}:a)};case 4:return void 0===b.toastId?{...a,toasts:[]}:{...a,toasts:a.toasts.filter(a=>a.id!==b.toastId)};case 5:return{...a,pausedAt:b.time};case 6:let f=b.time-(a.pausedAt||0);return{...a,pausedAt:void 0,toasts:a.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+f}))}}},v=[],w={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},x={},y=(a,b=t)=>{x[b]=u(x[b]||w,a),v.forEach(([a,c])=>{a===b&&c(x[b])})},z=a=>Object.keys(x).forEach(b=>y(a,b)),A=(a=t)=>b=>{y(b,a)},B={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},C=a=>(b,c)=>{let d,e=((a,b="blank",c)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:b,ariaProps:{role:"status","aria-live":"polite"},message:a,pauseDuration:0,...c,id:(null==c?void 0:c.id)||r()}))(b,a,c);return A(e.toasterId||(d=e.id,Object.keys(x).find(a=>x[a].toasts.some(a=>a.id===d))))({type:2,toast:e}),e.id},D=(a,b)=>C("blank")(a,b);D.error=C("error"),D.success=C("success"),D.loading=C("loading"),D.custom=C("custom"),D.dismiss=(a,b)=>{let c={type:3,toastId:a};b?A(b)(c):z(c)},D.dismissAll=a=>D.dismiss(void 0,a),D.remove=(a,b)=>{let c={type:4,toastId:a};b?A(b)(c):z(c)},D.removeAll=a=>D.remove(void 0,a),D.promise=(a,b,c)=>{let d=D.loading(b.loading,{...c,...null==c?void 0:c.loading});return"function"==typeof a&&(a=a()),a.then(a=>{let e=b.success?q(b.success,a):void 0;return e?D.success(e,{id:d,...c,...null==c?void 0:c.success}):D.dismiss(d),a}).catch(a=>{let e=b.error?q(b.error,a):void 0;e?D.error(e,{id:d,...c,...null==c?void 0:c.error}):D.dismiss(d)}),a};var E=1e3,F=o`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,G=o`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,H=o`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,I=p("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${a=>a.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${F} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${G} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${a=>a.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${H} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,J=o`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,K=p("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${a=>a.secondary||"#e0e0e0"};
  border-right-color: ${a=>a.primary||"#616161"};
  animation: ${J} 1s linear infinite;
`,L=o`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,M=o`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,N=p("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${a=>a.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${L} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${M} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${a=>a.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,O=p("div")`
  position: absolute;
`,P=p("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Q=o`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,R=p("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Q} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,S=({toast:a})=>{let{icon:b,type:d,iconTheme:e}=a;return void 0!==b?"string"==typeof b?c.createElement(R,null,b):b:"blank"===d?null:c.createElement(P,null,c.createElement(K,{...e}),"loading"!==d&&c.createElement(O,null,"error"===d?c.createElement(I,{...e}):c.createElement(N,{...e})))},T=p("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,U=p("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,V=c.memo(({toast:a,position:b,style:d,children:e})=>{let f=a.height?((a,b)=>{let c=a.includes("top")?1:-1,[d,e]=s()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*c}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*c}%,-1px) scale(.6); opacity:0;}
`];return{animation:b?`${o(d)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${o(e)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(a.position||b||"top-center",a.visible):{opacity:0},g=c.createElement(S,{toast:a}),h=c.createElement(U,{...a.ariaProps},q(a.message,a));return c.createElement(T,{className:a.className,style:{...f,...d,...a.style}},"function"==typeof e?e({icon:g,message:h}):c.createElement(c.Fragment,null,g,h))});b=c.createElement,h.p=void 0,l=b,m=void 0,n=void 0;var W=({id:a,className:b,style:d,onHeightUpdate:e,children:f})=>{let g=c.useCallback(b=>{if(b){let c=()=>{e(a,b.getBoundingClientRect().height)};c(),new MutationObserver(c).observe(b,{subtree:!0,childList:!0,characterData:!0})}},[a,e]);return c.createElement("div",{ref:g,className:b,style:d},f)},X=k`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Y=({reverseOrder:a,position:b="top-center",toastOptions:d,gutter:e,children:f,toasterId:g,containerStyle:h,containerClassName:i})=>{let{toasts:j,handlers:k}=((a,b="default")=>{let{toasts:d,pausedAt:e}=((a={},b=t)=>{let[d,e]=(0,c.useState)(x[b]||w),f=(0,c.useRef)(x[b]);(0,c.useEffect)(()=>(f.current!==x[b]&&e(x[b]),v.push([b,e]),()=>{let a=v.findIndex(([a])=>a===b);a>-1&&v.splice(a,1)}),[b]);let g=d.toasts.map(b=>{var c,d,e;return{...a,...a[b.type],...b,removeDelay:b.removeDelay||(null==(c=a[b.type])?void 0:c.removeDelay)||(null==a?void 0:a.removeDelay),duration:b.duration||(null==(d=a[b.type])?void 0:d.duration)||(null==a?void 0:a.duration)||B[b.type],style:{...a.style,...null==(e=a[b.type])?void 0:e.style,...b.style}}});return{...d,toasts:g}})(a,b),f=(0,c.useRef)(new Map).current,g=(0,c.useCallback)((a,b=E)=>{if(f.has(a))return;let c=setTimeout(()=>{f.delete(a),h({type:4,toastId:a})},b);f.set(a,c)},[]);(0,c.useEffect)(()=>{if(e)return;let a=Date.now(),c=d.map(c=>{if(c.duration===1/0)return;let d=(c.duration||0)+c.pauseDuration-(a-c.createdAt);if(d<0){c.visible&&D.dismiss(c.id);return}return setTimeout(()=>D.dismiss(c.id,b),d)});return()=>{c.forEach(a=>a&&clearTimeout(a))}},[d,e,b]);let h=(0,c.useCallback)(A(b),[b]),i=(0,c.useCallback)(()=>{h({type:5,time:Date.now()})},[h]),j=(0,c.useCallback)((a,b)=>{h({type:1,toast:{id:a,height:b}})},[h]),k=(0,c.useCallback)(()=>{e&&h({type:6,time:Date.now()})},[e,h]),l=(0,c.useCallback)((a,b)=>{let{reverseOrder:c=!1,gutter:e=8,defaultPosition:f}=b||{},g=d.filter(b=>(b.position||f)===(a.position||f)&&b.height),h=g.findIndex(b=>b.id===a.id),i=g.filter((a,b)=>b<h&&a.visible).length;return g.filter(a=>a.visible).slice(...c?[i+1]:[0,i]).reduce((a,b)=>a+(b.height||0)+e,0)},[d]);return(0,c.useEffect)(()=>{d.forEach(a=>{if(a.dismissed)g(a.id,a.removeDelay);else{let b=f.get(a.id);b&&(clearTimeout(b),f.delete(a.id))}})},[d,g]),{toasts:d,handlers:{updateHeight:j,startPause:i,endPause:k,calculateOffset:l}}})(d,g);return c.createElement("div",{"data-rht-toaster":g||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...h},className:i,onMouseEnter:k.startPause,onMouseLeave:k.endPause},j.map(d=>{let g=d.position||b,h=((a,b)=>{let c=a.includes("top"),d=a.includes("center")?{justifyContent:"center"}:a.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:s()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${b*(c?1:-1)}px)`,...c?{top:0}:{bottom:0},...d}})(g,k.calculateOffset(d,{reverseOrder:a,gutter:e,defaultPosition:b}));return c.createElement(W,{id:d.id,key:d.id,onHeightUpdate:k.updateHeight,className:d.visible?X:"",style:h},"custom"===d.type?q(d.message,d):f?f(d):c.createElement(V,{toast:d,position:g}))}))}},27433,a=>{"use strict";a.s(["AnimatePresence",()=>s],27433);var b=a.i(88616),c=a.i(94481),d=a.i(44293),e=a.i(93361),f=a.i(20801),g=a.i(628),h=a.i(68291),i=c,j=a.i(37756);function k(a,b){if("function"==typeof a)return a(b);null!=a&&(a.current=b)}class l extends i.Component{getSnapshotBeforeUpdate(a){let b=this.props.childRef.current;if(b&&a.isPresent&&!this.props.isPresent){let a=b.offsetParent,c=(0,h.isHTMLElement)(a)&&a.offsetWidth||0,d=this.props.sizeRef.current;d.height=b.offsetHeight||0,d.width=b.offsetWidth||0,d.top=b.offsetTop,d.left=b.offsetLeft,d.right=c-d.width-d.left}return null}componentDidUpdate(){}render(){return this.props.children}}function m({children:a,isPresent:d,anchorX:e,root:f}){let g=(0,i.useId)(),h=(0,i.useRef)(null),m=(0,i.useRef)({width:0,height:0,top:0,left:0,right:0}),{nonce:n}=(0,i.useContext)(j.MotionConfigContext),o=function(...a){return c.useCallback(function(...a){return b=>{let c=!1,d=a.map(a=>{let d=k(a,b);return c||"function"!=typeof d||(c=!0),d});if(c)return()=>{for(let b=0;b<d.length;b++){let c=d[b];"function"==typeof c?c():k(a[b],null)}}}}(...a),a)}(h,a?.ref);return(0,i.useInsertionEffect)(()=>{let{width:a,height:b,top:c,left:i,right:j}=m.current;if(d||!h.current||!a||!b)return;let k="left"===e?`left: ${i}`:`right: ${j}`;h.current.dataset.motionPopId=g;let l=document.createElement("style");n&&(l.nonce=n);let o=f??document.head;return o.appendChild(l),l.sheet&&l.sheet.insertRule(`
          [data-motion-pop-id="${g}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${b}px !important;
            ${k}px !important;
            top: ${c}px !important;
          }
        `),()=>{o.contains(l)&&o.removeChild(l)}},[d]),(0,b.jsx)(l,{isPresent:d,childRef:h,sizeRef:m,children:i.cloneElement(a,{ref:o})})}let n=({children:a,initial:d,isPresent:f,onExitComplete:h,custom:i,presenceAffectsLayout:j,mode:k,anchorX:l,root:n})=>{let p=(0,e.useConstant)(o),q=(0,c.useId)(),r=!0,s=(0,c.useMemo)(()=>(r=!1,{id:q,initial:d,isPresent:f,custom:i,onExitComplete:a=>{for(let b of(p.set(a,!0),p.values()))if(!b)return;h&&h()},register:a=>(p.set(a,!1),()=>p.delete(a))}),[f,p,h]);return j&&r&&(s={...s}),(0,c.useMemo)(()=>{p.forEach((a,b)=>p.set(b,!1))},[f]),c.useEffect(()=>{f||p.size||!h||h()},[f]),"popLayout"===k&&(a=(0,b.jsx)(m,{isPresent:f,anchorX:l,root:n,children:a})),(0,b.jsx)(g.PresenceContext.Provider,{value:s,children:a})};function o(){return new Map}var p=a.i(99280);let q=a=>a.key||"";function r(a){let b=[];return c.Children.forEach(a,a=>{(0,c.isValidElement)(a)&&b.push(a)}),b}let s=({children:a,custom:g,initial:h=!0,onExitComplete:i,presenceAffectsLayout:j=!0,mode:k="sync",propagate:l=!1,anchorX:m="left",root:o})=>{let[s,t]=(0,p.usePresence)(l),u=(0,c.useMemo)(()=>r(a),[a]),v=l&&!s?[]:u.map(q),w=(0,c.useRef)(!0),x=(0,c.useRef)(u),y=(0,e.useConstant)(()=>new Map),[z,A]=(0,c.useState)(u),[B,C]=(0,c.useState)(u);(0,f.useIsomorphicLayoutEffect)(()=>{w.current=!1,x.current=u;for(let a=0;a<B.length;a++){let b=q(B[a]);v.includes(b)?y.delete(b):!0!==y.get(b)&&y.set(b,!1)}},[B,v.length,v.join("-")]);let D=[];if(u!==z){let a=[...u];for(let b=0;b<B.length;b++){let c=B[b],d=q(c);v.includes(d)||(a.splice(b,0,c),D.push(c))}return"wait"===k&&D.length&&(a=D),C(r(a)),A(u),null}let{forceRender:E}=(0,c.useContext)(d.LayoutGroupContext);return(0,b.jsx)(b.Fragment,{children:B.map(a=>{let c=q(a),d=(!l||!!s)&&(u===B||v.includes(c));return(0,b.jsx)(n,{isPresent:d,initial:(!w.current||!!h)&&void 0,custom:g,presenceAffectsLayout:j,mode:k,root:o,onExitComplete:d?void 0:()=>{if(!y.has(c))return;y.set(c,!0);let a=!0;y.forEach(b=>{b||(a=!1)}),a&&(E?.(),C(x.current),l&&t?.(),i&&i())},anchorX:m,children:a},c)})})}},63534,a=>{"use strict";a.s(["default",()=>c]);var b=a.i(92337);let c=function(a,c){let d=c?.width??800,e=`https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-4.0.3&auto=format&fit=crop&w=${d}&q=80`,f=(a=>{if(a)return String(a).trim().replace(/^[["'()\]]+|[["')\]]+$/g,"")||void 0})("string"==typeof a?a:a?.imagen??void 0);if(f&&f.startsWith("/"))return f;if(f&&(f.startsWith("http://")||f.startsWith("https://")))try{return new URL(f).toString()}catch{return e}return f?`${b.default.defaults.baseURL||""}/uploads/${f}`:e}},16912,a=>{"use strict";a.s(["CartProvider",()=>f,"useCart",()=>e]);var b=a.i(88616),c=a.i(94481);let d=(0,c.createContext)(),e=()=>{let a=(0,c.useContext)(d);if(!a)throw Error("useCart debe ser usado dentro de un CartProvider");return a},f=({children:a})=>{let[e,f]=(0,c.useState)([]),[g,h]=(0,c.useState)(!1);(0,c.useEffect)(()=>{},[]),(0,c.useEffect)(()=>{},[e]);let i=a=>{f(b=>b.filter(b=>b.id!==a))},j=a=>e.find(b=>b.id===a);return(0,b.jsx)(d.Provider,{value:{cartItems:e,isOpen:g,addToCart:(a,b=1)=>{f(c=>c.find(b=>b.id===a.id)?c.map(c=>c.id===a.id?{...c,cantidad:c.cantidad+b}:c):[...c,{...a,cantidad:b}])},removeFromCart:i,updateQuantity:(a,b)=>{if(b<=0)return void i(a);f(c=>c.map(c=>c.id===a?{...c,cantidad:b}:c))},clearCart:()=>{f([])},getCartTotal:()=>e.reduce((a,b)=>a+parseFloat(b.precio)*b.cantidad,0),getCartItemsCount:()=>e.reduce((a,b)=>a+b.cantidad,0),getCartItem:j,isInCart:a=>e.some(b=>b.id===a),toggleCart:()=>{h(!g)},openCart:()=>{h(!0)},closeCart:()=>{h(!1)},canAddToCart:(a,b=1)=>{let c=j(a.id);return(c?c.cantidad:0)+b<=a.stock},getOrderItems:()=>e.map(a=>({producto_id:a.id,cantidad:a.cantidad,precio_unitario:parseFloat(a.precio)}))},children:a})}},69129,a=>{"use strict";a.s(["ShoppingCart",()=>b],69129);let b=(0,a.i(61353).default)("shopping-cart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]])},7506,a=>{"use strict";a.s(["default",()=>e]);var b=a.i(88616),c=a.i(94481),d=a.i(92337);function e({value:a,onChange:e,onSelect:f,placeholder:g}){let[h,i]=(0,c.useState)(!1),[j,k]=(0,c.useState)([]),[l,m]=(0,c.useState)(!1),n=(0,c.useRef)(null);return(0,c.useEffect)(()=>{let a=a=>{n.current&&(n.current.contains(a.target)||m(!1))};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[]),(0,c.useEffect)(()=>{let b=a.trim();if(b.length<2){k([]),m(!1);return}let c=!1;i(!0);let e=setTimeout(async()=>{try{let a=await d.default.get(`/api/productos?buscar=${encodeURIComponent(b)}&limite=5`),e=Array.isArray(a.data?.productos)?a.data.productos.map(a=>({id:a.id,nombre:String(a.nombre||""),precio:Number(a.precio||0),imagen:a.imagen||null})):[];c||(k(e),m(e.length>0))}catch(a){c||(k([]),m(!1))}finally{c||i(!1)}},220);return()=>{c=!0,clearTimeout(e)}},[a]),(0,b.jsxs)("div",{ref:n,className:"relative",children:[(0,b.jsx)("input",{type:"text",className:"w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:border-gray-400",placeholder:g||"Buscar productos...",value:a,onChange:a=>e(a.target.value),onFocus:()=>m(j.length>0)}),l&&(0,b.jsx)("div",{className:"absolute left-0 right-0 mt-1 rounded-xl border border-black/10 bg-white shadow-md z-20",children:(0,b.jsxs)("ul",{children:[j.map(a=>(0,b.jsx)("li",{children:(0,b.jsx)("button",{type:"button",className:"w-full text-left px-3 py-2 text-sm hover:bg-black/5",onClick:()=>{f(a),m(!1)},children:a.nombre})},a.id)),h&&(0,b.jsx)("li",{className:"px-3 py-2 text-sm text-black/60",children:"Buscando..."})]})})]})}}];

//# sourceMappingURL=Downloads_WEBNIDA_frontend_405b0cad._.js.map