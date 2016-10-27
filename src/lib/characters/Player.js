;(function(n,d,p){var t=this,u='undefined',e='exports',i;if(typeof module!=u&&module[e]){if(p&&require){for(i in p)t[p[i]]=require(p[i]);}module[e]=d();}else if(typeof define!=u&&define.amd)define(n,(p||[]),d);else{for(i in p)p[i]=t[p[i]];t[n]=d.apply(t,p);}})
('characters/Player', function (Settings, Character) {

    var Player = function(gender,location,settings) {
        var _this = this;
	    var self = {};
	    Character.call(this,true,gender,location,settings);


    };
	var proto = Player.prototype = Object.create(Character.prototype);

	return Player;
},['Settings','characters/Character']);