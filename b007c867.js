import{c as e,_ as s,p as t,a as c,L as i,h as o}from"./f0da52c9.js";let a,d,h=e=>e,n=class extends i{render(){return o(a||(a=h` <div class="box" @click="${0}"> <img src="assets/ui/icons/check.png" alt=""> </div> `),this.toggle)}toggle(){this.checked=!this.checked,this.dispatchEvent(new CustomEvent("value-change",{detail:{value:this.checked}}))}};n.styles=e(d||(d=h`.box{display:flex;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;background:#5e3319;box-shadow:inset 0 4px 0 rgba(0,0,0,.25);width:36px;height:36px}img{display:none}:host([checked]) .box{background:#11dbe7}:host([checked]) img{display:block}`)),s([t({type:Boolean,reflect:!0})],n.prototype,"checked",void 0),n=s([c("ae-checkbox")],n);
