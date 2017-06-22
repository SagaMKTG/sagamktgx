Fire.Element = (function(){

	var pub = {},

		ELEM_TYPES = {

			VIDEO : "video",

			IMAGE : "image",

			BLOCK : "block",

			TITLE : "title"
		};

	// Stuff the other files shouldn't know about...
	
	function constructor( options ) {

		_F.U.extend( this, options );

		if( ! ELEM_TYPES[ this.type.toUpperCase() ] ) {

			throw 'No Element type called ' + this.type;
		}

		this.init().prepareForStage();

		return this;
	}

	_F.U.extend( constructor.prototype, {

		init: function() {

			this.container = _F.Graphics.makeElementContainer( this.renderer );

			switch( this.type ) {

				case ELEM_TYPES.BLOCK :

					_F.Element.Block.create( this );

					break;

				case ELEM_TYPES.IMAGE :

					this.elem = _F.Element.Image.create( this );

					break;

				case ELEM_TYPES.VIDEO :

					this.elem = _F.Element.Video.create( this );

					break;

				default :

					break;

			}

			return this;
		},

		prepareForStage: function() {

			if( this.elem && this.elem.sprite ) {

				this.container.addChild( this.elem.sprite );

				this.mask = _F.Graphics.createMask(); 
			}

			return this;
		}

	});

	_F.U.extend( pub, {

		create: function( options, renderer ) {

			options.renderer = renderer;

			return new constructor( options );
		}
	});

	return pub;
})();
