var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

// 启动 browserSync 服务，自己启动server，并且为浏览器实时刷新提供服务
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
    files: './demo/**/*',
    browser: ["chrome"]
  })
})


// 默认任务，在命令行输入`gulp`来启动任务
gulp.task('default', gulp.parallel('browserSync'))
