const
    gulp = require('gulp'),
    less = require('gulp-less'),
    source = require('vinyl-source-stream'),
    babel = require('gulp-babel'),
    ejs = require('gulp-ejs'),
    connect = require('gulp-connect'),
    livereload = require('gulp-livereload'),
    concat = requrie('gulp-concat'),
    path = require('./config/path.config.js')

//HTML Tasks:
//1.html - 将ejs转换为html
gulp.task('html', () => {
    gulp.src(path.src.ejs + '**/*.ejs')
        .pipe(ejs({
            path: path
        }, {}, {
            ext: '.html'
        }))
        .pipe(gulp.dest(path.dist.root))
        .pipe(livereload())
})
//2.htmlWatcher - 监视ejs变动，若有变动，执行html，并重载
gulp.task('htmlWatcher', () => {
    livereload.listen()
    gulp.watch([path.src.root + '**/*.ejs'], ['html', 'htmlReload'])
})
//3.htmlReload - 重载html
gulp.task('htmlReload', () => {
    gulp.src(path.dist.root + '**/*.html')
        .pipe(livereload())
})

//CSS Tasks:
//less - 将less轉換爲css
gulp.task('less', () => {
    gulp.src(path.src.less + '**/*.less')
        .pipe(less())
        .pipe(gulp.dest(path.dist.less))
})
gulp.task('components', () => {
    gulp.src(path.src.components + '**/*.less')
        .pipe(less())
        .pipe(concat('components.css'))
        .pipe(gulp.dest(path.src.css))
})
gulp.task('cssWatcher')
//Server Tasks:
gulp.task('webserver', () => {
    connect.server({
        root: path.dist.root,
        port: 8888,
        liveload: true
    })
})

gulp.task('declare', () => {
    console.log(path.dist.root)
    console.log(path.src.root)
})

//Default Tasks
gulp.task('default', ['html', 'webserver', 'htmlWatcher'])