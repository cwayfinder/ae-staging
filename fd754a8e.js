import{c as t}from"./d1ada6f5.js";import{c as e,_ as i,p as o,q as a,a as n,L as s,h as r}from"./06e1fa4e.js";import{f as d}from"./d71ea143.js";let p,l,c=t=>t,h=class extends s{constructor(){super(...arguments),this.date=Date.now()}render(){return r(p||(p=c`
      <div class="backdrop"></div>
      <div class="content">
        <header>Save game</header>
        <main>
          <input type="text" .value="${0}">
<!--          <div class="datetime">${0}</div>-->
        </main>
        <footer>
          <button class="cancel" @click="${0}">Cancel</button>
          <button class="save" @click="${0}">Save</button>
        </footer>
      </div>
    `),this.name,d(this.date,"PP p"),this.close,this.save)}open(t){this.style.display="grid",this.name=t.name}close(){this.style.display="none"}save(){this.dispatchEvent(t("save-submit",{name:this.input.value,date:this.date})),this.close()}};h.styles=e(l||(l=c`:host{display:none;align-content:center;grid-template-columns:1fr;position:fixed;top:0;left:0;width:100%;height:100%;z-index:100}.backdrop{background:rgba(12,10,14,.74);position:absolute;top:0;left:0;width:100%;height:100%}.content{background:#100a17;border-radius:8px;z-index:1;margin:16px;padding:24px}header{text-align:center;margin-bottom:24px}input{width:100%;background:#100a17;border-radius:2px;border:2px solid #c5c2c8;height:40px;box-sizing:border-box;font-style:normal;font-weight:400;font-size:20px;line-height:26px;display:flex;align-items:center;justify-content:center;color:#fff;margin-bottom:8px;padding:0 12px}.datetime{font-style:normal;font-weight:400;font-size:14px;line-height:16px;color:#b6b6b6}footer{margin-top:16px;display:grid;grid-auto-flow:column;grid-gap:24px;justify-content:end}button{background:radial-gradient(50% 50% at 50% 50%,#44325c 21.07%,#2a1f38 100%);border-radius:8px;border:2px solid #c5c2c8;height:40px;box-sizing:border-box;outline:0;cursor:pointer;padding:0 24px;font-style:normal;font-weight:400;font-size:20px;line-height:26px;display:flex;align-items:center;justify-content:center;color:#fff}`)),i([o({type:String})],h.prototype,"name",void 0),i([o({type:Number})],h.prototype,"date",void 0),i([a("input")],h.prototype,"input",void 0),h=i([n("ae-save-battle")],h);
