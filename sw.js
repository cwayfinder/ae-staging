if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return r[e]||(a=new Promise(async a=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=a}else importScripts(e),a()})),a.then(()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]})},a=(a,r)=>{Promise.all(a.map(e)).then(e=>r(1===e.length?e[0]:e))},r={require:Promise.resolve(a)};self.define=(a,d,c)=>{r[a]||(r[a]=Promise.resolve().then(()=>{let r={};const s={uri:location.origin+a.slice(1)};return Promise.all(d.map(a=>{switch(a){case"exports":return r;case"module":return s;default:return e(a)}})).then(e=>{const a=c(...e);return r.default||(r.default=a),r})}))}}define("./sw.js",["./workbox-80efdfd1"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"036a1362.js",revision:"21498670de94a9a365bb549af5f2a5ab"},{url:"06e1fa4e.js",revision:"8b37dac063a04a837322b92f487e24a0"},{url:"1435b5cf.js",revision:"40b6a24da6cd0a60a40846244a131cce"},{url:"1f88d78f.js",revision:"ad0780621173308cb4998a7658de9d95"},{url:"21850c96.js",revision:"6aaa08ca12a871336a0bd1d513b464b8"},{url:"228d56ee.js",revision:"dc704b2deabec50c4bdbc5b312ae8a28"},{url:"270b261d.js",revision:"965acd59e6b7c6815fd34644d456bdbd"},{url:"30483091.js",revision:"5f4dbbe73e0bab16136c5a9cc8b860a2"},{url:"4837edc4.js",revision:"07fe19fe65cfc652ccd654c85aae2a41"},{url:"52d28c29.js",revision:"8ec6d19fb189b4faa8a3a320c2b3b15f"},{url:"572c3b0d.js",revision:"c635e37861793db31fa55de28bd27222"},{url:"5adcc4f1.js",revision:"943dffe5974b36d6cc08706d6b3c2c76"},{url:"65725317.js",revision:"b45027b5f8b9ccb15e44d14ce3914be3"},{url:"660a7dd2.js",revision:"9c8d367b22a0616c6dc3674b69f6c8c5"},{url:"6bdbd413.js",revision:"110c9f794843906051927a9a2f4fb9a5"},{url:"7743d419.js",revision:"51ef806e29879f71dbe3f92f1e2a38b4"},{url:"78387cd4.js",revision:"4e713e1e9c9a4a3cb81e19183c5afe44"},{url:"7a3dfa3b.js",revision:"9978df00f54bc4efde7db9d38b5388a9"},{url:"7a9845df.js",revision:"a1bbe95a00192d38f8b02478b1bbd229"},{url:"82c8a544.js",revision:"7583a9478fafd0b8a48d28adf7ccadda"},{url:"8af2b725.js",revision:"23b2cfe26e65d6024bf34da2c465e8a1"},{url:"966ad9a1.js",revision:"66766c31d2ffe03b6cfd1c19a1566609"},{url:"98f68c3b.js",revision:"91f3aab7047a68e11bb0e3434a1521f3"},{url:"9ecfe67d.js",revision:"4d4375e7330d5fd6e67b24849c40565e"},{url:"a253ff32.js",revision:"d76a7e6e0be6d6a4c4e97b2b52e3cac5"},{url:"b2e11fdc.js",revision:"2b56aa07065292ec5e36f6795f5ddfc5"},{url:"b62b742c.js",revision:"ba4a4588ebcab8ac842fc09998e2f8f2"},{url:"b718330d.js",revision:"14b7704b47aa073be2969656ba48d44b"},{url:"b9835046.js",revision:"ed9e859c3e50c50d996aefb3fd84df6b"},{url:"ba39c54a.js",revision:"d12c9e57c9461a612994a710f068f787"},{url:"c0f2c9af.js",revision:"5dedc034b77a34ce2250e68995b669d3"},{url:"cbf34a2f.js",revision:"a7187d4e2c5254210bf55d7220970974"},{url:"d71ea143.js",revision:"dc0dc787841fae22af1e66e640690be5"},{url:"db6fe639.js",revision:"4076978d8675609ba3a00d0f3a573315"},{url:"e86be480.js",revision:"129aad1602ccd2191ba8e32487f365e1"},{url:"index.html",revision:"4126e8a6bc422f2597ac51121c2b4774"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"))),e.registerRoute("polyfills/*.js",new e.CacheFirst,"GET")}));
//# sourceMappingURL=sw.js.map