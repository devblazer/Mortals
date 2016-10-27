;(function(n,d,p){var t=this,u='undefined',e='exports',i;if(typeof module!=u&&module[e]){if(p&&require){for(i in p)t[p[i]]=require(p[i]);}module[e]=d();}else if(typeof define!=u&&define.amd)define(n,(p||[]),d);else{for(i in p)p[i]=t[p[i]];t[n]=d.apply(t,p);}})
('StructuredCompressor', function () {

	var typeBaseBytes = {
		'bool':1,
		'number':1,
		'string':1,
		'object':1,
		'array':2
	};

	var StructeredCompressor = function (name,type,byteSize,isSigned_baseClass_children,multiplier,children) {
		this.name = name || '';
		this.type = type || 'number';
		this.byteSize = byteSize || typeBaseBytes[this.type];
		this.isSigned = (this.type=='number' ? (isSigned_baseClass_children || true) : null);
		this.baseClass = (this.type=='object' ? (isSigned_baseClass_children || Object) : null);
		this.multiplier = (this.type=='number' ? (multiplier || 0) : null);
		this.children = (this.type=='number'||this.type=='object' ? children : isSigned_baseClass_children) || null;
	}

	var proto = StructeredCompressor.prototype;

	proto.compess = function(data,offset) {
		offset = offset || 0;
		if (typeof data == 'string')
			data = new TextEncoder().encode(data);
		var ret = null;
		if (this.type == 'string') {
			var len = (new DataView(data.buffer))['getUint'+this.byteSize*8](offset);
			offset+=this.bysteSize;
		}
	};
	proto.decompress = function(data) {
	};

	return StructuredCompressor;
},[]);