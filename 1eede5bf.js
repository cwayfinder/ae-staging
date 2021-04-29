import{u as e,d as t}from"./fbfb0d48.js";window.BattleView=class{constructor(e,t,i,s,a){this.repo=e,this.eventService=t,this.apiService=i,this.ai=s,this.soundService=a,this.battle=document.querySelector("ae-battle"),this.battle.field.addEventListener("single-click",(e=>this.apiService.click(e.detail))),this.battle.field.addEventListener("double-click",(e=>{const t=this.repo.getUnit({cell:e.detail});t&&this.showUnitPotentialActions(t)})),this.battle.field.addEventListener("long-press",(e=>{const t=this.repo.getUnit({cell:e.detail});if(t){const e=this.apiService.getUnitInfo(t.id);this.battle.unitInfo.open(e)}})),this.battle.addEventListener("end-turn",(()=>this.apiService.endTurn())),this.battle.addEventListener("menu-save-battle",(()=>{this.battle.save.open({name:this.apiService.suggestSaveName()})})),this.battle.addEventListener("menu-quit-battle",(()=>window.location.reload())),this.battle.addEventListener("menu-restart-battle",(()=>{this.apiService.restart()})),this.battle.addEventListener("save-submit",(e=>this.apiService.save(e.detail.name))),this.battle.addEventListener("unit-store-revive",(({detail:e})=>{this.apiService.reviveUnit(e.id,e.storeCell)})),this.battle.addEventListener("unit-store-purchase",(({detail:e})=>{this.apiService.purchaseUnit(e.type,e.storeCell)}))}open(){this.battle.style.zIndex="10",this.startServerEventsHandling()}showAttack({from:e,to:t}){return this.battle.field.showAttack(e,t)}showObjective(){this.showPopup({popupName:"simple-notification",popupData:{header:window.APP.lang.get("objective"),text:window.APP.lang.get("skirmishObjective")}})}showBriefing(e){e.reduce(((e,t)=>e.then((()=>this.showPopup(t)))),Promise.resolve())}centerToXY(e){this.battle.centerToXY(e)}showPopup(e){return e.onShow&&this[e.onShow.fn].apply(this,e.onShow.args),this.battle.openPopup(e.popupName,e.popupData).then((()=>{e.onHide&&this[e.onHide.fn].apply(this,e.onHide.args)}))}showUnitPotentialActions(e){const t=this.apiService.getPotentialAttackActions(e.id);this.battle.field.showUnitActions(t)}startServerEventsHandling(){const e=[];let i=!1;const s=this;async function a(){if(!i&&e.length){const o=e.shift();i=!0,await t(0),await s.handleModelChanges(o),i=!1,a()}}this.serverEventListener=t=>{e.push(t),a()},this.eventService.addListener(this.serverEventListener)}stopServerEventsHandling(){this.eventService.removeListener(this.serverEventListener)}async handleModelChanges(e){if("add-unit-effect"===e.type){const t=e.details.unitId,i=e.details.effect.type;"inspired"===i?this.battle.field.updateUnit(t,{underWispAura:!0}):"poisoned"===i&&this.battle.field.updateUnit(t,{poisoned:!0})}else if("remove-unit-effect"===e.type){const t=e.details.unitId,i=e.details.effectType;"inspired"===i?this.battle.field.updateUnit(t,{underWispAura:!1}):"poisoned"===i&&this.battle.field.updateUnit(t,{poisoned:!1})}else if("update-player"===e.type){e.details.id===this.repo.getBattle().activePlayerId&&(this.battle.money=this.repo.getActivePlayer().money)}else if("add-unit"===e.type)this.addUnitToView(e.details);else if("add-grave"===e.type)this.addGraveToView(e.details);else if("update-unit"===e.type){const{id:t,update:i}=e.details;"isActive"in i&&(i.active=i.isActive),await this.battle.field.updateUnit(t,i)}else if("update-building"===e.type){const{id:t,update:i}=e.details;if("ownerId"in i){const e=this.repo.getPlayer({id:i.ownerId});i.color=e?e.color:null}this.battle.field.buildingsLayer.updateBuilding(t,i)}else if("remove-unit"===e.type)this.battle.field.removeUnit(e.details);else if("remove-grave"===e.type)this.battle.field.removeGrave(e.details);else if("attack"===e.type){const{from:t,to:i}=e.details;await this.showAttack({from:t,to:i})}else if("select-unit"===e.type){const{id:t,actions:i}=e.details;this.battle.field.showUnitActions(i)}else if("init"===e.type){this.battle.field.clear();const{size:t,mapImageDataUrl:i,buildings:s,units:a,graves:o,type:n,round:l,player:d}=e.details;this.battle.field.width=t.width,this.battle.field.height=t.height,this.battle.field.terrainLayer.setSrc(i),s.forEach((e=>this.addBuildingToView(e))),a.forEach((e=>this.addUnitToView(e))),o.forEach((e=>this.addGraveToView(e)));const r="ai"===d.type?"bg-bad.mp3":"bg-good.mp3";this.soundService.play({sound:r,roadIndex:0,loop:!0}),this.battle.playerId=d.id,this.battle.money=d.money,this.battle.color=d.color,this.battle.round=l,this.battle.showEndTurnButton="ai"!==d.type,this.battle.field.setClicksDisabled("ai"===d.type)}else if("start-turn"===e.type){const{player:t,round:i,income:s}=e.details,a="ai"===t.type?"bg-bad.mp3":"bg-good.mp3";this.soundService.play({sound:a,roadIndex:0,loop:!0}),this.battle.playerId=t.id,this.battle.money=t.money,this.battle.color=t.color,this.battle.round=i,this.battle.showEndTurnButton="ai"!==t.type,this.battle.field.setClicksDisabled("ai"===t.type);const o=this.repo.getUnits({ownerId:t.id},!0).find((e=>e.abilities.includes("commander")));await this.battle.openNewTurnPopup({color:t.color,income:s,character:null==o?void 0:o.type,round:i,autoClose:1e3}),"ai"===t.type&&this.ai.run(t.id)}else if("show-briefing"===e.type)this.showBriefing(e.details);else if("game-end"===e.type){const{victory:t}=e.details;this.battle.openGameEnd({victory:t});const i=t?"victory.mp3":"game-over.mp3";this.soundService.play({sound:i,roadIndex:0,loop:!0})}else if("player-defeat"===e.type){const{name:t,color:i}=e.details;await this.showPopup({popupName:"simple-notification",popupData:{header:`${t} (${i}) has been defeated`}})}else"center"===e.type?this.centerToXY(e.details):"open-store"===e.type?this.openStore(e.details.storeCell):"story"===e.type?await this.battle.openStory(e.details):"conversation"===e.type?(e.details.cell&&this.battle.centerToXY(e.details.cell),await this.battle.openConversation(e.details)):"notification"===e.type?await this.battle.openNotification(e.details):"open-mission"===e.type&&await this.apiService.startMission(e.details.missionId)}addBuildingToView(e){const t=null===e.ownerId?null:this.repo.getPlayer({id:e.ownerId});this.battle.field.buildingsLayer.addBuilding({id:e.id,cell:e.cell,type:e.type,color:t&&t.color,state:e.state})}addUnitToView(t){const i=this.repo.getPlayer({id:t.ownerId});this.battle.field.addUnit({id:t.id,cell:t.cell,type:t.type,color:i.color,health:t.health,defaultHealth:t.defaultHealth,active:t.isActive,level:t.level,underWispAura:e(t,"inspired"),poisoned:e(t,"poisoned")})}addGraveToView(e){this.battle.field.addGrave({id:e.id,cell:e.cell})}openStore(e){const{tooMany:t,player:i,purchasableUnits:s,revivableUnits:a}=this.apiService.getStoreData(e);this.battle.unitStore.open({purchasableUnits:s,revivableUnits:a,color:i.color,money:i.money,storeCell:e})}};
