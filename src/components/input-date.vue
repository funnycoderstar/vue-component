<template>
    <div>
        <input
        ref="input"
        id="input"
        @input.prevent="handleInput"
        />
    </div>
</template>
<script>
export default {
    props: {
        mode: {
            type: String,
            default: 'mm/dd/yyyy',
        },
    },
    data () {
        return {
            value: '',
        };
    },
    created () {
        this.position = 0;
        this.preValue = this.mode;
        this.InitialValue = this.mode;
        this.value = this.mode;
    },
    mounted () {
        this.$refs.input.value = this.value;
    },
    watch: {
        value (newVal) {
            this.$refs.input.value = newVal.slice(0, 10);
        },
    },
    methods: {
        handleInput (e) {
            const NumberRegex = /^[0-9]$/;
            const InputPlace = /^[mdy]$/;
            if (NumberRegex.test(e.data)) {
                // 输入满了
                if (!/y|m|d/.test(this.preValue)) {
                    this.value = this.preValue;
                    this.$refs.input.value = this.value.slice(0, 10);
                    return;
                }
                // 保存新输入
                this.value = this.preValue.slice(0, this.position) + e.data + this.preValue.slice(this.position + 1, this.preValue.length);
                // 跳到下一个输入位置
                do {
                    this.position++;
                } while (this.position < this.preValue.length && !InputPlace.test(this.InitialValue[this.position]));
            } else {
                // 非数字
                switch (e.inputType) {
                    // 删除键
                case 'deleteContentBackward': {
                    if (this.preValue === this.InitialValue) {
                        this.value = this.preValue;
                        this.$refs.input.value = this.value.slice(0, 10);
                        return;
                    }
                        // 回到上一个输入位置
                    this.position--;
                    while (this.position > 0 && !InputPlace.test(this.InitialValue[this.position])) {
                        this.position--;
                    }
                        // 还原输入位置为ymd
                    this.value = this.preValue.slice(0, this.position) + this.InitialValue[this.position] + this.preValue.slice(this.position + 1, this.preValue.length);
                    break;
                }
                default: {
                    this.value = this.preValue;
                    break;
                }
                }
            }
            this.preValue = this.value;
            this.setPosition(this.position);
        },
        setCursorPosition (input, pos) {
            if (input.setSelectionRange) {
                input.focus();
                input.setSelectionRange(pos, pos);
            } else if (input.createTextRange) {
                const range = input.createTextRange();
                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        },
        setPosition (pos) {
            this.$nextTick(() => {
                const input = document.querySelector('#input');
                this.setCursorPosition(input, pos);
            });
        },

    },

};
</script>
