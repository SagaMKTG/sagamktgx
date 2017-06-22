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

		this.options = options;

		_F.U.extend( this, options );

		if( ! ELEM_TYPES[ this.type ] ) {

			return false;
		}

		this.init().prepareForStage();

		return this;
	}

	_F.U.extend( constructor.prototype, {

		init: function() {

			this.container = _F.Graphics.makeElementContainer( this.renderer );

			switch( this.type ) {

				case ELEMS_TYPE.VIDEO :

					this.elem = _F.Elements.Video.create();

					break;

				case ELEMS_TYPE.IMAGE :

				this.elem = _F.Elements.Image.create();

					break;

				default :

					break;

			}

			return this;
		},

		prepareForStage: function() {

			this.container.addChild( this.elem.sprite );

			this.mask = _F.Graphics.createMask(); 
		}

	});

	_F.U.extend( pub, {

		create: function( options, renderer ) {

			this.renderer = renderer;

			return new constructor( options );
		}
	});

	return pub;
})();
