/**
 * Wrapper on top of pushover-notifications.
 *
 * @author Tomas Perez <tom@0x101.com>
 */
var push = require('pushover-notifications'),
		config = require('node-config').get('pushover'),
		log = require('node-log');

/**
 * @method _getPushObject
 * @private
 */
var _getPushObject = function() {

	var pushObject = new push( {
			user: config.user,
			token: config.token
	});

	return pushObject;

};

/**
 * @param {String} title
 * @param {String} message
 * @param {String} priority
 * @method _getMessageObject
 * @private
 */
var _getMessageObject = function(title, message, priority) {

	var messageObject = {
			message: message,
			title: title,
			sound: 'magic',
			priority: priority
	};

	return messageObject;

};

/**
 * Send a message using the pushover library.
 *
 * @param {String} title
 * @param {String} message
 * @param {String} priority
 * @method send
 * @send
 */
module.exports.send = function(title, message, priority) {

	var push = _getPushObject();
	message = _getMessageObject(title, message, priority);

	push.send(message, function(err, result) {
		if (err) {
			log.error('Message couldn\'t be sent.');
		} else {
			log.ok('Message sent: ' + result);
		}
	});

};
