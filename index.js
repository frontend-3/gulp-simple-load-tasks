var fs, exists, stat, path;

fs      = require('fs');
exists  = fs.existsSync;
stat    = fs.lstatSync;
path    = require('path');

module.exports = function(gulp) {
  var tm = new TaskManager(gulp);

  function loadTasks(tasksdir) {
    tm.load(tasksdir);
  }

  gulp.loadTasks = loadTasks;
  return loadTasks;
};

function TaskManager(gulp) {
  this.gulp = gulp;
}

TaskManager.prototype.load = function(tasksdir) {
  var s;

  s = stat(tasksdir);

  if (s.isDirectory()) {
    var gulp, tasks;

    gulp  = this.gulp;
    tasks = fs.readdirSync(tasksdir)

    tasks.forEach(function(taskfile) {
        task = path.join(tasksdir,taskfile);
        require(task)(gulp);
    });
  }
};
