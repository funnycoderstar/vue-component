import Vue from 'vue';
import Router from 'vue-router';
import Calendar from '@/components/calendar';
import Select from '@/components/select';
import TimePicker from '@/components/timePicker';
import Index from '@/components/index';
import InputDate from '@/components/input-date';
import InputSelect from '@/components/input-select/index';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index,
        },
        {
            path: '/calendar',
            name: 'Calendar',
            component: Calendar,
        },
        {
            path: '/select',
            name: 'Select',
            component: Select,
        },
        {
            path: '/timePicker',
            name: 'TimePicker',
            component: TimePicker,
        },
        {
            path: '/inputDate',
            name: 'InputDate',
            component: InputDate,
        },
        {
            path: '/inputSelect',
            name: 'InputSelect',
            component: InputSelect,
        },
    ],
});
