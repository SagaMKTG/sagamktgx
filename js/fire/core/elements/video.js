(function() {

	function constructor( options ) {

		var videoInstance = {};

		_F.U.extend( this, options || _F.defaults );

		videoInstance = _F.Graphics.createVideoSprite( options.video );

		this.sprite = videoInstance.sprite;

		this.texture = videoInstance.texture;

		return this;

	}

	Fire.Element = Fire.U.extend( Fire.Element, {

		Video : {

			create: function( options ) {

				return new constructor( options );
			}
		}
	});
})();
