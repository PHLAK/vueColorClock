import { createApp, computed, ref, watch, onMounted } from 'vue';
import { DateTime } from 'luxon';

const app = createApp({
    setup() {
        const mode = ref(localStorage.getItem('mode') || 'time');
        const format = ref(localStorage.getItem('format') || 'hh:mm:ss');

        const now = ref(DateTime.local());

        const time = computed(() => now.value.toFormat(format.value));

        const rgb = computed(() => ({
            r: Math.round(now.value.hour * (255 / 23)),
            g: Math.round(now.value.minute * (255 / 59)),
            b: Math.round(now.value.second * (255 / 59))
        }));

        const hex = computed(() => Object.values(rgb.value).map(
            value => value.toString(16).toUpperCase().padStart(2, '0')
        ).join(':'));

        onMounted(() => {
            setInterval(() => now.value = DateTime.local(), 1000);
        });

        watch(mode, mode => localStorage.setItem('mode', mode));
        watch(format, format => localStorage.setItem('format', format));

        return { mode, format, now, time, rgb, hex };
    }
});

app.mount('#app');
