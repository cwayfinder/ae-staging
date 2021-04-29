import{c as t,_ as a,p as e,a as r,L as o,h as s}from"./06e1fa4e.js";let d,b,p=t=>t,i=class extends o{render(){return s(d||(d=p``))}updated(t){this._updatePosition()}_updatePosition(){const{x:t,y:a}=this.cell;this.style.setProperty("transform",`translate(calc(${t} * var(--squareSize)), calc(${a} * var(--squareSize)))`)}};i.styles=t(b||(b=p`
    :host {
      display: block;
      position: absolute;
      left: 1px;
      top: 1px;
      box-sizing: border-box;
      width: calc(var(--squareSize) - 2px);
      height: calc(var(--squareSize) - 2px);
      //border: 2px solid transparent;
      background: red;
    }

    :host([data-type="possible-move"]) {
      background: rgba(107, 180, 230, 0.4);
    }

    :host([data-type="possible-attack"]) {
      background: rgba(229, 83, 59, 0.4);
    }

    :host([data-type="move"]) {
      background: rgba(107, 180, 230, 0.6);
    }

    :host([data-type="attack"]) {
      background: rgba(229, 83, 59, 0.6);
    }

    :host([data-type="destroy-building"]) {
      background: rgba(229, 83, 59, 0.6);
    }

    :host([data-type="raise-skeleton"]) {
      background: rgba(239, 162, 30, 0.6);
    }

    :host([data-type="fix-building"]) {
      background: rgba(88, 208, 10, 0.6);
    }

    :host([data-type="occupy-building"]) {
      background: rgba(88, 208, 10, 0.6);
    }

    :host([data-type="open-store"]) {
      background: rgba(239, 217, 69, 0.6);
    }

    :host([data-type="undo-move"]) {
      background: rgba(107, 180, 230, 0.6);
    }

    :host([data-type="wait"]) {
      background: rgba(239, 217, 69, 0.6);
    }

    :host([data-type="remain"]) {
      background: rgba(239, 217, 69, 0.6);
    }
  `)),a([e({type:Object,reflect:!0,attribute:"data-xy",converter:{toAttribute:({x:t,y:a})=>`x${t}y${a}`}})],i.prototype,"cell",void 0),a([e({type:String,reflect:!0,attribute:"data-type"})],i.prototype,"type",void 0),i=a([r("ae-cell-state")],i);
