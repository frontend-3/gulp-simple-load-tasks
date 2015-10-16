var fs = require('fs');
var exists = fs.existsSync;
var stat = fs.lstatSync;

module.exports = function(gulp) {
  var tm = new TaskManager(gulp);

  function loadTasks(path) {
    tm.load(path);
  }

  gulp.loadTasks = loadTasks;
  return loadTasks;
};

function TaskManager(gulp) {
  this.gulp = gulp;
}

TaskManager.prototype.load = function(path) {
  var s = stat(path);

  if (s.isDirectory()) {
    var gulp = this.gulp;
    var tasks = fs.readdirSync(path)

    tasks.forEach(function(task) {
        task_file = path + '/' + task;
        require(task_file)(gulp);
    });
  }
};
