;(function(n,d,p){var t=this,u='undefined',e='exports',i;if(typeof module!=u&&module[e]){if(p&&require){for(i in p)t[p[i]]=require(p[i]);}module[e]=d();}else if(typeof define!=u&&define.amd)define(n,(p||[]),d);else{for(i in p)p[i]=t[p[i]];t[n]=d.apply(t,p);}})
('Utils', function () {

	var Utils = {
		deepFreeze:function(obj) {
			var propNames = Object.getOwnPropertyNames(obj);
			for (var p in propNames) {
				var name = propNames[p];
				var prop = obj[name];
				if (typeof prop == 'object' && prop !== null)
				deepFreeze(prop);
			}
			Object.freeze(obj);
			Object.seal(obj);
		},
		structeredCompressor:{
			compress:function(structure,data) {
				var res = {};
				var target = res;
				for (var p in
			},
			decompress:function(structure,data) {

			},
			StructuredProperty:function(name,type,bitSize,isSigned,base,multiplier,baseClass,parameters,children) {
				this.name = name || '';
				this.type = type || 'number';
				this.bitSize = bitSize || 8;
				this.isSigned = isSigned || true;
				this.base = base || 0;
				this.multiplier = multiplier || 0;
				this.baseClass = baseClass || Object;
				this.parameters = parameters || [];
				this.children = children || null;
			}
		}
	};

	return Utils;
},[]);