const { parallel, src, dest, watch, series } = require('gulp');
const { join, resolve, basename } = require('path');

const
  scenesToJson        = require('scenes-to-json'),
  connect             = require('gulp-connect'),
  concat              = require('gulp-concat');
/*
 * SERVER
 */
function server (cb) {

  connect.server({
      port: 9000,
      root: './dist',
      livereload: true
    });

    cb();
}


/*
 * SCENES
 */

function scenes (cb){

scenesToJson('./src/scenes', './dist/scenes', (err, data)=>{
  if(err){
     console.log(`[ ${err.reason} ]`);
     console.log('line', err.mark.line, 'column', err.mark.column)
     console.log(err.mark.snippet);
    
    cb();
  }else{
    src('./').pipe(connect.reload());
    cb();
  }

})

};

/*
 * lib
 */

function lib (cb) {

return src('./src/lib/*.js')
      .pipe( concat('lib.js') )
      .pipe( dest('./dist/app/') )
      .pipe(connect.reload());

  cb();
}

/*
 * PLUGINS
 */

function plugins (cb) {

return src('./src/plugins/**/*.js')
      .pipe( concat('plugins.js') )
      .pipe( dest('./dist/app/') )
      .pipe(connect.reload());

  cb();
}

/**
 * WATCH
 */

function watchDir(cb) {
  watch('./src/scenes/**/*.{yaml,yml}', scenes );
  watch('./src/lib/*.js', lib);
  watch('./src/plugins/**/*.js', plugins);
  cb();
};

exports.default = parallel(server, watchDir);