(()=>{var w=(e,n,t)=>new Promise((r,o)=>{var h=a=>{try{d(t.next(a))}catch(l){o(l)}},i=a=>{try{d(t.throw(a))}catch(l){o(l)}},d=a=>a.done?r(a.value):Promise.resolve(a.value).then(h,i);d((t=t.apply(e,n)).next())});var m=window.location.search.slice(1).replace(/\.js$/,"");(function(e){m&&(e=document.getElementById(e))&&(e.innerHTML=m)})("sd");(function(e){if(e=document.getElementById(e)){let n=7;setInterval(()=>{--n||(window.top.location.href="https://js.org/?"+m),e.innerText=`${n} second${n>1?"s":""}`},1e3)}})("rt");(function(e){if(!(e=document.getElementById(e)))return;let n=document.getElementsByTagName("head")[0],t="cb_"+Math.random().toString(36).substring(2,16),r=document.createElement("script");window[t]=o=>{e.innerHTML=((o.data.watchers||0)/1e3).toFixed(1)+"K"},r.src="https://api.github.com/repos/js-org/js.org?callback="+t,n.insertBefore(r,n.firstChild)})("ghstars");(function(e,n){if(!(e=document.getElementById(e)))return;m&&n.unshift(m.substring(0,8));let t=1e3/4,r=1,o=.2,h=3e3,i=1e3/16,d=1,a=.2,l=500,c=e.innerHTML,s=c.length,f=-1,g=()=>{s-- >0?(e.className="active",e.innerHTML=c.slice(0,s),setTimeout(g,i+i*s/c.length*d+i*a*Math.random())):(c=""+n[f=(f+1)%n.length],setTimeout(u,l))},u=()=>{s++<c.length?(e.innerHTML=c.slice(0,s),setTimeout(u,t+t*-s/c.length*r+t*o*Math.random())):(e.className="",setTimeout(g,h))};u()})("hermes",["your","domain","4free","project","learn","tool","munich"]);(function(e){window.onload=()=>w(this,null,function*(){if(e=document.getElementById(e)){let n="https://js.org/count/xad_";if(!window.ethicalads||(yield ethicalads==null?void 0:ethicalads.wait).length==0){let t=document.createElement("script");t.id="_carbonads_js",t.src="//cdn.carbonads.com/carbon.js?serve=CESD4K3E&placement=jsorg",t.async=!0,t.onerror=()=>{e.classList.add("blocked"),fetch(`${n}no`)},t.onload=()=>fetch(`${n}c`),e.appendChild(t)}else fetch(`${n}e`)}})})("xad");})();