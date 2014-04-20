#!/usr/bin/env node

/**
 * The script send.js receives 3 arguments: title, message and priority
 * You can call it directly in command line, triggering a pushover
 * notification to be sent.
 * Example: $./send.js "This is the title" "This is the message" 1
 *
 * @author Tomas Perez <tom@0x101.com>
 */
var log = require('node-log'),
		args = require('./messenger/process-arguments'),
		sender = require('./messenger/messenger');

if (args.valid()) {

	var title = args.get('title'),
			message = args.get('message'),
			priority = args.get('priority');

	sender.send(title, message, priority);

} else {
	log.warning('Usage: ./send.js <title> <message> <priority(optional)>');
}


