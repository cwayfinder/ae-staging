import{c as t,_ as a,p as i,q as n,a as s,L as e,h as o}from"./06e1fa4e.js";let r,u,m=t=>t,p=class extends e{constructor(){super(...arguments),this._animationDuration=200}get animationDuration(){return this._animationDuration}set animationDuration(t){this._animationDuration=t,this.style.transition=`transform ${t}ms ease-out`,this.updateComplete.then((()=>{this.spark.style.animationDuration=t/2+"ms"}))}render(){return o(r||(r=m` <div class="spark">&nbsp;</div>`))}move(t,a){return new Promise((i=>{this._translate(t),this.addEventListener("transitionend",(()=>i()),{once:!0}),setTimeout((()=>this._translate(a)),50)}))}_translate({x:t,y:a}){this.style.setProperty("transform",`translate(calc(${t} * var(--squareSize)), calc(${a} * var(--squareSize)))`)}};p.styles=t(u||(u=m`:host{display:block;position:absolute;left:0;top:0;z-index:2;transition:transform .6s ease-out;width:var(--squareSize);height:var(--squareSize)}.spark{width:100%;height:100%;background-image:url(i/unit/attack-action.png);background-repeat:no-repeat;background-size:auto 100%;animation-name:spark-animation;animation-iteration-count:infinite;animation-direction:normal;animation-timing-function:steps(6);animation-duration:.2s}@keyframes spark-animation{0%{background-position:0 0}100%{background-position:120% 0}}`)),a([i({type:Number})],p.prototype,"animationDuration",null),a([n(".spark")],p.prototype,"spark",void 0),p=a([s("ae-attack")],p);
