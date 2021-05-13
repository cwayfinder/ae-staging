import{c as t}from"./d1ada6f5.js";import{c as e,_ as i,p as s,a,L as n,h as o}from"./f0da52c9.js";let l,d,c=t=>t,r=class extends n{constructor(){super(...arguments),this.round=5}render(){return o(l||(l=c`
      <div class="info">
        <div class="round">Round ${0}</div>

        <div class="objectives">
          <div class="item">
            <div class="icon"></div>
            <div class="text">- Defeat the enemy commander</div>
          </div>
          <div class="item">
            <div class="icon"></div>
            <div class="text">- Occupy all enemy castles</div>
          </div>
        </div>
      </div>

      <div class="menu">
        <ae-button label="Back to battle" @click="${0}"></ae-button>
        <ae-button label="Save" @click="${0}" disabled="${0}"></ae-button>
<!--        <ae-button label="Settings" @click="${0}"></ae-button>-->
        <ae-button label="Restart" @click="${0}"></ae-button>
        <ae-button label="Quit battle" @click="${0}"></ae-button>
      </div>
    `),this.round,this.close,this.save,this.clicksDisabled,this.openSettings,this.restart,this.quit)}close(){this.remove()}openSettings(e){this.dispatchEvent(t("menu-settings")),this.close()}save(e){this.dispatchEvent(t("menu-save-battle")),this.close()}quit(e){this.dispatchEvent(t("menu-quit-battle")),this.close()}restart(e){this.dispatchEvent(t("menu-restart-battle")),this.close()}};r.styles=e(d||(d=c`:host{display:grid;grid-template-rows:1fr auto;position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000;background:rgba(0,0,0,.5)}.info{display:grid;justify-items:center;align-content:space-around}.objectives{justify-self:stretch;padding:20px;display:grid;align-content:center;grid-gap:8px;background:#d7af76;font-family:Changa;font-style:normal;font-weight:800;font-size:18px;line-height:33px;color:#4a2210}.round{display:flex;align-items:center;justify-content:center;padding:0 30px;background:#d7af76;font-family:Changa,sans-serif;font-style:normal;font-weight:800;font-size:28px;line-height:52px;color:#4a2210}.menu{display:grid;grid-gap:12px;justify-content:center;padding:24px}ae-button{justify-content:center}`)),i([s({type:Number})],r.prototype,"round",void 0),i([s({type:Boolean})],r.prototype,"clicksDisabled",void 0),r=i([a("ae-battle-menu")],r);
