<template>
    <div class="select-row">
        <div class="label" v-if="!hideLabel">{{label}}</div>
        <div class="field">
            <select v-model="my_value" >
                <option :key="option.value" :label="option.label" :value="option.value" v-for="option in selectOptions"></option>
            </select>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            value: {

            },

            selectOptions: {
                default() {
                    return [
                        {label: 'test', value: 10},
                        {label: 'test 2', value: 20},
                    ];
                }
            },

            label: {
                default() {
                    return 'text-field';
                }
            },

            hideLabel:{
                default() {
                    return false;
                }
            }
        },

        computed: {
            my_value: {
                get() {
                    return this.value;
                },

                set(value) {
                    this.$emit('update:value', value);
                }
            }
        }
    }

</script>

<style lang="scss">

    $text-field-shadow:  0 1px 2px 0 rgba(0,0,0,0.2), 0 1px 2px 0 rgba(0,0,0,0.19);
    $text-field-border:  1px solid rgba(33, 33, 33, 0.1);

    .select-row {
        .label {
            font-size: 12px;
            padding: 0 10px;
            border-right: $text-field-border;
            text-transform: uppercase;
        }
        height: 30px;
        line-height: 30px;
        display: flex;
        flex-direction: row;
        width: 100%;
        border: $text-field-border;
        box-shadow: $text-field-shadow;
        border-radius: 4px;
        margin-bottom: 10px;

        .field {
            width: 100%;
            background: rgba(255, 255,255, 1);
            padding: 0 10px;
            select {
                outline: none;
                border: none;
                background: none;
                width: 100%;
            }
        }


    }

</style>
