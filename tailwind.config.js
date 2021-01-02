const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: ['index.html', 'src/**/*.scss', 'src/**/*.js'],
    theme: {
        extend: {
            boxShadow: {
                solid: '1px 1px 0 rgba(0, 0, 0, 0.5)'
            },
            fontFamily: {
                mono: ['Fira Code', ...defaultTheme.fontFamily.mono],
            },
            fontSize: {
                '16vw': '16vw'
            }
        }
    },
    variants: {},
    plugins: []
};
