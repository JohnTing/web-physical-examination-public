function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequire94c2;function r(){!function(e,t,n,o){e/=100,t*=1e3;var i=l.createOscillator(),r=l.createGain();i.connect(r),r.connect(l.destination),r.gain.value=e,i.frequency.value=n,i.type=o,i.start(),setTimeout((function(){i.stop()}),t)}(100,.2,885,"triangle")}null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequire94c2=i),i.register("27Lyk",(function(t,n){var o,i;e(t.exports,"register",(()=>o),(e=>o=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var r={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)r[t[n]]=e[t[n]]},i=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("lhnVE",(function(e,t){e.exports=import("./"+i("27Lyk").resolve("7EIhy")).then((()=>i("5toDZ")))})),i("27Lyk").register(JSON.parse('{"1LzKV":"index.a1e7b7df.js","7EIhy":"firebaseApp.f49ad63e.js"}'));const l=new AudioContext;i("lhnVE").then((e=>{a=e.pushData;window.document.getElementById("firebaseStatus").textContent="載入完畢，連線至資料庫..."}));let a=(e,t)=>new Promise((()=>(alert("firebase 還未載入完畢。"),!1)));const s=window.document.getElementById("start"),d=window.document.getElementById("logText"),c=window.document.getElementById("place"),u=(window.document.getElementById("testButton"),window.document.getElementById("buttonGroup")),g=window.document.getElementById("nfcText"),m=window.document.getElementById("pageButton"),w=window.document.getElementById("pagea"),f=window.document.getElementById("startSound"),y=window.document.getElementById("showId"),p=window.document.getElementById("showTime"),h={"報到":["健檢櫃台"],"體檢大樓":["基礎檢查","心電檢查","家醫診斷","抽血檢查"],"醫療大樓":["X光檢查","眼科檢查"],"牙科":["牙醫檢查"]};Object.keys(h).forEach(((e,t,n)=>{h[e].map(((e,t,n)=>{var o=document.createElement("button");o.textContent=e,o.className="btn btn-success",o.onclick=()=>{c.textContent=e,localStorage.setItem("placeSetting",c.textContent)},u.appendChild(o)}))}));let b=localStorage.getItem("placeSetting");function E(){if("NDEFReader"in window){const e=new NDEFReader;e.scan().then((()=>{g.textContent="NFC 已啟動",v("Scan started successfully."),e.onreadingerror=()=>{v("Cannot read data from the NFC tag. Try another one?")},e.onreading=e=>{v("NDEF message read."),v(e.serialNumber),a(e.serialNumber,c.textContent+"").then((t=>{t&&(x(e.serialNumber),r())}))}})).catch((e=>{g.textContent="NFC 啟動失敗",v(`Error! Scan failed to start: ${e}.`)}))}else g.textContent="NFC 啟動失敗",v("NDEFReader not in window")}function v(e){d.value+=e+"\n",d.scrollTop=d.scrollHeight-d.clientHeight,d.value.length>5e3&&(d.value=d.value.substring(d.value.length-5e3))}function x(e,t=""){const n=new Date;let o=t||n.getHours()+":"+n.getMinutes()+":"+n.getSeconds();y.textContent=e,p.textContent=o}b&&(c.textContent=b),m.onclick=()=>{if(console.log(w.style.visibility),"hidden"==w.style.visibility){"1234"==(prompt("輸入開發密碼")||"")&&(w.style.visibility="")}else w.style.visibility="hidden"},setTimeout((()=>{g.textContent="NFC 啟動中...",setTimeout(E,500)}),500),s.onclick=E;f.onclick=()=>{r(),clearTimeout(-1);window.setTimeout((()=>{x(" "," ")}),5e3)};
//# sourceMappingURL=index.a1e7b7df.js.map
