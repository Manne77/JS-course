var e,t,r,n,i,o,a,s,c,u,l,d,f,p,h,v=globalThis;function g(e){return e&&e.__esModule?e.default:e}var y={},m={},b=function(e){return e&&e.Math===Math&&e};m=b("object"==typeof globalThis&&globalThis)||b("object"==typeof window&&window)||b("object"==typeof self&&self)||b("object"==typeof v&&v)||b("object"==typeof m&&m)||function(){return this}()||Function("return this")();var _={},w={};_=!(w=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var k={},E={};E=!w(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var S=Function.prototype.call;k=E?S.bind(S):function(){return S.apply(S,arguments)};var O={}.propertyIsEnumerable,$=Object.getOwnPropertyDescriptor;r=$&&!O.call({1:2},1)?function(e){var t=$(this,e);return!!t&&t.enumerable}:O;var j={};j=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var L={},M={},P={},x=Function.prototype,T=x.call,D=E&&x.bind.bind(T,T),N={},q=(P=E?D:function(e){return function(){return T.apply(e,arguments)}})({}.toString),H=P("".slice);N=function(e){return H(q(e),8,-1)};var I=Object,C=P("".split);M=w(function(){return!I("z").propertyIsEnumerable(0)})?function(e){return"String"===N(e)?C(e,""):I(e)}:I;var F={},A={};A=function(e){return null==e};var R=TypeError;F=function(e){if(A(e))throw new R("Can't call method on "+e);return e},L=function(e){return M(F(e))};var U={},B={},G={},W={},z="object"==typeof document&&document.all;W=void 0===z&&void 0!==z?function(e){return"function"==typeof e||e===z}:function(e){return"function"==typeof e},G=function(e){return"object"==typeof e?null!==e:W(e)};var J={},Y={};Y=function(e,t){var r;return arguments.length<2?(r=m[e],W(r)?r:void 0):m[e]&&m[e][t]};var Q={};Q=P({}.isPrototypeOf);var V={},K={},X={},Z={},ee=m.navigator,et=ee&&ee.userAgent;Z=et?String(et):"";var er=m.process,en=m.Deno,ei=er&&er.versions||en&&en.version,eo=ei&&ei.v8;eo&&(i=(n=eo.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!i&&Z&&(!(n=Z.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=Z.match(/Chrome\/(\d+)/))&&(i=+n[1]),X=i;var ea=m.String;V=(K=!!Object.getOwnPropertySymbols&&!w(function(){var e=Symbol("symbol detection");return!ea(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&X&&X<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var es=Object;J=V?function(e){return"symbol"==typeof e}:function(e){var t=Y("Symbol");return W(t)&&Q(t.prototype,es(e))};var ec={},eu={},el={},ed=String;el=function(e){try{return ed(e)}catch(e){return"Object"}};var ef=TypeError;eu=function(e){if(W(e))return e;throw new ef(el(e)+" is not a function")},ec=function(e,t){var r=e[t];return A(r)?void 0:eu(r)};var ep={},eh=TypeError;ep=function(e,t){var r,n;if("string"===t&&W(r=e.toString)&&!G(n=k(r,e))||W(r=e.valueOf)&&!G(n=k(r,e))||"string"!==t&&W(r=e.toString)&&!G(n=k(r,e)))return n;throw new eh("Can't convert object to primitive value")};var ev={},eg={},ey={},em={};em=!1;var eb={},e_=Object.defineProperty;eb=function(e,t){try{e_(m,e,{value:t,configurable:!0,writable:!0})}catch(r){m[e]=t}return t};var ew="__core-js_shared__",ek=ey=m[ew]||eb(ew,{});(ek.versions||(ek.versions=[])).push({version:"3.41.0",mode:em?"pure":"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE",source:"https://github.com/zloirock/core-js"}),eg=function(e,t){return ey[e]||(ey[e]=t||{})};var eE={},eS={},eO=Object;eS=function(e){return eO(F(e))};var e$=P({}.hasOwnProperty);eE=Object.hasOwn||function(e,t){return e$(eS(e),t)};var ej={},eL=0,eM=Math.random(),eP=P(1..toString);ej=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eP(++eL+eM,36)};var ex=m.Symbol,eT=eg("wks"),eD=V?ex.for||ex:ex&&ex.withoutSetter||ej,eN=TypeError,eq=function(e){return eE(eT,e)||(eT[e]=K&&eE(ex,e)?ex[e]:eD("Symbol."+e)),eT[e]}("toPrimitive");B=function(e,t){if(!G(e)||J(e))return e;var r,n=ec(e,eq);if(n){if(void 0===t&&(t="default"),r=k(n,e,t),!G(r)||J(r))return r;throw new eN("Can't convert object to primitive value")}return void 0===t&&(t="number"),ep(e,t)},U=function(e){var t=B(e,"string");return J(t)?t:t+""};var eH={},eI={},eC=m.document,eF=G(eC)&&G(eC.createElement);eI=function(e){return eF?eC.createElement(e):{}},eH=!_&&!w(function(){return 7!==Object.defineProperty(eI("div"),"a",{get:function(){return 7}}).a});var eA=Object.getOwnPropertyDescriptor;t=_?eA:function(e,t){if(e=L(e),t=U(t),eH)try{return eA(e,t)}catch(e){}if(eE(e,t))return j(!k(r,e,t),e[t])};var eR={},eU={};eU=_&&w(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eB={},eG=String,eW=TypeError;eB=function(e){if(G(e))return e;throw new eW(eG(e)+" is not an object")};var ez=TypeError,eJ=Object.defineProperty,eY=Object.getOwnPropertyDescriptor,eQ="enumerable",eV="configurable",eK="writable";o=_?eU?function(e,t,r){if(eB(e),t=U(t),eB(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eK in r&&!r[eK]){var n=eY(e,t);n&&n[eK]&&(e[t]=r.value,r={configurable:eV in r?r[eV]:n[eV],enumerable:eQ in r?r[eQ]:n[eQ],writable:!1})}return eJ(e,t,r)}:eJ:function(e,t,r){if(eB(e),t=U(t),eB(r),eH)try{return eJ(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new ez("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eR=_?function(e,t,r){return o(e,t,j(1,r))}:function(e,t,r){return e[t]=r,e};var eX={},eZ={},e0={},e1=Function.prototype,e2=_&&Object.getOwnPropertyDescriptor,e4=eE(e1,"name"),e3=e4&&(!_||_&&e2(e1,"name").configurable),e7={},e8=P(Function.toString);W(ey.inspectSource)||(ey.inspectSource=function(e){return e8(e)}),e7=ey.inspectSource;var e6={},e5={},e9=m.WeakMap;e5=W(e9)&&/native code/.test(String(e9));var te={},tt=eg("keys");te=function(e){return tt[e]||(tt[e]=ej(e))};var tr={};tr={};var tn="Object already initialized",ti=m.TypeError,to=m.WeakMap;if(e5||ey.state){var ta=ey.state||(ey.state=new to);ta.get=ta.get,ta.has=ta.has,ta.set=ta.set,a=function(e,t){if(ta.has(e))throw new ti(tn);return t.facade=e,ta.set(e,t),t},s=function(e){return ta.get(e)||{}},c=function(e){return ta.has(e)}}else{var ts=te("state");tr[ts]=!0,a=function(e,t){if(eE(e,ts))throw new ti(tn);return t.facade=e,eR(e,ts,t),t},s=function(e){return eE(e,ts)?e[ts]:{}},c=function(e){return eE(e,ts)}}var tc=(e6={set:a,get:s,has:c,enforce:function(e){return c(e)?s(e):a(e,{})},getterFor:function(e){return function(t){var r;if(!G(t)||(r=s(t)).type!==e)throw new ti("Incompatible receiver, "+e+" required");return r}}}).enforce,tu=e6.get,tl=String,td=Object.defineProperty,tf=P("".slice),tp=P("".replace),th=P([].join),tv=_&&!w(function(){return 8!==td(function(){},"length",{value:8}).length}),tg=String(String).split("String"),ty=eZ=function(e,t,r){"Symbol("===tf(tl(t),0,7)&&(t="["+tp(tl(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eE(e,"name")||e3&&e.name!==t)&&(_?td(e,"name",{value:t,configurable:!0}):e.name=t),tv&&r&&eE(r,"arity")&&e.length!==r.arity&&td(e,"length",{value:r.arity});try{r&&eE(r,"constructor")&&r.constructor?_&&td(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tc(e);return eE(n,"source")||(n.source=th(tg,"string"==typeof t?t:"")),e};Function.prototype.toString=ty(function(){return W(this)&&tu(this).source||e7(this)},"toString"),eX=function(e,t,r,n){n||(n={});var i=n.enumerable,a=void 0!==n.name?n.name:t;if(W(r)&&eZ(r,a,n),n.global)i?e[t]=r:eb(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:o(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tm={},tb={},t_={},tw={},tk={},tE={},tS={},tO=Math.ceil,t$=Math.floor;tS=Math.trunc||function(e){var t=+e;return(t>0?t$:tO)(t)},tE=function(e){var t=+e;return t!=t||0===t?0:tS(t)};var tj=Math.max,tL=Math.min;tk=function(e,t){var r=tE(e);return r<0?tj(r+t,0):tL(r,t)};var tM={},tP={},tx=Math.min;tP=function(e){var t=tE(e);return t>0?tx(t,0x1fffffffffffff):0},tM=function(e){return tP(e.length)};var tT=function(e){return function(t,r,n){var i,o=L(t),a=tM(o);if(0===a)return!e&&-1;var s=tk(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tD={includes:tT(!0),indexOf:tT(!1)}.indexOf,tN=P([].push);t_=function(e,t){var r,n=L(e),i=0,o=[];for(r in n)!eE(tr,r)&&eE(n,r)&&tN(o,r);for(;t.length>i;)eE(n,r=t[i++])&&(~tD(o,r)||tN(o,r));return o};var tq={},tH=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");u=Object.getOwnPropertyNames||function(e){return t_(e,tH)},l=Object.getOwnPropertySymbols;var tI=P([].concat);tb=Y("Reflect","ownKeys")||function(e){var t=u(eB(e));return l?tI(t,l(e)):t},tm=function(e,r,n){for(var i=tb(r),a=0;a<i.length;a++){var s=i[a];eE(e,s)||n&&eE(n,s)||o(e,s,t(r,s))}};var tC={},tF=/#|\.prototype\./,tA=function(e,t){var r=tU[tR(e)];return r===tG||r!==tB&&(W(t)?w(t):!!t)},tR=tA.normalize=function(e){return String(e).replace(tF,".").toLowerCase()},tU=tA.data={},tB=tA.NATIVE="N",tG=tA.POLYFILL="P";tC=tA,y=function(e,r){var n,i,o,a,s,c=e.target,u=e.global,l=e.stat;if(n=u?m:l?m[c]||eb(c,{}):m[c]&&m[c].prototype)for(i in r){if(a=r[i],o=e.dontCallGetSet?(s=t(n,i))&&s.value:n[i],!tC(u?i:c+(l?".":"#")+i,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;tm(a,o)}(e.sham||o&&o.sham)&&eR(a,"sham",!0),eX(n,i,a,e)}};var tW={},tz={},tJ=Function.prototype,tY=tJ.apply,tQ=tJ.call;tz="object"==typeof Reflect&&Reflect.apply||(E?tQ.bind(tY):function(){return tQ.apply(tY,arguments)});var tV={},tK={},tX=(tK=function(e){if("Function"===N(e))return P(e)})(tK.bind);tV=function(e,t){return eu(e),void 0===t?e:E?tX(e,t):function(){return e.apply(t,arguments)}};var tZ={};tZ=Y("document","documentElement");var t0={};t0=P([].slice);var t1={},t2=TypeError;t1=function(e,t){if(e<t)throw new t2("Not enough arguments");return e};var t4={};t4=/(?:ipad|iphone|ipod).*applewebkit/i.test(Z);var t3={},t7={},t8=function(e){return Z.slice(0,e.length)===e};t3="NODE"===(t7=t8("Bun/")?"BUN":t8("Cloudflare-Workers")?"CLOUDFLARE":t8("Deno/")?"DENO":t8("Node.js/")?"NODE":m.Bun&&"string"==typeof Bun.version?"BUN":m.Deno&&"object"==typeof Deno.version?"DENO":"process"===N(m.process)?"NODE":m.window&&m.document?"BROWSER":"REST");var t6=m.setImmediate,t5=m.clearImmediate,t9=m.process,re=m.Dispatch,rt=m.Function,rr=m.MessageChannel,rn=m.String,ri=0,ro={},ra="onreadystatechange";w(function(){d=m.location});var rs=function(e){if(eE(ro,e)){var t=ro[e];delete ro[e],t()}},rc=function(e){return function(){rs(e)}},ru=function(e){rs(e.data)},rl=function(e){m.postMessage(rn(e),d.protocol+"//"+d.host)};t6&&t5||(t6=function(e){t1(arguments.length,1);var t=W(e)?e:rt(e),r=t0(arguments,1);return ro[++ri]=function(){tz(t,void 0,r)},f(ri),ri},t5=function(e){delete ro[e]},t3?f=function(e){t9.nextTick(rc(e))}:re&&re.now?f=function(e){re.now(rc(e))}:rr&&!t4?(h=(p=new rr).port2,p.port1.onmessage=ru,f=tV(h.postMessage,h)):m.addEventListener&&W(m.postMessage)&&!m.importScripts&&d&&"file:"!==d.protocol&&!w(rl)?(f=rl,m.addEventListener("message",ru,!1)):f=ra in eI("script")?function(e){tZ.appendChild(eI("script"))[ra]=function(){tZ.removeChild(this),rs(e)}}:function(e){setTimeout(rc(e),0)});var rd=(tW={set:t6,clear:t5}).clear;y({global:!0,bind:!0,enumerable:!0,forced:m.clearImmediate!==rd},{clearImmediate:rd});var rf=tW.set,rp={},rh=m.Function,rv=/MSIE .\./.test(Z)||"BUN"===t7&&((e=m.Bun.version.split(".")).length<3||"0"===e[0]&&(e[1]<3||"3"===e[1]&&"0"===e[2]));rp=function(e,t){var r=t?2:1;return rv?function(n,i){var o=t1(arguments.length,1)>r,a=W(n)?n:rh(n),s=o?t0(arguments,r):[],c=o?function(){tz(a,this,s)}:a;return t?e(c,i):e(c)}:e};var rg=m.setImmediate?rp(rf,!1):rf;y({global:!0,bind:!0,enumerable:!0,forced:m.setImmediate!==rg},{setImmediate:rg});const ry="https://forkify-api.jonas.io/api/v2/recipes/",rm="fa1ae1ee-a5ce-4388-91d0-e16eb7cfe492",rb=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} : ${n.status}`);return i}catch(e){throw e}},r_=function(e){let t=Math.floor(e),r=e-t;if(0===r)return t.toString();let n=Math.round(1e6*r),i=1e6,o=(e,t)=>0===t?e:o(t,e%t),a=o(n,1e6);return n/=a,i/=a,0===t?`${n}/${i}`:`${t} ${n}/${i}`},rw={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},rk=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},rE=async function(e){try{let t=await rb(`${ry}/${e}?key=${rm}`);rw.recipe=rk(t),rw.bookmarks.some(t=>t.id===e)?rw.recipe.bookmarked=!0:rw.recipe.bookmarked=!1}catch(e){throw e}},rS=async function(e){try{rw.search.query=e;let t=await rb(`${ry}?search=${e}&key=${rm}`);rw.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),rw.search.page=1}catch(e){throw e}},rO=function(e=rw.search.page){rw.search.page=e;let t=(e-1)*rw.search.resultsPerPage,r=e*rw.search.resultsPerPage;return rw.search.results.slice(t,r)},r$=function(e){rw.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rw.recipe.servings}),rw.recipe.servings=e},rj=function(){localStorage.setItem("bookmarks",JSON.stringify(rw.bookmarks))},rL=function(e){rw.bookmarks.push(e),e.id===rw.recipe.id&&(rw.recipe.bookmarked=!0),rj()},rM=function(e){let t=rw.bookmarks.findIndex(t=>t.id===e);rw.bookmarks.splice(t,1),e===rw.recipe.id&&(rw.recipe.bookmarked=!1),rj()},rP=localStorage.getItem("bookmarks");rP&&(rw.bookmarks=JSON.parse(rP));const rx=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim);if(3!==t.length)throw Error("Wrong ingredient format!!");let[r,n,i]=t;return{quantity:r?+r:null,unit:n||null,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await rb(`${ry}?key=${rm}`,r);rw.recipe=rk(n),rL(rw.recipe)}catch(e){throw e}};var rT={};rT=import.meta.resolve("eyyUD");class rD{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`<div class="spinner">
                <svg>
                  <use href="${g(rT)}#icon-loader"></use>
                </svg>
              </div> `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`
        <div class="error">
                <div>
                  <svg>
                    <use href="${g(rT)}#icon-alert-triangle"></use>
                  </svg>
                </div>
                <br>
                <p>${e}</p>
              </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
         <div class="message">
            <div>
              <svg>
                <use href="${g(rT)}#icon-smile"></use>
              </svg>
            </div>
            <p>${e}</p>
          </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}class rN extends rD{_parentElement=document.querySelector(".recipe");_errorMessage="we could not find that recipe. Please try another one!";_message;addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--tiny");if(!r)return;let{updateTo:n}=r.dataset;n>=1&&e(+n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.preventDefault(),t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return`
    <figure class="recipe__fig">
          <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${g(rT)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${g(rT)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
                <svg>
                  <use href="${g(rT)}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
                <svg>
                  <use href="${g(rT)}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
            <svg>
              <use href="${g(rT)}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${g(rT)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
            
          ${this._data.ingredients.map(e=>`<li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="${g(rT)}#icon-check"></use>
              </svg>
              <div class="recipe__quantity">${e.quantity?r_(e.quantity):""}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${e.unit}</span>
                ${e.description}
              </div>
            </li>`).join("")}
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${g(rT)}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
    `}}var rq=new rN;class rH{_parentElement=document.querySelector(".search");_clearInput(){this._parentElement.querySelector(".search__field").value=""}getQuery(){let e=this._parentElement.querySelector(".search__field").value;return this._clearInput(),e}addHandlerSearch(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rI=new rH,rC=new class extends rD{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`
        <li class="preview">
            <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
              <figure class="preview__fig">
                <img src="${this._data.image}" alt="${this._data.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${this._data.title}</h4>
                <p class="preview__publisher">${this._data.publisher}</p>
                <div class="preview__user-generated ${this._data.key?"":"hidden"}">
                          <svg>
                            <use href="${g(rT)}#icon-user"></use>
                          </svg>
                        </div>
              </div>
            </a>
          </li>`}};class rF extends rD{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query, Please try again !";_message="";_generateMarkup(){return this._data.map(e=>rC.render(e,!1)).join("")}}var rA=new rF;class rR extends rD{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){t.preventDefault();let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?` <button data-goto=" ${e+1}" class="btn--inline pagination__btn--next">
            <span>Page ${e+1}</span>
            <svg class="search__icon">
              <use href="${g(rT)}#icon-arrow-right"></use>
            </svg>
          </button> `:e<t?`<button data-goto=" ${e-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${g(rT)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e-1}</span>
          </button>
          
          <button data-goto=" ${e+1}" class="btn--inline pagination__btn--next">
            <span>Page ${e+1}</span>
            <svg class="search__icon">
              <use href="${g(rT)}#icon-arrow-right"></use>
            </svg>
          </button> 

          `:e===t&&t>1?`
        <button data-goto=" ${e-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${g(rT)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e-1}</span>
          </button>
        `:""}}var rU=new rR;class rB extends rD{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Finad a nice recipe and bookmark it";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>rC.render(e,!1)).join("")}}var rG=new rB;class rW extends rD{_parentElement=document.querySelector(".upload");_message="Recipe was succesfullt uploaded \uD83E\uDD73";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowModal(),this._addHandlerHideModal()}toggleModal(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowModal(){this._btnOpen.addEventListener("click",this.toggleModal.bind(this))}_addHandlerHideModal(){this._btnClose.addEventListener("click",this.toggleModal.bind(this)),this._overlay.addEventListener("click",this.toggleModal.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}_generateMarkup(){}}var rz=new rW,rJ=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c,u,l=Object.create((r&&r.prototype instanceof g?r:g).prototype);return i(l,"_invoke",{value:(a=e,s=n,c=new j(o||[]),u=f,function(e,r){if(u===p)throw Error("Generator is already running");if(u===h){if("throw"===e)throw r;return{value:t,done:!0}}for(c.method=e,c.arg=r;;){var n=c.delegate;if(n){var i=function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return(n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method))?v:("return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),v);var a=d(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,v)}(n,c);if(i){if(i===v)continue;return i}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if(u===f)throw u=h,c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);u=p;var o=d(a,s,c);if("normal"===o.type){if(u=c.done?h:"suspendedYield",o.arg===v)continue;return{value:o.arg,done:c.done}}"throw"===o.type&&(u=h,c.method="throw",c.arg=o.arg)}})}),l}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var f="suspendedStart",p="executing",h="completed",v={};function g(){}function y(){}function m(){}var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(L([])));w&&w!==r&&n.call(w,a)&&(b=w);var k=m.prototype=g.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=d(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function $(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function L(e){if(null!=e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return y.prototype=m,i(k,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:y,configurable:!0}),y.displayName=u(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},E(k),u(k,c,"Generator"),u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=L,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach($),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);else if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),$(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;$(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:L(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}({});try{regeneratorRuntime=rJ}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rJ:Function("r","regeneratorRuntime = r")(rJ)}const rY=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rq.renderSpinner(),rA.render(rO()),await rE(e),rq.render(rw.recipe),rG.update(rw.bookmarks)}catch(e){rq.renderError()}},rQ=async function(){try{rA.renderSpinner();let e=rI.getQuery();if(!e)return;await rS(e),rA.render(rO()),rU.render(rw.search)}catch(e){console.log(e)}},rV=async function(e){try{rz.renderSpinner(),await rx(e),console.log(rw.recipe),rq.render(rw.recipe),rz.renderMessage(),rG.render(rw.bookmarks),window.history.pushState(null,"",`#${rw.recipe.id}`),setTimeout(function(){rz.toggleModal()},2500)}catch(e){console.error("\uD83D\uDD34",e),rz.renderError(e.message)}};rG.addHandlerRender(function(){rG.render(rw.bookmarks)}),rq.addHandlerRender(rY),rq.addHandlerUpdateServings(function(e){r$(e),rq.update(rw.recipe)}),rq.addHandlerAddBookmark(function(){rw.recipe.bookmarked?rM(rw.recipe.id):rL(rw.recipe),rq.update(rw.recipe),rG.render(rw.bookmarks)}),rI.addHandlerSearch(rQ),rU.addHandlerClick(function(e){rA.render(rO(e)),rU.render(rw.search)}),rz.addHandlerUpload(rV);
//# sourceMappingURL=section-18.fa3e452d.js.map
