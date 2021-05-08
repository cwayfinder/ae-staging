const e={waterborne:{def:15,atk:10,i18n:{en:{label:"Waterborne",description:"Can move through water terrains using 1 movement point. Has attack and defence bonus when on water."}}},airborne:{atk:10,i18n:{en:{label:"Airborne",description:"Can move though all terrains using only 1 movement point."}}},villageCaptor:{i18n:{en:{label:"Village captor",description:"Can capture villages."}}},castleCaptor:{i18n:{en:{label:"Castle captor",description:"Can capture castles."}}},repairer:{i18n:{en:{label:"Repairer",description:"Can repair destroyed villages."}}},destroyer:{i18n:{en:{label:"Destroyer",description:"Can destroy villages."}}},undead:{i18n:{en:{label:"Undead",description:"Won't create a tombstone when die"}}},commander:{i18n:{en:{label:"Commander",description:"Can be revived in the castle if they fall in battle."}}},stationary:{i18n:{en:{label:"Stationary",description:"Can either move or attack during a turn, but not do both."}}},marksman:{atk:30,i18n:{en:{label:"Marksman",description:"Has attack bonus against airborne enemies."}}},summoner:{raiseRange:2,i18n:{en:{label:"Summoner",description:"Can summon skeletons from tombstones."}}},attackAura:{atk:10,i18n:{en:{label:"Attack aura",description:"Will attach inspired effect to the nearest allies."}}},warriorOfLight:{atk:30,i18n:{en:{label:"Warrior of light",description:"Has attack bonus against undead enemies."}}},poisoner:{rounds:2,i18n:{en:{label:"Poisoner",description:"Can poison enemies when attacks. Doesn't work if the enemy also has this ability."}}}},a={poisoned:{moveRange:-1,def:-10,atk:-10,i18n:{en:{label:"Poisoned",description:"Has a penalty to attack and move."}}},inspired:{atk:10,i18n:{en:{label:"Inspired",description:"Gains an attack bonus."}}}},t={galamar:{atk:{min:55,max:65},atkRange:2,def:20,mov:5,cost:200,abilities:["commander","villageCaptor","castleCaptor","repairer"],levelList:[0,84,172,265,362,464,571,684,802,926],langKey:"galamar",i18n:{en:{name:"Galamar",description:"Galamar (commander) is very strong in attack and defence. Commanders can also occupy castles to produce troops and can be revived in the castle if they fall in battle."}}},valadorn:{atk:{min:55,max:65},atkRange:2,def:20,mov:5,cost:200,abilities:["commander","villageCaptor","castleCaptor","repairer"],levelList:[0,84,172,265,362,464,571,684,802,926],langKey:"valadorn",i18n:{en:{name:"Valadorn",description:"Valadorn (commander) is very strong in attack and defence. Commanders can also occupy castles to produce troops and can be revived in the castle if they fall in battle."}}},"demon-lord":{atk:{min:55,max:65},atkRange:2,def:20,mov:5,cost:200,abilities:["commander","villageCaptor","castleCaptor","repairer"],levelList:[0,84,172,265,362,464,571,684,802,926],langKey:"demon-lord",i18n:{en:{name:"Demon Lord",description:"Demon Lords (commander) is very strong in attack and defence. Commanders can also occupy castles to produce troops and can be revived in the castle if they fall in battle."}}},saeth:{atk:{min:55,max:65},atkRange:2,def:20,mov:5,cost:200,abilities:["commander","villageCaptor","castleCaptor","repairer"],levelList:[0,84,172,265,362,464,571,684,802,926],langKey:"saeth",i18n:{en:{name:"Saeth",description:"Saeth (commander) is very strong in attack and defence. Commanders can also occupy castles to produce troops and can be revived in the castle if they fall in battle."}}},"saeth-heavens-fury":{atk:{min:55,max:65},atkRange:16,def:45,mov:1,abilities:["commander","villageCaptor","castleCaptor","repairer"],levelList:[0],langKey:"saeth",i18n:{en:{name:"Saeth",description:"Saeth (commander) is very strong in attack and defence. Commanders can also occupy castles to produce troops and can be revived in the castle if they fall in battle."}}},soldier:{atk:{min:50,max:55},atkRange:2,def:5,mov:5,cost:150,abilities:["villageCaptor","repairer"],levelList:[0,84,172,265,362,464,571,684,802,926],langKey:"soldier",i18n:{en:{name:"Soldier",description:"Soldiers are solid all-round fighters that form the backbone of any army. Soldiers are also the only unit that can capture villages to earn gold."}}},archer:{atk:{min:50,max:55},atkRange:3,def:5,mov:5,cost:250,abilities:["marksman"],levelList:[0,84,172,265,362,464,571,684,802,926],langKey:"archer",i18n:{en:{name:"Archer",description:"With their powerful bows archers can attack from a distance and are especially powerful against airborne enemies."}}},elemental:{atk:{min:50,max:55},atkRange:2,def:10,mov:5,cost:300,abilities:["waterborne"],levelList:[0,84,172,265,362,464,571,684,802,926],langKey:"elemental",i18n:{en:{name:"Elemental",description:"Elementals are magical water spirits. When in water, Elementals have greater movement and stronger defence."}}},sorceress:{atk:{min:40,max:45},atkRange:2,raiseRange:2,def:5,mov:5,cost:400,abilities:["summoner"],levelList:[0,84,172,265,362,464,571,684,802,926],langKey:"sorceress",i18n:{en:{name:"Sorceress",description:"Skilled in the use of magic, Sorceresses are weak in close combat. However, their ability to summon fighting skeletons from dead troops can be decisive in battle."}}},wisp:{atk:{min:35,max:40},atkRange:2,auraRange:3,def:10,mov:5,cost:500,abilities:["attackAura","warriorOfLight"],levelList:[0,84,172,265,362,464,571,684,802,926],langKey:"wisp",i18n:{en:{name:"Wisp",description:"These mystical beings of pure light radiate an aura which strengthens the attacking abilities of nearby friendly units. In close combat they are especially deadly against skeletons."}}},"dire-wolf":{atk:{min:60,max:65},atkRange:2,def:15,mov:6,cost:600,abilities:["poisoner"],levelList:[0,84,172,265,362,464,571,684,802,926],langKey:"dire-wolf",i18n:{en:{name:"Dire wolf",description:"Dire Wolves are feared hunters that travel in packs. Beware - their bite is poisonous and reduces both attack and defence levels for one turn."}}},golem:{atk:{min:60,max:70},atkRange:2,def:30,mov:5,cost:600,abilities:[],levelList:[0,84,172,265,362,464,571,684,802,926],langKey:"golem",i18n:{en:{name:"Golem",description:"Golems are ancient beings - slow but immensely strong in defence. A golem stationed in a building or a well defended mountain is very difficult to defeat."}}},catapult:{atk:{min:50,max:70},atkRange:{min:3,max:5},def:10,mov:4,cost:700,abilities:["destroyer","stationary"],levelList:[0,84,172,265,362,464,571,684,802,926],langKey:"catapult",i18n:{en:{name:"Catapult",description:"Catapults blaze a trail of destruction with their enormous attack range. However, their relative immobility and inability to attack up close make them vulnerable, so guard them well."}}},dragon:{atk:{min:70,max:80},atkRange:2,def:25,mov:7,cost:1e3,abilities:["airborne"],levelList:[0,84,172,265,362,464,571,684,802,926],langKey:"dragon",i18n:{en:{name:"Dragon",description:"These massive flying beasts have ruled over the mountains of mist since ancient times. They are extremely mobile as well as deadly in attack on land, air and sea."}}},skeleton:{atk:{min:40,max:50},atkRange:2,def:2,mov:5,cost:100,abilities:["undead"],levelList:[0,84,172,265,362,464,571,684,802,926],langKey:"skeleton",i18n:{en:{name:"Skeleton",description:"Summoned by Sorceresses, these lifeless warriors are as strong as soldiers and deadly opponents on any battlefield."}}},crystal:{atk:{min:0,max:0},atkRange:0,def:15,mov:4,cost:0,abilities:[],levelList:[0],langKey:"crystal",i18n:{en:{name:"Crystal",description:"These legendary Crystals were originally retrieved from the ruins of the Ancient Citadel. Little is known of their power, except that they are rumoured to protect the kingdom, while also possessing the power to destroy it."}}}},n=["soldier","archer","elemental","sorceress","wisp","dire-wolf","golem","catapult","dragon"];export{e as a,n as d,a as e,t as u};