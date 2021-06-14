<template>
    <transition name="dialog">
        <div class="dialog" v-on:click.self="closeDialog()" v-if="show">
            <div class="container">
                <div class="title">
                    <span>{{title}}</span>
                    <span v-on:click="closeDialog()" class="close material-icons">
                        close
                    </span>
                </div>
                <div class="content">
                    <slot name="default"></slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        props: {
            title: {
                default() {
                    return "Dialog"
                }
            }
        },

        data() {
            return {
                show: false,
            };
        },

        methods: {
            closeDialog() {
                const matched = this.$route.matched;
                this.$router.push({name: matched.shift()?.name});
            }
        },

        mounted() {
            this.$nextTick(() => {
                this.show = true;
            })
        }
    }
</script>

<style lang="scss">
    $dialog-overlay-background: rgba(133, 133, 133, 0.7);
    $dialog-container-title-color: rgba(33,133,200, 0.9);
    $dialog-container-border: 1px solid rgba(33, 33, 33, 0.1);
    $dialog-container-shadow: 0 2px 4px 0 rgba(0,0,0,0.2), 0 2px 10px 0 rgba(0,0,0,0.19);
    $dialog-container-background: rgba(250,250,250, .9);
    $dialog-container-title-color-hover: rgba(255,255,255, 0.5);

    $dialog-container-width: calc(100vw - 40px);
    $dialog-container-max-width: 800px;

    $dialog-title-height: 35px;
    $dialog-title-font-size: 14px;
    $dialog-title-line-height: $dialog-title-height - 10px;

    .dialog {
        &.dialog-enter-active {
            transition: all .3s ease-in;
        }

        &.dialog-leave-active {
            transition: all .3s ease-out;
        }

        &.dialog-enter-to {
            opacity: 1;
        }

        &.dialog-enter, &.dialog-leave-to {
            opacity: 0;
        }

        width: 100vw;
        height: 100vh;
        overflow: auto;
        position: fixed;
        top: 0;
        left: 0;
        background: $dialog-overlay-background;
        display: flex;
        align-items: safe center;
        justify-content: safe center;

        .container {
            margin: auto;
            height: fit-content;
            max-width: $dialog-container-max-width;
            width: $dialog-container-width;
            border: $dialog-container-border;
            background: $dialog-container-background;
            box-shadow: $dialog-container-shadow;
            border-radius: 4px;

            .title {
                width: 100%;
                height: $dialog-title-height;
                line-height: $dialog-title-line-height;
                font-size: $dialog-title-font-size;
                padding: 5px 10px;
                color: rgba(255,255,255, .9);
                background: $dialog-container-title-color;
                border-radius: 4px 4px 0 0;
                text-transform: uppercase;
                font-weight: bold;
                .close {
                    font-weight: bold;
                    float: right;

                    &:hover {
                        cursor: pointer;
                        color: $dialog-container-title-color-hover;
                    }
                }
            }

            .content {
                margin: 20px;
            }
        }
    }
</style>
