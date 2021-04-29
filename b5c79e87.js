import{t as e}from"./fcafee02.js";import{d as t}from"./eeb3eefa.js";import{u as a}from"./fbfb0d48.js";window.battleService=new class{constructor(e,t){this.repo=e,this.pathFinder=t}calculateDamage(e,t){if(t.health<=0)return{min:0,max:0};const i=this.getTerrainType(e.cell),l=this.getTerrainType(t.cell);let r=0;r+=2*e.level,a(e,"inspired")&&(r+=10),a(e,"poisoned")&&(r-=10),e.abilities.includes("waterborne")&&"water"===i&&(r+=10),e.abilities.includes("marksman")&&t.abilities.includes("airborne")&&(r+=30),e.abilities.includes("warriorOfLight")&&t.abilities.includes("undead")&&(r+=30);let n=t.def;n+=2*t.level,a(t,"poisoned")&&(n-=10),t.abilities.includes("waterborne")&&"water"===l&&(n+=15),n+=this.getArmorByXY(t.cell);const s=e.health/e.defaultHealth;return{min:Math.max((e.atk.min+r-n)*s,1),max:Math.max((e.atk.max+r-n)*s,1)}}getTerrainType(e){return this.repo.getTerrains()[`x${e.x}y${e.y}`].replace(/\-\d+$/,"")}getArmorByXY(t){const a=this.repo.getBuilding({cell:t});if(a)return a.defence;const i=this.getTerrainType(t);return e[i].defence}getDefByTerrain(e){const t=this.getTerrainType(e.cell);return e.abilities.includes("waterborne")&&"water"===t?15:this.getArmorByXY(e.cell)}canStrikeBack(e,t){if("crystal"===e.type||"catapult"===e.type)return!1;return Math.abs(e.cell.x-t.cell.x)+Math.abs(e.cell.y-t.cell.y)<=1}calculateAttackData(e,t){const a=this.calculateDamage(e,t),i=this.calculateKillProbability(a,t.health);let l=null,r=0;if(i<1&&this.canStrikeBack(t,e)){const i=t.health;t.health=Math.max(i-a.min,0);const n=this.calculateDamage(t,e).max;t.health=Math.max(i-a.max,0);const s=this.calculateDamage(t,e).min;t.health=i,l={min:s,max:n},r=this.calculateKillProbability(l,e.health)}return{dmg:a,killProbability:i,responseDmg:l,suicideProbability:r}}calculateKillProbability(e,t){const a=(t-e.min)/(e.max-e.min);return 1-Math.min(Math.max(a,0),1)}getClosestAvailableCell(e){const a=this.repo.getBattle().size;let i=[];for(let e=0;e<a.width;e+=1)for(let t=0;t<a.height;t+=1){const a={x:e,y:t};this.repo.getUnit({cell:a})||i.push(a)}return i=i.sort(((a,i)=>t(e,a)-t(e,i))),i[0]}getWispAuraMap(e){return this.pathFinder.getReachableCells({start:e.cell,range:e.auraRange,moveType:"none"})}playerHasCastle(e){const t=this.repo.getBuildings({ownerId:e,type:"castle"});if(!t.length)return!1;if(t.filter((e=>!this.repo.getUnit({cell:e.cell,enemy:e.ownerId}))).length)return!0;return!!this.repo.getUnits({ally:e}).length}playerHasCommander(e){return this.repo.getUnits({ownerId:e}).some((e=>e.abilities.includes("commander")))}}(window.battleRepository,window.pathFinder);
