Fire = Fire.U.extend( Fire, {

	create: function( options ) {

		options = _F.U.extend( options || {}, _F.defaults );

		return _F.Scene.create( options );
	}

});

