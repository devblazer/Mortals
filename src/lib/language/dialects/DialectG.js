;(function(n,d,p){var t=this,u='undefined',e='exports',i;if(typeof module!=u&&module[e]){if(p&&require){for(i in p)t[p[i]]=require(p[i]);}module[e]=d();}else if(typeof define!=u&&define.amd)define(n,(p||[]),d);else{for(i in p)p[i]=t[p[i]];t[n]=d.apply(t,p);}})
('language/Dialect/DialectG', function () {
    return {
        maleNames:{
            maxWord:1,
            wordChance:0.5,
            minChar:3,
            maxChar:10,
            maxPhonetic:4,
            useAll:false,

            start:[],
            end:[],
            word:[],
            con:[],
            vow:[],
            vc:[],
            cv:[]
        },
        femaleNames:{
            maxWord:3,
            wordChance:0.5,
            minChar:3,
            maxChar:10,
            maxPhonetic:4,
            useAll:false,

            start:[],
            end:[],
            word:[],
            con:[],
            vow:[],
            vc:[],
            cv:[]
        },
        familyNames:{
            maxWord:3,
            wordChance:0.5,
            minChar:3,
            maxChar:10,
            maxPhonetic:4,
            useAll:false,

            start:[],
            end:[],
            word:[],
            con:[],
            vow:[],
            vc:[],
            cv:[]
        },
        placeNames:{
            maxWord:3,
            wordChance:0.5,
            minChar:3,
            maxChar:10,
            maxPhonetic:4,
            useAll:false,

            start:[],
            end:[],
            word:[],
            con:[],
            vow:[],
            vc:[],
            cv:[]
        },
        words:{
            maxWord:3,
            wordChance:0.5,
            minChar:3,
            maxChar:10,
            maxPhonetic:4,
            useAll:true
        }
    };
},[]);