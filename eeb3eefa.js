function n(n){return t=n.min,r=n.max,Math.floor(Math.random()*(r-t+1)+t);var t,r}function t(n){return Math.floor((n.min+n.max)/2)}function r(n){const t={};return n.forEach((n=>{t[n]?t[n]=t[n]+1:t[n]=1})),t}function a(n,t){return Math.pow(Math.pow(n.x-t.x,2)+Math.pow(n.y-t.y,2),.5)}function o(n,t){if(!n.length||!t.length)return null;return n.flatMap((n=>t.map((t=>({other:t,distance:a(t,n)}))))).sort(((n,t)=>n.distance-t.distance))[0].other}function e(n,t){return n.some((n=>n.cell.x===t.x&&n.cell.y===t.y))}function u(n,t){return n.some((n=>n.x===t.x&&n.y===t.y))}export{t as a,a as d,o as f,r as g,u as i,n as r,e as s};
