function r(...t){let e;const n=o=>{if(o==null,typeof o=="string")e?s.add(e,o):e=s.ns?document.createElementNS(s.ns,o):document.createElement(o);else if(Array.isArray(o))e||(e=document.createDocumentFragment()),o.forEach(n);else if(o instanceof Node)e?s.add(e,o):e=o;else if(typeof o=="object")s.property(e,o,null,Boolean(s.ns));else if(typeof o=="function")if(e){const i=s.add(e,"");s.insert(e,o,i)}else e=o(...t.splice(1));else s.add(e,String(o))};return t.forEach(n),e}const a=t=>{const e=s.ns;s.ns="http://www.w3.org/2000/svg";const n=t();return s.ns=e,n};const m=[],u=11,h=t=>typeof t=="string"?document.createTextNode(t):t instanceof Node?t:s.h(m,t),y=t=>{const{childNodes:e}=t;return t.nodeType!==u?void 0:e.length<2?e[0]:{_startMark:s.add(t,"",e[0])}},d=(t,e,n)=>{e=h(e);const o=y(e)||e;return t.insertBefore(e,n&&n.parentNode&&n),o};const l=(t,e,n,o,i)=>(t=n&&n.parentNode||t,i=i||o instanceof Node&&o,e===o||((!o||typeof o=="string")&&(typeof e=="string"||typeof e=="number"&&(e+=""))?(o==null||!t.firstChild?n?s.add(t,e,n):t.textContent=e:n?(n.previousSibling||t.lastChild).data=e:t.firstChild.data=e,o=e):typeof e=="function"?s.subscribe(()=>{o=s.insert(t,e.call({el:t,endMark:n}),n,o,i)}):(n?o&&(i||(i=o._startMark&&o._startMark.nextSibling||n.previousSibling),s.remove(t,i,n)):t.textContent="",o=void 0,e&&e!==!0&&(o=s.add(t,e,n)))),o);function p(t){return this.$l&&this.$l[t.type](t)}const g=(t,e,n)=>{e=e.slice(2).toLowerCase(),n?(t.addEventListener(e,p),(t.$l||(t.$l={}))[e]=n):(t.removeEventListener(e,p),t.$l&&delete t.$l.name)},c=(t,e,n,o,i)=>{if(!(e==null))if(!n||n==="attrs"&&(o=!0))for(n in e)s.property(t,e[n],n,o,i);else n[0]==="o"&&n[1]==="n"&&!e.$o?g(t,n,e):typeof e=="function"?s.subscribe(()=>{s.property(t,e.call({el:t,name:n}),n,o,i)}):i?t.style.setProperty(n,e):o||n.slice(0,5)==="data-"||n.slice(0,5)==="aria-"?t.setAttribute(n,e):n==="style"?typeof e=="string"?t.style.cssText=e:s.property(t,e,null,o,!0):(n==="class"&&(n+="Name"),t[n]=e)};const f=(t,e,n)=>{for(;e&&e!==n;){const o=e.nextSibling;t===e.parentNode&&t.removeChild(e),e=o}};const s={ns:"",h:r,svg:a,add:d,insert:l,property:c,remove:f,subscribe:t=>{}},x=(...t)=>s.h(...t);export{s as api,x as h};
//# sourceMappingURL=index.js.map
