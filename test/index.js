var gulp = require('gulp'),
    loadTask = require('../index.js')(gulp),
    should = require('should');

describe('gulp-load-taskload-tasksn() {
  it('load task', function () {
    gulp.loadTasks(__dirname + "/tasks");
    should.exist(gulp.tasks['b'])
  });
});
