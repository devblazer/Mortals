;(function(n,d,p){var t=this,u='undefined',e='exports',i;if(typeof module!=u&&module[e]){if(p&&require){for(i in p)t[p[i]]=require(p[i]);}module[e]=d();}else if(typeof define!=u&&define.amd)define(n,(p||[]),d);else{for(i in p)p[i]=t[p[i]];t[n]=d.apply(t,p);}})
('language/Dialect', function (DialectG) {

	var phonetics = {
		g:DialectG
	};

	var phoneticChoices = [];
	for (var p in phonetics)
		phoneticChoices.push(p);

	var phoneticFollows = {
		start:['end','word','con','vow','vc','cv'],
		end:[],
		word:['word','end','cv','vc','con','vow'],
		con:['vow','vc'],
		vow:['con','word','end','cv'],
		vc:['vow','vc'],
		cv:['con','end','word','cv']
	};

	var duplicates = {
		places:[''],
		families:[''],
		words:['']
	};

	var Dialect = function(type) {
		type = type || phoneticChoices[Math.floor(Math.random()*phoneticChoices.length)];
        var _this = this;

		this.generatePlaceName = function() {
			var phoneticSet = phonetics[type].placeNames;

			return generateTitle(phoneticSet,'places');
		};

		this.generatePersonName = function(isMale) {
			isMale = isMale || false;
			var phoneticSet = phonetics[type][isMale?'maleNames':'femaleNames'];

			return generateTitle(phoneticSet);
		};

		this.generateFamilyName = function() {
			var phoneticSet = phonetics[type].familyNames;

			return generateTitle(phoneticSet,'families');
		};

		this.generateWord = function() {
			var phoneticSet = phonetics[type].words;

			return generateTitle(phoneticSet,'words');
		};

		this.logSample = function() {
		    console.log("\n"+'[-- DIALECT: '+type.toUpperCase()+' --]'+"\n");

		    console.log("\n"+'--- Places ---');
		    for (var n =0;n<12;n++)
		        console.log(this.generatePlaceName());

		    console.log("\n"+'--- Men ---');
		    for (var n =0;n<12;n++)
		        console.log(this.generatePersonName(true));

		    console.log("\n"+'--- Woman ---');
		    for (var n =0;n<12;n++)
		        console.log(this.generatePersonName(false));

		    console.log("\n"+'--- Families ---');
		    for (var n =0;n<12;n++)
		        console.log(this.generateFamilyName());

		    console.log("\n"+'--- Words ---');
		    for (var n =0;n<12;n++)
		        console.log(this.generateWord());
		};

		function generateTitle(phoneticSet,duplicatesType) {
			duplicatesType = duplicatesType || false;
			var once = false;
			var res = '';

			while (!once || (duplicatesType && duplicates[duplicatesType].indexOf(res)>=0)) {
				once = true;
				res = '';
				wordCount = 0;

				while ((!wordCount || Math.random()*phoneticSet.wordChance<1) && wordCount<phoneticSet.maxWord) {
					if (wordCount)
						res+=' ';
					wordCount++;
					var word = '';
					var targetChar = Math.floor(Math.random()*(phoneticSet.maxChar-phoneticSet.minChar+1))+phoneticSet.minChar-1;
					var phoneticCount = 0;
					var lastPhoneticType = 'word';
					var lastPhonetic = '';

					while (word.length<phoneticSet.minChar || (phoneticCount<=phoneticSet.maxPhonetic && word.length<targetChar)){
						var _phonetics = phoneticSet;
						if (phoneticSet.useAll)
							_phonetics = [
								phonetics[_phonetics.useAll].placeNames,
								phonetics[_phonetics.useAll].maleNames,
								phonetics[_phonetics.useAll].femaleNames,
								phonetics[_phonetics.useAll].familyNames,
							];

						var choices = gatherPhonetics(_phonetics,lastPhoneticType,lastPhonetic,word.length>=phoneticSet.minChar,phoneticSet.useAll);
						if (!choices.length)
							break;
						var choice = choices[Math.floor(Math.random()*choices.length)];
						lastPhonetic = choice.phonetic;
						lastPhoneticType = choice.type;
						phoneticCount++;
						word += lastPhonetic;
					}

					res+=word;
				}
			}

			if (duplicatesType)
				duplicates[duplicatesType].push(res);
			return res;
		};

		function gatherPhonetics(phoneticLists, type, lastPhonetic, endingAllowed, noWords) {
			noWords = noWords || false;
			if (phoneticLists.end)
				phoneticLists = [phoneticLists];

			endingAllowed = endingAllowed || false;
			var res = [];
			for (var l in phoneticLists) {
				var phonetic = phoneticLists[l];
				for (var t in phoneticFollows[type])
					for (var f in phonetic[phoneticFollows[type][t]]) {
						if (lastPhonetic != phonetic[phoneticFollows[type][t]][f] && (endingAllowed || phoneticFollows[type][t] != 'end') && (!noWords || phoneticFollows[type][t]!='word'))
							res.push({phonetic:phonetic[phoneticFollows[type][t]][f],type:phoneticFollows[type][t]});
					}
			}
			return res;
		}
	};
	var proto = Dialect.prototype;

	return Dialect;
},['language/dialects/DialectG']);