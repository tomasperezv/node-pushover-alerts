node-pushover-alerts
====================

Wrapper on top of node-pushover to send [pushover](https://pushover.net) alerts.

### Installation ###

```shell
$ npm install git+ssh://git@github.com:tomasperezv/node-pushover-alerts.git
```

### Configuration ###

Copy ./config/pushover-example.json to ./config/pushover.json

Edit ./config/pushover.json setting your [pushover](https://pushover.net) credentials.

```json
{
	"user": "",
	"token": ""
}
```

### Sending alerts via command line ###

The script send.js receives 3 arguments: title, message and priority. You can call it directly in command line, triggering a pushover notification to be sent.

```shell
$ ./send.js "This is the title" "This is the message" 1
```

### Sending alerts via code ###

```javascript
var sender = require('node-pushover-alerts');
sender.send('Title', 'Message', 1);
```

Author
----------
Tomas Perez - tom@0x101.com

http://www.tomasperez.com

License
-----------
Public Domain.

No warranty expressed or implied. Use at your own risk.
