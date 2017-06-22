/*
 ----------------------------------------------------------------------

	Graphics Module: Wrapper for the use of PixiJS

 ----------------------------------------------------------------------
*/
Fire.Graphics = Fire.Gr = (function( pixi ){


	function constructor( pixi ) {

		this.proxy = pixi;

		this.app = null;

		this.graphics = null;

		this.ANCHOR_POSITION = 0.5;

		return this;

	}

	_F.U.extend( constructor.prototype, {

		initGraphicsEngine: function( w, h ) {

			this.app = new this.proxy.Application({ 

				width : w,

				height : h,

				backgroundColor : 0xe4e5dd, // TODO: Make this not hard coded.

				antialias : true,
			});

			this.graphics = new this.proxy.Graphics();

			return this.app;
		},

		makeElementContainer: function( renderer ) {

			var cntr = new this.proxy.Container();

			cntr.x = renderer.width * this.ANCHOR_POSITION;

			cntr.y = renderer.height * this.ANCHOR_POSITION;

			return cntr;

		},

		createMask: function() {

			return new this.proxy.Graphics();
		},

		createImageSprite: function( imagePath ) {

			var sprite = this.proxy.Sprite.fromImage( imagePath );

			sprite.anchor.set( this.ANCHOR_POSITION );

			return sprite;
		},

		createVideoSprite: function( videoPath ) {

			var instance = {};

			instance.texture = this.proxy.Texture.fromVideo( videoPath );

			instance.sprite = new this.proxy.Sprite( instance.texture );

			instance.sprite.anchor.set( this.ANCHOR_POSITION );

			return instance;
		},

		drawRect: function( options ) {

			var len = options.x_vertices.length, i = 0;
			// TODO: validate the options object.
			
			this.graphics.beginFill( parseInt( options.fillColor ) );

			this.graphics.moveTo( options.x_vertices[0], options.y_vertices[0] );

			i++;

			for( ; i < len; i ++) {

				this.graphics.lineTo( options.x_vertices[i], options.y_vertices[i] );
			}

			this.graphics.endFill();

			this.app.stage.addChild( this.graphics );
		}

	});

	return new constructor( pixi );

})( PIXI );
