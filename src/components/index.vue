<template>
    <div>
        <ul>
            <li @click="handleCalendar">日历组件demo</li>
            <li @click="handleTime">时间选择组件demo</li>
            <li @click="handleSelect">selectDemo</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'app',
    methods: {
        handleCalendar() {
            this.$router.push('/calendar');
        },
        handleTime() {
            this.$router.push('/timePicker');
        },
        handleSelect() {
            this.$router.push('/select');
        },
    },
};
</script>

<style lang="less">
</style>
