const gulp = require("gulp");
const sass = require("gulp-sass");

// gulp tasks

// sass preprocessing task
gulp.task("sass", function () {
  return gulp
    .src("app/scss/styles.scss")
    .pipe(sass())
    .pipe(gulp.dest("app/css"));
});

// console task with async function
gulp.task("hello", async function () {
  console.log("Hello Sqwenuses of the world");
});


// Globbing - matching patterns for files that allow you to add more than one file into gulp.src

// 4 different globbing patterns
// 1) *.scss - wildcard pattern matching any files ending with .scss in the root folder project
// 2) **/*.scss - pattern that matches any file ending with .scss in the root folder and any child directories
// 3) !not-me.scss -  In this case, not-me.scss would be excluded from the match
// 4) *.+(scss|sass) - In this case, Gulp will match any file ending with .scss or .sass in the root folder.

