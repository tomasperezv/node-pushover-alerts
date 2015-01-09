/**
 * Encapsulating the functionality in charge of processing command line arguments.
 *
 * @author Tomas Perez <tom@0x101.com>
 */

/**
 * @var argumentsMap
 * @private
 */
var argumentsMap = [
	{
		name: "title"
	},
	{
		name: "message"
	},
	{
		name: "priority",
		optional: true,
		default: 1
	}
];

/**
 * It uses the argumentsMap to return the value, the id is obtained from the
 * key 'name' in the map.
 * @method get
 * @return {String}
 * @public
 */
module.exports.get = function(id) {
	// Default value is an empty string
	var value = '',
			args = process.argv.slice(2);

	for (var i = 0; i < argumentsMap.length; i++) {
		if (argumentsMap[i].name === id) {
			if (args[i]) {
				value = args[i];
			} else if (argumentsMap[i].optional) {
				value = argumentsMap[i].default;
			}
		}
	}

	return value;

};

/**
 * Check if the arguments passed to the command line script are valid.
 * @method valid
 * @return {Boolean}
 * @public
 */
module.exports.valid = function() {

	var args = process.argv.slice(2),
			isValid = true;

	if (args.length < 2) {
		isValid = false;
	}

	return isValid;

};
