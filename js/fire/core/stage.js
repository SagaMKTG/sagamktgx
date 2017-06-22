Fire.Stage = (function(){

	var pub = {};

	function constructor( stageInstance, scene ) {

		var stage = stageInstance, el = scene.el, styles; 

		stage.interactive = true;

		styles = "width:" + scene.width + "px;height:" + scene.height + "px;";

		scene.wrapper.setAttribute( "style", styles );

		scene.el.setAttribute( "style", styles );

		stage = _F.U.extend( stage, {

			onTap: function( fn ) {

				this.on('pointertap', fn );
			}
		});

		return stage;
	}


	pub = _F.U.extend( pub, {

		create: function( stageInstance, scene ) {

			return new constructor( stageInstance, scene );
		}
	});

	return pub;
})();
