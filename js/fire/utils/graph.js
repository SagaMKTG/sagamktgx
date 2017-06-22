Fire.Graph = Fire.G = (function(){

	// TODO: pull actual values for w and h
	
	function constructor( w, h ) {

		this.width = w;

		this.height = h;
	}

	_F.U.extend( constructor.prototype, {

		setHeight: function( h ) {

			this.height = h;

			return this;
		},

		setWidth: function( w ) {

			this.width = w;

			return this;
		},

		x : function ( a ) {

			// return ( a / 100 * this.width ) - this.width/2;
			return ( a / 100 * this.width );
		},

		y : function ( a ) {

			// return ( a / 100 * this.height ) - this.height/2;
			return ( a / 100 * this.height );
		}
	});

	return new constructor( 1280, 720 );
	
})();
