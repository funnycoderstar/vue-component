<template>
<div>
    <InputSelect
    :selectData="selectData"
    :title="2"
    >
    </InputSelect>
</div>
</template>
<script>
import InputSelect from './input-select.vue';
export default {
    data() {
        return {
            // selectData: [
            //     {
            //         id: '1',
            //         value: 'a',
            //     },
            //     {
            //         id: '2',
            //         value: 'b',
            //     },
            // ],
            selectData: [
                'a',
                'b',
            ],
        };
    },
    components: {
        InputSelect,
    },
};
</script>