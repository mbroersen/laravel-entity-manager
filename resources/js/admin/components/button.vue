<template>
    <div :class="['button', {'flat': flat}, type]">
        {{label}}
    </div>
</template>

<script>
    export default {
        props: {
            label: {
                default() {
                    return "Button"
                }
            },

            type: {
                default() {
                    return "default";
                }
            },

            flat: {
                default() {
                    return true;
                }
            }
        }
    }
</script>

<style lang="scss">
    $button-border: 1px solid rgba(33, 33, 33, 0.1);
    $button-shadow: 0 1px 2px 0 rgba(0,0,0,0.2), 0 1px 5px 0 rgba(0,0,0,0.19);
    $button-shadow-hover: 0 2px 4px 0 rgba(0,0,0,0.2), 0 2px 10px 0 rgba(0,0,0,0.19);
    $button-primary-color: rgba(33,133,200, 0.9);
    $button-default-color: none;
    $button-height: 36px;
    $button-padding: 8px;
    $button-line-height: $button-height - ($button-padding *2);

    .button {
        border-radius: 4px;
        transition: all .5s;

        text-transform: uppercase;
        padding: $button-padding;
        line-height: $button-line-height;
        text-align: center;
        min-width: 64px;
        width: fit-content;
        font-size: 14px;
        font-weight: bold;
        height: $button-height;

        &:hover {
            cursor: pointer;
        }

        &:not(.flat) {
            border: $button-border;
            box-shadow:  $button-shadow-hover;
            &:hover {
                cursor: pointer;
                box-shadow: $button-shadow;
            }
        }

        &.primary {
            color: rgba(240,240,240, 1);
            background: $button-primary-color;

            &:hover {

            }
        }

        &.default {
            color: rgba(33, 33, 33, 1);
            background: $button-default-color;

            &:hover {
                background: rgba(220,220,220, .6);
            }

            &:active {
                background: rgba(220,220,220, .9);
            }
        }
    }

</style>
