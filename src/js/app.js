window.Vue = require('vue');

var app = new Vue({
    el: '#app',
    data: {
        mode: 'clock',
        now: new Date()
    },
    computed: {
        hex() {
            return Object.values(this.rgb).map(
                value => value.toString(16).toUpperCase().padStart(2, '0')
            ).join(':');
        },
        rgb() {
            return {
                r: Math.round(this.now.getHours() * (255 / 23)),
                g: Math.round(this.now.getMinutes() * (255 / 59)),
                b: Math.round(this.now.getSeconds() * (255 / 59))
            };
        },
        styles() {
            return {
                backgroundColor: `rgb(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b})`
            }
        },
        time() {
            time = [this.now.getHours(), this.now.getMinutes(), this.now.getSeconds()];

            return time.map(value => value.toString().padStart(2, '0')).join(':');
        }
    },
    created() {
        interval = setInterval(() => {
            this.now = new Date();
        }, 1000);
    }
});
