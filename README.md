# mountains.js


This is mountains.js. A JavaScript art renderer inspired by
the "Mountains blue" and "Mountains Gold" images in http://parlorwall.com

Installing is simple. Include the mountains.min.js and mountains.min.css files
on your homepage, and add these five lines of HTML:

```html
<div class="triangle triangle-blue"></div>
<div class="triangle triangle-green"></div>
<div class="triangle triangle-red"></div>
<div class="triangle triangle-yellow"></div>
<div class="triangle triangle-purple"></div>
```


Why include the HTML, instead of manipulating DOM with JavaScript?
Because mountains.js provide a CSS fallback for those who have
disabled JavaScript in their browser.


This also means that it isn't necessary to include the JavaScript file,
but this is highly recommended since the code will make sure the abstract
mountains fit perfectly on your screen.


## Create your own customized CSS


mountains.js comes with the tools you need to make your own custom CSS,
this might be handy if you for instance want to support more resolutions
than the default fallback CSS provided here.

In global scope you will find a function mountainsComputeFallbackCss. This
function takes as argument a comma-separated list of the different widths
the fallback CSS will generate, and returns the CSS as a string.


```javascript
copy(mountainsComputeFallbackCss('320,480,860,1024,1280,1920'))
```

The above command will produce fallback CSS for six different width, and
copy the result into your clipboard. The provided argument in the example
above also happens to be the default values.