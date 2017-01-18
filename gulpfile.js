const creds = require("./src/configuration/settings.js");
const gulp = require("gulp");
/*const gutil = require("gulp-util");
const concat = require("gulp-concat");
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const cleanCSS = require("gulp-clean-css");
const flatten = require("gulp-flatten");
const stripDebug = require("gulp-strip-debug"); 
const rename = require("gulp-rename");
const babel = require("gulp-babel");*/
const spsave = require("gulp-spsave");

const jsPath = "src";
const cssPath = "styles";
const deployPath = "dist";
const siteUrl = "https://sadacloud.sharepoint.com/sites/rajesh";
const spJSPath = "Style%20Library/rajesh/js";
const spCSSPath = "Style%20Library/rajesh/CSS";

gulp.task("js", () => {
  gulp.src([`${jsPath}/*.jsx`, `${jsPath}/**/*.jsx`,`${jsPath}/*.js`, `${jsPath}/**/*.js`])
  .pipe(sourcemaps.init())
  .pipe(babel({
    presets: ['latest', 'react']
  }))
  .pipe(concat("all.min.js", {newLine: ";"}))
  .pipe(uglify())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(`${deployPath}/JS`));
});

/*gulp.task("css", () => {
  gulp.src(`${cssPath}/*.css`)
  .pipe(sourcemaps.init())
  .pipe(cleanCSS())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(`${deployPath}/CSS`));
});*/

gulp.task('upload-js-to-sp', function () {
  return gulp.src([`${deployPath}/JS/*.js`])
      .pipe(spsave({
        siteUrl: siteUrl,
        folder: spJSPath,
        checkin: true,
        checkinType: 1
      }, creds));
});

gulp.task('upload-css-to-sp', function () {
  return gulp.src([`${deployPath}/CSS/*.css`])
      .pipe(spsave({
        siteUrl: siteUrl,
        folder: spCSSPath,
        checkin: true,
        checkinType: 1
      }, creds));
});

gulp.task("default", ['upload-js-to-sp','upload-css-to-sp']);