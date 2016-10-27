;(function(n,d,p){var t=this,u='undefined',e='exports',i;if(typeof module!=u&&module[e]){if(p&&require){for(i in p)t[p[i]]=require(p[i]);}module[e]=d();}else if(typeof define!=u&&define.amd)define(n,(p||[]),d);else{for(i in p)p[i]=t[p[i]];t[n]=d.apply(t,p);}})
('info/Biome', function () {

	var Biome = function(entities,theme) {
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

	var proto = Biome.prototype;

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

	var biomes = [
		{
			name:'plains',
			color:0x794e1b
		},
		{
			name:'grassland',
			color:0x6ec832
		},
		{
			name:'forrest',
			color:0x2f8923
		},
		{
			name:'mountains',
			color:0xa2a2a2
		},
		{
			name:'caves',
			color:0x402e0b
		},
		{
			name:'underground',
			color:0x3e0c06
		},
		{
			name:'ocean',
			color:0x3a9aaf
		},
		{
			name:'beach',
			color:0xe7f05c
		},
		{
			name:'dark forrest',
			color:0x0b4918
		},
		{
			name:'tropical',
			color:0x768a28
		},
		{
			name:'volcanic',
			color:0x764d4b
		},
		{
			name:'iceland',
			color:0xffffff
		},
		{
			name:'dessert',
			color:0xdcdfad
		},
		{
			name:'swamp',
			color:0x9561be
		},
		{
			name:'wasteland',
			color:0x8b724d
		},
		{
			name:'crypt',
			color:0x000000
		},
		{
			name:'labyrinth',
			color:0x555555
		},
		{
			name:'underworld',
			color:0xff0000
		},
		{
			name:'sky',
			color:0x84f2ff
		},
		{
			name:'astral',
			color:0xdaaaff
		},
		{
			name:'purgatory',
			color:0xea00ff
		},
		{
			name:'shadow world',
			color:0x0600ff
		},
		{
			name:'foothills',
			color:0x749c74
		},
		{
			name:'deap sea',
			color:0x2f55ad
		},
		{
			name:'ocean floor',
			color:0x339475
		},
		{
			name:'abyss',
			color:0x154a39
		},
	];
	var themesHash = {};
	for (var t in themes)
		themesHash[themes[t].name] = t;

	return Theme;

},[]);