<template>
    <div class="tabs">
        <div class="buttons" ref="buttons">
            <Button :class="{isActive: (tab==activeTab)}" :key="label" v-for="(tab, label) in tabs" :label="label" v-on:click.native="(e) => {selectActiveTab(tab, label, e);}"></Button>
        </div>
        <div :style="{left: indicator.left}" :class="indicatorClassList">{{activeLabel}}</div>
        <div :class="contentClassList">
            <slot name="default" ></slot>
        </div>
    </div>
</template>

<script>
    import Button from "./button";
    export default {
        components: {Button},
        props: {
            tabs: {
                default() {
                    return {
                        'Tab 1': 'tab1Component',
                    }
                }
            },

            activeTab: {
                default()  {
                    return "";
                }
            }
        },

        data() {
            return {
                activeLabel: "",
                activeElement: "",
                indicator: {
                    left: 0,
                    active: false,
                    label: ""
                },
            }
        },

        computed: {
            myActiveTab: {
                get() {
                    return this.activeTab;
                },

                set(activeTab) {
                    this.$emit('update:activeTab', activeTab);
                }
            },

            contentClassList: {
                get() {
                    return ['tab-content', {'active': this.indicator.active}];
                }
            },

            indicatorClassList: {
                get() {
                    return [
                        'active-tab-indicator',
                        {
                            'active': this.indicator.active
                        }
                    ]
                }
            }
        },

        methods: {
            selectActiveTab(tab, label, e) {
                this.activeElement = e.target;
                this.activeLabel = label;
                this.myActiveTab = tab;
                this.setIndicator();
            },

            setIndicator() {
                this.indicator.active = false;

                this.$nextTick(() => {
                    setTimeout(() => {
                        this.indicator.active = true;
                        this.indicator.label = this.activeLabel;
                        this.indicator.left = `${this.activeElement.offsetLeft}px`;
                    }, 100);
                })
            }
        },

        mounted() {
            this.$refs.buttons.firstElementChild.click();
        }
    }
</script>


<style lang="scss">
    $tab-min-height: 200px;
    $tab-content-max-height: calc(100vh - 120px);
    $tab-content-min-height: 80px;


    .tabs {
        min-height: $tab-min-height;
        background: rgba(255,255,255, .9);
        border-radius: 4px;

        .buttons {
            display: flex;
            position: relative;
            height: 50px;
            padding: 5px;
        }

        .tab-content {
            transition: all .5s;
            transform: scaleY(0);
            height: 0;
            padding: 6px 16px;
            opacity: 0;

            &.active {
                opacity: 1;
                transform: scaleY(1);
                height: fit-content;
                max-height: $tab-content-max-height;
                overflow-y: auto;
                min-height: 80px;
            }
        }

        .active-tab-indicator {
            transform: scaleX(0);
            width: 0;
            bottom: 10px;
            &.active {
                transform: scaleX(1);
                width: fit-content;
            }

            transition: all 1s;
            height: 1px;

            overflow: hidden;
            font-size: 14px;
            text-transform: uppercase;
            font-weight: bold;
            padding: 0 8px;
            background: rgba(22,22,190, 0.7);
            position: relative;
        }
    }
</style>
