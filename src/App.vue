<template>
    <div id="app">
        <router-view></router-view>
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
@import './lib/util.less';
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
    .xtr(font-size, 15);
}
</style>
