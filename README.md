# gulp-simple-load-tasks
A simple "plugin" for gulp that allows you to load tasks from a path and that way your tasks can be modular.

## Installation

The package can be installed with npm

```bash
npm install gulp-simple-load-tasks
```


## Usage
Require the package in your `gulpfile.js` and throw `grunt` in it.
This usually looks this way:

```js
var gulp = require('gulp');

require('gulp-simple-load-tasks')(gulp);

gulp.loadTasks(__dirname + "/tasks");

```

Every task into folder tasks could be wrapper in this way.


```js

module.exports = function(gulp) {
  gulp.task('b', function() {});
};

```


