# gulp-remove-larger

gulp-remove-larger is a [gulp](https://github.com/wearefractal/gulp) plugin to remove files that are larger then their original. This was designed to run after processing images from png to webp.

## Usage

```javascript
var remove-larger = require("gulp-remove-larger");

// process pngs to webp and delete the webp if its larger then the png
gulp.src('src/images/**/*.png')
    .pipe( webp() ) // or some other image conversion
    .pipe( remove-larger() )
    .pipe( gulp.dest('dist/images/') );
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
