;(function(n,d,p){var t=this,u='undefined',e='exports',i;if(typeof module!=u&&module[e]){if(p&&require){for(i in p)t[p[i]]=require(p[i]);}module[e]=d();}else if(typeof define!=u&&define.amd)define(n,(p||[]),d);else{for(i in p)p[i]=t[p[i]];t[n]=d.apply(t,p);}})
('characters/God', function (Settings, Character) {

	var originTypes = [
		{
			name:'unknown',
			hasStartTime:null,
			hasPowerSource:false,
			wasHuman:false,
			isArriving:false,
			createdBy:false,
			createdFrom:false,
			hasWeakness:null,
			canBeKilled:null,
			canBeImprisoned:null
		},
		{
			name:'eternal',
			hasStartTime:false,
			hasPowerSource:false,
			wasHuman:false,
			isArriving:false,
			createdBy:false,
			createdFrom:false,
			hasWeakness:false,
			canBeKilled:false,
			canBeImprisoned:false
		},
		{
			name:'arrived',
			hasStartTime:null,
			hasPowerSource:null,
			wasHuman:false,
			isArriving:null,
			createdBy:false,
			createdFrom:false,
			hasWeakness:null,
			canBeKilled:null,
			canBeImprisoned:null
		},
		{
			name:'created',
			hasStartTime:null,
			hasPowerSource:true,
			wasHuman:null,
			isArriving:null,
			createdFrom:[
				{
					name:'artifact',
					options:[
						{name:'ring',fromPieces:false},
						{name:'tablet',fromPieces:null},
						{name:'crown',fromPieces:null},
						{name:'weapon',fromPieces:false},
						{name:'sword',fromPieces:true},
						{name:'bow',fromPieces:true},
						{name:'armour set',fromPieces:true},
						{name:'book',fromPieces:false},
						{name:'gem stone',fromPieces:null},
						{name:'fallen star',fromPieces:true},
						{name:'scroll',fromPieces:false},
						{name:'creature',fromPieces:null}
					]
				},
				{
					name:'artifact',
					options:[
						{name:'ring',fromPieces:false},
						{name:'tablet',fromPieces:null},
						{name:'crown',fromPieces:null},
						{name:'weapon',fromPieces:false},
						{name:'sword',fromPieces:true},
						{name:'bow',fromPieces:true},
						{name:'armour set',fromPieces:true},
						{name:'book',fromPieces:false},
						{name:'gem stone',fromPieces:null},
						{name:'fallen star',fromPieces:true},
						{name:'scroll',fromPieces:false},
						{name:'creature',fromPieces:null}
					]
				}
			],
			createdBy:[

			],
			hasWeakness:null,
			canBeKilled:true,
			canBeImprisoned:null
		},
	];

    var God = function(gender,location,settings) {
        var _this = this;
	    var self = {};
	    Character.call(this,false,gender,location,settings);


    };
	var proto = God.prototype = Object.create(Character.prototype);

	return God;
},['Settings','characters/Character']);