const e={id:"mission_001_001",type:"mission",size:{width:12,height:12},players:[{id:1,type:"human",teamId:1,unitLimit:25,money:0},{id:2,type:"ai",teamId:2,unitLimit:25,money:0}],units:[{cell:{x:10,y:3},type:"skeleton",ownerId:2},{cell:{x:8,y:3},type:"skeleton",ownerId:2},{cell:{x:4,y:9},type:"galamar",ownerId:1},{cell:{x:3,y:10},type:"archer",ownerId:1},{cell:{x:3,y:8},type:"soldier",ownerId:1}],buildings:[{cell:{x:1,y:1},type:"well",ownerId:null},{cell:{x:4,y:8},type:"farm",state:"normal",ownerId:1},{cell:{x:8,y:8},type:"farm",state:"normal",ownerId:1},{cell:{x:6,y:1},type:"farm",state:"normal",ownerId:2},{cell:{x:8,y:1},type:"farm",state:"normal",ownerId:2},{cell:{x:9,y:3},type:"temple",ownerId:null},{cell:{x:10,y:10},type:"well",ownerId:null}],terrains:{x0y0:"stone-1",x0y1:"forest-1",x0y2:"terra-4",x0y3:"stone-1",x0y4:"forest-2",x0y5:"water-1",x1y0:"forest-1",x1y1:"terra-1",x1y2:"stone-1",x1y3:"forest-1",x1y4:"forest-2",x1y5:"water-1",x2y0:"stone-1",x2y1:"terra-1",x2y2:"hill-1",x2y3:"terra-1",x2y4:"forest-1",x2y5:"hill-1",x3y0:"stone-1",x3y1:"stone-1",x3y2:"terra-1",x3y3:"terra-1",x3y4:"stone-1",x3y5:"terra-1",x4y0:"road-1",x4y1:"road-1",x4y2:"road-1",x4y3:"road-1",x4y4:"road-1",x4y5:"stone-1",x5y0:"forest-1",x5y1:"hill-1",x5y2:"forest-1",x5y3:"terra-1",x5y4:"road-1",x5y5:"terra-1",x6y0:"terra-1",x6y1:"terra-1",x6y2:"hill-1",x6y3:"terra-1",x6y4:"road-1",x6y5:"forest-1",x7y0:"hill-1",x7y1:"terra-1",x7y2:"forest-1",x7y3:"forest-2",x7y4:"road-1",x7y5:"stone-1",x8y0:"forest-2",x8y1:"terra-1",x8y2:"forest-2",x8y3:"terra-1",x8y4:"road-1",x8y5:"hill-1",x9y0:"stone-1",x9y1:"terra-1",x9y2:"terra-1",x9y3:"terra-1",x9y4:"road-1",x9y5:"road-1",x10y0:"forest-1",x10y1:"stone-1",x10y2:"terra-1",x10y3:"hill-1",x10y4:"road-1",x10y5:"terra-1",x11y0:"forest-1",x11y1:"forest-2",x11y2:"hill-1",x11y3:"forest-1",x11y4:"road-1",x11y5:"forest-1",x0y6:"water-2",x1y6:"water-1",x2y6:"water-1",x3y6:"water-1",x4y6:"hill-1",x5y6:"stone-1",x6y6:"forest-2",x7y6:"hill-1",x8y6:"terra-1",x9y6:"road-1",x10y6:"forest-2",x11y6:"terra-1",x0y7:"water-1",x1y7:"water-1",x2y7:"water-1",x3y7:"water-1",x4y7:"terra-1",x5y7:"road-1",x6y7:"road-1",x7y7:"road-1",x8y7:"road-1",x9y7:"road-1",x10y7:"stone-1",x11y7:"forest-2",x0y8:"forest-2",x1y8:"terra-1",x2y8:"terra-1",x3y8:"hill-1",x4y8:"terra-1",x5y8:"road-1",x6y8:"terra-1",x7y8:"hill-1",x8y8:"terra-1",x9y8:"terra-1",x10y8:"forest-1",x11y8:"forest-1",x0y9:"road-1",x1y9:"road-1",x2y9:"road-1",x3y9:"road-1",x4y9:"road-1",x5y9:"road-1",x6y9:"terra-1",x7y9:"forest-2",x8y9:"stone-1",x9y9:"terra-1",x10y9:"hill-1",x11y9:"terra-2",x0y10:"hill-1",x1y10:"forest-2",x2y10:"terra-1",x3y10:"terra-1",x4y10:"hill-1",x5y10:"terra-1",x6y10:"forest-1",x7y10:"forest-1",x8y10:"forest-2",x9y10:"terra-1",x10y10:"terra-1",x11y10:"forest-2",x0y11:"stone-1",x1y11:"stone-1",x2y11:"forest-1",x3y11:"forest-2",x4y11:"terra-1",x5y11:"stone-1",x6y11:"hill-1",x7y11:"forest-1",x8y11:"forest-1",x9y11:"stone-1",x10y11:"terra-1",x11y11:"hill-1"},triggers:[{id:1,conditions:[{type:"round",round:1}],scriptId:"start"},{id:2,conditions:[{type:"noEnemyUnit"}],scriptId:"n1"},{id:3,conditions:[{type:"noEnemyUnit"}],scriptId:"win"},{id:4,conditions:[{type:"commanderIsDead"}],scriptId:"defeat"}],scripts:[{id:"start",items:[{type:"story",storyId:1,sound:"bg-story.mp3"},{type:"story",storyId:2,sound:"bg-story.mp3"},{type:"story",storyId:3,sound:"bg-story.mp3"},{type:"notification",notificationId:1,sound:"bg-good.mp3"},{type:"conversation",conversationId:1,character:"tamplier",position:"left"},{type:"conversation",conversationId:2,character:"galamar",position:"right"},{type:"conversation",conversationId:3,character:"soldier",position:"left"},{type:"objective"}]},{id:"n1",items:[{type:"addUnits",units:[{type:"archer",ownerId:2,cell:{x:1,y:1}},{type:"soldier",ownerId:2,cell:{x:10,y:10}}]},{type:"conversation",conversationId:4,character:"soldier",position:"left",cell:{x:1,y:1}},{type:"conversation",conversationId:5,character:"galamar",position:"right",cell:{x:10,y:10}}]},{id:"win",items:[{type:"conversation",conversationId:6,character:"tamplier",position:"right"},{type:"conversation",conversationId:7,character:"galamar",position:"left"},{type:"conversation",conversationId:8,character:"tamplier",position:"right"},{type:"conversation",conversationId:9,character:"galamar",position:"left"},{type:"notification",notificationId:2,sound:"victory.mp3"},{type:"openMap",missionId:"mission_001_002"}]},{id:"defeat",items:[{type:"defeat"}]}],i18n:{en:{name:"Temple raiders",objective:"Stop the raiders, King Galamar must survive.",objectives:[{id:"noEnemyUnit",text:"Kill all enemy units"},{id:"commanderIsDead",text:"Commander must survive"}],stories:[{id:1,content:"img/story/story-1-1.png_!_With the passing of the war against the forces of darkness, the brothers Galamar and Valadorn are reunited in their rule of the kingdom of Thorin. The kingdom is slowly returning to its peace time ways, protected by three ancient crystals safely guarded in the temples of Courage, Wisdom and Life, when rumours of skirmishes in the North reach the palace..."},{id:2,content:"img/story/story-1-2.png_!_'And three was their number, three to protect, three to destroy. Mercy upon the wielder of their power, mercy upon our souls, for He shall unleash the heavenly fires onto this world.'<br />[Verse 3:7 from the Crystal Prophecies, author unknown, translated from the only surviving transcript from the Age of Darkness]"},{id:3,content:"img/story/story-1-3.png_!_A messenger from the Temple of Courage arrives at the castle gates, pleading for the King's assistance - the Temple has fallen prey to brutal attackers, and must be protected..."}],notifications:[{id:1,content:"The Temple of Courage"},{id:2,content:"Mission completed"}],conversations:[{id:1,text:"Help us! We are under attack! These skeleton raiders have stolen the Crystal of Courage we swore to protect!"},{id:2,text:"Captain, we must stop this menace at once!"},{id:3,text:"Forward troops! Make these raiders pay!"},{id:4,text:"More attackers!"},{id:5,text:"These are no raiders! They look like enemy troops! Be careful, Captain!"},{id:6,text:"Thank you, your Majesty, you must help us return the Crystal as quickly as possible. Such an important relic must not fall into the wrong hands!"},{id:7,text:"I am at your service. Who could possibly be after the Crystal?"},{id:8,text:"I fear these criminals may be allied to a greater evil. It would be wise to consult with the High Priest at the Temple of Wisdom. He may know more of this."},{id:9,text:"I shall send my brother Valadorn there immediately. I will take my troops and follow the attackers who got away."}]}}};window.maps2=window.maps2||{},window.maps2.mission_001_001=e;
