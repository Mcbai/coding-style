var gulp = require('gulp'),
    pug = require('gulp-pug'),
    less = require('gulp-less'),
    //当发生异常时提示错误 确保本地安装gulp-notify和gulp-plumber
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;

var LessAutoprefix = require('less-plugin-autoprefix'),
    autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });

// 文件路径
var paths = {
  pug: {
    src: 'src/pug/pages/*.pug',
    dest: 'dev/html/',
    watch: 'src/pug/**/*.pug'
  },
  less: {
    src: 'src/less/**/*.less',
    dest: 'dev/css/',
    watch: 'src/less/**/*.less'
  },
  js: {
    src: 'src/js/**/*.js',
    dest: 'dev/js/',
    watch: 'src/js/**/*.js'
  },
  img: {
    src: 'src/img/**/*',
    dest: 'dev/img/',
    watch: 'src/img/**/*'
  }
}

// 启动 browserSync 服务，自己启动server，并且为浏览器实时刷新提供服务
gulp.task('browserSync', function() {
  return browserSync.init({
    server: {
      baseDir: './'
    }
  });
})

// 将pug文件转换为html
gulp.task('pug', function buildHTML() {
  return gulp.src(paths.pug.src)
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(pug())
    .pipe(gulp.dest(paths.pug.dest))
    .pipe(reload({stream: true}));
});

// 编译less文件
gulp.task('less', function() {
  return gulp.src(paths.less.src)
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(sourcemaps.init())
    .pipe(less({
      plugins: [autoprefix]
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.less.dest))
    .pipe(reload({stream: true}));
})

// 复制js文件
gulp.task('js', function() {
  return gulp.src(paths.js.src)
    .pipe(gulp.dest(paths.js.dest))
})

// 复制img文件
gulp.task('img', function() {
  return gulp.src(paths.img.src)
    .pipe(gulp.dest(paths.img.dest))
})


// 监听文件变化
gulp.task('watch', function() {
  gulp.watch(paths.pug.watch, gulp.parallel('pug'))
  gulp.watch(paths.less.watch, gulp.parallel('less'))
  gulp.watch(paths.js.watch, gulp.parallel('js'))
  gulp.watch(paths.img.watch, gulp.parallel('img'))
})

// 默认任务，在命令行输入`gulp`来启动任务
gulp.task('default', gulp.parallel('watch', 'browserSync', 'pug', 'less', 'js'))
