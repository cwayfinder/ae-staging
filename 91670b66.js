const a=96,r="i/map/terra/terra/",e="i/map/terra/angle/",t={"bridge-1":r+"bridge-1.png","bridge-2":r+"bridge-2.png","forest-1":r+"forest-1.png","forest-2":r+"forest-2.png","hill-1":r+"hill-1.png","road-1":r+"road-1.png","stone-1":r+"stone-1.png","stone-2":r+"stone-2.png","terra-1":r+"terra-1.png","terra-2":r+"terra-2.png","terra-3":r+"terra-3.png","terra-4":r+"terra-4.png","terra-5":r+"terra-5.png","water-1":r+"water-1.png","water-2":r+"water-2.png","water-3":r+"water-3.png","a-road-1":e+"road-1.png","a-road-2":e+"road-2.png","a-road-3":e+"road-3.png","a-road-4":e+"road-4.png","a-road-6":e+"road-6.png","a-road-7":e+"road-7.png","a-road-8":e+"road-8.png","a-road-9":e+"road-9.png","a-road-1-s":e+"road-1-s.png","a-road-3-s":e+"road-3-s.png","a-road-7-s":e+"road-7-s.png","a-road-9-s":e+"road-9-s.png","a-water-1":e+"water-1.png","a-water-2":e+"water-2.png","a-water-3":e+"water-3.png","a-water-4":e+"water-4.png","a-water-6":e+"water-6.png","a-water-7":e+"water-7.png","a-water-8":e+"water-8.png","a-water-9":e+"water-9.png","a-water-1-s":e+"water-1-s.png","a-water-3-s":e+"water-3-s.png","a-water-7-s":e+"water-7-s.png","a-water-9-s":e+"water-9-s.png"};let n={};function o(a,r,{width:e,height:t}){return a>=0&&r>=0&&a<e&&r<t}function g(a,r,e,t,n){const o=n[`x${a}y${r}`]||e;return!o.startsWith(t)&&!o.includes("bridge")}function d(a){return{x:parseInt(a.replace(/^x(\-?\d+)y\d+$/,"$1"),10),y:parseInt(a.replace(/^x\d+y(\-?\d+)$/,"$1"),10)}}async function s(r,e,s){await function(a){const r=Object.entries(a).map((([a,r])=>function(a){return fetch(a).then((a=>a.blob())).then((a=>new Promise(((r,e)=>{const t=new FileReader;t.onloadend=()=>r(t.result),t.onerror=e,t.readAsDataURL(a)}))))}(r).then((r=>{const e=new Image;e.src=r,n[a]=e}))));return Promise.all(r)}(t);const w=document.createElement("canvas"),p=w.getContext("2d");if(!p)throw new Error("Cannot create canvas context");const i=function({width:r,height:e}){for(var t=a;r*e*t*t*4>=2359296;)t-=6;return 2*t}(r);return w.width=r.width*i,w.height=r.height*i,p.imageSmoothingEnabled=!1,function(a,r){Object.keys(a).forEach((e=>{const t=d(e),n=r.find((({x:a,y:r})=>a===t.x&&r===t.y));n&&(a[e]="farm"===n.type?"terra-1":"road-1")}))}(e,s),function(a,r,e){Object.entries(a).forEach((([a,t])=>{const o=d(a);e.drawImage(n[t],o.x*r,o.y*r,r,r)}))}(e,i,p),function(a,r,e,t){["road","water"].forEach((s=>{Object.entries(a).forEach((([w,p])=>{if(p.includes(s)){var i=d(w),c=i.x,h=i.y,f=c*e,m=h*e,u=g(i.x,i.y-1,p,s,a),x=g(i.x-1,i.y,p,s,a),y=g(i.x+1,i.y,p,s,a),l=g(i.x,i.y+1,p,s,a);"road"===s&&(o(c,h-1,r)||(u=!x||!y),o(c-1,h,r)||(x=!u||!l),o(c+1,h,r)||(y=!u||!l),o(c,h+1,r)||(l=!x||!y)),u&&t.drawImage(n["a-"+s+"-2"],f,m,e,e/2),x&&t.drawImage(n["a-"+s+"-4"],f,m,e/2,e),y&&t.drawImage(n["a-"+s+"-6"],f+e/2,m,e/2,e),l&&t.drawImage(n["a-"+s+"-8"],f,m+e/2,e,e/2),u&&x&&t.drawImage(n["a-"+s+"-1"],f,m,e/2,e/2),u&&y&&t.drawImage(n["a-"+s+"-3"],f+e/2,m,e/2,e/2),x&&l&&t.drawImage(n["a-"+s+"-7"],f,m+e/2,e/2,e/2),y&&l&&t.drawImage(n["a-"+s+"-9"],f+e/2,m+e/2,e/2,e/2);var I=g(i.x-1,i.y-1,p,s,a),b=g(i.x+1,i.y-1,p,s,a),E=g(i.x-1,i.y+1,p,s,a),$=g(i.x+1,i.y+1,p,s,a);u||x||!I||t.drawImage(n["a-"+s+"-1-s"],f,m,e/2,e/2),u||y||!b||t.drawImage(n["a-"+s+"-3-s"],f+e/2,m,e/2,e/2),x||l||!E||t.drawImage(n["a-"+s+"-7-s"],f,m+e/2,e/2,e/2),y||l||!$||t.drawImage(n["a-"+s+"-9-s"],f+e/2,m+e/2,e/2,e/2)}}))}))}(e,r,i,p),w.toDataURL()}export{s as c};
