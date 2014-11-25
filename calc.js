

module.exports = {

	add: function(val1,val2){
		var argErr  = checkArguments(val1,val2);
		if(argErr){
			throw argErr;
		}
		return val1 + val2;
	},
	subtract: function(val1,val2){
		var argErr  = checkArguments(val1,val2);
		if(argErr){
			throw argErr;
		}
		return val1 - val2;
	},
	multiply:function(val1,val2){
		var argErr  = checkArguments(val1,val2);
		if(argErr){
			throw argErr;
		}
		return val1 * val2;
	},
	divide:function(val1,val2){
		var argErr  = checkArguments(val1,val2);
		if(argErr){
			throw argErr;
		}
		return val1 / val2;
	}
};


function checkArguments(val1, val2){
	
	if(isNaN(val1) ){
		return new Error("Arg1 invalid");
	}

	if(isNaN(val2) ){
		return new Error("Arg2 invalid");
	}

	return;
}