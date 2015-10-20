var gulp = require('gulp'),
    loadTask = require('../index.js')(gulp),
    should = require('should');

describe('gulp-load-tasks', function() {
  it('load task', function () {
    gulp.loadTasks(__dirname + "/tasks");
    should.exist(gulp.tasks['b'])
  });
});
