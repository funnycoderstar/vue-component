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
@font-face {
    font-family: 'iconfont';  /* project id 89739 */
    src: url('//at.alicdn.com/t/font_89739_gog80nu71nd5z5mi.eot');
    src: url('//at.alicdn.com/t/font_89739_gog80nu71nd5z5mi.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_89739_gog80nu71nd5z5mi.woff') format('woff'),
    url('//at.alicdn.com/t/font_89739_gog80nu71nd5z5mi.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_89739_gog80nu71nd5z5mi.svg#iconfont') format('svg');
}
.icon {
    font-family: 'iconfont';
    font-style: normal;
    color: #969696;
}
.container {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 4000;
}
* {
    margin:0;
    padding:0;
    list-style: none;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
    .xtr(max-width, 320);
    .xtr(font-size, 15);
    //  background-color: #efeff4;
}

</style>
