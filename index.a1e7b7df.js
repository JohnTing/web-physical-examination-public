function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequire94c2;function r(){!function(e,t,n,o){e/=100,t*=1e3;var i=l.createOscillator(),r=l.createGain();i.connect(r),r.connect(l.destination),r.gain.value=e,i.frequency.value=n,i.type=o,i.start(),setTimeout((function(){i.stop()}),t)}(100,.2,885,"triangle")}null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequire94c2=i),i.register("27Lyk",(function(t,n){var o,i;e(t.exports,"register",(()=>o),(e=>o=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var r={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)r[t[n]]=e[t[n]]},i=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("lhnVE",(function(e,t){e.exports=import("./"+i("27Lyk").resolve("7EIhy")).then((()=>i("5toDZ")))})),i("27Lyk").register(JSON.parse('{"1LzKV":"index.a1e7b7df.js","7EIhy":"firebaseApp.f49ad63e.js"}'));const l=new AudioContext;i("lhnVE").then((e=>{a=e.pushData;window.document.getElementById("firebaseStatus").textContent="資料庫：資料庫程式已載入，連線中..."}));let a=(e,t)=>new Promise((()=>(alert("資料庫還未啟動!"),!1)));const c=window.document.getElementById("start"),s=window.document.getElementById("logText"),d=window.document.getElementById("place"),u=(window.document.getElementById("testButton"),window.document.getElementById("buttonGroup")),g=window.document.getElementById("nfcText"),m=window.document.getElementById("infoText"),w=window.document.getElementById("soundText"),f=window.document.getElementById("pageButton"),y=window.document.getElementById("pagea"),p=window.document.getElementById("startSound"),x=window.document.getElementById("showId"),E=window.document.getElementById("showTime"),h={"報到":["健檢櫃台"],"體檢大樓":["基礎檢查","心電檢查_男","心電檢查_女","家醫診斷","抽血檢查","精神科檢查"],"醫療大樓":["X光檢查","眼科檢查"],"牙科":["牙醫檢查"]};Object.keys(h).forEach(((e,t,n)=>{h[e].map(((e,t,n)=>{var o=document.createElement("button");o.textContent=e,o.className="btn btn-success",o.onclick=()=>{d.textContent=e,localStorage.setItem("placeSetting",d.textContent)},u.appendChild(o)}))}));let v=localStorage.getItem("placeSetting");function C(){if(g.textContent="NFC：設定中","NDEFReader"in window){const e=new NDEFReader;e.scan().then((()=>{g.textContent="NFC：已開啟",b("Scan started successfully."),e.onreadingerror=()=>{b("Cannot read data from the NFC tag. Try another one?")},e.onreading=e=>{b("NDEF message read."),b(e.serialNumber),a(e.serialNumber,d.textContent+"").then((t=>{t&&(!function(e,t=null){const n=new Date,o=(n.getHours()>12?`下午 ${n.getHours()-12}點`:`上午 ${n.getHours()}點`)+` ${n.getMinutes()}分 ${n.getSeconds()}秒`;let i=t||o;x.innerText=e,E.innerText=i}(e.serialNumber),r())}))}})).catch((e=>{g.textContent="NFC：啟動失敗(1)："+e,b(`Error! Scan failed to start: ${e}.`)}))}else g.textContent="NFC：啟動失敗(2)：此瀏覽器不支援NFC",b("NDEFReader not in window")}function b(e){s.value+=e+"\n",s.scrollTop=s.scrollHeight-s.clientHeight,s.value.length>5e3&&(s.value=s.value.substring(s.value.length-5e3))}v&&(d.textContent=v),f.onclick=()=>{if(console.log(y.style.display),"none"==y.style.display){"1234"==(prompt("輸入開發密碼")||"")&&(y.style.display="block")}else y.style.display="none"},setTimeout(C,500),c.onclick=C,g.onclick=C,p.onclick=()=>{r(),w.textContent="聲音：已開啟"};let k=null;async function I(){if(m.textContent="螢幕常亮：設定中","wakeLock"in navigator)try{k=await navigator.wakeLock.request("screen"),console.log("Wake Lock is active!"),m.textContent="螢幕常亮：已開啟",k.addEventListener("release",(()=>{console.log("Wake Lock is release!"),m.textContent="螢幕常亮：關閉"}))}catch(e){console.error(e),m.textContent="螢幕常亮：設定失敗"+e}else m.textContent="螢幕常亮：不支援"}setTimeout(I,500),document.addEventListener("visibilitychange",(function(){"visible"===document.visibilityState&&setTimeout(I,500)})),w.onclick=()=>{r(),w.textContent="聲音：已開啟"};
//# sourceMappingURL=index.a1e7b7df.js.map
