import{c as e}from"./0770b19d.js";import{c as t,_ as s,p as i,q as a,a as o,L as l,h as n}from"./f0da52c9.js";let r,p,c,d=e=>e,h=class extends l{constructor(){super(...arguments),this.active=1,this.playersCount=2,this.playersOptions=[{value:2,label:"Players: 2"},{value:3,label:"Players: 3"},{value:4,label:"Players: 4"}]}render(){return n(r||(r=d` <ae-nav label="Select map" @click="${0}"></ae-nav> <div class="filters"> <ae-picker .options="${0}" value="2" @picker-value-change="${0}"></ae-picker> </div> <div class="list"> ${0} </div> `),this.back,this.playersOptions,(e=>this.filtersChange(e.detail.value)),(this.mapsToDisplay||[]).map(((e,t)=>n(p||(p=d` <ae-card> <div class="preview" slot="icon" @click="${0}"> <ae-avatar imgSrc="assets/images/maps/${0}_preview.png"></ae-avatar> <div class="eye"> <img src="assets/ui/icons/eye.png" alt=""> </div> </div> <div class="card-content" slot="content"> <div class="label">${0}</div> <div class="size">${0}x${0}</div> </div> <ae-button-icon data-type="round" icon="arrow" slot="action" @click="${0}"></ae-button-icon> </ae-card> `),(()=>this.openPreview(e.id)),e.id,e.i18n.en.name,e.size.width,e.size.height,(()=>this.openSetup(e.id))))))}openPreview(e){var t;const s=document.createElement("ae-map-preview");s.mapId=e,null===(t=this.shadowRoot)||void 0===t||t.append(s)}back(){this.dispatchEvent(e("route-change",{route:""}))}select(e){this.selected=e,this.requestUpdate()}connectedCallback(){super.connectedCallback(),this.initMaps()}filter(){this.mapsToDisplay=this.maps.filter((e=>e.players.length===this.playersCount)),this.selected=this.mapsToDisplay[0],this.requestUpdate()}openSetup(t){this.dispatchEvent(e("route-change",{route:"skirmish/setup",params:{mapId:t}}))}filtersChange(e){this.playersCount=e,this.filter(),this.list.scrollTo({top:0})}async initMaps(){this.maps=await fetch("/assets/maps-preview.json").then((e=>e.json())),this.maps=this.maps.map((e=>({...e,name:e.i18n.en.name}))).sort(((e,t)=>e.name.localeCompare(t.name))),this.filter()}};h.styles=t(c||(c=d`
    :host {
      display: flex;
      flex-direction: column;
      gap: 12px;

      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #2e3851;
      box-sizing: border-box;
    }

    .filters {
      display: flex;
      justify-content: center;
    }

    .list {
      display: grid;
      justify-items: center;
      overflow: auto;
      box-sizing: border-box;
    }

    .preview {
      transform: translateX(-10px);
      cursor: pointer;
      position: relative;
    }

    .eye {
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      position: absolute;
      top: -5px;
      left: -5px;
      opacity: .6;
    }

    .label {
      font-family: Changa;
      font-style: normal;
      font-weight: 800;
      font-size: 20px;
      //line-height: 37px;
      color: #4A2210;
    }

    .size {
      font-family: Changa;
      font-style: normal;
      font-weight: 800;
      font-size: 16px;
      line-height: 29px;
      color: #7D4329;
    }
  `)),s([i({type:Array})],h.prototype,"maps",void 0),s([i({type:Array})],h.prototype,"active",void 0),s([a(".list")],h.prototype,"list",void 0),h=s([o("ae-select-map")],h);
