Fire.Scene = (function(doc){

	var pub = {};

	// Stuff the other files shouldn't know about...
	
	function constructor( options ) {

		_F.U.extend( this, options );

		this.frame = 0;

		this.animations = [];

		this.animationDetails = [];

		this.createElements()

			.initGraphics()

			.prepareStage()

			.prepareAnimations()

			.start();

		return this;
	}

	_F.U.extend( constructor.prototype, {

		initGraphics: function() {

			this.graphics = _F.Graphics.initGraphicsEngine( this.width, this.height );

			this.stage = _F.Stage.create( this.graphics.stage, this );

			this.addToStage();

			return this;
		},

		createElements: function() {

			this.wrapper = doc.getElementById( this.container );

			this.el = doc.createElement('div');

			this.el.className += 'fire-canvas';

			this.wrapper.appendChild( this.el );

			return this;
		},


		prepareStage: function() {

			var elements = this.elements, renderer = this.graphics.renderer, 

				i = 0, l = elements.length ? elements.length : 0, prepared = [];

			this.num_elems = l;
			
			for( ; i < l; i++ ) {

				prepared.push( _F.Element.create( elements[i], renderer ) );
			}

			this.prepared = prepared;

			return this;
		},

		addToStage: function() {

			this.el.appendChild( this.graphics.view );

			return this;
		},

		prepareAnimations: function() {

			var prepared = this.prepared, i = 0, l = this.num_elems;

			this.animations = [];

			this.animationDetails = [];

			this.frame = 0;

			for( ; i < l; i++ ) {
			
				this.animations.push( this.calculateAnimation( this.prepared[i] ) );

				this.animationDetails.push({

					done : false,

					cleaned : false,

					easing : this.prepared[i].easing,

					transition : this.prepared[i].transition
				});
			}

			return this;
		},

		calculateAnimation: function( element ) {

			var animation_array = [], 

				scaled_definition,

				num_points = 4, 

				i = 0, 

				translate = Fire.Graph,

				transition_definition = Fire.TransitionDefs[ element.transition ];
			
			for( ; i < num_points; i++ ) {

				scaled_definition = transition_definition[ i ];

				animation_array.push({ 

					x : { 

						b : translate.x( scaled_definition.start.x ), 
						
						d : ( translate.x( scaled_definition.end.x ) - translate.x( scaled_definition.start.x ) ) 
					},

					y : {

						b : translate.y( scaled_definition.start.y ),

						d : ( translate.y( scaled_definition.end.y ) - translate.y( scaled_definition.start.y ) )
					}

				});
			}

			return animation_array;
		},

		start: function() {

			this.graphics.ticker.add( this.update, this, 0 );

			this.graphics.stage.on( 'pointertap', this.restart, this );

			return this;
		},

		// this method is only for demo purposes...
		restart: function() {

			_F.Graphics.graphics.clear();

			this.prepareAnimations();

		},

		update: function() {

			var n = 0, r = 0, num_animations = this.animations.length, rect_vertices = 4, easing_fn, 
			
				vx, vy, elem, elem_x = [], elem_y = [], 

				dur = 30; // TODO: this is hard coded and it shouldn't be...

			for( ; n < num_animations; n++ ) {

				if( ! this.animationDetails[n].done ) {
				
					easing_fn = _F.EasingFunctions[ this.animationDetails[n].easing ];

					// check if the animation should stop after this round.

					this.animationDetails[n].done = this.frame < dur ? false : true;

					// calculate all the vertices' coordiantes for this tick.

					for(; r < rect_vertices; r++ ) {

						vx = this.animations[n][r].x;

						vy = this.animations[n][r].y;

						elem_x[ r ] = easing_fn( this.frame, vx.b, vx.d, dur);

						elem_y[ r ] = easing_fn( this.frame, vy.b, vy.d, dur);
					}

					if( this.elements[n].type == "block" ) {

						_F.Graphics.drawRect({ 

							fillColor	: this.elements[n].fillColor,

							x_vertices	: elem_x,

							y_vertices	: elem_y
						});
					}

					//elem.clear();

					this.frame++;
					
				} else if ( ! this.animationDetails[n].cleaned ) {

					// todo... remove unneeded elements..
					this.animationDetails[n].cleaned = true;
				}
			}





				

		}

	});

	// Stuff the other files can use...	

	pub = _F.U.extend( pub, {

		create: function( options ) {

			return new constructor( options );
		}
	});

	return pub;
})(document);
