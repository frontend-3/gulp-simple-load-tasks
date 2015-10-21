var gulp, loadTasks;

gulp      = require('gulp'),
require('../index.js')(gulp);
console.log(__dirname)
gulp.loadTasks('./tasks')


