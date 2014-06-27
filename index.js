#!/usr/bin/env node

var argv = require('optimist')
  .usage('Usage: $0 [command]')
  .demand(1)
  .argv;

var handle = require('./util').handle;

var command = argv._[0];
switch (command) {
  case 'firmware': handle('gulp build-firmware'); break;
  case 'cli': handle('gulp build-cli'); break;
  default: throw new Error("unknown command " + command);
}
