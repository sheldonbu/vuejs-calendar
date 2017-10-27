<template>
    <div :class="classObject">{{ day.format('D') }}</div>
</template>
<script>
    export default {
        props: [ 'day' ],
        computed: {
            classObject() {
                let isToday = this.day.isSame(this.today, 'day');
                return {
                    day: true,
                    today: isToday,
                    past: this.day.isSameOrBefore(this.today, 'day') && !isToday,
                }
            },
            today() {
                return this.$moment('2017-2-17', 'YYYY-M-D');
            }
        }
    }
</script>