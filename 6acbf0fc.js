import{d as e}from"./fbfb0d48.js";import{c as t,_ as i,p as a,q as s,a as r,L as l,h as n}from"./f0da52c9.js";let o,d,h=e=>e,y=class extends l{render(){return n(o||(o=h` <ae-terrain-layer></ae-terrain-layer> <ae-buildings-layer></ae-buildings-layer> <ae-cell-state-layer></ae-cell-state-layer> <ae-units-layer></ae-units-layer> <ae-actions-layer></ae-actions-layer> <ae-event-handler-layer .cellSize="${0}"></ae-event-handler-layer> `),this.cellSize)}fitSize(){let e=window.innerWidth/this.width;e=8*Math.floor(e/8),this.cellSize=e,Promise.resolve().then((()=>this.scrollIntoView({block:"center"})))}setClicksDisabled(e){e?this.classList.add("disabled"):this.classList.remove("disabled")}addBuilding(e){return this.buildingsLayer.addBuilding(e)}addUnit(e){return this.unitsLayer.addUnit(e)}updateUnit(e,t){return this.setClicksDisabled(!0),this.unitsLayer.updateUnit(e,t).then((()=>this.setClicksDisabled(!1)))}async moveUnit(t,i){this.setClicksDisabled(!0);for(const a of i.slice(1))await this.unitsLayer.moveUnit(t,a),await e(150);this.setClicksDisabled(!1)}removeUnit(e){return this.unitsLayer.removeUnit(e)}addGrave(e){return this.unitsLayer.addGrave(e)}removeGrave(e){return this.unitsLayer.removeGrave(e)}showAttack(e,t){return this.setClicksDisabled(!0),this.unitsLayer.showAttack({from:e,to:t}).then((()=>this.setClicksDisabled(!1)))}showUnitActions(e){return this.cellStateLayer.setState(e),this.actionsLayer.setUnitActions(e)}clear(){this.buildingsLayer.clear(),this.unitsLayer.clear()}updated(e){this.cellSize=48,this.style.setProperty("--squareSize",this.cellSize+"px"),this.style.width=`calc(${this.width} * var(--squareSize))`,this.style.height=`calc(${this.height} * var(--squareSize))`}};y.styles=t(d||(d=h`:host{display:block;position:relative;--squareSize:64px}:host(.disabled){pointer-events:none}`)),i([a({type:Number})],y.prototype,"width",void 0),i([a({type:Number})],y.prototype,"height",void 0),i([a({type:Number})],y.prototype,"cellSize",void 0),i([s("ae-terrain-layer")],y.prototype,"terrainLayer",void 0),i([s("ae-buildings-layer")],y.prototype,"buildingsLayer",void 0),i([s("ae-cell-state-layer")],y.prototype,"cellStateLayer",void 0),i([s("ae-units-layer")],y.prototype,"unitsLayer",void 0),i([s("ae-actions-layer")],y.prototype,"actionsLayer",void 0),i([s("ae-event-handler-layer")],y.prototype,"eventHandlerLayer",void 0),y=i([r("ae-battle-field")],y);
