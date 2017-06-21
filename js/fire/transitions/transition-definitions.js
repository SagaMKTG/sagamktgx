Fire.TransitionDefinitions = (function( tr ) {
	var obj = {};
	obj[ tr.WIPE_RIGHT ] = [ 

		// Point 0
		{ 
			start: { x: 0,		y: 0 },
			end:   { x: 0,		y: 0 } 
		}, 

		// Point 1
		{ 
			start: { x: 0,		y: 0 },
			end:   { x: 100,	y: 0 } 
		}, 

		// Point 2
		{ 
			start: { x: 0,		y: 100 },
			end:   { x: 100,	y: 100 } 
		}, 

		// Point 3
		{ 
			start: { x: 0,		y: 100 },
			end:   { x: 0,		y: 100 } 
		} 
	];

	obj[ tr.WIPE_LEFT ] = [ 

		{ 
			start: { x: 100,	y: 0 },
			end:   { x: 0,		y: 0 } 
		}, 

		{ 
			start: { x: 100,	y: 0 },
			end:   { x: 100,	y: 0 } 
		}, 

		{ 
			start: { x: 100,	y: 100 },
			end:   { x: 100,	y: 100 } 
		}, 

		{ 
			start: { x: 100,	y: 100 },
			end:   { x: 0,		y: 100 } 
		} 
	];

	obj[ tr.WIPE_UP ] = [ 

		{ 
			start: { x: 0,		y: 100 },
			end:   { x: 0,		y: 0 } 
		}, 

		{ 
			start: { x: 100,	y: 100 },
			end:   { x: 100,	y: 0 } 
		}, 

		{ 
			start: { x: 100,	y: 100 },
			end:   { x: 100,	y: 100 } 
		}, 

		{ 
			start: { x: 0,		y: 100 },
			end:   { x: 0,		y: 100 } 
		} 
	];

	obj[ tr.WIPE_DOWN ] = [ 

		{ 
			start: { x: 0,		y: 0 },
			end:   { x: 0,		y: 0 } 
		}, 

		{ 
			start: { x: 100,	y: 0 },
			end:   { x: 100,	y: 0 } 
		}, 

		{ 
			start: { x: 100,	y: 0 },
			end:   { x: 100,	y: 100 } 
		}, 

		{ 
			start: { x: 0,		y: 0 },
			end:   { x: 0,		y: 100 } 
		} 
	];

	obj[ tr.SLANT_LEFT ] = [ 

		{ 
			start: { x: 35,		y: 0 },
			end:   { x: -65,	y: 0 } 
		}, 

		{ 
			start: { x: 35,		y: 0 },
			end:   { x: 135,	y: 0 } 
		}, 

		{ 
			start: { x: 65,		y: 100 },
			end:   { x: 165,	y: 100 } 
		}, 

		{ 
			start: { x: 65,		y: 100 },
			end:   { x: -35,	y: 100 } 
		} 
	];

	obj[ tr.SLANT_RIGHT ] = [ 

		{ 
			start: { x: 65,		y: 0 },
			end:   { x: -35,	y: 0 } 
		}, 

		{ 
			start: { x: 65,		y: 0 },
			end:   { x: 165,	y: 0 } 
		}, 

		{ 
			start: { x: 35,		y: 100 },
			end:   { x: 135,	y: 100 } 
		}, 

		{ 
			start: { x: 35,		y: 100 },
			end:   { x: -65,	y: 100 } 
		} 
	];

	obj[ tr.DIAGONAL_LEFT ] = [ 

		{ 
			start: { x: 0,		y: 0 },
			end:   { x: -100,	y: 0 } 
		}, 

		{ 
			start: { x: 0,		y: 0 },
			end:   { x: 100,	y: 0 } 
		}, 

		{ 
			start: { x: 100,	y: 100 },
			end:   { x: 200,	y: 100 } 
		}, 

		{ 
			start: { x: 100,	y: 100 },
			end:   { x: 0,	y: 100 } 
		} 
	];

	obj[ tr.DIAGONAL_RIGHT ] = [ 

		{ 
			start: { x: 0,		y: 0 },
			end:   { x: -100,	y: 0 } 
		}, 

		{ 
			start: { x: 0,		y: 0 },
			end:   { x: 100,	y: 0 } 
		}, 

		{ 
			start: { x: 100,	y: 100 },
			end:   { x: 200,	y: 100 } 
		}, 

		{ 
			start: { x: 100,	y: 100 },
			end:   { x: 0,	y: 100 } 
		} 
	];
})( Fire.Transitions );
