const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.options({
    hmrOptions: {
        host: '127.0.0.1',
        port: 8080
    }
})

mix.js('resources/js/public/public.js', 'public/js')
    .js('resources/js/admin/admin.js', 'public/js')
    .js('resources/js/user/user.js', 'public/js')
    .vue({version: 2});
