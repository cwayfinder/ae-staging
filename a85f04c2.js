import{c as e,_ as t,a as o,L as a,h as i}from"./5b7dc6e2.js";let n,l,s=e=>e,r=class extends a{render(){return i(n||(n=s``))}getUnit(e){var t;return null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(`ae-unit[data-unit-id="${e}"]`)}addUnit(e){const t=document.createElement("ae-unit");t.unitId=e.id,t.cell=e.cell,t.type=e.type,t.color=e.color,t.health=e.health,t.defaultHealth=e.defaultHealth,t.active=e.active,t.level=e.level,t.effects=e.effects,t.animationDuration=200,setTimeout((()=>{this.shadowRoot&&this.shadowRoot.append(t)}))}async updateUnit(e,t){const o=this.getUnit(e);if("health"in t&&o.health!==t.health){const e=t.health-o.health;await o.runHealthChangeAnimation(e)}"level"in t&&o.level<t.level&&await o.runLevelUpAnimation(),"cell"in t&&await o.move(t.cell);for(const[e,a]of Object.entries(t))o[e]=a}removeUnit(e){const t=this.getUnit(e);null==t||t.remove()}moveUnit(e,t){return this.getUnit(e).move(t)}addGrave(e){const t=document.createElement("ae-grave");t.graveId=e.id,t.cell=e.cell,setTimeout((()=>{this.shadowRoot&&this.shadowRoot.append(t)}))}getGrave(e){var t;return null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(`ae-grave[data-grave-id="${e}"]`)}removeGrave(e){const t=this.getGrave(e);null==t||t.remove()}showAttack({from:e,to:t}){const o=document.createElement("ae-attack");if(!this.shadowRoot)throw new Error("No shadowRoot");return this.shadowRoot.append(o),o.move(e,t).then((()=>o.remove()))}clear(){this.shadowRoot&&(this.shadowRoot.innerHTML="")}};r.styles=e(l||(l=s`:host{display:block;position:absolute;left:0;right:0;top:0;bottom:0}`)),r=t([o("ae-units-layer")],r);
