let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');

mix.js('src/js/app.js', 'dist').vue();

mix.sass('src/sass/app.scss', 'dist').options({
    processCssUrls: false,
    postCss: [tailwindcss('tailwind.config.js')]
});
