;(function(n,d,p){var t=this,u='undefined',e='exports',i;if(typeof module!=u&&module[e]){if(p&&require){for(i in p)t[p[i]]=require(p[i]);}module[e]=d();}else if(typeof define!=u&&define.amd)define(n,(p||[]),d);else{for(i in p)p[i]=t[p[i]];t[n]=d.apply(t,p);}})
('Trait', function () {

    var Trait = function(type,value) {
	    value = typeof value == 'undefined' ? 1 : value;

	    Object.defineProperty(this,'code',{value:type.code,writable:false});
	    Object.defineProperty(this,'name',{value:type.name,writable:false});
	    Object.defineProperty(this,'description',{value:type.description,writable:false});

	    Object.defineProperty(this,'value',{
		    get:function() { return value; },
		    set:function(val) {
			    value = Math.min(1,Math.max(0,val));
		    }
	    });
    };
	var proto = Trait.prototype;

	return Trait;
},[]);