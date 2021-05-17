import{d as e}from"./fbfb0d48.js";import{c as t,_ as a,p as i,q as s,a as r,L as l,h as n}from"./f0da52c9.js";let d,o,y=e=>e,h=class extends l{render(){return n(d||(d=y` <ae-terrain-layer></ae-terrain-layer> <ae-buildings-layer></ae-buildings-layer> <ae-cell-state-layer></ae-cell-state-layer> <ae-units-layer></ae-units-layer> <ae-actions-layer></ae-actions-layer> <ae-event-handler-layer .cellSize="${0}"></ae-event-handler-layer> `),this.cellSize)}setClicksDisabled(e){e?this.classList.add("disabled"):this.classList.remove("disabled")}addBuilding(e){return this.buildingsLayer.addBuilding(e)}addUnit(e){return this.unitsLayer.addUnit(e)}async updateUnit(e,t){this.setClicksDisabled(!0),await this.unitsLayer.updateUnit(e,t),this.setClicksDisabled(!1)}async moveUnit(t,a){this.setClicksDisabled(!0);for(const i of a.slice(1))await this.unitsLayer.moveUnit(t,i),await e(150);this.setClicksDisabled(!1)}removeUnit(e){return this.unitsLayer.removeUnit(e)}addGrave(e){return this.unitsLayer.addGrave(e)}removeGrave(e){return this.unitsLayer.removeGrave(e)}showAttack(e,t){return this.setClicksDisabled(!0),this.unitsLayer.showAttack({from:e,to:t}).then((()=>this.setClicksDisabled(!1)))}showUnitActions(e){return this.cellStateLayer.setState(e),this.actionsLayer.setUnitActions(e)}clear(){this.buildingsLayer.clear(),this.unitsLayer.clear()}updated(e){this.cellSize=48,this.style.setProperty("--squareSize",this.cellSize+"px"),this.style.width=`calc(${this.width} * var(--squareSize))`,this.style.height=`calc(${this.height} * var(--squareSize))`}};h.styles=t(o||(o=y`:host{display:block;position:relative;--squareSize:64px}:host(.disabled){pointer-events:none}`)),a([i({type:Number})],h.prototype,"width",void 0),a([i({type:Number})],h.prototype,"height",void 0),a([i({type:Number})],h.prototype,"cellSize",void 0),a([s("ae-terrain-layer")],h.prototype,"terrainLayer",void 0),a([s("ae-buildings-layer")],h.prototype,"buildingsLayer",void 0),a([s("ae-cell-state-layer")],h.prototype,"cellStateLayer",void 0),a([s("ae-units-layer")],h.prototype,"unitsLayer",void 0),a([s("ae-actions-layer")],h.prototype,"actionsLayer",void 0),a([s("ae-event-handler-layer")],h.prototype,"eventHandlerLayer",void 0),h=a([r("ae-battle-field")],h);
