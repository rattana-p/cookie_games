"use strict";

var gulp = require("gulp"),
    uglify = require("gulp-uglify"),
    babel = require("gulp-babel");gulp.task("default", function () {
  gulp.src("*.js").pipe(uglify()).pipe(babel({ presets: ["es2015"] })).pipe(gulp.dest("dist"));
});