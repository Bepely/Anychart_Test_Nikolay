(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();const A=()=>{fetch("/default.svg").then(e=>e.text()).then(e=>{const a=new DOMParser().parseFromString(e,"image/svg+xml").querySelector("#default"),t=a.querySelector("#back"),s=a.querySelector("#center"),i=a.querySelector("#spin"),o=document.getElementById("svg");o.innerHTML="",o.appendChild(a),t.appendChild(s),t.appendChild(i)})},S=()=>{fetch("/404.svg").then(e=>e.text()).then(e=>{const a=new DOMParser().parseFromString(e,"image/svg+xml").querySelector("#err404"),t=a.querySelector("#cross"),s=t.querySelector("#Line1"),i=t.querySelector("#Line2"),o=document.getElementById("svg");o.innerHTML="",o.appendChild(a),o.appendChild(t),t.appendChild(s),t.appendChild(i)})},m="http://www.w3.org/2000/svg",h=(e,r)=>{const n=document.createElementNS(m,"circle");return n.setAttribute("r","5"),n.setAttribute("cx",e),n.setAttribute("cy",r),n.setAttribute("stroke","black"),n.setAttribute("fill","black"),n.setAttribute("stroke-width","2"),n},p=(e,r,n,a)=>{const t=document.createElementNS(m,"line");return t.setAttribute("x1",`${e}`),t.setAttribute("x2",`${n}`),t.setAttribute("y1",`${r}`),t.setAttribute("y2",`${a}`),t.setAttribute("stroke","black"),t.setAttribute("stroke-width","2"),t.setAttribute("fill","none"),t},f=()=>document.createElementNS(m,"text"),C=(e,r)=>{for(let n=0;n<r.length-1;n++){const a=r[n][0],t=r[n][1],s=r[n+1][0],i=r[n+1][1],o=p(a,t,s,i);o.setAttribute("id",`line${n}`),o.setAttribute("class","chartLine");let d=h(a,t);e.appendChild(d),e.appendChild(o),d=h(s,i),d.setAttribute("class","marker"),e.appendChild(d),e.appendChild(o)}},v=(e,r,n)=>{const a=r/(e.length-1);let t=e.map(u=>u.value);t=t.filter(function(u){return u!==void 0});const s=Math.min(...t),i=Math.max(...t),o=i-s,d=n/o*.9,c=-s*d;return{coordinates:e.map((u,y)=>{const b=y*a,x=n-(u.value-s)*d;return[Math.floor(b),Math.floor(x)]}),yRange:o,yTranslationFactor:c,yScaleFactor:d,minY:s,maxY:i,xDistance:a}},L=(e,r,n,a)=>{const t=n-r,s=t/4,i=5;for(let o=0;o<=4;o++){const d=a-o*s*a/t,c=f();c.setAttribute("x",i-70),c.setAttribute("y",d+30),c.setAttribute("font-size","18"),c.setAttribute("fill","black"),c.textContent=(r+o*s).toFixed(1),e.appendChild(c)}e.appendChild(p(0,0,0,512*.9))},D=(e,r,n,a)=>{Math.max(...r.map(t=>t.index))-Math.min(...r.map(t=>t.index));for(let t=0;t<r.length;t++){const s=t*n/(r.length-1),i=p(s*.9,a*.9,s*.9,a*.9-5);e.appendChild(i);const o=f();o.setAttribute("x",s*.9),o.setAttribute("y",a*.9+20),o.setAttribute("font-size","18"),o.setAttribute("fill","black"),o.setAttribute("text-anchor","middle"),o.textContent=r[t].x,e.appendChild(o)}e.appendChild(p(0,a*.9,n*.9,a*.9))},k=e=>{const r=document.getElementById("svg");r.setAttribute("fill","#D9D9D9");const n=v(e,1024*.9,512*.9);C(r,n.coordinates),L(r,n.minY,n.maxY,512*.9),D(r,e,1024,512)};function g(){const e=document.getElementById("svg");e.setAttribute("viewBox","0 0 1024 512"),e.style.width="90vw",e.style.height="40vh",e.innerHTML="",l.data.dataStatus==="200"?k(l.data.serverData):l.data.dataStatus==="000"?A():S()}const E=()=>{const e=document.getElementById("cropToggleFirst"),r=document.getElementById("cropToggleLast"),n=document.getElementById("getDataBtn"),a=document.getElementById("urlInput"),t=()=>{l.data.dataStatus=!1,l.data.serverData=[],fetch(s).then(c=>c.json()).then(c=>{l.data.cropDataFirst&&c.data.splice(0,1),l.data.cropDataLast&&c.data.splice(-1,1),l.methods.setData(c.data)}).then(()=>{l.methods.setStatus("200"),g()}).catch(c=>{console.error(c),l.methods.setStatus("404"),g()})};let s="/default";const i=c=>{s=c},o=c=>{l.methods.setCropFirst(c)},d=c=>{l.methods.setCropLast(c)};n.addEventListener("click",()=>{t()}),e.addEventListener("change",c=>{o(c.target.checked)}),r.addEventListener("change",c=>{d(c.target.checked)}),a.addEventListener("input",c=>{i(c.target.value)})};let l={data:{serverData:[],dataStatus:"000",cropDataFirst:!1,cropDataLast:!1},methods:{getData:()=>[l.data.serverData,l.data.dataStatus],setData:e=>{l.data.serverData=e},setStatus:e=>{l.data.dataStatus=e},setCropFirst:e=>{l.data.cropDataFirst=e},setCropLast:e=>{l.data.cropDataLast=e}}};function F(){E()}g();F();
