var app=function(){"use strict";function e(){}const t=e=>e;function n(e){return e()}function o(){return Object.create(null)}function r(e){e.forEach(n)}function s(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function a(t,...n){if(null==t)return e;const o=t.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function l(e){let t;return a(e,(e=>t=e))(),t}function c(e,t,n){e.$$.on_destroy.push(a(t,n))}function u(e,t,n=t){return e.set(n),t}const d="undefined"!=typeof window;let f=d?()=>window.performance.now():()=>Date.now(),p=d?e=>requestAnimationFrame(e):e;const m=new Set;function h(e){m.forEach((t=>{t.c(e)||(m.delete(t),t.f())})),0!==m.size&&p(h)}function g(e){let t;return 0===m.size&&p(h),{promise:new Promise((n=>{m.add(t={c:e,f:n})})),abort(){m.delete(t)}}}function b(e,t){e.appendChild(t)}function v(e,t,n){e.insertBefore(t,n||null)}function y(e){e.parentNode.removeChild(e)}function $(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function _(e){return document.createElement(e)}function w(e){return document.createTextNode(e)}function x(){return w(" ")}function q(){return w("")}function E(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function k(e){return function(t){return t.preventDefault(),e.call(this,t)}}function j(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function C(e){return""===e?null:+e}function A(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function z(e,t){e.value=null==t?"":t}function D(e,t,n,o){e.style.setProperty(t,n,o?"important":"")}const P=new Set;let S,O=0;function M(e,t,n,o,r,s,i,a=0){const l=16.666/o;let c="{\n";for(let e=0;e<=1;e+=l){const o=t+(n-t)*s(e);c+=100*e+`%{${i(o,1-o)}}\n`}const u=c+`100% {${i(n,1-n)}}\n}`,d=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(u)}_${a}`,f=e.ownerDocument;P.add(f);const p=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(_("style")).sheet),m=f.__svelte_rules||(f.__svelte_rules={});m[d]||(m[d]=!0,p.insertRule(`@keyframes ${d} ${u}`,p.cssRules.length));const h=e.style.animation||"";return e.style.animation=`${h?h+", ":""}${d} ${o}ms linear ${r}ms 1 both`,O+=1,d}function R(e,t){const n=(e.style.animation||"").split(", "),o=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),r=n.length-o.length;r&&(e.style.animation=o.join(", "),O-=r,O||p((()=>{O||(P.forEach((e=>{const t=e.__svelte_stylesheet;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.__svelte_rules={}})),P.clear())})))}function I(e){S=e}function N(e){(function(){if(!S)throw new Error("Function called outside component initialization");return S})().$$.on_mount.push(e)}const T=[],F=[],L=[],B=[],U=Promise.resolve();let Q=!1;function G(e){L.push(e)}let H=!1;const J=new Set;function K(){if(!H){H=!0;do{for(let e=0;e<T.length;e+=1){const t=T[e];I(t),V(t.$$)}for(I(null),T.length=0;F.length;)F.pop()();for(let e=0;e<L.length;e+=1){const t=L[e];J.has(t)||(J.add(t),t())}L.length=0}while(T.length);for(;B.length;)B.pop()();Q=!1,H=!1,J.clear()}}function V(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(G)}}let W;function X(){return W||(W=Promise.resolve(),W.then((()=>{W=null}))),W}function Y(e,t,n){e.dispatchEvent(function(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}(`${t?"intro":"outro"}${n}`))}const Z=new Set;let ee;function te(){ee={r:0,c:[],p:ee}}function ne(){ee.r||r(ee.c),ee=ee.p}function oe(e,t){e&&e.i&&(Z.delete(e),e.i(t))}function re(e,t,n,o){if(e&&e.o){if(Z.has(e))return;Z.add(e),ee.c.push((()=>{Z.delete(e),o&&(n&&e.d(1),o())})),e.o(t)}}const se={duration:0};function ie(n,o,r){let i,a,l=o(n,r),c=!1,u=0;function d(){i&&R(n,i)}function p(){const{delay:o=0,duration:r=300,easing:s=t,tick:p=e,css:m}=l||se;m&&(i=M(n,0,1,r,o,s,m,u++)),p(0,1);const h=f()+o,b=h+r;a&&a.abort(),c=!0,G((()=>Y(n,!0,"start"))),a=g((e=>{if(c){if(e>=b)return p(1,0),Y(n,!0,"end"),d(),c=!1;if(e>=h){const t=s((e-h)/r);p(t,1-t)}}return c}))}let m=!1;return{start(){m||(R(n),s(l)?(l=l(),X().then(p)):p())},invalidate(){m=!1},end(){c&&(d(),c=!1)}}}function ae(n,o,i){let a,l=o(n,i),c=!0;const u=ee;function d(){const{delay:o=0,duration:s=300,easing:i=t,tick:d=e,css:p}=l||se;p&&(a=M(n,1,0,s,o,i,p));const m=f()+o,h=m+s;G((()=>Y(n,!1,"start"))),g((e=>{if(c){if(e>=h)return d(0,1),Y(n,!1,"end"),--u.r||r(u.c),!1;if(e>=m){const t=i((e-m)/s);d(1-t,t)}}return c}))}return u.r+=1,s(l)?X().then((()=>{l=l(),d()})):d(),{end(e){e&&l.tick&&l.tick(1,0),c&&(a&&R(n,a),c=!1)}}}function le(e){e&&e.c()}function ce(e,t,o){const{fragment:i,on_mount:a,on_destroy:l,after_update:c}=e.$$;i&&i.m(t,o),G((()=>{const t=a.map(n).filter(s);l?l.push(...t):r(t),e.$$.on_mount=[]})),c.forEach(G)}function ue(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function de(e,t){-1===e.$$.dirty[0]&&(T.push(e),Q||(Q=!0,U.then(K)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function fe(t,n,s,i,a,l,c=[-1]){const u=S;I(t);const d=n.props||{},f=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:a,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:c,skip_bound:!1};let p=!1;if(f.ctx=s?s(t,d,((e,n,...o)=>{const r=o.length?o[0]:n;return f.ctx&&a(f.ctx[e],f.ctx[e]=r)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](r),p&&de(t,e)),n})):[],f.update(),p=!0,r(f.before_update),f.fragment=!!i&&i(f.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);f.fragment&&f.fragment.l(e),e.forEach(y)}else f.fragment&&f.fragment.c();n.intro&&oe(t.$$.fragment),ce(t,n.target,n.anchor),K()}I(u)}class pe{$destroy(){ue(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const me=[];function he(e,t){return{subscribe:ge(e,t).subscribe}}function ge(t,n=e){let o;const r=[];function s(e){if(i(t,e)&&(t=e,o)){const e=!me.length;for(let e=0;e<r.length;e+=1){const n=r[e];n[1](),me.push(n,t)}if(e){for(let e=0;e<me.length;e+=2)me[e][0](me[e+1]);me.length=0}}}return{set:s,update:function(e){s(e(t))},subscribe:function(i,a=e){const l=[i,a];return r.push(l),1===r.length&&(o=n(s)||e),i(t),()=>{const e=r.indexOf(l);-1!==e&&r.splice(e,1),0===r.length&&(o(),o=null)}}}}function be(t,n,o){const i=!Array.isArray(t),l=i?[t]:t,c=n.length<2;return he(o,(t=>{let o=!1;const u=[];let d=0,f=e;const p=()=>{if(d)return;f();const o=n(i?u[0]:u,t);c?t(o):f=s(o)?o:e},m=l.map(((e,t)=>a(e,(e=>{u[t]=e,d&=~(1<<t),o&&p()}),(()=>{d|=1<<t}))));return o=!0,p(),function(){r(m),f()}}))}const ve=e=>Math.floor(Math.random()*e),ye=e=>{if("boolean"==typeof e){if(!0===e)return"True";if(!1===e)return"False"}return e},$e=e=>e>=90?"#008568":e>=80?"#0074C8":e>=70?"#d17216":"#d11616",_e=(e,t)=>{let n=((e,t)=>{let n=[];for(;n.length<e;){let e=ve(t);n.includes(e)||n.push(e)}return n})(t,e.length),o=[];return n.forEach((t=>{let n={};n.question=e[t].q,n.followup=e[t].followup;let r=[...e[t].a];n.correctAnswer=e[t].a[0],n.answers=(e=>{for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e})(r),o.push(n)})),o},we="Tema 7: La distribución",xe=[{q:"Estrategia de distribución centrada en la cobertura del mercado  con la que se pretende llegar a todo el mercado, colocando el producto en el máximo número de puntos de venta posible",a:["Intensiva","Selectiva","Exclusiva"],followup:"Por ejemplo, productos de consumo habitual como pan, refrescos o yogures"},{q:"Estrategia de distribución centrada en la cobertura del mercado con la que se pretende llegar a un determinado número de segmentos de consumidores; limitada a un número reducido de puntos de venta ",a:["Intensiva","Selectiva","Exclusiva"],followup:"Por ejemplo, productos cosméticos que solo se venden en farmacias"},{q:"Estrategia de distribucion centrada en la cobertura del mercado que se dirige a un segmento concreto",a:["Intensiva","Selectiva","Exclusiva"],followup:"Por ejemplo, Paul and Shark solo se vende en el Corte Inglés"},{q:"Estrategia de distribución basada en la relación fabricante-red de venta en la que la empresa no usa intermediarios, sino que desarrolla sus propios canales de distribución",a:["Distribución por cuenta propia","Distribución por cuenta ajena","Distribución mixta"],followup:"El fabricante realiza más funciones relacionadas con la distribución pero a cambio mantiene el control sobre el producto."},{q:"Estrategia de distribución basada en la relacion fabricante-red de venta en la que la empresa utiliza un canal de distribución con intermediarios (corto, largo o muy largo)",a:["Distribución por cuenta propia","Distribución por cuenta ajena","Distribución mixta"],followup:"Reduce los costes que implica la creación de un canal propio de distribución, como por ejemplo productos de consumo"},{q:"Estrategia de distribución basada en la relación fabricante-red de venta que usa una red propia de distribución allí donde es rentable y una distribución por cuenta ajena donde no resulta rentable hacerlo por cuenta propia",a:["Distribución por cuenta propia","Distribución por cuenta ajena","Distribución mixta"]},{q:"Estrategia de distribución que centra los esfuerzos de comunicación del fabricante sobre el distribuidor y hace presión sobre este, para que se involucre en las ventas",a:["Estrategia push","Estrategia pull"],followup:"Por ejemplo, una oferta 2x1 al distribuidor para que tenga mayor stock y se esfuerce más a la hora de venderlo"},{q:"Estrategia de distribución que centra los esfuerzos de comunicación del fabricante sobre el consumidor final para que tire del producto exigiendo al distribuidor sus marcas preferidas",a:["Estrategia push","Estrategia pull"],followup:"Por ejemplo, mediante campañas publicitarias"},{q:"Estrategia de distribución que relaciona tres niveles diferentes: fabricantes, mayoristas y minoristas consiguiendo una mayor coordinación entre ellos",a:["Estrategia vertical","Estrategia horizontal"]},{q:"Estrategia de distribución en el que dos o más empresas del mismo nivel (fabricante, mayorista, minorista) colaboran persiguiendo una mayor poder de negociación realizando actividades conjuntamente",a:["Estrategia vertical","Estrategia horizontal"]},{q:"¿Qué no es el merchandising",a:["Promociones y descuentos para los clientes fieles","Es como un vendedor que trabajase las 24 horas del días todos los días del año haciendo una presentación activa de los productos","Un conjunto de métodos y técnicas cuyo objetivo consiste en obtener la mayor rentabilidad posible del punto de venta","Una de las principales funciones del merchandising consiste en encargarse de la disposición y presentación de los productos en la tienda"]}],qe=he(xe.length),Ee=ge(10),ke=ge(!1),je=ge(0),Ce=ge(!1),Ae=he(xe),ze=he(we),De=be(ke,((e,t)=>{e&&t(_e(l(Ae),l(Ee)))}),[]),Pe=ge(0),Se=be([Pe,De],(([e,t])=>((e,t)=>{let n=0;return"number"==typeof e&&"number"==typeof t&&(n=Math.round(e/t*100)),n})(e,t.length)),0),Oe=ge([]),Me=()=>{Pe.set(0),ke.set(!1),je.set(0),Ce.set(!1),Oe.set([])};function Re(e){const t=e-1;return t*t*t+1}function Ie(e,{delay:t=0,duration:n=400,easing:o=Re,x:r=0,y:s=0,opacity:i=0}){const a=getComputedStyle(e),l=+a.opacity,c="none"===a.transform?"":a.transform,u=l*(1-i);return{delay:t,duration:n,easing:o,css:(e,t)=>`\n\t\t\ttransform: ${c} translate(${(1-e)*r}px, ${(1-e)*s}px);\n\t\t\topacity: ${l-u*t}`}}function Ne(e,t,n){const o=e.slice();return o[10]=t[n],o[12]=n,o}function Te(e,t,n){const o=e.slice();return o[7]=t[n],o[9]=n,o}function Fe(e){let t,n,o,r,s,i,a,l,c,u,d,f,p=e[7].question+"",m=e[7].answers,h=[];for(let t=0;t<m.length;t+=1)h[t]=Le(Ne(e,m,t));function g(e,t){return e[2]<e[1].length-1?Ue:Be}let q=g(e),C=q(e);return{c(){t=_("form"),n=_("fieldset"),o=_("legend"),r=w(p),s=x();for(let e=0;e<h.length;e+=1)h[e].c();i=x(),C.c(),a=x(),j(o,"class","svelte-ous5hl"),j(n,"class","svelte-ous5hl")},m(l,c){v(l,t,c),b(t,n),b(n,o),b(o,r),b(n,s);for(let e=0;e<h.length;e+=1)h[e].m(n,null);b(t,i),C.m(t,null),b(t,a),u=!0,d||(f=E(t,"submit",k(e[3])),d=!0)},p(e,o){if((!u||2&o)&&p!==(p=e[7].question+"")&&A(r,p),3&o){let t;for(m=e[7].answers,t=0;t<m.length;t+=1){const r=Ne(e,m,t);h[t]?h[t].p(r,o):(h[t]=Le(r),h[t].c(),h[t].m(n,null))}for(;t<h.length;t+=1)h[t].d(1);h.length=m.length}q!==(q=g(e))&&(C.d(1),C=q(e),C&&(C.c(),C.m(t,a)))},i(e){u||(G((()=>{c&&c.end(1),l||(l=ie(t,Ie,{x:200,duration:500,delay:500})),l.start()})),u=!0)},o(e){l&&l.invalidate(),c=ae(t,Ie,{x:-200,duration:500}),u=!1},d(e){e&&y(t),$(h,e),C.d(),e&&c&&c.end(),d=!1,f()}}}function Le(e){let t,n,o,r,s,i,a,l,c,u,d,f,p,m=ye(e[10])+"";return{c(){t=_("label"),n=_("input"),i=x(),a=w(m),l=x(),c=_("span"),u=x(),n.required=!0,j(n,"type","radio"),j(n,"id",o="answer"+e[12]),n.__value=r=e[10],n.value=n.__value,j(n,"name",s="question"+e[9]),j(n,"class","svelte-ous5hl"),e[5][0].push(n),j(c,"class","radio svelte-ous5hl"),j(t,"for",d="answer"+e[12]),j(t,"class","svelte-ous5hl")},m(o,r){v(o,t,r),b(t,n),n.checked=n.__value===e[0],b(t,i),b(t,a),b(t,l),b(t,c),b(t,u),f||(p=E(n,"change",e[4]),f=!0)},p(e,t){2&t&&r!==(r=e[10])&&(n.__value=r,n.value=n.__value),1&t&&(n.checked=n.__value===e[0]),2&t&&m!==(m=ye(e[10])+"")&&A(a,m)},d(o){o&&y(t),e[5][0].splice(e[5][0].indexOf(n),1),f=!1,p()}}}function Be(e){let t;return{c(){t=_("button"),t.textContent="Ok",j(t,"type","submit")},m(e,n){v(e,t,n)},d(e){e&&y(t)}}}function Ue(e){let t;return{c(){t=_("button"),t.textContent="Siguiente",j(t,"type","submit")},m(e,n){v(e,t,n)},d(e){e&&y(t)}}}function Qe(e){let t,n,o=e[2]===e[9]&&Fe(e);return{c(){o&&o.c(),t=q()},m(e,r){o&&o.m(e,r),v(e,t,r),n=!0},p(e,n){e[2]===e[9]?o?(o.p(e,n),4&n&&oe(o,1)):(o=Fe(e),o.c(),oe(o,1),o.m(t.parentNode,t)):o&&(te(),re(o,1,1,(()=>{o=null})),ne())},i(e){n||(oe(o),n=!0)},o(e){re(o),n=!1},d(e){o&&o.d(e),e&&y(t)}}}function Ge(e){let t,n,o=e[1],r=[];for(let t=0;t<o.length;t+=1)r[t]=Qe(Te(e,o,t));const s=e=>re(r[e],1,1,(()=>{r[e]=null}));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=q()},m(e,o){for(let t=0;t<r.length;t+=1)r[t].m(e,o);v(e,t,o),n=!0},p(e,[n]){if(15&n){let i;for(o=e[1],i=0;i<o.length;i+=1){const s=Te(e,o,i);r[i]?(r[i].p(s,n),oe(r[i],1)):(r[i]=Qe(s),r[i].c(),oe(r[i],1),r[i].m(t.parentNode,t))}for(te(),i=o.length;i<r.length;i+=1)s(i);ne()}},i(e){if(!n){for(let e=0;e<o.length;e+=1)oe(r[e]);n=!0}},o(e){r=r.filter(Boolean);for(let e=0;e<r.length;e+=1)re(r[e]);n=!1},d(e){$(r,e),e&&y(t)}}}function He(e,t,n){let o,r,s,i;c(e,De,(e=>n(1,o=e))),c(e,je,(e=>n(2,r=e))),c(e,Oe,(e=>n(6,s=e)));return[i,o,r,()=>{o[r].correctAnswer===i?(Pe.update((e=>e+1)),u(Oe,s=[...s,{correct:!0,chosenAnswer:i}],s)):u(Oe,s=[...s,{correct:!1,chosenAnswer:i}],s),n(0,i=""),r<o.length-1?je.update((e=>e+1)):(ke.set(!1),Ce.set(!0))},function(){i=this.__value,n(0,i)},[[]]]}class Je extends pe{constructor(e){super(),fe(this,e,He,Ge,i,{})}}function Ke(e){let t,n,o,s,i,a,l,c,u,d,f,p,m,h,g,$;return{c(){t=_("div"),n=_("h1"),o=w(e[0]),s=w("!"),i=x(),a=_("form"),l=_("label"),c=w("Cuántas preguntas?\r\n            "),u=_("input"),d=x(),f=_("button"),f.textContent="Empezar",j(n,"class","svelte-1n5xzdl"),j(u,"type","number"),j(u,"max",e[1]),j(u,"min","1"),u.required=!0,j(u,"class","svelte-1n5xzdl"),j(l,"class","svelte-1n5xzdl"),j(f,"type","submit")},m(r,p){v(r,t,p),b(t,n),b(n,o),b(n,s),b(t,i),b(t,a),b(a,l),b(l,c),b(l,u),z(u,e[2]),b(a,d),b(a,f),h=!0,g||($=[E(u,"input",e[4]),E(a,"submit",k(e[3]))],g=!0)},p(e,[t]){(!h||1&t)&&A(o,e[0]),(!h||2&t)&&j(u,"max",e[1]),4&t&&C(u.value)!==e[2]&&z(u,e[2])},i(e){h||(G((()=>{m&&m.end(1),p||(p=ie(t,Ie,{x:200,duration:500,delay:500})),p.start()})),h=!0)},o(e){p&&p.invalidate(),m=ae(t,Ie,{x:-200,duration:500}),h=!1},d(e){e&&y(t),e&&m&&m.end(),g=!1,r($)}}}function Ve(e,t,n){let o,r,s;c(e,ze,(e=>n(0,o=e))),c(e,qe,(e=>n(1,r=e))),c(e,Ee,(e=>n(2,s=e)));return[o,r,s,()=>{ke.set(!0)},function(){s=C(this.value),Ee.set(s)}]}class We extends pe{constructor(e){super(),fe(this,e,Ve,Ke,i,{})}}function Xe(e,t,n){const o=e.slice();return o[4]=t[n],o[6]=n,o}function Ye(e){let t,n=e[2],o=[];for(let t=0;t<n.length;t+=1)o[t]=ot(Xe(e,n,t));return{c(){t=_("ul");for(let e=0;e<o.length;e+=1)o[e].c();j(t,"class","svelte-1beyh99")},m(e,n){v(e,t,n);for(let e=0;e<o.length;e+=1)o[e].m(t,null)},p(e,r){if(6&r){let s;for(n=e[2],s=0;s<n.length;s+=1){const i=Xe(e,n,s);o[s]?o[s].p(i,r):(o[s]=ot(i),o[s].c(),o[s].m(t,null))}for(;s<o.length;s+=1)o[s].d(1);o.length=n.length}},d(e){e&&y(t),$(o,e)}}}function Ze(e){let t;return{c(){t=_("span"),t.textContent="0",j(t,"class","icon wrong svelte-1beyh99")},m(e,n){v(e,t,n)},d(e){e&&y(t)}}}function et(e){let t;return{c(){t=_("span"),t.textContent="+1",j(t,"class","icon correct svelte-1beyh99")},m(e,n){v(e,t,n)},d(e){e&&y(t)}}}function tt(e){let t,n,o,r=ye(e[1][e[6]].chosenAnswer)+"";return{c(){t=_("p"),n=w("Tu respuesta:\r\n                "),o=w(r),j(t,"class","svelte-1beyh99")},m(e,r){v(e,t,r),b(t,n),b(t,o)},p(e,t){2&t&&r!==(r=ye(e[1][e[6]].chosenAnswer)+"")&&A(o,r)},d(e){e&&y(t)}}}function nt(e){let t,n,o=e[4].followup+"";return{c(){t=_("p"),n=w(o),j(t,"class","followup svelte-1beyh99")},m(e,o){v(e,t,o),b(t,n)},p(e,t){4&t&&o!==(o=e[4].followup+"")&&A(n,o)},d(e){e&&y(t)}}}function ot(e){let t,n,o,r,s,i,a,l,c,u,d,f,p=e[4].question+"",m=ye(e[4].correctAnswer)+"";function h(e,t){return e[1][e[6]].correct?et:Ze}let g=h(e),$=g(e),q=!e[1][e[6]].correct&&tt(e),E=e[4].followup&&nt(e);return{c(){t=_("li"),n=_("div"),$.c(),o=x(),r=_("div"),s=_("p"),i=w(p),a=x(),l=_("p"),c=w(m),u=x(),q&&q.c(),d=x(),E&&E.c(),f=x(),j(n,"class","svelte-1beyh99"),j(s,"class","svelte-1beyh99"),j(l,"class","svelte-1beyh99"),j(r,"class","svelte-1beyh99"),j(t,"class","svelte-1beyh99")},m(e,p){v(e,t,p),b(t,n),$.m(n,null),b(t,o),b(t,r),b(r,s),b(s,i),b(r,a),b(r,l),b(l,c),b(r,u),q&&q.m(r,null),b(r,d),E&&E.m(r,null),b(t,f)},p(e,t){g!==(g=h(e))&&($.d(1),$=g(e),$&&($.c(),$.m(n,null))),4&t&&p!==(p=e[4].question+"")&&A(i,p),4&t&&m!==(m=ye(e[4].correctAnswer)+"")&&A(c,m),e[1][e[6]].correct?q&&(q.d(1),q=null):q?q.p(e,t):(q=tt(e),q.c(),q.m(r,d)),e[4].followup?E?E.p(e,t):(E=nt(e),E.c(),E.m(r,null)):E&&(E.d(1),E=null)},d(e){e&&y(t),$.d(),q&&q.d(),E&&E.d()}}}function rt(e){let t,n,o,r,s,i,a,l,c,u,d,f,p,m,h,g,$,q,k,C=null!=e[1]&&0!=e[1].length&&Ye(e);return{c(){t=_("div"),n=_("h1"),n.textContent="Resultados",o=x(),r=_("div"),s=_("p"),i=w("Puntuación : "),a=w(e[0]),l=w("%"),c=x(),u=_("div"),d=_("div"),f=x(),C&&C.c(),p=x(),m=_("button"),m.textContent="Intenta de nuevo",j(n,"class","svelte-1beyh99"),j(s,"class","final-score svelte-1beyh99"),j(d,"class","score-bar svelte-1beyh99"),D(d,"width",e[0]+"%"),D(d,"background",$e(e[0])),j(u,"class","score-scale svelte-1beyh99"),j(m,"type","button")},m(e,h){v(e,t,h),b(t,n),b(t,o),b(t,r),b(r,s),b(s,i),b(s,a),b(s,l),b(r,c),b(r,u),b(u,d),b(t,f),C&&C.m(t,null),b(t,p),b(t,m),$=!0,q||(k=E(m,"click",Me),q=!0)},p(e,[n]){(!$||1&n)&&A(a,e[0]),(!$||1&n)&&D(d,"width",e[0]+"%"),(!$||1&n)&&D(d,"background",$e(e[0])),null!=e[1]&&0!=e[1].length?C?C.p(e,n):(C=Ye(e),C.c(),C.m(t,p)):C&&(C.d(1),C=null)},i(e){$||(G((()=>{g&&g.end(1),h||(h=ie(t,Ie,{y:200,duration:500,delay:500})),h.start()})),$=!0)},o(e){h&&h.invalidate(),g=ae(t,Ie,{y:-200,duration:500}),$=!1},d(e){e&&y(t),C&&C.d(),e&&g&&g.end(),q=!1,k()}}}function st(e,t,n){let o,r,s;c(e,Se,(e=>n(3,o=e))),c(e,Oe,(e=>n(1,r=e))),c(e,De,(e=>n(2,s=e)));let i=0;return N((async()=>{n(0,i=o)})),[i,r,s]}class it extends pe{constructor(e){super(),fe(this,e,st,rt,i,{})}}function at(e){let t,n;return t=new We({}),{c(){le(t.$$.fragment)},m(e,o){ce(t,e,o),n=!0},i(e){n||(oe(t.$$.fragment,e),n=!0)},o(e){re(t.$$.fragment,e),n=!1},d(e){ue(t,e)}}}function lt(e){let t,n;return t=new it({}),{c(){le(t.$$.fragment)},m(e,o){ce(t,e,o),n=!0},i(e){n||(oe(t.$$.fragment,e),n=!0)},o(e){re(t.$$.fragment,e),n=!1},d(e){ue(t,e)}}}function ct(e){let t,n;return t=new Je({}),{c(){le(t.$$.fragment)},m(e,o){ce(t,e,o),n=!0},i(e){n||(oe(t.$$.fragment,e),n=!0)},o(e){re(t.$$.fragment,e),n=!1},d(e){ue(t,e)}}}function ut(e){let t,n,o,r;const s=[ct,lt,at],i=[];function a(e,t){return e[0]?0:e[1]?1:2}return n=a(e),o=i[n]=s[n](e),{c(){t=_("main"),o.c(),j(t,"class","svelte-1o1ab46")},m(e,o){v(e,t,o),i[n].m(t,null),r=!0},p(e,[r]){let l=n;n=a(e),n!==l&&(te(),re(i[l],1,1,(()=>{i[l]=null})),ne(),o=i[n],o||(o=i[n]=s[n](e),o.c()),oe(o,1),o.m(t,null))},i(e){r||(oe(o),r=!0)},o(e){re(o),r=!1},d(e){e&&y(t),i[n].d()}}}function dt(e,t,n){let o,r;return c(e,ke,(e=>n(0,o=e))),c(e,Ce,(e=>n(1,r=e))),[o,r]}return new class extends pe{constructor(e){super(),fe(this,e,dt,ut,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
