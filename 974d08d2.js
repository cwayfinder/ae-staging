import{c as e}from"./0770b19d.js";import{c as a,_ as t,a as s,L as o,h as n}from"./f0da52c9.js";let c,d,i=e=>e,h=class extends o{render(){return n(c||(c=i` `))}connectedCallback(){super.connectedCallback(),this.addEventListener("route-change",(e=>{this.navigate(e.detail.route,e.detail.params)})),Promise.resolve().then((()=>{this.dispatchEvent(e("route-change",{route:""}))}))}async navigate(e,a){if(this.shadowRoot)switch(this.shadowRoot.innerHTML="",e){case"":{const e=document.createElement("ae-main-menu");this.shadowRoot.append(e);break}case"campaigns":if(null==a?void 0:a.id){const e=document.createElement("ae-campaign");e.campaignId=a.id,this.shadowRoot.append(e)}else{const e=document.createElement("ae-campaigns");this.shadowRoot.append(e)}break;case"load":{const e=document.createElement("ae-load-battle");this.shadowRoot.append(e);break}case"skirmish":{const e=document.createElement("ae-select-map");this.shadowRoot.append(e);break}case"skirmish/setup":{const e=document.createElement("ae-setup-map");e.mapId=a.mapId,this.shadowRoot.append(e);break}case"settings":{const e=document.createElement("ae-settings");this.shadowRoot.append(e);break}case"battle":{const e=document.createElement("ae-battle");this.shadowRoot.append(e);break}}}};h.styles=a(d||(d=i`:host{display:block;width:100%;height:100%}`)),h=t([s("ae-app")],h);