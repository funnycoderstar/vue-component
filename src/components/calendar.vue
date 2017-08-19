<template>
    <div class="calendar">
        <div class="title">
           日历
        </div>
        <div class="calendarMain">
            <div class="calendarDate">
                <i v-html="'&#xe608;'" class="beforeImg icon" @click="beforeMonth"></i>
                <span class="beforeDate">{{ startDate }}</span>
                <span class="currentDate">{{ middleDate }}</span>
                <i v-html="'&#xe607;'" class="nextImg icon" @click="nextMonth"></i>
                <span class="nextDate">{{ finishDate }}</span>
            </div>
            <div class="calendarDateItem">
                <ul class="fix-float">
                    <li class="dateNum weekNum" v-for="(item, index) in weekList" :key="index">{{item}}</li>
                    <li class="dateNum" v-for="(item,index) in dayList" :key="index" :class="{beforeDay: index< week}">
                        {{item.index}}
                        <br>
                        <p :class="{noData: item.distance == null}">{{ parseInt(item.distance) }}k</p>
                    </li>
                    <div class="line"></div>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'calendar',
    data() {
        return {
            dayList: [],
            weekList: [ '日', '一', '二', '三', '四', '五', '六', ],
            startDate: '2017-01',
            middleDate: '2017-02',
            finishDate: '2017-03',
            start: '',
            finish: '',
            week: 1,
        };
    },
    props: {
        start_date: {
            type: String,
            default: '',
        },
        finish_date: {
            type: String,
            default: '',
        },
    },
    created() {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        let month1 = '';
        if (month >= 0 && month < 10) {
            month1 = '0' + month;
        }
        this.middleDate = year + '-' + month1;
        this.startDate = this.getPreMonth(this.middleDate);
        this.finishDate = this.getNextMonth(this.middleDate);
        this.getMonthDayNumber(this.middleDate);
        this.getdistance();
    },
    methods: {
        nextMonth() {
            this.startDate = this.getNextMonth(this.startDate);
            this.middleDate = this.getNextMonth(this.middleDate);
            this.finishDate = this.getNextMonth(this.finishDate);
            this.getMonthDayNumber(this.middleDate);
            this.getdistance();
        },
        beforeMonth() {
            this.startDate = this.getPreMonth(this.startDate);
            this.middleDate = this.getPreMonth(this.middleDate);
            this.finishDate = this.getPreMonth(this.finishDate);
            this.getMonthDayNumber(this.middleDate);
            this.getdistance();
        },
        getPreMonth(date) {
            const arr = date.split('-');
            const year = arr[0]; // 获取当前日期的年份
            const month = arr[1]; // 获取当前日期的月份
            let year2 = year;
            let month2 = parseInt(month) - 1;
            if (month2 === 0) { // 如果是1月份，则取上一年的12月份
                year2 = parseInt(year2) - 1;
                month2 = 12;
            }
            if (month2 < 10) {
                month2 = '0' + month2; // 月份填补成2位。
            }
            date = year2 + '-' + month2;
            return date;
        },
        getNextMonth(date) {
            const arr = date.split('-');
            const year = arr[0]; // 获取当前日期的年份
            const month = arr[1]; // 获取当前日期的月份
            let year2 = year;
            let month2 = parseInt(month) + 1;
            if (month2 === 13) {
                year2 = parseInt(year2) + 1;
                month2 = 1;
            }
            if (month2 < 10) {
                month2 = '0' + month2;
            }
            date = year2 + '-' + month2;
            return date;
        },
        getDaysOfCurrentMonth(date) {
            const year = date.getFullYear();
            const month = date.getMonth();
            let days = 0;
            if (month === 2) {
                days = year % 4 === 0 ? 29 : 28;
            } else if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 0) {
                // 月份为：1,3,5,7,8,10,12 时，为大月.则天数为31；
                days = 31;
            } else {
                // 其他月份，天数为：30.
                days = 30;
            }
            return days;
        },
        getMonthDayNumber(date) {
            const arr = date.split('-');
            const year = arr[0]; // 获取当前日期的年份
            const month = arr[1]; // 获取当前日期的月份
            const now = new Date(year, month);
            now.setDate(1);
            const currentMonthDays = this.getDaysOfCurrentMonth(now);
            const prev = new Date(now);
            prev.setMonth(now.getMonth() - 1);
            const prevMonthDays = this.getDaysOfCurrentMonth(prev);
            this.week = prev.getDay();
            const dayList = [];
            for (let i = 0; i < prev.getDay(); i++) {
                dayList.unshift({ index: prevMonthDays - i, distance: null, });
            }
            for (let j = 0; j < currentMonthDays; j++) {
                dayList.push({ index: j + 1, distance: null, });
            }
            this.dayList = dayList;
        },
    },
};

</script>

<style lang="less">
@import '../lib/util.less';
.calendar {
    .comDis(margin, 10, 0);
    // .xtr(padding, 15);
    .xtr(padding-left, 20);
    background-color: #fff;
    .xtr(font-size, 12);
    .title {
        text-align: left;
        border-bottom: 1px solid #e5e5e5;
        .xtr(padding-bottom, 10);
    }
    .calendarMain {
        .xtr(margin-top, 15);
        .calendarDate {
            .icon {
                font-family: 'iconfont';
                font-style: normal;
                .xtr(font-size, 13);
                .xtr(margin-top, 1);
            }
            .beforeImg {
                float: left;
            }
            .nextImg {
                float: right;
            }
            span {
                .xtr(padding-right, 50);
            }
            .currentDate {
                color: #3fadf9;
            }
            .nextDate {
                float: right;
                .xtr(padding-right, 0);
            }
        }
        .calendarDateItem {
            ul {
                color: #333;
                .comDis(padding, 10, 0);
                li {
                    float: left;
                    .xtr(width, 40);
                    // .comDis(padding, 10, 0);
                    // .xtr(padding-bottom, 30);
                    .xtr(padding-top, 16);
                    text-align: center;
                    overflow: hidden;
                    position: relative;
                    p {
                        .xtr(width, 18);
                        .xtr(height, 18);
                        .xtr(line-height, 18);
                        .xtr(font-size, 10);
                        border-radius: 50%;
                        background-color: red;
                        margin: 0 auto;
                        .xtr(margin-top, 12);
                        text-align: center;
                        color: #fff;
                        position: absolute;
                        .xtr(left, 10);
                        .xtr(top, 30);
                    }
                    .noData {
                        background-color: transparent;
                    }
                }
                .weekNum {
                    .xtr(padding, 0);
                }
                .beforeDay {
                    color: #999;
                }
            }
        }
    }
}
</style>