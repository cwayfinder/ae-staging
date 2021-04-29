import{s as e,r as i}from"./eeb3eefa.js";import{B as t}from"./dbbb96b8.js";window.unitActionExecutor=new class{constructor(e,i,t,c,n,d){this.repo=e,this.crudService=i,this.battleService=t,this.eventService=c,this.selectionService=n,this.unitService=d}execute(e,{type:i,cell:t}){switch(this.selectionService.selectUnit(null),i){case"remain":break;case"move":this.moveTo(e,t);break;case"wait":this.wait(e);break;case"undo-move":this.undoMove(e,t);break;case"attack":this.attack(e,t);break;case"destroy-building":this.destroyBuilding(e,t);break;case"raise-skeleton":this.raise(e,t);break;case"fix-building":this.fixBuilding(e);break;case"occupy-building":this.occupyBuilding(e)}}emitEvent(e,i){this.eventService.emitEvent(new t("unit-action",e,i))}moveTo(i,t){const c=i.cell;this.crudService.updateUnit(i.id,{cell:t,didMove:!0});const n=[],d=this.unitService.getActions(i.id);e(d,t)||n.push({cell:t,type:"wait"}),n.push({cell:c,type:"undo-move"}),this.selectionService.selectUnit(i.id,n)}wait(e){this.crudService.updateUnit(e.id,{isActive:!1})}undoMove(e,i){this.crudService.updateUnit(e.id,{cell:i,didMove:!1}),this.selectionService.selectUnit(null)}raise(e,i){const t=this.repo.getGrave({cell:i});if(!t)throw new Error(`Grave at cell {x: ${i.x}, y: ${i.y}} not found`);this.crudService.removeGrave(t.id),this.crudService.updateUnit(e.id,{isActive:!1}),this.crudService.addUnit({ownerId:e.ownerId,type:"skeleton",cell:i})}fixBuilding(e){const i=this.repo.getBuilding({cell:e.cell});if(!i)throw new Error(`Building at cell {x: ${e.cell.x}, y: ${e.cell.y}} not found`);this.crudService.updateBuilding(i.id,{state:"normal"}),this.crudService.updateUnit(e.id,{isActive:!1})}occupyBuilding(e){const i=this.repo.getBuilding({cell:e.cell});if(!i)throw new Error(`Building at cell {x: ${e.cell.x}, y: ${e.cell.y}} not found`);this.crudService.updateBuilding(i.id,{ownerId:e.ownerId}),this.crudService.updateUnit(e.id,{isActive:!1})}destroyBuilding(e,i){const t=this.repo.getBuilding({cell:i});if(!t)throw new Error(`Building at cell {x: ${i.x}, y: ${i.y}} not found`);this.emitEvent("attack",{from:e.cell,to:i}),this.crudService.updateBuilding(t.id,{ownerId:null,state:"destroyed"}),this.crudService.updateUnit(e.id,{isActive:!1,xp:e.xp+e.atk.min})}attack(e,i){const t=this.repo.getUnit({cell:i});if(!t)throw new Error(`Unit at cell {x: ${i.x}, y: ${i.y}} not found`);this.emitEvent("attack",{from:e.cell,to:t.cell}),this.doDamage(e,t),t.health>0&&(e.abilities.includes("poisoner")&&this.poison(t),this.battleService.canStrikeBack(t,e)&&(this.emitEvent("attack",{from:t.cell,to:e.cell}),this.doDamage(t,e),e.health>0&&t.abilities.includes("poisoner")&&this.poison(e))),e.health>0?this.crudService.updateUnit(e.id,{isActive:!1}):this.killUnit(e),t.health<=0&&this.killUnit(t)}poison(e){this.crudService.addUnitEffect(e.id,{type:"poisoned",data:{rounds:2}})}doDamage(e,t){const c=i(this.battleService.calculateDamage(e,t));this.crudService.updateUnit(t.id,{health:t.health-Math.min(c,t.health)}),this.crudService.updateUnit(e.id,{xp:e.xp+c})}killUnit(e){e.abilities.includes("commander")&&this.crudService.updateUnit(e.id,{dead:!0,deathCount:e.deathCount+1,cost:200+200*e.deathCount}),this.crudService.removeUnit(e.id),e.abilities.includes("commander")||e.abilities.includes("undead")||this.crudService.addGrave({cell:e.cell})}}(window.battleRepository,window.crudService,window.battleService,window.eventService,window.selectionService,window.unitService);
