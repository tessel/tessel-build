var gulp = require('gulp');
var runSequence = require('run-sequence');

var handle = require('./util').handle;

gulp.task('up', function (done) {
  handle('vagrant up', done);
});

gulp.task('update', ['up'], function (done) {
  handle('vagrant ssh -c "sudo /vagrant/box-scripts/update.sh"', done);
});

gulp.task('build-continuous', ['up'], function (done) {
  handle('vagrant ssh -c "sudo /vagrant/box-scripts/build-continuous.sh"', done);
});
gulp.task('build-firmware', ['up', 'build-continuous'], function (done) {
  handle('vagrant ssh -c "sudo /vagrant/box-scripts/build-firmware.sh"', done);
});
gulp.task('build-cli', ['up', 'build-continuous'], function (done) {
  handle('vagrant ssh -c "sudo /vagrant/box-scripts/build-cli.sh"', done);
});
gulp.task('build', function (done) {
  runSequence('build-continuous', 'build-firmware', 'build-cli', done);
});

gulp.task('package', function (done) {
  handle('vagrant package --output build/tessel-build.box', done);
});

gulp.task('default', function (done) {
  runSequence('update', 'build', 'package');
});
