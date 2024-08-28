// 動態加載CSS
var head = document.getElementsByTagName('head')[0];

var bootstrapCss = document.createElement('link');
bootstrapCss.rel = 'stylesheet';
bootstrapCss.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css';
head.appendChild(bootstrapCss);

var fontAwesomeCss = document.createElement('link');
fontAwesomeCss.rel = 'stylesheet';
fontAwesomeCss.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
head.appendChild(fontAwesomeCss);

// 動態加載JS
var bootstrapJs = document.createElement('script');
bootstrapJs.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js';
document.body.appendChild(bootstrapJs);

var jQueryJs = document.createElement('script');
jQueryJs.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.body.appendChild(jQueryJs);