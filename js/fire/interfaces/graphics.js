/*
 ----------------------------------------------------------------------

	Graphics Module: Wrapper for the use of PixiJS

 ----------------------------------------------------------------------
*/
Fire.Graphics = Fire.Gr = (function( pixijs ){

	var engine = {},

		pixi = pixijs,

		ANCHOR_POSITION = 0.5;

	engine = _F.U.extend( engine, {

		initGraphicsEngine: function( w, h ) {

			return new pixi.Application( w, h, { antialias: true } );
		},

		makeElementContainer: function( renderer ) {

			var cntr = new px.Container();

			cntr.x = renderer.width * ANCHOR_POSITION;

			cntr.y = renderer.height * ANCHOR_POSITION;

			return cntr;

		},

		createMask: function() {

			return new px.Graphics();
		},

		createImageSprite: function( imagePath ) {

			var sprite = pixi.Sprite.fromImage( imagePath );

			sprite.anchor.set( ANCHOR_POSITION );

			return sprite;
		},

		createVideoSprite: function( videoPath ) {

			var instance = {};

			instance.texture = pixi.Texture.fromVideo( videoPath );

			instance.sprite = new pixi.Sprite( instance.texture );

			instance.sprite.anchor.set( ANCHOR_POSITION );

			return instance;
		}

	});

	return engine;

})( PIXI );
