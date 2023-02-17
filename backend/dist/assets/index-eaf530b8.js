(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();const S=()=>{fetch("/default.svg").then(e=>e.text()).then(e=>{const o=new DOMParser().parseFromString(e,"image/svg+xml").querySelector("#default"),t=o.querySelector("#back"),s=o.querySelector("#center"),i=o.querySelector("#spin"),a=document.getElementById("svg");a.innerHTML="",a.appendChild(o),t.appendChild(s),t.appendChild(i)})},A=()=>{fetch("/404.svg").then(e=>e.text()).then(e=>{const o=new DOMParser().parseFromString(e,"image/svg+xml").querySelector("#err404"),t=o.querySelector("#cross"),s=t.querySelector("#Line1"),i=t.querySelector("#Line2"),a=document.getElementById("svg");a.innerHTML="",a.appendChild(o),a.appendChild(t),t.appendChild(s),t.appendChild(i)})},m="http://www.w3.org/2000/svg",h=(e,r)=>{const n=document.createElementNS(m,"circle");return n.setAttribute("r","5"),n.setAttribute("cx",e),n.setAttribute("cy",r),n.setAttribute("stroke","black"),n.setAttribute("fill","black"),n.setAttribute("stroke-width","2"),n},u=(e,r,n,o)=>{const t=document.createElementNS(m,"line");return t.setAttribute("x1",`${e}`),t.setAttribute("x2",`${n}`),t.setAttribute("y1",`${r}`),t.setAttribute("y2",`${o}`),t.setAttribute("stroke","black"),t.setAttribute("stroke-width","2"),t.setAttribute("fill","none"),t},f=()=>document.createElementNS(m,"text"),v=(e,r)=>{for(let n=0;n<r.length-1;n++){const o=r[n][0],t=r[n][1],s=r[n+1][0],i=r[n+1][1],a=u(o,t,s,i);a.setAttribute("id",`line${n}`),a.setAttribute("class","chartLine");let l=h(o,t);e.appendChild(l),e.appendChild(a),n===r.length-2&&(l=h(s,i),e.appendChild(l),e.appendChild(a))}},C=(e,r,n)=>{const o=r/(e.length-1),t=e.map(p=>p.value),s=Math.min(...t),i=Math.max(...t),a=i-s,l=n/a*.9,d=-s*l;return{coordinates:e.map((p,y)=>{const b=y*o,x=n-(p.value-s)*l;return[Math.floor(b),Math.floor(x)]}),yRange:a,yTranslationFactor:d,yScaleFactor:l,minY:s,maxY:i,xDistance:o}},k=(e,r,n,o)=>{const t=n-r,s=t/4,i=5;for(let a=0;a<=4;a++){const l=o-a*s*o/t,d=f();d.setAttribute("x",i-70),d.setAttribute("y",l+30),d.setAttribute("font-size","18"),d.setAttribute("fill","black"),d.textContent=(r+a*s).toFixed(1),e.appendChild(d)}e.appendChild(u(0,0,0,512*.9))},D=(e,r,n,o)=>{Math.max(...r.map(t=>t.index))-Math.min(...r.map(t=>t.index));for(let t=0;t<r.length;t++){const s=t*n/(r.length-1),i=u(s*.9,o*.9,s*.9,o*.9-5);e.appendChild(i);const a=f();a.setAttribute("x",s*.9),a.setAttribute("y",o*.9+20),a.setAttribute("font-size","18"),a.setAttribute("fill","black"),a.setAttribute("text-anchor","middle"),a.textContent=r[t].x,e.appendChild(a)}e.appendChild(u(0,o*.9,n*.9,o*.9))},L=e=>{const r=document.getElementById("svg");r.setAttribute("fill","#D9D9D9");const n=C(e,1024*.9,512*.9);v(r,n.coordinates),k(r,n.minY,n.maxY,512*.9),D(r,e,1024,512)};function g(){const e=document.getElementById("svg");e.setAttribute("viewBox","0 0 1024 512"),e.style.width="90vw",e.style.height="40vh",e.innerHTML="",c.data.dataStatus==="200"?L(c.data.serverData):c.data.dataStatus==="000"?S():A()}let c={data:{serverData:[],dataStatus:"000"},methods:{getData:()=>[c.data.serverData,c.data.dataStatus],setData:e=>{c.data.serverData=e},setStatus:e=>{c.data.dataStatus=e}}};function E(){const e=document.getElementById("urlInput");let r="/default";const n=()=>{c.data.dataStatus=!1,c.data.serverData=[],fetch(r).then(t=>t.json()).then(t=>c.methods.setData(t)).then(()=>{c.methods.setStatus("200"),g()}).catch(t=>{console.error(t),c.methods.setStatus("404"),g()})},o=t=>{r=t};document.getElementById("getDataBtn").addEventListener("click",()=>{n()}),e.addEventListener("input",t=>{o(t.target.value)})}g();E();