Fire.Util = Fire.U = (function(){

	/*
	 ----------------------------------------------------------------------

		Utilities

	 ----------------------------------------------------------------------
	*/

	function noop() {}

	function isArray( object ) {

		return Object.prototype.toString.call( object ) == '[object Array]';
	}

	function isFunction( object ) {

		return typeof object == 'function';
	}

	function isNumber( object ) {

		return typeof object == 'number';
	}

	function isString( object ) {

		return typeof object == 'string';
	}

	function keyName( code ) {

		return keyMap[ code ] || String.fromCharCode( code );
	}

	function extend( target, source, overwrite ) {

		for ( var key in source ) {

			if ( overwrite || !( key in target ) ) {

				target[ key ] = source[ key ];
			}
		}

		return target;
	}

	function proxy( method, context ) {

		return function() {

			method.apply( context, arguments );
		};
	}

	function clone( target ) {

		var object = {};

		for ( var key in target ) {

			if ( key === 'webkitMovementX' || key === 'webkitMovementY' ) {

				continue;
			}

			if ( isFunction( target[ key ] ) ) {

				object[ key ] = proxy( target[ key ], target );

			} else {

				object[ key ] = target[ key ];
			}
		}

		return object;
	} 

	return {

		extend : extend,

		clone : clone,

		keyName : keyName,

		noop : noop,

		isArray : isArray,

		isNumber : isNumber,
		
		isString : isString
	}
})();

