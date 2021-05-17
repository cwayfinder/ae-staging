import{c as t}from"./0770b19d.js";import{c as e,_ as i,p as s,a as o,L as n,h as l}from"./f0da52c9.js";let a,c,d=t=>t,r=class extends n{render(){return l(a||(a=d` <div class="label">Recruit unit</div> <ae-unit-picker .units="${0}" .selected="${0}" .money="${0}" .color="${0}" @unit-picker-select="${0}"></ae-unit-picker> <div class="unit-info"> <div class="name">${0}</div> <ae-unit-details .atk="${0}" .def="${0}" .mov="${0}" .description="${0}" .abilities="${0}"></ae-unit-details> <div class="cost"> <div class="gold ${0}"> <img src="assets/ui/icons/gold-24.png" alt=""> ${0} </div> <ae-button data-type="next" label="Buy" ?disabled="${0}" @click="${0}"></ae-button> </div> </div> `),this.units,this.selected,this.money,this.color,(t=>this.select(t.detail.unit)),this.selected.name,this.selected.atk,this.selected.def,this.selected.mov,this.selected.description,this.selected.abilities,this.selected.cost>this.money?"insufficient":"",this.selected.cost,this.selected.cost>this.money,this.buy)}select(t){this.selected=t}buy(){this.selected&&this.dispatchEvent(t("unit-store-buy",{item:{id:this.selected.id,type:this.selected.type},storeCell:this.storeCell}))}};r.styles=e(c||(c=d`
    :host {
      display: block;
    }

    .label {
      font-family: Changa;
      font-style: normal;
      font-weight: 800;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      color: #4A2210;
      margin-bottom: 10px;
    }

    ae-unit-picker {
      margin-bottom: 30px;
    }

    .unit-info {
      margin: 8px;
    }

    .unit-info .name {
      font-family: Changa;
      font-style: normal;
      font-weight: 800;
      font-size: 20px;
      line-height: 24px;
      color: #4A2210;
      border-bottom: 1px solid #A36F3F;
      margin-bottom: 10px;
    }

    .unit-info .cost {
      margin-top: 24px;
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: stretch;
    }

    .unit-info .cost .gold {
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(168, 122, 59, 0.46);

      font-family: Changa;
      font-style: normal;
      font-weight: 800;
      font-size: 20px;
      line-height: 37px;
      text-align: center;
      color: #FFFFFF;
    }

    .unit-info .cost .gold.insufficient {
      //background: rgba(200, 122, 59, 0.46);
    }

    .unit-info .cost .gold img {
      margin-right: 8px;
    }

    .unit-info .cost .buy[disabled] {
      cursor: auto;
      opacity: .5;
    }
  `)),i([s({type:Number})],r.prototype,"money",void 0),i([s({type:Number})],r.prototype,"color",void 0),i([s({type:Array})],r.prototype,"units",void 0),i([s({type:Array})],r.prototype,"availableUnits",void 0),i([s({type:Object})],r.prototype,"selected",void 0),i([s({type:Object})],r.prototype,"storeCell",void 0),r=i([o("ae-unit-store")],r);
