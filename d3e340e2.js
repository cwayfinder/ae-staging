import{c as t}from"./d1ada6f5.js";import{c as e,_ as i,p as o,a as n,L as s,h as a}from"./5b7dc6e2.js";let l,r,c=t=>t,d=class extends s{render(){return a(l||(l=c` <div class="backdrop" @click="${0}"></div> <ae-frame-rect> <div class="content" @click="${0}"> <div class="header">${0}</div> <div class="text">${0}</div> </div> </ae-frame-rect> `),this.close,this.close,this.header,this.text)}open(t){this.style.display="grid",this.header=t.header,this.text=t.content,t.autoClose&&setTimeout((()=>this.close()),t.autoClose)}close(){this.style.display="none",this.dispatchEvent(t("notification-close"))}};d.styles=e(r||(r=c`:host{display:none;grid-template-rows:auto;align-content:center;justify-content:stretch;position:fixed;top:0;left:0;width:100%;height:100%;z-index:100}.backdrop{position:absolute;top:0;left:0;height:100%;width:100%;background:rgba(0,0,0,.3)}.content{display:flex;flex-direction:column;justify-content:center;align-items:center;min-height:80px;box-sizing:border-box;z-index:3;background:#d5ab78;padding:8px;text-align:center}.header{font-family:Changa;font-style:normal;font-weight:800;font-size:24px;line-height:44px;text-align:center;color:#4a2210}.text{font-family:Changa;font-style:normal;font-weight:800;font-size:16px;line-height:29px;text-align:center;color:#7d4329}`)),i([o({type:String})],d.prototype,"header",void 0),i([o({type:String})],d.prototype,"text",void 0),d=i([n("ae-notification")],d);
