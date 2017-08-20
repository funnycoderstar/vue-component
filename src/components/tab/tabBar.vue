<template>
    <div class="tab-bar">
        <ul class="tab-bar-container">
            <TabBarItem
                v-for="(item, index) of items"
                :key="item.id"
                :selected="isSelected(item.route)"
                :name="item.name"
                :route="item.route"
            ></TabBarItem>
        </ul>
    </div>
</template>

<script>
    import TabBarItem from './tabBarItem';

    export default {
        data() {
            return {
                items: [{
                    name: '进行中',
                    route: '/index/processing',
                }, {
                    name: '班级',
                    route: '/index/team',
                }, {
                    name: '竞赛',
                    route: '/signUpSelf',
                }, {
                    name: '我',
                    route: '/index/personalCenter',
                }, ],
            };
        },
        name: 'tabBar',
        components: {
            TabBarItem,
        },
        methods: {
            isSelected(route) {
                return this.$route.path.indexOf(route) !== -1 || (this.$route.path === '/' && route === '/processing');
            },
        },
    };
</script>
<style lang="less">
@import '../lib/util.less';
    .tab-bar {
        width: 100%;
        .comDis(padding, 2, 0);
        background-color: #fff;
        position: fixed;
        z-index: 20;
        bottom: 0;
        border-top: 1px solid #e5e5e5;
    }
    
    .tab-bar-container {
        margin: 0;
    }
</style>