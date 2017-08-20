<template>
    <div>
        <ul class="menu">
            <li @click="handleCalendar">1,日历组件demo</li>
            <li @click="handleTime">2,时间选择组件demo</li>
            <li @click="handleSelect">3,selectDemo</li>
            <li @click="handleSelect">4,tabDemo</li>
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
@import '../lib/util.less';
.menu {
    .xtr(line-height, 40);
    .xtr(padding, 20);
}
</style>
