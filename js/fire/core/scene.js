Fire.Scene = (function(doc){

	var pub = {};

	// Stuff the other files shouldn't know about...
	
	function constructor( options ) {

		_F.U.extend( this, options );

		this.createElements()
			.initGraphics()
			.prepareStage()
			.addToStage()
			.calculateAnimations()
			.start();

		return this;
	}

	_F.U.extend( constructor.prototype, {

		initGraphics: function() {

			this.graphics = _F.Graphics.initGraphicsEngine( this.width, this.height );

			this.stage = _F.Stage.create( this.graphics.stage, this );

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

				i = 0, l = elements.length ? elements.length : 0;

			this.preparedElements = [];

			this.num_elems = l;
			
			for( ; i < l; i++ ) {

				this.preparedElements.push( _F.Element.create( elements[i], renderer ) );
			}

			return this;
		},

		addToStage: function() {

			this.el.appendChild( this.graphics.view );

			return this;
		},

		calculateAnimations: function() {

			return this;
		},

		start: function() {

			this.graphics.ticker.add( this.update );

			return this;
		},

		update: function() {}

	});

	// Stuff the other files can use...	

	pub = _F.U.extend( pub, {

		create: function( options ) {

			return new constructor( options );
		}
	});

	return pub;
})(document);
