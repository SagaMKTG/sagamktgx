(function() {

	function constructor( element ) {

		var videoInstance = {};

		_F.U.extend( this, element || _F.defaults );

		videoInstance = _F.Graphics.createVideoSprite( element.video );

		this.sprite = videoInstance.sprite;

		this.texture = videoInstance.texture;

		return this;

	}

	Fire.Element = Fire.U.extend( Fire.Element, {

		Video : {

			create: function( element ) {

				return new constructor( element );
			}
		}
	});
})();
