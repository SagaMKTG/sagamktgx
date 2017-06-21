Fire.EasingFn = {

	quadIn: function( t, b, c, d ) {

		t /= d;

		return c * t * t + b;
	},

	quadOut: function( t, b, c, d ) {

		t /= d;

		return -c * t * ( t - 2 ) + b;
	},

	cubicOut: function( t, b, c, d ) {

		t /= d;

		return c * t * t * t + b;
	},

	quintIn: function( t, b, c, d ) {

		t /= d;

		return c * t * t * t * t * t + b;
	},

	quintOut: function( t, b, c, d ) {

		t /= d;

		t--;

		return c * ( t * t * t * t * t + 1 ) + b;
	}
};
