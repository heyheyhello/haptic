function r(...t){let e;const n=s=>{if(s==null,typeof s=="string")e?o.add(e,s):e=o.ns?document.createElementNS(o.ns,s):document.createElement(s);else if(Array.isArray(s))e||(e=document.createDocumentFragment()),s.forEach(n);else if(s instanceof Node)e?o.add(e,s):e=s;else if(typeof s=="object")o.property(e,s,null,Boolean(o.ns));else if(typeof s=="function")if(e){const i=o.add(e,"");o.insert(e,s,i)}else e=s(...t.splice(1));else o.add(e,String(s))};return t.forEach(n),e}const a=t=>{const e=o.ns;o.ns="http://www.w3.org/2000/svg";const n=t();return o.ns=e,n};const m=[],u=11,h=t=>typeof t=="string"?document.createTextNode(t):t instanceof Node?t:o.h(m,t),y=t=>{const{childNodes:e}=t;return t.nodeType!==u?void 0:e.length<2?e[0]:{_startMark:o.add(t,"",e[0])}},l=(t,e,n)=>{e=h(e);const s=y(e)||e;return t.insertBefore(e,n&&n.parentNode&&n),s};const d=(t,e,n,s,i)=>(t=n&&n.parentNode||t,i=i||s instanceof Node&&s,e===s||((!s||typeof s=="string")&&(typeof e=="string"||typeof e=="number"&&(e+=""))?(s==null||!t.firstChild?n?o.add(t,e,n):t.textContent=e:n?(n.previousSibling||t.lastChild).data=e:t.firstChild.data=e,s=e):typeof e=="function"?o.subscribe(()=>{s=o.insert(t,e.call({el:t,endMark:n}),n,s,i)}):(n?s&&(i||(i=s._startMark&&s._startMark.nextSibling||n.previousSibling),o.remove(t,i,n)):t.textContent="",s=void 0,e&&e!==!0&&(s=o.add(t,e,n)))),s);function p(t){return this.$l&&this.$l[t.type](t)}const g=(t,e,n)=>{e=e.slice(2).toLowerCase(),n?(t.addEventListener(e,p),(t.$l||(t.$l={}))[e]=n):(t.removeEventListener(e,p),t.$l&&delete t.$l.name)},c=(t,e,n,s,i)=>{if(!(e==null))if(!n||n==="attrs"&&(s=!0))for(n in e)o.property(t,e[n],n,s,i);else n[0]==="o"&&n[1]==="n"&&!e.$o?g(t,n,e):typeof e=="function"?o.subscribe(()=>{o.property(t,e.call({el:t,name:n}),n,s,i)}):i?t.style.setProperty(n,e):s||n.slice(0,5)==="data-"||n.slice(0,5)==="aria-"?t.setAttribute(n,e):n==="style"?typeof e=="string"?t.style.cssText=e:o.property(t,e,null,s,!0):(n==="class"&&(n+="Name"),t[n]=e)};const f=(t,e,n)=>{for(;e&&e!==n;){const s=e.nextSibling;t===e.parentNode&&t.removeChild(e),e=s}};const o={ns:"",h:r,svg:a,add:l,insert:d,property:c,remove:f,subscribe:t=>{}},b=(...t)=>o.h(...t);export{o as api,b as h};
//# sourceMappingURL=index.js.map
