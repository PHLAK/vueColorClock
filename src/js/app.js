window.Vue = require('vue');
let { DateTime } = require('luxon');

var app = new Vue({
    el: '#app',
    data: {
        mode: 'clock',
        now: DateTime.local(),
        timeFormat: 'hh:mm:ss'
    },
    computed: {
        hex() {
            return Object.values(this.rgb).map(
                value => value.toString(16).toUpperCase().padStart(2, '0')
            ).join(':');
        },
        rgb() {
            return {
                r: Math.round(this.now.hour * (255 / 23)),
                g: Math.round(this.now.minute * (255 / 59)),
                b: Math.round(this.now.second * (255 / 59))
            };
        },
        styles() {
            return {
                backgroundColor: `rgb(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b})`
            }
        },
        time() {
            return this.now.toFormat(this.timeFormat);
        }
    },
    created() {
        interval = setInterval(() => {
            this.now = DateTime.local();
        }, 1000);
    },
    methods: {
        setMode(mode) {
            this.mode = mode;
        }
    }
});
