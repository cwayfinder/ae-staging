import{c as e,_ as t,a,L as o,h as n}from"./5b7dc6e2.js";let i,s,l=e=>e,c=class extends o{render(){return n(i||(i=l` <img class="logo" src="assets/ui/logo.png" alt=""> <div class="menu"> <ae-button icon="campaign" label="Campaign" @click="${0}"></ae-button> <ae-button icon="load" label="Load game" @click="${0}"></ae-button> <ae-button icon="skirmish" label="Skirmish" @click="${0}"></ae-button> <ae-button icon="settings" label="Settings" @click="${0}"></ae-button> </div> `),this.openCampaign,this.loadBattle,this.openSkirmish,this.openSettings)}openCampaign(){document.querySelector("ae-select-mission").open()}loadBattle(){document.querySelector("ae-load-battle").open()}openSkirmish(){document.querySelector("ae-select-map").open()}openSettings(){document.querySelector("ae-settings").open()}};c.styles=e(s||(s=l`:host{display:grid;place-content:space-around;place-items:center;box-sizing:border-box;position:fixed;top:0;left:0;width:100%;height:100%;background:#5a3019;z-index:1}.logo{display:block;max-width:75vw}.menu{display:grid;grid-gap:12px;justify-content:center}`)),c=t([a("ae-main-menu")],c);