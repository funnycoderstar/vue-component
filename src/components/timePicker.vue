<template>
    <div class="autoRenew">
        <div class="remindItem autoRenewList" v-if="showRemind" @click="changeRemind()">
            <p>
            <p>{{yourTimeValue.HH}}:{{yourTimeValue.mm}}
                <i class="icon redColor downIcon">&#xe671;</i>
            </p>
        </div>
        <div class="container" v-if="isShowTime">
            <div class="opacityContent" @click="handleCancel"></div>
            <div class="timeContent">
                <div class="changeTime">{{changeTimeValue.HH}} : {{changeTimeValue.mm}}</div>
                <div class="pickerWrap">
                    <div class="left">
                        <div class="hour" 
                        v-for="(item, index) in slots[0].values" 
                        :key="index" @click="handleSelect(index)" 
                        :style="{color: selectIndexH === index ? 'red' : 'black'}"
                        >{{item}}</div>
                    </div>
                    <!-- <div class="tag">:</div> -->
                    <div class="right">
                            <div class="min"
                            v-for="(item, index) in slots[2].values" 
                            :key="index" @click="handleSelectM(index)" 
                            :style="{color: selectIndexM === index ? 'red' : 'black'}"
                        > {{item}}</div>
                    </div>
                </div>
                <!-- <mt-picker :slots="slots" @change="onValuesChange"></mt-picker> -->
                <div class="timeConfirm">
                    <p @click="handleCancel">取消</p>
                    <p @click="confimTime">确定</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showRemind: true,
            autorenew: true,
            isShowTime: false,
            yourTimeValue: {
                HH: '08',
                mm: '30',
            },
            changeTimeValue: {
                HH: '08',
                mm: '30',
            },
            selectIndexH: 0,
            selectIndexM: 0,
            slots: [
                {
                    flex: 1,
                    values: [],
                    defaultIndex: 0,
                    className: 'slot1',
                    textAlign: 'right',
                },
                {
                    divider: true,
                    content: ':',
                    className: 'slot2',
                }, {
                    flex: 1,
                    values: [ '00', '30', ],
                    defaultIndex: 0,
                    className: 'slot3',
                    textAlign: 'left',
                },
            ],
        };
    },
    created() {
        this.slots[0].values = this.createTime();
    },
    components: {
        // Toast,
    },
    methods: {
        createTime() {
            const arr = [];
            for (let i = 0; i < 24; i++) {
                if (i < 10) {
                    arr.push(`0${i}`);
                } else {
                    arr.push(`${i}`);
                }
            }
            return arr;
        },
        onValuesChange(picker, values) {
            this.changeTimeValue.HH = values[0];
            this.changeTimeValue.mm = values[1];
        },
        changeRemind() {
            this.isShowTime = true;
            this.slots[0].values.forEach((i, d) => {
                if (i === this.yourTimeValue.HH) {
                    this.selectIndexH = d;
                }
            });
            this.slots[2].values.forEach((i, d) => {
                if (i === this.yourTimeValue.mm) {
                    this.selectIndexM = d;
                }
            });
        },
        confimTime() {
            this.isShowTime = false;
            this.yourTimeValue.HH = this.changeTimeValue.HH;
            this.yourTimeValue.mm = this.changeTimeValue.mm;
            this.handleChange();
        },
        handleCancel() {
            this.isShowTime = false;
        },
        handleSelect(index) {
            this.selectIndexH = index;
            this.changeTimeValue.HH = this.slots[0].values[index];
        },
        handleSelectM(index) {
            this.selectIndexM = index;
            this.changeTimeValue.mm = this.slots[2].values[index];
        },
        timeTranse(time) {
            const newHH = time.slice(0, 2);
            const newMM = time.slice(3, 5);
            this.yourTimeValue = {
                HH: newHH,
                mm: newMM,
            };
        },
    },
};
</script>

<style lang="less">
@import '../lib/util.less';
.autoRenew {
    .autoRenewList {
        display: flex;
        justify-content: space-between;
        .comDis(padding, 8, 15);
        background-color: @whiteColor;
        p {
            .xtr(margin-top, 8);
            overflow: hidden;
            .icon {
                .xtr(font-size, 16);
                float: left;
            }
        }
    }

    .remindItem {
        border-top: 1px solid #e5e5e5;
        .downIcon {
            float: right !important;
        }
    }
    .timeContent {
        width: 100%;
        bottom: 0;
        .xtr(height, 160);
        position: absolute;
        background-color: @whiteColor;
        .timeConfirm {
            display: flex;
            border-top: 1px solid #e5e5e5;
            .xtr(height, 40);
            .xtr(line-height, 40);
            p {
                width: 50%;
                text-align: center;
            }
        }
        .picker-item{
            .xtrM(font-size, 13);
        }
        .changeTime {
            text-align: center;
            .xtr(height, 30);
            .xtr(line-height, 30); 
            border-bottom: 1px solid #e5e5e5;
        }
    }
    .opacityContent {
        height: 100%;
    }
    .pickerWrap {
        display: flex;
        .left {
            width:49%;
            .xtr(height, 90);
            overflow: scroll;
        }
        .hour,.min {
            .xtr(height, 30);
            .xtr(line-height, 30);
            text-align: center;
            border-bottom: 1px solid #e5e5e5;
        }
        .right {
            width:50%;
        }
        .tag {
            .xtr(height, 30);
            .xtr(line-height, 30);
        }
    }

}
</style>
