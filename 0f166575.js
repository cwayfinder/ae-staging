import{c as t,_ as s,p as i,a as e,L as a,h as l}from"./f0da52c9.js";let o,n,d,c,r,p,v,f,m,h,g=t=>t,u=class extends a{constructor(){super(...arguments),this.abilities=[]}render(){return l(o||(o=g` <div class="stats"> <div class="item"> <div class="label">Attack</div> <div class="value"> <img src="assets/ui/icons/attack.png" alt=""> ${0}-${0} </div> </div> <div class="item"> <div class="label">Defence</div> <div class="value"> <img src="assets/ui/icons/defence.png" alt=""> ${0} </div> </div> <div class="item"> <div class="label">Movement</div> <div class="value"> <img src="assets/ui/icons/movement.png" alt=""> ${0} </div> </div> </div> <section class="description"> <div class="header">Description</div> <div class="content">${0}</div> </section> <section class="abilities"> <div class="header">Abilities</div> <div class="content"> ${0} </div> </section> ${0} `),this.atk.min,this.atk.max,this.cellDef?l(n||(n=g`${0}+${0}`),this.def,this.cellDef):l(d||(d=g`${0}`),this.def),this.mov,this.description,this.abilities.map((t=>l(c||(c=g` <div class="item"> <span class="label">${0}</span> - <span class="label">${0}</span> </div> `),t.label,t.description))),this.effects?l(r||(r=g` <section class="effects"> <div class="header">Effects</div> <div class="content"> ${0} </div> </section> `),this.effects.length?this.effects.map((t=>{var s,i;return l(p||(p=g` <div class="item"> <span class="label">${0}</span> ${0} - <span class="label">${0}</span> </div> `),t.label,(null===(s=t.data)||void 0===s?void 0:s.rounds)?l(v||(v=g`(${0})`),this.formatRounds(null===(i=t.data)||void 0===i?void 0:i.rounds)):"",t.description)})):l(f||(f=g` <div class="none">None</div>`))):l(m||(m=g``)))}formatRounds(t){return`${t} round${t>1?"s":""}`}};u.styles=t(h||(h=g`
    :host {
      display: block;
    }

    .stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px;
      margin: 10px 0;
    }

    .stats .item {
    }

    .stats .item .label {
      font-family: Changa;
      font-style: normal;
      font-weight: 800;
      font-size: 14px;
      line-height: 26px;
      color: #4A2210;
      text-align: center;
    }

    .stats .item .value {
      background: #A87A3B;
      height: 30px;
      display: grid;
      grid-auto-flow: column;
      align-items: center;
      //grid-gap: 8px;
      padding: 0 4px;

      font-family: Changa;
      font-style: normal;
      font-weight: 800;
      font-size: 16px;
      line-height: 29px;
      color: #FFFBDE;

    }

    section {
      margin: 5px 0;
    }

    section .header {
      font-family: Changa;
      font-style: normal;
      font-weight: 800;
      font-size: 16px;
      line-height: 24px;
      text-transform: uppercase;
      color: #4A2210;
      border-bottom: 1px solid #A36F3F;
    }

    section .content {
      font-family: Changa;
      font-style: normal;
      font-weight: 800;
      font-size: 14px;
      line-height: 26px;
      color: #7D4329;
      margin-left: 5px;
    }
  `)),s([i({type:Object})],u.prototype,"atk",void 0),s([i({type:Number})],u.prototype,"def",void 0),s([i({type:Number})],u.prototype,"cellDef",void 0),s([i({type:Number})],u.prototype,"mov",void 0),s([i({type:String})],u.prototype,"description",void 0),s([i({type:Array})],u.prototype,"abilities",void 0),s([i({type:Array})],u.prototype,"effects",void 0),u=s([e("ae-unit-details")],u);
