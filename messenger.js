/**
 * @author Tomas Perez <tom@0x101.com>
 */
var log = require('node-log'),
	sender = require('./messenger/messenger');

exports.send = sender.send;
