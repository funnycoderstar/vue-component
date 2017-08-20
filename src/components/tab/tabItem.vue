<template>
    <div class="item-container" @click="handleClick">
        <!-- <i class="icon icon1" :class="{ selected }" v-html="'&#xe683;'" v-if="name==='进行中'"></i>
        <i class="icon icon1" :class="{ selected }" v-html="'&#xe649;'" v-if="name==='班级'"></i>
        <i class="icon icon1" :class="{ selected }" v-html="'&#xe635;'" v-if="name==='竞赛'"></i>
        <HeadImg class="headImg":class="{ selected }" v-if="name==='我'"></HeadImg> -->
        <p class="item-name" :class="{ selected }">
            {{ name }}
        </p>
    </div>
</template>

<script>
    import HeadImg from 'components/headImg';
    export default {
        name: 'tabBarItem',
        components: {
            HeadImg,
        },
        props: {
            name: {
                type: String,
                default: 'name',
            },
            selected: {
                type: Boolean,
                default: false,
            },
            route: {
                type: String,
                default: '/',
            },
        },
        methods: {
            handleClick() {
                this.$router.push(this.route);
            },
        },
    };
</script>

<style lang="less">
    @import '../lib/util.less';
    .icon1 {
        display: inline-block;
        .xtr(font-size, 24);
        .xtr(line-height, 27);
        color: @second-font-color;
        position: relative;
        &.selected {
           color: @color-red;
        }
    }
   .item-container {
        float: left;
        width: 25%;
        text-align: center;
        .headImg{
            .xtr(width, 27);
            border-radius: 50%;
            vertical-align: middle;
        }
        .collegeImg {
            .xtr(width, 27);
        }
    }
    .item-name {
        .xtr(font-size, 9);
        position: relative;
        color: #666;
        &.selected {
           color: #fc4548;
        }
    }
</style>