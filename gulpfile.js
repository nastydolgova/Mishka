const { src, dest, parallel, series, watch } = require('gulp');

const browserSync  = require('browser-sync').create();
const concat       = require('gulp-concat');
const uglify       = require('gulp-uglify-es').default;
const sass         = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleancss     = require('gulp-clean-css');
const imagemin     = require('gulp-imagemin');
const newer        = require('gulp-newer');

function browsersync(){
    browserSync.init({
        server: {baseDir: 'app/'},
        notify: false,
        online: true // false если не хочу подключаться
    })
}

function scripts(){
    return src(
        ['app/**/*.js','!app/**/*.min.js']
        // какой файл
    )
    .pipe(concat('app.min.js')) 
    .pipe(uglify())
    .pipe(dest('app/js/'))
    .pipe(browserSync.stream())
    // в какой файл, сжатие, куда
}

function styles(){
    return src(['app/sass/main.scss'])
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
    .pipe(cleancss(( { level: { 1: {specialComments : 0 }}, format: 'beautify' } )))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream())
}

function images(){
    return src('app/img/*')
    .pipe(newer('dist/img/'))
    .pipe(imagemin())
    .pipe(dest('dist/img/'))
}

function buildcopy(){
    return src([
        'app/css/**/*',
        'app/js/**/*.js',
        'app/**/*.html',
    ], { base: 'app/'})
    .pipe(dest('dist'))
}

function startwatch(){
    watch(['app/**/sass/**/*'], styles);
    watch(['app/**/*.js','!app/**/*.min.js'], scripts);
    watch('app/img/**/*', images);
    watch('app/**/*.html').on('change', browserSync.reload);
}

exports.browsersync = browsersync;
exports.scripts = scripts;
exports.styles = styles;
exports.images = images;
exports.build = series (styles, scripts, images, buildcopy);

exports.default = parallel(styles, scripts, browsersync, startwatch)

// для установки конкотинации нескольких js файлах - как массив ['','']