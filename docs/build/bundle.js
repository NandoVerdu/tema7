var app=function(){"use strict";function e(){}const t=e=>e;function n(e){return e()}function o(){return Object.create(null)}function r(e){e.forEach(n)}function i(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function a(t,...n){if(null==t)return e;const o=t.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function l(e){let t;return a(e,(e=>t=e))(),t}function c(e,t,n){e.$$.on_destroy.push(a(t,n))}function u(e,t,n=t){return e.set(n),t}const d="undefined"!=typeof window;let f=d?()=>window.performance.now():()=>Date.now(),p=d?e=>requestAnimationFrame(e):e;const m=new Set;function h(e){m.forEach((t=>{t.c(e)||(m.delete(t),t.f())})),0!==m.size&&p(h)}function g(e){let t;return 0===m.size&&p(h),{promise:new Promise((n=>{m.add(t={c:e,f:n})})),abort(){m.delete(t)}}}function b(e,t){e.appendChild(t)}function v(e,t,n){e.insertBefore(t,n||null)}function y(e){e.parentNode.removeChild(e)}function $(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function _(e){return document.createElement(e)}function w(e){return document.createTextNode(e)}function q(){return w(" ")}function x(){return w("")}function E(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function D(e){return function(t){return t.preventDefault(),e.call(this,t)}}function k(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function j(e){return""===e?null:+e}function C(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function z(e,t){e.value=null==t?"":t}function A(e,t,n,o){e.style.setProperty(t,n,o?"important":"")}const P=new Set;let S,O=0;function I(e,t,n,o,r,i,s,a=0){const l=16.666/o;let c="{\n";for(let e=0;e<=1;e+=l){const o=t+(n-t)*i(e);c+=100*e+`%{${s(o,1-o)}}\n`}const u=c+`100% {${s(n,1-n)}}\n}`,d=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(u)}_${a}`,f=e.ownerDocument;P.add(f);const p=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(_("style")).sheet),m=f.__svelte_rules||(f.__svelte_rules={});m[d]||(m[d]=!0,p.insertRule(`@keyframes ${d} ${u}`,p.cssRules.length));const h=e.style.animation||"";return e.style.animation=`${h?h+", ":""}${d} ${o}ms linear ${r}ms 1 both`,O+=1,d}function M(e,t){const n=(e.style.animation||"").split(", "),o=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),r=n.length-o.length;r&&(e.style.animation=o.join(", "),O-=r,O||p((()=>{O||(P.forEach((e=>{const t=e.__svelte_stylesheet;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.__svelte_rules={}})),P.clear())})))}function R(e){S=e}function N(e){(function(){if(!S)throw new Error("Function called outside component initialization");return S})().$$.on_mount.push(e)}const T=[],F=[],L=[],B=[],U=Promise.resolve();let G=!1;function Q(e){L.push(e)}let H=!1;const J=new Set;function K(){if(!H){H=!0;do{for(let e=0;e<T.length;e+=1){const t=T[e];R(t),V(t.$$)}for(R(null),T.length=0;F.length;)F.pop()();for(let e=0;e<L.length;e+=1){const t=L[e];J.has(t)||(J.add(t),t())}L.length=0}while(T.length);for(;B.length;)B.pop()();G=!1,H=!1,J.clear()}}function V(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Q)}}let W;function X(){return W||(W=Promise.resolve(),W.then((()=>{W=null}))),W}function Y(e,t,n){e.dispatchEvent(function(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}(`${t?"intro":"outro"}${n}`))}const Z=new Set;let ee;function te(){ee={r:0,c:[],p:ee}}function ne(){ee.r||r(ee.c),ee=ee.p}function oe(e,t){e&&e.i&&(Z.delete(e),e.i(t))}function re(e,t,n,o){if(e&&e.o){if(Z.has(e))return;Z.add(e),ee.c.push((()=>{Z.delete(e),o&&(n&&e.d(1),o())})),e.o(t)}}const ie={duration:0};function se(n,o,r){let s,a,l=o(n,r),c=!1,u=0;function d(){s&&M(n,s)}function p(){const{delay:o=0,duration:r=300,easing:i=t,tick:p=e,css:m}=l||ie;m&&(s=I(n,0,1,r,o,i,m,u++)),p(0,1);const h=f()+o,b=h+r;a&&a.abort(),c=!0,Q((()=>Y(n,!0,"start"))),a=g((e=>{if(c){if(e>=b)return p(1,0),Y(n,!0,"end"),d(),c=!1;if(e>=h){const t=i((e-h)/r);p(t,1-t)}}return c}))}let m=!1;return{start(){m||(M(n),i(l)?(l=l(),X().then(p)):p())},invalidate(){m=!1},end(){c&&(d(),c=!1)}}}function ae(n,o,s){let a,l=o(n,s),c=!0;const u=ee;function d(){const{delay:o=0,duration:i=300,easing:s=t,tick:d=e,css:p}=l||ie;p&&(a=I(n,1,0,i,o,s,p));const m=f()+o,h=m+i;Q((()=>Y(n,!1,"start"))),g((e=>{if(c){if(e>=h)return d(0,1),Y(n,!1,"end"),--u.r||r(u.c),!1;if(e>=m){const t=s((e-m)/i);d(1-t,t)}}return c}))}return u.r+=1,i(l)?X().then((()=>{l=l(),d()})):d(),{end(e){e&&l.tick&&l.tick(1,0),c&&(a&&M(n,a),c=!1)}}}function le(e){e&&e.c()}function ce(e,t,o){const{fragment:s,on_mount:a,on_destroy:l,after_update:c}=e.$$;s&&s.m(t,o),Q((()=>{const t=a.map(n).filter(i);l?l.push(...t):r(t),e.$$.on_mount=[]})),c.forEach(Q)}function ue(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function de(e,t){-1===e.$$.dirty[0]&&(T.push(e),G||(G=!0,U.then(K)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function fe(t,n,i,s,a,l,c=[-1]){const u=S;R(t);const d=n.props||{},f=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:a,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:c,skip_bound:!1};let p=!1;if(f.ctx=i?i(t,d,((e,n,...o)=>{const r=o.length?o[0]:n;return f.ctx&&a(f.ctx[e],f.ctx[e]=r)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](r),p&&de(t,e)),n})):[],f.update(),p=!0,r(f.before_update),f.fragment=!!s&&s(f.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);f.fragment&&f.fragment.l(e),e.forEach(y)}else f.fragment&&f.fragment.c();n.intro&&oe(t.$$.fragment),ce(t,n.target,n.anchor),K()}R(u)}class pe{$destroy(){ue(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const me=[];function he(e,t){return{subscribe:ge(e,t).subscribe}}function ge(t,n=e){let o;const r=[];function i(e){if(s(t,e)&&(t=e,o)){const e=!me.length;for(let e=0;e<r.length;e+=1){const n=r[e];n[1](),me.push(n,t)}if(e){for(let e=0;e<me.length;e+=2)me[e][0](me[e+1]);me.length=0}}}return{set:i,update:function(e){i(e(t))},subscribe:function(s,a=e){const l=[s,a];return r.push(l),1===r.length&&(o=n(i)||e),s(t),()=>{const e=r.indexOf(l);-1!==e&&r.splice(e,1),0===r.length&&(o(),o=null)}}}}function be(t,n,o){const s=!Array.isArray(t),l=s?[t]:t,c=n.length<2;return he(o,(t=>{let o=!1;const u=[];let d=0,f=e;const p=()=>{if(d)return;f();const o=n(s?u[0]:u,t);c?t(o):f=i(o)?o:e},m=l.map(((e,t)=>a(e,(e=>{u[t]=e,d&=~(1<<t),o&&p()}),(()=>{d|=1<<t}))));return o=!0,p(),function(){r(m),f()}}))}const ve=e=>Math.floor(Math.random()*e),ye=e=>{if("boolean"==typeof e){if(!0===e)return"True";if(!1===e)return"False"}return e},$e=e=>e>=90?"#008568":e>=80?"#0074C8":e>=70?"#d17216":"#d11616",_e=(e,t)=>{let n=((e,t)=>{let n=[];for(;n.length<e;){let e=ve(t);n.includes(e)||n.push(e)}return n})(t,e.length),o=[];return n.forEach((t=>{let n={};n.question=e[t].q,n.followup=e[t].followup;let r=[...e[t].a];n.correctAnswer=e[t].a[0],n.answers=(e=>{for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e})(r),o.push(n)})),o},we="Tema 7: La distribución",qe=[{q:"Estrategia de distribución centrada en la cobertura del mercado  con la que se pretende llegar a todo el mercado, colocando el producto en el máximo número de puntos de venta posible",a:["Intensiva","Selectiva","Exclusiva"],followup:"Por ejemplo, productos de consumo habitual como pan, refrescos o yogures"},{q:"Estrategia de distribución centrada en la cobertura del mercado con la que se pretende llegar a un determinado número de segmentos de consumidores; limitada a un número reducido de puntos de venta ",a:["Selectiva","Intensiva","Exclusiva"],followup:"Por ejemplo, productos cosméticos que solo se venden en farmacias"},{q:"Estrategia de distribucion centrada en la cobertura del mercado que se dirige a un segmento concreto",a:["Exclusiva","Intensiva","Selectiva"],followup:"Por ejemplo, Paul and Shark solo se vende en el Corte Inglés"},{q:"Estrategia de distribución basada en la relación fabricante-red de venta en la que la empresa no usa intermediarios, sino que desarrolla sus propios canales de distribución",a:["Distribución por cuenta propia","Distribución por cuenta ajena","Distribución mixta"],followup:"El fabricante realiza más funciones relacionadas con la distribución pero a cambio mantiene el control sobre el producto."},{q:"Estrategia de distribución basada en la relacion fabricante-red de venta en la que la empresa utiliza un canal de distribución con intermediarios (corto, largo o muy largo)",a:["Distribución por cuenta ajena","Distribución por cuenta propia","Distribución mixta"],followup:"Reduce los costes que implica la creación de un canal propio de distribución, como por ejemplo productos de consumo"},{q:"Estrategia de distribución basada en la relación fabricante-red de venta que usa una red propia de distribución allí donde es rentable y una distribución por cuenta ajena donde no resulta rentable hacerlo por cuenta propia",a:["Distribución mixta","Distribución por cuenta propia","Distribución por cuenta ajena"]},{q:"Estrategia de distribución que centra los esfuerzos de comunicación del fabricante sobre el distribuidor y hace presión sobre este, para que se involucre en las ventas",a:["Estrategia push","Estrategia pull"],followup:"Por ejemplo, una oferta 2x1 al distribuidor para que tenga mayor stock y se esfuerce más a la hora de venderlo"},{q:"Estrategia de distribución que centra los esfuerzos de comunicación del fabricante sobre el consumidor final para que tire del producto exigiendo al distribuidor sus marcas preferidas",a:["Estrategia pull","Estrategia push"],followup:"Por ejemplo, mediante campañas publicitarias"},{q:"Estrategia de distribución que relaciona tres niveles diferentes: fabricantes, mayoristas y minoristas consiguiendo una mayor coordinación entre ellos",a:["Estrategia vertical","Estrategia horizontal"]},{q:"Estrategia de distribución en el que dos o más empresas del mismo nivel (fabricante, mayorista, minorista) colaboran persiguiendo una mayor poder de negociación realizando actividades conjuntamente",a:["Estrategia horizontal","Estrategia vertical"]},{q:"¿Qué no es el merchandising",a:["Promociones y descuentos para los clientes fieles","Es como un vendedor que trabajase las 24 horas del días todos los días del año haciendo una presentación activa de los productos","Un conjunto de métodos y técnicas cuyo objetivo consiste en obtener la mayor rentabilidad posible del punto de venta","Una de las principales funciones del merchandising consiste en encargarse de la disposición y presentación de los productos en la tienda","Incluye actividades como el emplazamiento del punto de venta y elementos externos como la fachada, escaparates, carteles"]},{q:"Disposición en la que se ponen estanterías de distintos tipos, repartidas de forma irregular, para que parezca que se compone de varias tiendas distintas",a:["Disposición libre","Disposición en espiga","Disposición en parrilla","Disposición sesgada"]},{q:"Disposición en la que las estanterías se disponen oblicuamente, obligando al público a hacer el recorrido que desea el comercio, lo que favorece la compra por impulso",a:["Disposición en espiga","Disposición libre","Disposición en parrilla","Disposición sesgada"]},{q:"Disposición en la que las estanterías se colocan en paralelo a la circulación de la clientela",a:["Disposición en parrilla","Disposición libre","Disposición en espiga","Disposición sesgada"],followup:"Guía al cliente hacia puntos concretos y aprovecha el espacio del comercio"},{q:"Disposición que combina la disposición de parrilla y la disposición en espiga",a:["Disposición sesgada","Disposición libre","Disposición en espiga","Disposición en parrilla"]}],xe=he(qe.length),Ee=ge(10),De=ge(!1),ke=ge(0),je=ge(!1),Ce=he(qe),ze=he(we),Ae=be(De,((e,t)=>{e&&t(_e(l(Ce),l(Ee)))}),[]),Pe=ge(0),Se=be([Pe,Ae],(([e,t])=>((e,t)=>{let n=0;return"number"==typeof e&&"number"==typeof t&&(n=Math.round(e/t*100)),n})(e,t.length)),0),Oe=ge([]),Ie=()=>{Pe.set(0),De.set(!1),ke.set(0),je.set(!1),Oe.set([])};function Me(e){const t=e-1;return t*t*t+1}function Re(e,{delay:t=0,duration:n=400,easing:o=Me,x:r=0,y:i=0,opacity:s=0}){const a=getComputedStyle(e),l=+a.opacity,c="none"===a.transform?"":a.transform,u=l*(1-s);return{delay:t,duration:n,easing:o,css:(e,t)=>`\n\t\t\ttransform: ${c} translate(${(1-e)*r}px, ${(1-e)*i}px);\n\t\t\topacity: ${l-u*t}`}}function Ne(e,t,n){const o=e.slice();return o[10]=t[n],o[12]=n,o}function Te(e,t,n){const o=e.slice();return o[7]=t[n],o[9]=n,o}function Fe(e){let t,n,o,r,i,s,a,l,c,u,d,f,p=e[7].question+"",m=e[7].answers,h=[];for(let t=0;t<m.length;t+=1)h[t]=Le(Ne(e,m,t));function g(e,t){return e[2]<e[1].length-1?Ue:Be}let x=g(e),j=x(e);return{c(){t=_("form"),n=_("fieldset"),o=_("legend"),r=w(p),i=q();for(let e=0;e<h.length;e+=1)h[e].c();s=q(),j.c(),a=q(),k(o,"class","svelte-ous5hl"),k(n,"class","svelte-ous5hl")},m(l,c){v(l,t,c),b(t,n),b(n,o),b(o,r),b(n,i);for(let e=0;e<h.length;e+=1)h[e].m(n,null);b(t,s),j.m(t,null),b(t,a),u=!0,d||(f=E(t,"submit",D(e[3])),d=!0)},p(e,o){if((!u||2&o)&&p!==(p=e[7].question+"")&&C(r,p),3&o){let t;for(m=e[7].answers,t=0;t<m.length;t+=1){const r=Ne(e,m,t);h[t]?h[t].p(r,o):(h[t]=Le(r),h[t].c(),h[t].m(n,null))}for(;t<h.length;t+=1)h[t].d(1);h.length=m.length}x!==(x=g(e))&&(j.d(1),j=x(e),j&&(j.c(),j.m(t,a)))},i(e){u||(Q((()=>{c&&c.end(1),l||(l=se(t,Re,{x:200,duration:500,delay:500})),l.start()})),u=!0)},o(e){l&&l.invalidate(),c=ae(t,Re,{x:-200,duration:500}),u=!1},d(e){e&&y(t),$(h,e),j.d(),e&&c&&c.end(),d=!1,f()}}}function Le(e){let t,n,o,r,i,s,a,l,c,u,d,f,p,m=ye(e[10])+"";return{c(){t=_("label"),n=_("input"),s=q(),a=w(m),l=q(),c=_("span"),u=q(),n.required=!0,k(n,"type","radio"),k(n,"id",o="answer"+e[12]),n.__value=r=e[10],n.value=n.__value,k(n,"name",i="question"+e[9]),k(n,"class","svelte-ous5hl"),e[5][0].push(n),k(c,"class","radio svelte-ous5hl"),k(t,"for",d="answer"+e[12]),k(t,"class","svelte-ous5hl")},m(o,r){v(o,t,r),b(t,n),n.checked=n.__value===e[0],b(t,s),b(t,a),b(t,l),b(t,c),b(t,u),f||(p=E(n,"change",e[4]),f=!0)},p(e,t){2&t&&r!==(r=e[10])&&(n.__value=r,n.value=n.__value),1&t&&(n.checked=n.__value===e[0]),2&t&&m!==(m=ye(e[10])+"")&&C(a,m)},d(o){o&&y(t),e[5][0].splice(e[5][0].indexOf(n),1),f=!1,p()}}}function Be(e){let t;return{c(){t=_("button"),t.textContent="Ok",k(t,"type","submit")},m(e,n){v(e,t,n)},d(e){e&&y(t)}}}function Ue(e){let t;return{c(){t=_("button"),t.textContent="Siguiente",k(t,"type","submit")},m(e,n){v(e,t,n)},d(e){e&&y(t)}}}function Ge(e){let t,n,o=e[2]===e[9]&&Fe(e);return{c(){o&&o.c(),t=x()},m(e,r){o&&o.m(e,r),v(e,t,r),n=!0},p(e,n){e[2]===e[9]?o?(o.p(e,n),4&n&&oe(o,1)):(o=Fe(e),o.c(),oe(o,1),o.m(t.parentNode,t)):o&&(te(),re(o,1,1,(()=>{o=null})),ne())},i(e){n||(oe(o),n=!0)},o(e){re(o),n=!1},d(e){o&&o.d(e),e&&y(t)}}}function Qe(e){let t,n,o=e[1],r=[];for(let t=0;t<o.length;t+=1)r[t]=Ge(Te(e,o,t));const i=e=>re(r[e],1,1,(()=>{r[e]=null}));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=x()},m(e,o){for(let t=0;t<r.length;t+=1)r[t].m(e,o);v(e,t,o),n=!0},p(e,[n]){if(15&n){let s;for(o=e[1],s=0;s<o.length;s+=1){const i=Te(e,o,s);r[s]?(r[s].p(i,n),oe(r[s],1)):(r[s]=Ge(i),r[s].c(),oe(r[s],1),r[s].m(t.parentNode,t))}for(te(),s=o.length;s<r.length;s+=1)i(s);ne()}},i(e){if(!n){for(let e=0;e<o.length;e+=1)oe(r[e]);n=!0}},o(e){r=r.filter(Boolean);for(let e=0;e<r.length;e+=1)re(r[e]);n=!1},d(e){$(r,e),e&&y(t)}}}function He(e,t,n){let o,r,i,s;c(e,Ae,(e=>n(1,o=e))),c(e,ke,(e=>n(2,r=e))),c(e,Oe,(e=>n(6,i=e)));return[s,o,r,()=>{o[r].correctAnswer===s?(Pe.update((e=>e+1)),u(Oe,i=[...i,{correct:!0,chosenAnswer:s}],i)):u(Oe,i=[...i,{correct:!1,chosenAnswer:s}],i),n(0,s=""),r<o.length-1?ke.update((e=>e+1)):(De.set(!1),je.set(!0))},function(){s=this.__value,n(0,s)},[[]]]}class Je extends pe{constructor(e){super(),fe(this,e,He,Qe,s,{})}}function Ke(e){let t,n,o,i,s,a,l,c,u,d,f,p,m,h,g,$;return{c(){t=_("div"),n=_("h1"),o=w(e[0]),i=w("!"),s=q(),a=_("form"),l=_("label"),c=w("Cuántas preguntas?\r\n            "),u=_("input"),d=q(),f=_("button"),f.textContent="Empezar",k(n,"class","svelte-1n5xzdl"),k(u,"type","number"),k(u,"max",e[1]),k(u,"min","1"),u.required=!0,k(u,"class","svelte-1n5xzdl"),k(l,"class","svelte-1n5xzdl"),k(f,"type","submit")},m(r,p){v(r,t,p),b(t,n),b(n,o),b(n,i),b(t,s),b(t,a),b(a,l),b(l,c),b(l,u),z(u,e[2]),b(a,d),b(a,f),h=!0,g||($=[E(u,"input",e[4]),E(a,"submit",D(e[3]))],g=!0)},p(e,[t]){(!h||1&t)&&C(o,e[0]),(!h||2&t)&&k(u,"max",e[1]),4&t&&j(u.value)!==e[2]&&z(u,e[2])},i(e){h||(Q((()=>{m&&m.end(1),p||(p=se(t,Re,{x:200,duration:500,delay:500})),p.start()})),h=!0)},o(e){p&&p.invalidate(),m=ae(t,Re,{x:-200,duration:500}),h=!1},d(e){e&&y(t),e&&m&&m.end(),g=!1,r($)}}}function Ve(e,t,n){let o,r,i;c(e,ze,(e=>n(0,o=e))),c(e,xe,(e=>n(1,r=e))),c(e,Ee,(e=>n(2,i=e)));return[o,r,i,()=>{De.set(!0)},function(){i=j(this.value),Ee.set(i)}]}class We extends pe{constructor(e){super(),fe(this,e,Ve,Ke,s,{})}}function Xe(e,t,n){const o=e.slice();return o[4]=t[n],o[6]=n,o}function Ye(e){let t,n=e[2],o=[];for(let t=0;t<n.length;t+=1)o[t]=ot(Xe(e,n,t));return{c(){t=_("ul");for(let e=0;e<o.length;e+=1)o[e].c();k(t,"class","svelte-1beyh99")},m(e,n){v(e,t,n);for(let e=0;e<o.length;e+=1)o[e].m(t,null)},p(e,r){if(6&r){let i;for(n=e[2],i=0;i<n.length;i+=1){const s=Xe(e,n,i);o[i]?o[i].p(s,r):(o[i]=ot(s),o[i].c(),o[i].m(t,null))}for(;i<o.length;i+=1)o[i].d(1);o.length=n.length}},d(e){e&&y(t),$(o,e)}}}function Ze(e){let t;return{c(){t=_("span"),t.textContent="0",k(t,"class","icon wrong svelte-1beyh99")},m(e,n){v(e,t,n)},d(e){e&&y(t)}}}function et(e){let t;return{c(){t=_("span"),t.textContent="+1",k(t,"class","icon correct svelte-1beyh99")},m(e,n){v(e,t,n)},d(e){e&&y(t)}}}function tt(e){let t,n,o,r=ye(e[1][e[6]].chosenAnswer)+"";return{c(){t=_("p"),n=w("Tu respuesta:\r\n                "),o=w(r),k(t,"class","svelte-1beyh99")},m(e,r){v(e,t,r),b(t,n),b(t,o)},p(e,t){2&t&&r!==(r=ye(e[1][e[6]].chosenAnswer)+"")&&C(o,r)},d(e){e&&y(t)}}}function nt(e){let t,n,o=e[4].followup+"";return{c(){t=_("p"),n=w(o),k(t,"class","followup svelte-1beyh99")},m(e,o){v(e,t,o),b(t,n)},p(e,t){4&t&&o!==(o=e[4].followup+"")&&C(n,o)},d(e){e&&y(t)}}}function ot(e){let t,n,o,r,i,s,a,l,c,u,d,f,p=e[4].question+"",m=ye(e[4].correctAnswer)+"";function h(e,t){return e[1][e[6]].correct?et:Ze}let g=h(e),$=g(e),x=!e[1][e[6]].correct&&tt(e),E=e[4].followup&&nt(e);return{c(){t=_("li"),n=_("div"),$.c(),o=q(),r=_("div"),i=_("p"),s=w(p),a=q(),l=_("p"),c=w(m),u=q(),x&&x.c(),d=q(),E&&E.c(),f=q(),k(n,"class","svelte-1beyh99"),k(i,"class","svelte-1beyh99"),k(l,"class","svelte-1beyh99"),k(r,"class","svelte-1beyh99"),k(t,"class","svelte-1beyh99")},m(e,p){v(e,t,p),b(t,n),$.m(n,null),b(t,o),b(t,r),b(r,i),b(i,s),b(r,a),b(r,l),b(l,c),b(r,u),x&&x.m(r,null),b(r,d),E&&E.m(r,null),b(t,f)},p(e,t){g!==(g=h(e))&&($.d(1),$=g(e),$&&($.c(),$.m(n,null))),4&t&&p!==(p=e[4].question+"")&&C(s,p),4&t&&m!==(m=ye(e[4].correctAnswer)+"")&&C(c,m),e[1][e[6]].correct?x&&(x.d(1),x=null):x?x.p(e,t):(x=tt(e),x.c(),x.m(r,d)),e[4].followup?E?E.p(e,t):(E=nt(e),E.c(),E.m(r,null)):E&&(E.d(1),E=null)},d(e){e&&y(t),$.d(),x&&x.d(),E&&E.d()}}}function rt(e){let t,n,o,r,i,s,a,l,c,u,d,f,p,m,h,g,$,x,D,j=null!=e[1]&&0!=e[1].length&&Ye(e);return{c(){t=_("div"),n=_("h1"),n.textContent="Resultados",o=q(),r=_("div"),i=_("p"),s=w("Puntuación : "),a=w(e[0]),l=w("%"),c=q(),u=_("div"),d=_("div"),f=q(),j&&j.c(),p=q(),m=_("button"),m.textContent="Intenta de nuevo",k(n,"class","svelte-1beyh99"),k(i,"class","final-score svelte-1beyh99"),k(d,"class","score-bar svelte-1beyh99"),A(d,"width",e[0]+"%"),A(d,"background",$e(e[0])),k(u,"class","score-scale svelte-1beyh99"),k(m,"type","button")},m(e,h){v(e,t,h),b(t,n),b(t,o),b(t,r),b(r,i),b(i,s),b(i,a),b(i,l),b(r,c),b(r,u),b(u,d),b(t,f),j&&j.m(t,null),b(t,p),b(t,m),$=!0,x||(D=E(m,"click",Ie),x=!0)},p(e,[n]){(!$||1&n)&&C(a,e[0]),(!$||1&n)&&A(d,"width",e[0]+"%"),(!$||1&n)&&A(d,"background",$e(e[0])),null!=e[1]&&0!=e[1].length?j?j.p(e,n):(j=Ye(e),j.c(),j.m(t,p)):j&&(j.d(1),j=null)},i(e){$||(Q((()=>{g&&g.end(1),h||(h=se(t,Re,{y:200,duration:500,delay:500})),h.start()})),$=!0)},o(e){h&&h.invalidate(),g=ae(t,Re,{y:-200,duration:500}),$=!1},d(e){e&&y(t),j&&j.d(),e&&g&&g.end(),x=!1,D()}}}function it(e,t,n){let o,r,i;c(e,Se,(e=>n(3,o=e))),c(e,Oe,(e=>n(1,r=e))),c(e,Ae,(e=>n(2,i=e)));let s=0;return N((async()=>{n(0,s=o)})),[s,r,i]}class st extends pe{constructor(e){super(),fe(this,e,it,rt,s,{})}}function at(e){let t,n;return t=new We({}),{c(){le(t.$$.fragment)},m(e,o){ce(t,e,o),n=!0},i(e){n||(oe(t.$$.fragment,e),n=!0)},o(e){re(t.$$.fragment,e),n=!1},d(e){ue(t,e)}}}function lt(e){let t,n;return t=new st({}),{c(){le(t.$$.fragment)},m(e,o){ce(t,e,o),n=!0},i(e){n||(oe(t.$$.fragment,e),n=!0)},o(e){re(t.$$.fragment,e),n=!1},d(e){ue(t,e)}}}function ct(e){let t,n;return t=new Je({}),{c(){le(t.$$.fragment)},m(e,o){ce(t,e,o),n=!0},i(e){n||(oe(t.$$.fragment,e),n=!0)},o(e){re(t.$$.fragment,e),n=!1},d(e){ue(t,e)}}}function ut(e){let t,n,o,r;const i=[ct,lt,at],s=[];function a(e,t){return e[0]?0:e[1]?1:2}return n=a(e),o=s[n]=i[n](e),{c(){t=_("main"),o.c(),k(t,"class","svelte-1o1ab46")},m(e,o){v(e,t,o),s[n].m(t,null),r=!0},p(e,[r]){let l=n;n=a(e),n!==l&&(te(),re(s[l],1,1,(()=>{s[l]=null})),ne(),o=s[n],o||(o=s[n]=i[n](e),o.c()),oe(o,1),o.m(t,null))},i(e){r||(oe(o),r=!0)},o(e){re(o),r=!1},d(e){e&&y(t),s[n].d()}}}function dt(e,t,n){let o,r;return c(e,De,(e=>n(0,o=e))),c(e,je,(e=>n(1,r=e))),[o,r]}return new class extends pe{constructor(e){super(),fe(this,e,dt,ut,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
