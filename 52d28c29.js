import{c as t,_ as a,p as e,a as i,L as o,h as n}from"./06e1fa4e.js";let r,s,c=t=>t,p=class extends o{render(){return n(r||(r=c``))}updated(t){this._updatePosition(),this._updateImage()}_updateImage(){this.style.backgroundImage=`url(i/ux/${this.type}.png)`}_updatePosition(){const{x:t,y:a}=this.cell;this.style.setProperty("transform",`translate(calc(${t} * var(--squareSize)), calc(${a} * var(--squareSize)))`)}};p.styles=t(s||(s=c`:host{display:block;width:var(--squareSize);height:var(--squareSize);position:absolute;left:0;top:0;background-size:auto 100%;animation-name:change-bg-3;animation-duration:.6s;animation-iteration-count:infinite;animation-direction:normal;animation-timing-function:steps(3);animation-fill-mode:forwards;z-index:2}@keyframes change-bg-3{from{background-position:0 0}to{background-position:150% 0}}`)),a([e({type:Object,reflect:!0,attribute:"data-xy",converter:{toAttribute:({x:t,y:a})=>`x${t}y${a}`}})],p.prototype,"cell",void 0),a([e({type:String,reflect:!0,attribute:"data-type"})],p.prototype,"type",void 0),p=a([i("ae-action")],p);