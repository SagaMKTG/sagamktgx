Fire.Graph = {

	// TODO: pull actual values for w and h
	
	w : 1280,

	h : 720,

	x : function ( a ) {

		return ( a / 100 * this.w ) - this.w/2;
	},

	y : function ( a ) {

		return ( a / 100 * this.h ) - this.h/2;
	}
}

