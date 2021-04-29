import{s as e}from"./c1c0f9e5.js";import{u as t}from"./8b91577e.js";import{f as i}from"./eeb3eefa.js";window.shopping=new class{constructor(e,t,i,r,s){this.repo=e,this.unitStoreService=t,this.battleService=i,this.pathFinder=r,this.apiService=s}buyUnits(e){if(this.unitStoreService.isUnitsTooMuch())return;this.player=this.repo.getPlayer({id:e});if(this.repo.getUnits({ownerId:e}).length>=this.player.unitLimit)return;this.cache={};const t=this.repo.getBuildings({type:"castle",ownerId:e}).map((e=>e.cell));if(!t.length)return;const i=this.getStoreClosestToEnemyCommander(t)||this.getStoreClosestToEnemyStore(t)||t[0],r=this.repo.getUnits({ownerId:e,dead:!0});for(const e of r)this.player.money>=e.cost&&this.apiService.reviveUnit(e.id,i);this.buyNextUnit(i)}buyNextUnit(e){const i=this.getNextPrioritizedUnitToBuy()||this.getNextRandomUnitToBuy(e);t[i].cost<=this.player.money&&(this.unitStoreService.buyUnit(i,e),this.buyNextUnit(e))}getNextPrioritizedUnitToBuy(){const t=e([{type:"soldier",min:2},{type:"archer",min:2}]);for(const{type:e,min:i}of t){if(this.repo.getUnits({ownerId:this.player.id,type:e}).length<i)return e}return null}getNextRandomUnitToBuy(t){const i=[];return i.push("soldier","archer","catapult"),i.push("sorceress","golem","dire-wolf","dragon"),i.push("sorceress","golem","dire-wolf","dragon"),this.waterInRange(t)&&i.push("elemental","elemental"),e(i)[0]}waterInRange({x:e,y:i}){const r=["store","x",e,"y",i,"water-in-range"].join("-");if(r in this.cache)return this.cache[r];const s=this.pathFinder.getReachableCells({start:{x:e,y:i},range:t.elemental.mov,moveType:"flow"}).some((e=>"water"===this.battleService.getTerrainType(e)));return this.cache[r]=s,s}getStoreClosestToEnemyCommander(e){const t=this.repo.getUnits({enemy:this.player.id}).filter((e=>e.abilities.includes("commander"))).map((e=>e.cell));return i(t,e)}getStoreClosestToEnemyStore(e){const t=this.repo.getBuildings({type:"castle",enemy:this.player.id,captured:!0}).map((e=>e.cell));return i(t,e)}}(window.battleRepository,window.unitStoreService,window.battleService,window.pathFinder,window.apiService);