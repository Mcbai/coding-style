var gulp = require('gulp'),
  del = require('del'),
  pug = require('gulp-pug'),
  less = require('gulp-less'),
  cleanCSS = require('gulp-clean-css'),
  imagemin = require('gulp-imagemin'),
  babel = require('gulp-babel'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  rev = require('gulp-rev'), // 添加时间戳
  revCollector = require('gulp-rev-collector');


var LessAutoprefix = require('less-plugin-autoprefix'),
  autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });

// 文件路径
var paths = {
  pug: {
    src: 'src/pug/pages/*.pug',
    dest: 'dist/html/'
  },
  less: {
    src: 'src/less/main.less',
    dest: 'dist/css/'
  },
  js: {
    src: 'src/js/**/*.js',
    dest: 'dist/js/'
  },
  img: {
    src: 'src/img/**/*',
    dest: 'dist/img/'
  }
};


// 将pug文件转换为html
gulp.task('pug', function buildHTML() {
  return gulp.src(paths.pug.src)
    .pipe(pug())
    .pipe(gulp.dest(paths.pug.dest));
});

// 编译less文件
gulp.task('less', function() {
  return gulp.src(paths.less.src)
    .pipe(less({
      plugins: [autoprefix]
    }))
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(rev())
    .pipe(gulp.dest(paths.less.dest))
    .pipe(rev.manifest())
    .pipe(gulp.dest('rev/css'))
});

// 压缩图片
gulp.task('img', function() {
  return gulp.src(paths.img.src)
    .pipe(imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest(paths.img.dest));
});

// 编译JS文件
gulp.task('js', function() {
  return gulp.src(paths.js.src, { sourcemaps: true })
    .pipe(babel({
      presets: ['es2015']
      // plugins: ['transform-runtime']
    }))
    .pipe(uglify())
    // .pipe(concat('all.js'))
    .pipe(rev())
    .pipe(gulp.dest(paths.js.dest))
    .pipe(rev.manifest())
    .pipe(gulp.dest('rev/js'));
});

// 替换加了MD5时间戳的文件
gulp.task('rev', 
  gulp.series(
    gulp.parallel('pug', 'less', 'js'), function() {
      return gulp.src(['rev/**/*.json', 'dist/html/*.html'])
        .pipe(revCollector({
          replaceReved: true
        }))
        .pipe(gulp.dest(paths.pug.dest));
}));

// 清空html文件
gulp.task('cleanHtml', function() {
    return del('dist/html/*.html')
})

// Clean 任务执行前，先清除之前生成的文件
gulp.task('clean', function() {
  return del('dist/')
});

// 默认任务，在命令行输入`gulp`来启动任务
gulp.task('default', gulp.series('clean', gulp.parallel('img', 'rev')))
