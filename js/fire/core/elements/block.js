(function() {

	function constructor( element ) {

		this.styles = {

			fillColor: element.fillColor

		};

		return this;

	}
	Fire.U.extend( constructor.prototype, {

		createBlockContext: function() {
		}

	});


	Fire.Element = Fire.U.extend( Fire.Element, {

		Block : {

			create: function( element ) {

				return new constructor( element );
			}
		}
	});
})();
