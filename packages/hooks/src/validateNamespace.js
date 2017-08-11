/**
 * Validate a namespace.
 *
 * @param  {string} namespace The namespace to validate.
 *
 * @return {bool}             Whether the namespace is valid.
 */
function validateNamespace( namespace ) {

	if ( 'string' !== typeof namespace ) {
		console.error( 'The namespace must be a string.' );
		return false;
	}

	if ( ! /^.*\/.*$/.test( namespace ) ) {
		console.error( 'The namespace must take the form `my-plugin-slug/functionDescription' );
		return false;
	}

	return true;
}

export default validateNamespace;
