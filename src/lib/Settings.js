;(function(n,d,p){var t=this,u='undefined',e='exports',i;if(typeof module!=u&&module[e]){if(p&&require){for(i in p)t[p[i]]=require(p[i]);}module[e]=d();}else if(typeof define!=u&&define.amd)define(n,(p||[]),d);else{for(i in p)p[i]=t[p[i]];t[n]=d.apply(t,p);}})
('Settings', function (Utils) {

	var Settings = {
		personality:{
			generation:{
				minFullMotivations:1,
				maxFullMotivations:2,
				minTotalMotivations:2,
				maxTotalMotivations:4
			},
			motivationModifiers:{
				gender:{
					male:{
						competition:0.4,
						conflict:0.2,
						conquest:0.4,
						discovery:0.4,
						heroism:0.3,
						love:-0.3,
						power:0.3,
						purity:-0.3
					},
					female:{
						acquisition:-0.4
						adoration:0.4,
						conquest:-0.7,
						creation:0.6,
						discovery:-0.4,
						domesticity:0.6,
						enslavement:-0.7
						heroism:-0.4,
						love:0.3,
						order:0.3,
						understanding:-0.3,
						vice:-0.3
					}
				}
			},
			moodinessModifier:{
				gender:{
					male:-0.3,
					female:0.3
				}
			},
			natureModifiers:{
				gender:{
					male:{
						boldness:0.1
					},
					female:{
						impulsiveness:0.2,
						boldness:-0.2
					}
				}
			}
		}
	};

	Utils.deepFreeze(Settings);

	return Settings;
},['Utils']);