import{c as t,_ as e,p as a,a as r,L as s,h as i}from"./5b7dc6e2.js";let l,o,c=t=>t,p=class extends s{render(){return i(l||(l=c``))}updated(t){this.classList.add(this.type),this.style.setProperty("--cellX",String(this.cell.x)),this.style.setProperty("--cellY",String(this.cell.y)),this._updateImage()}_updateImage(){const t=this.getImage();this.style.backgroundImage=`url(assets/images/map/building/${t}.png)`}getImage(){if(["well","temple"].includes(this.type))return this.type;{const t=this.color||"gray",e="destroyed"===this.state?"destroyed":t;return`${this.type}-${e}`}}};p.styles=t(o||(o=c`:host{display:block;width:var(--squareSize);height:var(--squareSize);position:absolute;left:0;top:0;background-size:100% 100%;background-repeat:no-repeat;transform:translate(calc(var(--cellX) * var(--squareSize)),calc(var(--cellY) * var(--squareSize)))}:host(.castle){height:calc(2 * var(--squareSize));transform:translate(calc(var(--cellX) * var(--squareSize)),calc((var(--cellY) - 1) * var(--squareSize)))}`)),e([a({type:Number,reflect:!0,attribute:"data-building-id"})],p.prototype,"buildingId",void 0),e([a({type:Object,reflect:!0,attribute:"data-xy",converter:{toAttribute:({x:t,y:e})=>`x${t}y${e}`}})],p.prototype,"cell",void 0),e([a({type:String,reflect:!0,attribute:"data-type"})],p.prototype,"type",void 0),e([a({type:String})],p.prototype,"color",void 0),e([a({type:String})],p.prototype,"state",void 0),p=e([r("ae-building")],p);
