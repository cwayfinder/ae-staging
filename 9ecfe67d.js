import{c as e,_ as t,p as a,a as r,L as s,h as i}from"./06e1fa4e.js";let o,l,c=e=>e,p=class extends s{constructor(){super(...arguments),this.graveId=-1,this.cell={x:0,y:0}}render(){return i(o||(o=c`&nbsp;`))}updated(e){const{x:t,y:a}=this.cell;this.style.setProperty("transform",`translate(calc(${t} * var(--squareSize)), calc(${a} * var(--squareSize)))`)}};p.styles=e(l||(l=c`:host{display:block;position:absolute;left:0;top:0;background-image:url(i/unit/grave.png);background-size:100% 100%;background-repeat:no-repeat;z-index:0;width:var(--squareSize);height:var(--squareSize)}`)),t([a({type:Number,reflect:!0,attribute:"data-grave-id"})],p.prototype,"graveId",void 0),t([a({type:Object})],p.prototype,"cell",void 0),p=t([r("ae-grave")],p);