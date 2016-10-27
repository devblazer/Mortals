;(function(n,d,p){var t=this,u='undefined',e='exports',i;if(typeof module!=u&&module[e]){if(p&&require){for(i in p)t[p[i]]=require(p[i]);}module[e]=d();}else if(typeof define!=u&&define.amd)define(n,(p||[]),d);else{for(i in p)p[i]=t[p[i]];t[n]=d.apply(t,p);}})
('characters/Personality', function (Settings,PersonalityMotivation) {

    var Personality = function(moodiness,baseMotivations,natureModifier) {
        var _this = this;
	    var self = {};

	    Object.defineProperty(this,'moodiness',{
		    get:function() { return moodiness; },
		    set:function(val) {
			    moodiness = val;
		    }
	    });

	    var emotionalState = {
		    joyful:0,
		    anxious:0,
		    melancholy:0,
		    curious:0,
		    calm:0,
		    angry:0,
		    contemptuous:0,
		    excited:0,
		    apathetic:0,
		    ashamed:0
	    };

	    var conversationalInterests = {
		    politics:0,
		    religion:0,
		    relationships:0,
		    work:0,
		    entertainment:0,
		    hobbies:0,
		    currentEvents:0,
		    philosophy:0,
		    science:0,
		    humor:0,
	    };

	    var occupation: 'none';

	    /*********** NATURE SETUP */

	    var nature = {
		    // Outlook is one’s basic worldview, interpreting the world as being essentially good or bad.
		    outlook:0.5,
		    // 0 = Pessimistic | 1 = Optimistic
		    // Basic values regarding work and social interactions.
		    integrity:0.5,
		    // 0 = Unscrupulous | 1 = Conscientious
		    // The ability to regulate one’s thoughts and actions.
		    impulsiveness:0.5,
		    // 0 = Controlled | 1 = Spontaneous
		    // Willingness to face danger and enter into battle.
		    boldness:0.5,
		    // 0 = Cautious | 1 = Intrepid
		    // General attitude towards people and the ability to handle new situations, tough choices, and interpersonal conflicts.
		    agreeableness:0.5,
		    // 0 = Disagreeable | 1 = Agreeable
		    // Style and degree to which your character interacts with others.
		    interactivity:0.5,
		    // 0 = Reserved | 1 = Engaging
		    // Basic relationship with cultural norms.
		    conformity:0.5,
		    // 0 = Heterodox | 1 = Conventional
		    // Takes things very seriously or is fun loving light hearted
		    seriousness:0.5
		    // 0 = Light hearted | 1 = Serious
	    };

	    function setupNature() {
	        for (var n in nature)
		        _this.setNature(n,((Math.floor(Math.random()*100)+1)/100) * (natureModifier&&typeof natureModifier[n]!='undefined' ? natureModifier[n] : 1));
	    }

	    /*********** MOTIVATIONS SETUP */

	    var motivations = {};
	    var motivationsCount = 0;
	    var unusedMotivations = PersonalityMotivation.prototype.getMotivationOptions();

		function setupMotivations() {
		    if (baseMotivations)
			    for (var m in baseMotivations) {
			        this.setMotivation(m,baseMotivations[m]);
				    unusedMotivations.splice(unusedMotivations.indexOf(m),1);
			    }

		    var randomFullMotivations = Math.floor(Math.random()*(Settings.personality.generation.maxFullMotivations-Settings.personality.generation.minFullMotivations+1))+Settings.personality.generation.minFullMotivations;
		    var randomTotalMotivations = Math.floor(Math.random()*(Settings.personality.generation.maxTotalMotivations-Settings.personality.generation.minTotalMotivations+1))+Settings.personality.generation.minTotalMotivations;

		    while (motivationsCount < randomFullMotivations) {
			    this.addRandomMotivation(1);
		    }
		    while (motivationsCount < randomTotalMotivations) {
			    this.addRandomMotivation((Math.floor(Math.random()*100)+1)/100);
		    }
		};

	    /*********** EMOTIONAL METHODS */

	    this.setEmotion = function(type,value) {
		    emotionalState[type] = Math.min(1,Math.max(0,value));
	    };
	    this.getEmotion = function(type) {
		    return emotionalState[type];
	    };
		this.getEmotionValues = function() {
		    var ret = [];
		    for (var e in emotionalState)
		        ret[e] = emotionalState[e];
		    return ret;
		};

	    /*********** NATURE METHODS */

	    this.setNature = function(type,value) {
		    nature[type] = Math.min(1,Math.max(0,value));
	    };
	    this.getNature = function(type) {
		    return nature[type];
	    };
		this.getNatureValues = function() {
		    var ret = [];
		    for (var n in nature)
		        ret[n] = nature[n];
		    return ret;
		};

	    /*********** MOTIVATIONS METHODS */

	    this.setMotivation = function(type,value) {
		    if (!motivations[type] && value) {
			    motivationsCount++;
		        motivations[type] = new PersonalityMotivation(type,value);
			    unusedMotivations.splice(unusedMotivations.indexOf(type),1);
		    }
		    if (motivations[type])
	            motivations[type].value = value;
	    };
	    this.getMotivation = function(type) {
		    return motivations[type]?motivations[type].value:0;
	    };

	    this.addRandomMotivation = function(value) {
		    var randomMotivation = Math.floor(Math.random()*unusedMotivations.length);
		    this.setMotivation(unusedMotivations[randomMotivation],value);
	    }

	    this.getMotivationValues = function() {
		    var ret = [];
		    for (var m in motivations)
		        ret[motivations[m].code] = motivations[m].value;
		    return ret;
	    };

	    setupNature();
	    setupMotivations();
    };
	var proto = Personality.prototype;

	return Personality;
},['Settings','characters/personality/PersonalityMotivation']);