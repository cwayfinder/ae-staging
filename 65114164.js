window.soundService=new class{constructor(s){this.settingsService=s,this.roads=[...Array(4)].map((()=>new Audio)),this.settingsService.addEventListener((s=>{s.music?this.playBgSound():this.roads.forEach((s=>s.pause()))}))}init(){this.playBgSound()}play(s){if(!this.settingsService.settings.music)return;this.stop(s.roadIndex);const e=new Audio;s.loop&&e.addEventListener("ended",(()=>{e.currentTime=0,e.play()}),!1),e.addEventListener("canplay",(()=>{this.settingsService.settings.music&&e.play()})),e.src="assets/sounds/"+s.sound,this.roads[s.roadIndex].src="",this.roads[s.roadIndex]=e}stop(s){this.roads[s].pause()}playBgSound(){this.play({sound:"main-theme.mp3",loop:!0,roadIndex:0})}pauseBgSound(){this.roads[0].pause()}restoreBgSound(){this.roads[0].play()}}(window.settingsService),document.body.addEventListener("click",(()=>window.soundService.init()),{once:!0});
