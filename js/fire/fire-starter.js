(function( doc, win ){

	if( Fire.create ) {
		var Saga = window.Saga = Fire.create({

			container: "site-container",

			width: 1280,

			height: 720,

			fullscreen: false,

			easing: "quintIn",

			initial_transition: "wipeLeft",

			elements : [

				{

					width: 600,

					height: 300,

					x: "CENTER",

					y: "CENTER",

					type: "title",

					color: "#ff0000",

					content: "Hey I'm Dennis",

					background: "#000",

					reveal: "wipeRight",

					delay: 18	

				}

			]

		});
	}

})( document, window );
