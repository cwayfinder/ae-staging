import{c as t,_ as a,p as e,a as o,L as r,h as s}from"./06e1fa4e.js";let d,b,i=t=>t,c=class extends r{render(){return s(d||(d=i``))}updated(t){this._updatePosition()}_updatePosition(){const{x:t,y:a}=this.cell;this.style.setProperty("transform",`translate(calc(${t} * var(--squareSize)), calc(${a} * var(--squareSize)))`)}};c.styles=t(b||(b=i`:host{display:block;position:absolute;left:0;top:0;box-sizing:border-box;width:calc(var(--squareSize) + 2px);height:calc(var(--squareSize) + 2px);border:2px solid #fff;background:red}:host([data-type=possible-move]){background:rgba(107,180,230,.4)}:host([data-type=possible-attack]){background:rgba(229,83,59,.4)}:host([data-type=move]){background:rgba(107,180,230,.6)}:host([data-type=attack]){background:rgba(229,83,59,.6)}:host([data-type=destroy-building]){background:rgba(229,83,59,.6)}:host([data-type=raise-skeleton]){background:rgba(239,162,30,.6)}:host([data-type=fix-building]){background:rgba(88,208,10,.6)}:host([data-type=occupy-building]){background:rgba(88,208,10,.6)}:host([data-type=open-store]){background:rgba(239,217,69,.6)}:host([data-type=undo-move]){background:rgba(107,180,230,.6)}:host([data-type=wait]){background:rgba(239,217,69,.6)}:host([data-type=remain]){background:rgba(239,217,69,.6)}`)),a([e({type:Object,reflect:!0,attribute:"data-xy",converter:{toAttribute:({x:t,y:a})=>`x${t}y${a}`}})],c.prototype,"cell",void 0),a([e({type:String,reflect:!0,attribute:"data-type"})],c.prototype,"type",void 0),c=a([o("ae-cell-state")],c);
