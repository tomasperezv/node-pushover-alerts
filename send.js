#!/usr/bin/env node

/**
 * The script send.js receives 3 arguments: title, message and priority
 * You can call it directly in command line, triggering a pushover
 * notification to be sent.
 * Example: $./send.js "This is the title" "This is the message" 1
 *
 * @author Tomas Perez <tom@0x101.com>
 */

var push = require('pushover-notifications'),
		config = require('node-config').get('pushover');
