function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},l=n.parcelRequiree435;null==l&&((l=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},n.parcelRequiree435=l),l.register("kyEFX",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var l={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)l[t[n]]=e[t[n]]},o=function(e){var t=l[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),l.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}})),l.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),l.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),l.register("3LGG3",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}})),l.register("kBhz0",(function(e,t){e.exports=new URL(l("kyEFX").resolve("9Ags1"),import.meta.url).toString()})),l.register("8xDFQ",(function(e,t){e.exports=new URL(l("kyEFX").resolve("him0n"),import.meta.url).toString()})),l.register("6gGIT",(function(e,t){e.exports=new URL(l("kyEFX").resolve("lVWbw"),import.meta.url).toString()})),l.register("30yzQ",(function(e,t){e.exports=new URL(l("kyEFX").resolve("gXWio"),import.meta.url).toString()})),l.register("jXS2s",(function(e,t){e.exports=new URL(l("kyEFX").resolve("eNvHB"),import.meta.url).toString()})),l.register("jUZch",(function(e,t){e.exports=new URL(l("kyEFX").resolve("6y8kD"),import.meta.url).toString()})),l("kyEFX").register(JSON.parse('{"4A5go":"index.5fda761f.js","9Ags1":"ub11.4021132b.svg","him0n":"ub5.cb5ad3c9.svg","lVWbw":"ub15.eb123731.svg","gXWio":"ub7.54b535b0.svg","eNvHB":"ub12.ef10ba01.svg","6y8kD":"ub10.b3be43dd.svg"}'));var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t){var n=s.default(e,t,"get");return a.default(e,n)};var s=c(l("fExtF")),a=c(l("iaRLo"));function c(e){return e&&e.__esModule?e:{default:e}}var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,t,n){h.default(e,t),t.set(e,n)};var d,h=(d=l("7K24o"))&&d.__esModule?d:{default:d};var m={};Object.defineProperty(m,"__esModule",{value:!0}),m.default=function(e,t,n){var r=f.default(e,t,"set");return p.default(e,r,n),n};var f=g(l("fExtF")),p=g(l("3LGG3"));function g(e){return e&&e.__esModule?e:{default:e}}var v={};Object.defineProperty(v,"__esModule",{value:!0}),v.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e};var y=new WeakMap;class b{pushStack(e){try{t(i)(this,y).push(e)}catch(e){return console.error(e),0}return this.watchTheLimit(this.length),1}popStack(){return t(i)(this,y).length>0?t(i)(this,y).pop():null}watchTheLimit(e){t(i)(this,y).length>e&&(t(i)(this,y).shift(),this.watchTheLimit(e))}clearStack(){t(m)(this,y,[])}getLength(){return t(i)(this,y).length}constructor(e){t(u)(this,y,{writable:!0,value:void 0}),t(m)(this,y,[]),this.length=e}}var k=new WeakMap;class E{get mode(){return t(i)(this,k)}set mode(e){return typeof e===Number&&e>=0&&e<E.MODES.length?(t(m)(this,k,E.MODES[e]),t(i)(this,k)):(t(m)(this,k,e),t(i)(this,k))}leftClick(e){if(this.mode===E.MODES[0]||this.mode===E.MODES[2])return e.target.style.fill===this.currentColor?0:(this.backHistory.pushStack([{element:e.target,fill:e.target.style.fill}]),e.target.style.fill=this.currentColor,1);if(this.mode===E.MODES[1]){const t=[];e.currentTarget.childNodes.forEach((e=>{e.style.fill!==this.currentColor&&(t.push({element:e,fill:e.style.fill}),e.style.fill=this.currentColor)})),t.length&&this.backHistory.pushStack(t)}this.returnFocus()}mouseOver(e){if(this.mode===E.MODES[0]&&(e.target.style.stroke="#ffffff"),this.mode===E.MODES[1]&&e.currentTarget.childNodes.forEach((e=>{e.style.stroke="#ffffff"})),this.mode===E.MODES[2]&&(e.target.style.stroke="#ffffff",1===e.buttons||3===e.buttons)){if(e.target.style.fill===this.currentColor)return 0;this.backHistory.pushStack([{element:e.target,fill:e.target.style.fill}]),e.target.style.fill=this.currentColor}}mouseLeave(e){e.currentTarget.childNodes.forEach((e=>{e.style.stroke="none"})),this.returnFocus()}gBtnClick(){this.buttons.groupBtn.classList.toggle("is-active"),this.buttons.groupBtn.classList.contains("is-active")?(this.buttons.hoverBtn.classList.remove("is-active"),this.mode=E.MODES[1]):this.mode=E.MODES[0]}hBtnClick(){this.buttons.hoverBtn.classList.toggle("is-active"),this.buttons.hoverBtn.classList.contains("is-active")?(console.log("hover on"),this.buttons.groupBtn.classList.remove("is-active"),this.mode=E.MODES[2]):(console.log("single"),this.mode=E.MODES[0])}undoChange(){console.log("undo");const e=this.backHistory.popStack(),t=this.exchangeStates(e);t&&this.forwardHistory.pushStack(t)}revertChange(){console.log("revert");const e=this.forwardHistory.popStack(),t=this.exchangeStates(e);t&&this.backHistory.pushStack(t)}exchangeStates(e){if(!e)return 0;try{const t=e.map((e=>({element:e.element,fill:e.element.style.fill})));return e.forEach((e=>{e.element.style.fill=e.fill})),t}catch(e){return console.error(e),0}}clearHistory(){this.forwardHistory.clearStack(),this.backHistory.clearStack()}keyboardCommands(e){e.ctrlKey&&"KeyZ"===e.code&&!e.shiftKey&&this.undoChange(),e.ctrlKey&&e.shiftKey&&"KeyZ"===e.code&&this.revertChange()}returnFocus(){window.focus()}constructor(e=null,n=null,r=null,o=null){if(t(u)(this,k,{writable:!0,value:void 0}),t(v)(this,"histLimit",50),E._instance)return console.log("This singleton has an instance",E._instance),E._instance;E._instance=this,t(m)(this,k,"single"),this.currentColor="#ffffff",this.buttons={groupBtn:e,hoverBtn:n,undoBtn:r,revertBtn:o},this.backHistory=new b(this.histLimit),this.forwardHistory=new b(this.histLimit),this.buttons.groupBtn&&this.buttons.groupBtn.addEventListener("click",(()=>this.gBtnClick())),this.buttons.hoverBtn&&this.buttons.hoverBtn.addEventListener("click",(()=>this.hBtnClick())),this.buttons.undoBtn&&this.buttons.undoBtn.addEventListener("click",(()=>this.undoChange())),this.buttons.revertBtn&&this.buttons.revertBtn.addEventListener("click",(()=>this.revertChange()))}}t(v)(E,"MODES",["single","group","hover"]);const L=[{name:"Палай!",link:l("kBhz0")},{name:"Палай! — pattern",link:l("8xDFQ")},{name:"Kyiv Santa",link:l("6gGIT")},{name:"russian ship",link:l("30yzQ")},{name:"Святокиця",link:l("jXS2s")},{name:"Кохайтеся",link:l("jUZch")}],S={body:document.querySelector("body"),svgimage:document.getElementById("patternsvg"),imageContainer:document.querySelector(".image-container"),openMainMenuBtn:document.querySelector("#menu-open"),mainMenu:document.querySelector(".main-menu"),changePicBtn:document.querySelector("#change-pic-btn"),savePicBtn:document.querySelector("#save-pic-btn"),menuContainer:document.querySelector(".menu-container"),backdrop:document.querySelector(".backdrop"),groupBtn:document.querySelector(".js-group-tool-btn"),hoverBtn:document.querySelector(".js-hover-tool-btn"),undoBtn:document.querySelector(".js-undo-tool-btn"),revertBtn:document.querySelector(".js-revert-tool-btn"),colorPanel:document.querySelector(".color-menu"),minimizeBtn:document.querySelector(".js-minimize-btn"),colorListBtn:document.querySelector(".js-color-list-btn"),currentColor:document.querySelector(".js-current-color"),colorMenu:null},w=new E(S.groupBtn,S.hoverBtn,S.undoBtn,S.revertBtn);window.addEventListener("keydown",(e=>w.keyboardCommands(e))),S.openMainMenuBtn.addEventListener("click",(()=>S.mainMenu.classList.toggle("is-open"))),S.mainMenu.addEventListener("click",(()=>S.mainMenu.classList.toggle("is-open"))),S.svgimage.setAttribute("data",L[0].link),M(S.svgimage),S.svgimage.addEventListener("load",(function(){M(S.svgimage),w.clearHistory()}));const _=new class{addPallettes(e){for(const t of e)this.addOnePallette(t)}addOnePallette({palletteName:e,colorNumArr:t}){return this.palletteArr.find((t=>t.palletteName===e))?null:(this.palletteArr.push({palletteName:e,colorNumArr:t}),1)}removePallette(e){return this.palletteArr.find((t=>t.palletteName=e))?(this.palletteArr.splice(this.palletteArr.findIndex((t=>t.palletteName=e)),1),1):null}generateNewPallette(){}generatePalletteMarkup(e){let t=null;if("string"==typeof e?t=this.palletteArr.find((t=>t.palletteName===e)):"number"==typeof e&&e>-1&&(t=this.palletteArr[e]),t){const e=document.createElement("ul");e.classList.add("js-color-pallette");for(const n of t.colorNumArr){const r=document.createElement("li");r.classList.add("js-color-box"),r.style=`background-color: #${n.toString(16).padStart(6,"0")}; --color-box-width: calc((100% / ${t.colorNumArr.length}) - 8px); --color-box-height: calc((120px / ${t.colorNumArr.length}) - 5px);`,e.append(r)}const n=document.createElement("p");return n.classList.add("pallette-name"),n.innerText=t.palletteName,[e,n]}{const e=document.createElement("p");return e.innerText="No pallette found.",[e]}}generateListMarkup(){const e=document.createElement("ul");e.classList.add("js-pallette-list"),e.style="display: block; margin: 0; background-color: white; color: black; padding: 0; list-style: none;";for(const t of this.palletteArr){const n=document.createElement("li");n.classList.add("js-pallette-name"),n.dataset.palletteName=t.palletteName,n.innerText=t.palletteName,e.append(n)}return e}constructor(){this.palletteArr=[]}};function x(e){w.currentColor=e,S.currentColor.style.backgroundColor=e}function M(e){console.log("adding SVG listeners...");let t=e.contentDocument;t.addEventListener("keydown",(e=>w.keyboardCommands(e)));let n=t.querySelectorAll("g:not(#svg-back)");for(const e of n)e.addEventListener("click",(e=>w.leftClick(e))),e.addEventListener("mouseover",(e=>w.mouseOver(e))),e.addEventListener("mouseleave",(e=>w.mouseLeave(e))),console.log("found <g> element");console.log("...done")}function B(e){x(e.target.style.backgroundColor)}function C(){S.backdrop.classList.remove("is-hidden"),S.menuContainer.classList.remove("is-hidden")}function N(){S.backdrop.classList.add("is-hidden"),S.menuContainer.classList.add("is-hidden")}function j(e){S.colorMenu=_.generatePalletteMarkup(e),S.colorPanel.querySelector(".js-color-pallette").replaceWith(S.colorMenu[0]),S.colorPanel.querySelector(".pallette-name").replaceWith(S.colorMenu[1]);for(const e of S.colorMenu[0].children)e.addEventListener("click",B);x(S.colorMenu[0].children[0].style.backgroundColor)}function A(e){S.svgimage.setAttribute("data",e),N()}_.addPallettes([{palletteName:"basic pallette",colorNumArr:[3447003,15844367,15158332,3066993,15528177,2899536]},{palletteName:"cold violet",colorNumArr:[5682884,9791456,7286934,397647,16229753]},{palletteName:"purple sunrise",colorNumArr:[16293723,15023985,10237319,6633344,4134481]},{palletteName:"vivid and bright",colorNumArr:[97023,16343808,16107776,7096319,15944049,13479290,3784904,16749442,11189085]},{palletteName:"colors of 1980s",colorNumArr:[16672936,3697096,5234143,16767576,13604347]},{palletteName:"perfect storm",colorNumArr:[12114136,8035999,5202791,15660507,16670549]},{palletteName:"shades of Ukraine",colorNumArr:[16773195,16765492,16756225,27351,2199551]}]),j(0),S.changePicBtn.addEventListener("click",(e=>{e.preventDefault(),function(e){const t=document.createElement("h2");t.classList.add("pallette-menu__header"),t.innerText="Choose a pisture:";const n=document.createElement("ul");n.classList.add("js-pallette-list"),n.style="display: block; margin: 0; background-color: white; color: black; padding: 0; list-style: none;",e.forEach((e=>{const t=document.createElement("li");t.classList.add("js-svg-name"),t.innerText=e.name,t.dataset.link=e.link,n.append(t)})),S.menuContainer.replaceChildren(t,n),document.querySelectorAll(".js-svg-name").forEach((e=>{e.classList.add("link"),e.addEventListener("click",(e=>function(e){if(w.backHistory.getLength()){const t=function(e,t,n){const r=document.createElement("div");r.classList.add("js-warning-alert"),r.innerHTML=`<p>${e}</p>`;const o=document.createElement("p");o.classList.add("js-warning-alert__yes"),o.innerText="Yes",o.addEventListener("click",t);const l=document.createElement("p");return l.classList.add("js-warning-alert__no"),l.innerText="No",l.addEventListener("click",n),r.append(o,l),r}("Your changes to the current picture will be lost. Load new picture anyway?",(()=>A(e)),N);return void S.menuContainer.replaceChildren(t)}A(e)}(e.target.dataset.link)))})),C()}(L)})),S.savePicBtn.addEventListener("click",(e=>{e.preventDefault(),function(e){let t;const n=[];n.push(S.svgimage.contentDocument.querySelector("svg").outerHTML);let r={type:"text/plain"};try{t=new File(n,e,r)}catch(e){t=new Blob(data,r)}const o=URL.createObjectURL(t),l=document.createElement("a");l.href=o,l.download="kolyornytsia.svg",document.body.appendChild(l),l.click(),setTimeout((function(){document.body.removeChild(l),window.URL.revokeObjectURL(o)}),0)}("kolyornytsia.svg")})),S.minimizeBtn.addEventListener("click",(function(e){e.target.parentElement.classList.toggle("minimized"),e.target.innerText="<"===e.target.innerText?">":"<"})),S.colorListBtn.addEventListener("click",(function(e){const t=document.createElement("h2");t.classList.add("pallette-menu__header"),t.innerText="Choose color pallette:",S.menuContainer.replaceChildren(t,_.generateListMarkup()),document.querySelectorAll(".js-pallette-name").forEach((e=>{e.classList.add("link"),e.addEventListener("click",(e=>{j(e.target.dataset.palletteName),N()}))})),C()})),S.backdrop.addEventListener("click",N);
//# sourceMappingURL=index.5fda761f.js.map
