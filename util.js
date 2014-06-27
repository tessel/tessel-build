var exec = require('child_process').exec;

module.exports.handle = function (command, done) {
  var cp = typeof command === 'string' ? exec(command) : command;
  cp.stdout.pipe(process.stdout);
  cp.stderr.pipe(process.stderr);
  if (typeof done === 'function') {
    cp.on('error', done);
    cp.on('exit', done);
  }
};
