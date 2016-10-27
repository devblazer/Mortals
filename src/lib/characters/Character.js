;(function(n,d,p){var t=this,u='undefined',e='exports',i;if(typeof module!=u&&module[e]){if(p&&require){for(i in p)t[p[i]]=require(p[i]);}module[e]=d();}else if(typeof define!=u&&define.amd)define(n,(p||[]),d);else{for(i in p)p[i]=t[p[i]];t[n]=d.apply(t,p);}})
('characters/Character', function (Settings) {

    var Character = function(_isPlayer, _gender, location, settings) {
	    _isPlayer = isPlayer || false;
        var _this = this;
	    var self = {};

	    Object.defineProperty(this,'isPlayer',{
		    get:function() { return _isPlayer; }
	    });
	    Object.defineProperty(this,'gender',{
		    get:function() { return _gender; }
	    });

	    /********** INFO SETUP */

	    var info = {
	    };
	    if (settings.info)
	        for (var i in settings.info) {
		        info[i] = settings.info[i];
	        }
	    if (!info.name)
	        info.name = location.generateName(_gender);
	    if (!info.familyName)
	        info.familyName = location.generateFamilyName();

	    /********** STATS SETUP */

	    var baseStats = {
		    strength:10,
		    dexterity:10,
		    intelligence:10
	    };
	    var stats = {
	    };

	    if (settings.stats)
	        for (var s in settings.stats) {
		        baseStats[s] = settings.stats;
	        }

	    /********** STATS METHODS */

	    this.calculateStats = function() {
		    for (var s in baseStats)
		        stats[s] = baseStats[s];

		    stats.maxHP = stats.strength*10;
		    stats.maxStamina = stats.dexterity*10;
		    stats.maxMP = stats.intelligence*10;

		    stats.hp = stats.maxHP;
		    stats.stamina = stats.maxStamina;
		    stats.mp = stats.maxMP;
	    };
	    this.calculateStats();
    };
	var proto = Personality.prototype;

	return Personality;
},['Settings','characters/personality/PersonalityMotivation']);