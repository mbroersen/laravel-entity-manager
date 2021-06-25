<template>
    <div class="text-row">
        <div class="label" v-if="!hideLabel">{{label}}</div>
        <div class="field">
            <input v-model="my_value" >
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            value: {

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

$text-field-shadow: 0 1px 2px 0 rgba(0,0,0,0.2), 0 1px 2px 0 rgba(0,0,0,0.19);
$text-field-border:  1px solid rgba(33, 33, 33, 0.1);

    .text-row {
        .label {
            font-size: 12px;
            text-transform: uppercase;
            padding: 0 10px;
            border-right: $text-field-border;
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
            input {
                outline: none;
                border: none;
                background: none;
                width: 100%;
            }
        }


    }

</style>
