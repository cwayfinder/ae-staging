import{c as e,_ as t,p as i,q as a,a as s,L as l,h as r}from"./06e1fa4e.js";let o,n,h=e=>e,d=class extends l{render(){return r(o||(o=h` <ae-terrain-layer></ae-terrain-layer> <ae-buildings-layer></ae-buildings-layer> <ae-cell-state-layer></ae-cell-state-layer> <ae-units-layer></ae-units-layer> <ae-actions-layer></ae-actions-layer> <ae-event-handler-layer .cellSize="${0}"></ae-event-handler-layer> `),this.cellSize)}updated(e){if(!this.cellSize){let e=window.innerWidth/this.width;e=8*Math.floor(e/8),this.cellSize=Math.min(64,Math.max(32,e))}this.style.setProperty("--squareSize",this.cellSize+"px"),this.style.width=`calc(${this.width} * var(--squareSize))`,this.style.height=`calc(${this.height} * var(--squareSize))`}fitSize(){let e=window.innerWidth/this.width;e=8*Math.floor(e/8),this.cellSize=e,Promise.resolve().then((()=>this.scrollIntoView({block:"center"})))}setClicksDisabled(e){e?this.classList.add("disabled"):this.classList.remove("disabled")}moveUnit(e,t){return this.setClicksDisabled(!0),this.unitsLayer.moveUnit(e,t).then((()=>this.setClicksDisabled(!1)))}showAttack(e,t){return this.setClicksDisabled(!0),this.unitsLayer.showAttack({from:e,to:t}).then((()=>this.setClicksDisabled(!1)))}clear(){this.buildingsLayer.clear(),this.unitsLayer.clear()}};d.styles=e(n||(n=h`:host{display:block;position:relative;--squareSize:64px}:host(.disabled){pointer-events:none}`)),t([i({type:Number})],d.prototype,"width",void 0),t([i({type:Number})],d.prototype,"height",void 0),t([i({type:Number})],d.prototype,"cellSize",void 0),t([a("ae-terrain-layer")],d.prototype,"terrainLayer",void 0),t([a("ae-buildings-layer")],d.prototype,"buildingsLayer",void 0),t([a("ae-cell-state-layer")],d.prototype,"cellStateLayer",void 0),t([a("ae-units-layer")],d.prototype,"unitsLayer",void 0),t([a("ae-actions-layer")],d.prototype,"actionsLayer",void 0),t([a("ae-event-handler-layer")],d.prototype,"eventHandlerLayer",void 0),d=t([s("ae-battle-field")],d);