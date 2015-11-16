import gulp from "gulp";
import browserify from "browserify";
import source from "vinyl-source-stream";

gulp.task("default", () => {

  return browserify("src/app.js.es6")
    .transform("babelify", {presets: ["es2015"]})
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("dist"));

});

