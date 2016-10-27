;(function(n,d,p){var t=this,u='undefined',e='exports',i;if(typeof module!=u&&module[e]){if(p&&require){for(i in p)t[p[i]]=require(p[i]);}module[e]=d();}else if(typeof define!=u&&define.amd)define(n,(p||[]),d);else{for(i in p)p[i]=t[p[i]];t[n]=d.apply(t,p);}})
('info/Theme', function () {

	var Theme = function(entities,theme) {
        var _this = this;
		if (!type)
			theme = this.getTypesFor(entities);
		else
			theme = this.getThemeByName(theme);

		var themeSet = this.chooseSetFor(theme,entities);
		theme = theme.name;

		this.getName = function() {
			return theme;
		};
		this.getOptions = function() {
			return themeSet.slice();
		};
	}

	var proto = Theme.prototype;

	proto.getTypesFor = function(count) {
		var possible = [];
		for (var t in themes) {
			if (themes[t].totalOptions.indexOf(count))
				possible.push(themes[t]);
		}
		return possible[Math.floor(Math.random()*possible.length];
	};
	proto.chooseSetFor = function(theme,count) {
		var sets = this.getThemeByName(theme).sets;
		var possible = [];
		for (var s in sets) {
			if (sets[s].count.indexOf(count))
				possible.push(sets[s].options);
		}
		possible = possible[Math.floor(Math.random()*possible.length)];
		possible = possible[Math.floor(Math.random()*possible.length)];
		var ret = [];
		for (var c=0;c<count;c++)
			ret.push(possible.splice(Math.floor(Math.random()*possible.length),1));
		return ret;
	};
	proto.getThemeByName = function(name) {
		return typeof name == 'object' ? name : themes[themesHash[name]];
	};

	var themes = [
		{
			name:'element',
			totalOptions:[1,2,4,5,6,8]
			sets:[
				{count:[1,8],options:[['fire','water','air','earth','order','chaos','light','dark']]},
				{count:[2],options:[['fire','water'],['air','earth'],['order','chaos'],['light','dark']]},
				{count:[4],options:[['fire','water','air','earth'],['order','chaos','light','dark']]},
				{count:[5],options:[['fire','water','air','earth','astral']]},
				{count:[6],options:[['fire','water','air','earth','light','dark']]}
			]
		},
		{
			name:'biome',
			totalOptions:[1,2,3,4,5,6,7,8,9],
			sets:[
				{count:[1],options:[['sky','sea','heaven','forrest','land','dessert','mountain','grassland','earth','underworld','purgatory','shadow','iceland']]},
				{count:[2,3],options:[['heaven','earth','underworld'],['sky','land','sea'],['mountain','forrest','dessert','grassland','iceland'],['land','shadows','sky']]},
				{count:[4],options:[['heaven','earth','underworld','purgatory'],['sky','land','sea','underworld'],['sky','land','sea','shadow'],['mountain','forrest','dessert','grassland','iceland']]},
				{count:[5],options:[['heaven','earth','underworld','purgatory','shadow'],['sky','land','sea','underworld','shadow'],['mountain','forrest','dessert','grassland','iceland']]},
				{count:[6,7,8,9],options:[['mountain','forrest','dessert','grassland','iceland','sea','shadows','sky','underworld']]}
			]
		},
		{
			name:'animal',
			totalOptions:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
			sets:[
				{count:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],options:[['snake','bear','bird','rhino','lion','stag','butterfly','fish','mole','fox','snail','beaver','sheep','bull','ant','beetle']]},
			]
		},
		{
			name:'blight',
			totalOptions:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
			sets:[
				{count:[2],options:[['drought','flood'],['storm','earthquake'],['fire rain','blood rain'],['animal death'],['plauge','hunger'],['sleep','insomnia'],['memory','hallucination','paranoia']]},
				{count:[3,4],options:[['drought','flood','storm','earthquake'],['locusts','fire rain','blood rain','darkness'],['defforestation','animal death','rabies'],['plauge','death','hunger','darkness'],['rage','sleep','insomnia','memory','hallucination','paranoia']]},
				{count:[4],options:[['pestilence','famine','death','war']]},
				{count:[5],options:[['drought','flood','storm','earthquake','thunder'],['locusts','fire rain','blood rain','darkness','plauge'],['defforestation','animal death','rabies','locusts','plauge'],['memory','plauge','death','hunger','darkness'],['rage','sleep','insomnia','memory','hallucination','paranoia']]},
				{count:[1,6,7],options:[['drought','flood','storm','earthquake','locusts','blood rain','darkness','defforestation','animal death','rabies','thunder','fire rain','combustion'],['plauge','death','hunger','rage','sleep','insomnia','memory','hallucination','paranoia']]},
				{count:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],options:[['drought','flood','storm','earthquake','locusts','blood rain','darkness','defforestation','animal death','rabies','thunder','fire rain','combustion','plauge','death','hunger','rage','sleep','insomnia','memory','hallucination','paranoia']]},
			]
		},
	];
	var themesHash = {};
	for (var t in themes)
		themesHash[themes[t].name] = t;

	return Theme;

},[]);