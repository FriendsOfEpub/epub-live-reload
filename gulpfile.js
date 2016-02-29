var gulp = require('gulp');
var insertLines = require('gulp-insert-lines');


var path = __dirname;

var exec = require('exec');
//inject the libs
gulp.task('init', function(){
    //Should be done only the first time, not always
    return gulp.src('./epub/**/*.xhtml')
    .pipe(insertLines({
        'before': /<\/body>$/,
        'lineBefore': '<script src="http://localhost:8080//node_modules/socket.io-client/socket.io.js"></script><script src="http://localhost:8080/libs/elr.js"></script>'
    }))
    .pipe(gulp.dest('./epub'));;
});
gulp.task('serve', function(){
    exec('node node_modules/http-server/bin/http-server ',function(err, out, code){
            process.stderr.write(err);
            process.stdout.write(out);
           
        });
    require('./libs/server.js');
});

gulp.task('default', ['serve']);