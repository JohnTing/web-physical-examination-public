function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire94c2;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire94c2=r),r.register("27Lyk",(function(t,n){var o,r;e(t.exports,"register",(()=>o),(e=>o=e)),e(t.exports,"resolve",(()=>r),(e=>r=e));var i={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},r=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r.register("lhnVE",(function(e,t){e.exports=import("./"+r("27Lyk").resolve("7EIhy")).then((()=>r("5toDZ")))})),r("27Lyk").register(JSON.parse('{"1LzKV":"index.a1e7b7df.js","7EIhy":"firebaseApp.f49ad63e.js"}')),r("lhnVE").then((e=>{i=e.pushData;window.document.getElementById("firebaseStatus").textContent="載入完畢，連線至資料庫..."}));let i=(e,t)=>new Promise((()=>(alert("firebase 還未載入完畢。"),!1)));const l=window.document.getElementById("start"),a=window.document.getElementById("logText"),s=window.document.getElementById("place"),d=window.document.getElementById("testButton"),c=window.document.getElementById("buttonGroup"),u=window.document.getElementById("nfcText"),f=window.document.getElementById("pageButton"),g=window.document.getElementById("pagea"),m={"報到":["健檢櫃台"],"體檢大樓":["身高體重 血壓脈搏","心電檢查","家醫診斷","抽血檢查"],"醫療大樓":["X光檢查","眼科檢查"],"牙科":["牙醫檢查"]};Object.keys(m).forEach(((e,t,n)=>{m[e].map(((e,t,n)=>{var o=document.createElement("button");o.textContent=e,o.className="btn btn-success",o.onclick=()=>{s.textContent=e,localStorage.setItem("placeSetting",s.textContent)},c.appendChild(o)}))}));let w=localStorage.getItem("placeSetting");function y(){if("NDEFReader"in window){const e=new NDEFReader;e.scan().then((()=>{u.textContent="NFC 已啟動",p("Scan started successfully."),e.onreadingerror=()=>{p("Cannot read data from the NFC tag. Try another one?")},e.onreading=e=>{p("NDEF message read."),p(e.serialNumber),i(e.serialNumber,s.textContent+"")}})).catch((e=>{u.textContent="NFC 啟動失敗",p(`Error! Scan failed to start: ${e}.`)}))}else u.textContent="NFC 啟動失敗",p("NDEFReader not in window")}function p(e){a.value+=e+"\n",a.scrollTop=a.scrollHeight-a.clientHeight,a.value.length>5e3&&(a.value=a.value.substring(a.value.length-5e3))}w&&(s.textContent=w),f.onclick=()=>{console.log(g.style.visibility),"hidden"==g.style.visibility?g.style.visibility="":g.style.visibility="hidden"},setTimeout((()=>{u.textContent="NFC 啟動中...",setTimeout(y,500)}),500),l.onclick=y,d&&(d.onclick=async e=>{for(let e=0;e<100;e++){const t="place_"+Math.floor(8*Math.random());if(!await i("test"+e%80,t))return}});
//# sourceMappingURL=index.a1e7b7df.js.map
