import{i as t,s as e,a as i,g as l}from"./eeb3eefa.js";import{u as a}from"./fbfb0d48.js";class r{constructor(){this.map={}}set(t,e){this.map[r.cellToString(t)]=e}get(t){return this.map[r.cellToString(t)]}has(t){return r.cellToString(t)in this.map}entries(){return Object.entries(this.map).map((([t,e])=>[r.stringToCell(t),e]))}values(){return Object.values(this.map)}static cellToString({x:t,y:e}){return`${t}|${e}`}static stringToCell(t){const[e,i]=t.split(this.delimiter).map((t=>Number(t)));return{x:e,y:i}}}r.delimiter="|";window.unitService=new class{constructor(t,e,i){this.repo=t,this.pathFinder=e,this.battleService=i}getActions(t){const e=this.repo.getUnit({id:t});if(!e)throw new Error("No unit found with id "+t);if(!e.isActive)return[];const i=[];return this.canRepairBuilding(e)&&i.push({cell:e.cell,type:"fix-building"}),this.canCaptureBuilding(e)&&i.push({cell:e.cell,type:"occupy-building"}),i.push(...this.getGravesToRaise(e).map((t=>({type:"raise-skeleton",cell:t})))),i.push(...this.getUnitsUnderAttack(e).map((({cell:t,data:e})=>({type:"attack",cell:t,data:e})))),i.push(...this.getBuildingsUnderAttack(e).map((t=>({type:"destroy-building",cell:t})))),e.didMove||(i.push(...this.getCellsToMove(e).map((t=>({type:"move",cell:t,data:this.getCellData(e,t)})))),i.push({type:"remain",cell:e.cell,data:this.getCellData(e,e.cell)})),i}getPotentialAttackActions(t){const e=this.repo.getUnit({id:t});if(!e)throw new Error("No unit found with id "+t);const i=[];if(e.abilities.includes("stationary")){const t=this.getAttackMap(e).map((t=>({cell:t,type:"possible-attack"})));i.push(...t)}else{const t=this.getAvailableAttackMapWithPath(e).map((t=>({cell:t,type:"possible-attack"})));i.push(...t)}return i}getPotentialMoves(t){const e=this.repo.getUnit({id:t});if(e)return this.getAvailablePathWithTeamUnit(e).map((t=>({cell:t,type:"move"})));throw new Error("No unit found with id "+t)}getPotentialCaptureActions(t){const e=[],i=this.repo.getUnit({id:t});if(i){const t=this.getAvailablePathWithTeamUnit(i);if(i.abilities.includes("castleCaptor")){const l=t.filter((t=>this.repo.getBuilding({cell:t,type:"castle",neutralOrEnemy:i.ownerId}))).map((t=>({cell:t,type:"possible-capture",buildingType:"castle"})));e.push(...l)}if(i.abilities.includes("villageCaptor")){const l=t.filter((t=>this.repo.getBuilding({cell:t,type:"farm",neutralOrEnemy:i.ownerId}))).map((t=>({cell:t,type:"possible-capture",buildingType:"farm"})));e.push(...l)}}return e}canRepairBuilding(t){if(t.abilities.includes("repairer")){return!!this.repo.getBuilding({cell:t.cell,state:"destroyed"})}return!1}canCaptureBuilding(t){const e=this.repo.getBuilding({cell:t.cell,neutralOrEnemy:t.ownerId,state:"normal"});if(e){if(t.abilities.includes("villageCaptor")&&"farm"===e.type)return!!e;if(t.abilities.includes("castleCaptor")&&"castle"===e.type)return!!e}return!1}getGravesToRaise(t){if(!t.abilities.includes("summoner"))return[];return this.pathFinder.getReachableCells({start:t.cell,range:t.raiseRange,moveType:"none"}).filter((t=>this.repo.getGrave({cell:t})&&!this.repo.getUnit({cell:t})))}getUnitsUnderAttack(e){if(e.didAttack)return[];if("catapult"===e.type&&e.didMove)return[];const i=this.getAttackMap(e);return this.repo.getUnits({enemy:e.ownerId}).filter((e=>t(i,e.cell))).map((t=>({data:this.battleService.calculateAttackData(e,t),cell:t.cell})))}getBuildingsUnderAttack(e){if(e.didAttack)return[];if(e.abilities.includes("stationary")&&e.didMove)return[];if(e.abilities.includes("destroyer")){const i=this.getAttackMap(e);return this.repo.getBuildings({type:"farm",state:"normal",enemy:e.ownerId,captured:!0}).filter((e=>t(i,e.cell))).filter((t=>!this.repo.getUnit({cell:t.cell}))).map((t=>t.cell))}return[]}getCellsToMove(t){const i=this.getAvailablePathWithTeamUnit(t),l=this.repo.getUnits({ally:t.ownerId});return i.filter((t=>!e(l,t)))}getAttackMap(t,e){e||(e=t.cell);const i=this.pathFinder.getReachableCells({start:e,range:"number"==typeof t.atkRange?t.atkRange:t.atkRange.max,moveType:"none"});if("catapult"===t.type){const t=[{x:e.x-1,y:e.y},{x:e.x+1,y:e.y},{x:e.x,y:e.y-1},{x:e.x,y:e.y+1}];return i.filter((e=>!t.some((({x:t,y:i})=>t===e.x&&i===e.y))))}return i}getAvailablePathWithTeamUnit(t,i){if(t.didMove)return[];let l=t.mov;a(t,"poisoned")&&(l-=1);let r="walk";t.abilities.includes("waterborne")&&(r="flow"),t.abilities.includes("airborne")&&(r="fly");let s=[];i||(s=this.repo.getUnits({enemy:t.ownerId}).map((t=>`x${t.cell.x}y${t.cell.y}`)));const n=this.pathFinder.getReachableCells({start:t.cell,range:l,moveType:r,obstacles:s});if("catapult"===t.type)return n.filter((e=>!this.repo.getBuilding({cell:e,type:"farm",state:"normal",enemy:t.ownerId,captured:!0})));if("sorceress"===t.type){const t=this.repo.getGraves();return n.filter((i=>!e(t,i)))}return n}getAvailableAttackMapWithPath(e){const i=[e.cell];return this.getAvailablePathWithTeamUnit(e).forEach((l=>{this.getAttackMap(e,l).filter((e=>!t(i,e))).forEach((t=>i.push(t)))})),i.shift(),i}getCellData(t,e){const i=t.cell;return t.cell=e,t.cell=i,{}}getPlayerThreat(t){const e=this.repo.getUnits({enemy:t}),l=new r;return e.forEach((t=>{this.getPotentialAttackActions(t.id).forEach((e=>{const a=e.cell,r=t.defaultHealth/100*t.health,s=t.def-this.battleService.getArmorByXY(a),n={type:t.type,dmg:{min:t.atk.min*r/100-s,max:t.atk.max*r/100-s},avg:Math.floor(i(t.atk)*r/100-s)},c=l.get(a)||[];c.push(n),l.set(a,c)}))})),l}getEnemyPossibleCaptures(t){const e=this.repo.getUnits({enemy:t}),i=new r;return e.map((t=>this.getPotentialCaptureActions(t.id).forEach((t=>{const e=t.cell;i.set(e,t.buildingType)})))),l(i.values())}}(window.battleRepository,window.pathFinder,window.battleService);