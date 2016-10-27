;(function(n,d,p){var t=this,u='undefined',e='exports',i;if(typeof module!=u&&module[e]){if(p&&require){for(i in p)t[p[i]]=require(p[i]);}module[e]=d();}else if(typeof define!=u&&define.amd)define(n,(p||[]),d);else{for(i in p)p[i]=t[p[i]];t[n]=d.apply(t,p);}})
('characters/NPC', function (Settings, Character) {

    var NPC = function(gender,location,settings) {
        var _this = this;
	    var self = {};
	    Character.call(this,false,gender,location,settings);


    };
	var proto = NPC.prototype = Object.create(Character.prototype);

	return NPC;
},['Settings','characters/Character']);