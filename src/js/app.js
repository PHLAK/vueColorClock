import Vue from 'vue';
let { DateTime } = require('luxon');

new Vue({
    el: '#app',
    data: {
        mode: 'clock',
        now: DateTime.local(),
        timeFormat: 'hh:mm:ss'
    },
    computed: {
        appStyles() {
            return {
                backgroundColor: `rgb(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b})`
            };
        },
        clockButtonStyles() {
            return this.mode != 'clock' ? { backgroundColor: 'rgba(255, 255, 255, .5)' } : {};
        },
        hexButtonStyles() {
            return this.mode !='hex' ? { backgroundColor: 'rgba(255, 255, 255, .5)' } : {};
        },
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
        time() {
            return this.now.toFormat(this.timeFormat);
        }
    },
    created() {
        setInterval(() => this.now = DateTime.local(), 1000);
        this.mode = localStorage.getItem('mode') || 'clock';
        this.timeFormat = localStorage.getItem('timeFormat') || 'hh:mm:ss';
    },
    watch: {
        mode: function (mode) {
            localStorage.setItem('mode', mode);
        },

        timeFormat: function (format) {
            localStorage.setItem('timeFormat', format);
        }
    }
});
