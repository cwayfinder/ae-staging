import{c as t}from"./0770b19d.js";import{c as e,_ as i,p as a,a as o,L as n,h as s}from"./f0da52c9.js";let r,l,d=t=>t,p=class extends n{render(){return s(r||(r=d` <ae-frame-rect> <img src="assets/content/story/${0}.png" alt=""> </ae-frame-rect> <div class="text" .innerHTML="${0}"></div> <ae-button data-type="next" label="Next" @click="${0}"></ae-button> `),this.illustration,this.text,this.next)}next(){this.dispatchEvent(t("story-next"))}};p.styles=e(l||(l=d`:host{display:block;flex-direction:column;align-items:center;position:fixed;top:0;left:0;width:100%;height:100%;z-index:100;background:#d5ab78;box-sizing:border-box;overflow:hidden auto;padding:50px 0}img{display:block;width:100%}.text{margin:50px 20px 50px;font-family:Changa;font-style:normal;font-weight:800;font-size:18px;line-height:33px;color:#4a2210}ae-button{margin:0 auto}`)),i([a({type:String})],p.prototype,"illustration",void 0),i([a({type:String})],p.prototype,"text",void 0),p=i([o("ae-story")],p);