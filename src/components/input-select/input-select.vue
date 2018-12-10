<template>
    <div class="wang-input-select" :style="{borderColor: isError ? '#dd2727' :'#ccc'}">
        <div class="wang-input-select-selection">
            <input placeholder="请选择/输入" v-model="value" width="200px;" @blur="handleChange" @focus="handleShowOption"/>
            <span>
                <span v-if="!isShowOption" @click="handleShowOption">
                    <Icon type="arrow-down-b" :color="isError ? '#dd2727' : '#80848f'"></Icon>
                </span>
                <span v-else @click="handleShowOption">
                    <Icon type="arrow-up-b" :color="isError ? '#dd2727' : '#80848f'"></Icon>
                </span>
            </span>
        </div>
        <!-- 下拉列表 -->
        <div class="wang-input-select-dropdown" v-if="isShowOption">
            <ul class="wang-input-select-dropdown-list">
                <li class="wang-input-select-item"
                v-for="item in selectData"
                :key="item.id"
                :value="item.id"
                @click="selectItem(item)"
                :class="{active: item === value}">
                    <span>{{ item}}</span>
                </li>
            </ul>
        </div>
        <span class="wang-input-select-error-tip" v-if="isError">请选择/输入一个字符</span>
    </div>
</template>

<script>
export default {
    props: {
        selectData: {

        },
        title: {

        },
        isError: {},
    },
    data () {
        return {
            value: '',
            isShowOption: false,
        };
    },
    methods: {
        handleShowOption () {
            this.isShowOption = !this.isShowOption;
        },
        selectItem (item) {
            this.value = item;
            this.handleShowOption();
            this.$emit('on-change', this.value);
        },
        closeOption () {
            this.isShowOption = false;
        },
        handleChange () {
            setTimeout(() => {
                this.isShowOption = false;
                this.$emit('on-change', this.value);
            }, 300);
        },
    },
    watch: {
        title() {
            this.value = this.title;
        },
    },
};
</script>

<style lang="less">
@input-select-prefix: ~'wang-input-select';

.@{input-select-prefix} {
    position: relative;
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    vertical-align: middle;
    color: #495060;
    font-size: 14px;
    border: 1px solid #ccc;
    // border-radius: 4px;
    height: 32px;
    line-height: 1.5;
    padding: 4px 7px;
    margin-right: 20px;
    font-size: 12px;
    &:hover{
        border-color: #999999;
        box-shadow: none;
    }
    &-selection {
        width: 100%;
        display: flex;
        justify-content: space-between;
        input {
            height: 30px;
            margin-top: -4px;
            border: 0;
            color: #333;
        }
        input:focus,
        input:hover {
            border: 0;
            outline: 0;
        }
    }
    &-dropdown {
        width: 100%;
        max-height: 200px;
        overflow: auto;
        margin: 5px 0;
        padding: 5px 0;
        background-color: #fff;
        box-sizing: border-box;
        border-radius: 4px;
        box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
        position: absolute;
        z-index: 900;
        margin-left: -7px;
        transform-origin: center top 0px;
        &-list {
            .active {
                background-color: #0070ff;
                span {
                    color: #fff;
                }
            }
        }
    }
    &-item {
        margin: 0;
        line-height: normal;
        padding: 7px 16px;
        clear: both;
        color: #495060;
        font-size: 12px !important;
        white-space: nowrap;
        list-style: none;
        cursor: pointer;
        transition: background 0.2s ease-in-out;
        display: flex;
        justify-content: space-between;
        &:hover {
            background: #f5f5f5;
        }
    }
    &-error-tip {
        position: absolute;
        top: 100%;
        left: 0;
        line-height: 1;
        padding-top: 6px;
        color: #dd2727;
    }
}
::placeholder {
    color: #ccc;
}
</style>