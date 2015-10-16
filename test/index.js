var gulp = require('gulp'),
    loadTask = require('../index.js')(gulp),
    should = require('should');

describe('gulp-task-loader', function() {
  it('load task', function () {
    gulp.loadTasks("./test/tasks");
    should.exist(gulp.tasks['b'])
  });
});
