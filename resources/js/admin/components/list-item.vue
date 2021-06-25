<template>
    <dl>
        <dt class="list-item-title">
            <icon :type="icon" />
            <text-label :label="label" />
            <icon v-if="expanded" type="expand_less" v-on:click.native="toggle"/>
            <icon v-else type="expand_more" v-on:click.native="toggle"/>
        </dt>
        <dd v-if="expanded" class="expandable">
            <slot></slot>
        </dd>
    </dl>


</template>

<script>
    import Icon from "./icon";
    import TextLabel from "./text-label";
    export default {
        components: {TextLabel, Icon},
        props: {
            label: {

            },

            icon: {

            }
        },

        data() {
            return {
                expanded: false,
            }
        },

        methods: {
            toggle() {
                this.expanded = !this.expanded;
            }
        }
    }
</script>

<style lang="scss">

    $list-title-color-bg: rgba(159, 211, 86, .9);
    $list-title-color-text: rgba(52, 46, 55, 1);

    $navigation-color-hover: rgba(159, 211, 86, .9);
    $navigation-border: 2px solid rgba(250, 130, 76, .9);

    dl {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-block-start: 0;
        margin-block-end: 0;
    }

    dt.list-item-title {
        background: $list-title-color-bg;
        color: $list-title-color-text;
        display: flex;
        align-content: stretch;
        flex-direction: row;
        text-align: left;
        width: 100%;

        padding: 8px;

        margin-block-start: 0;
        margin-block-end: 0;

        &.list-item-title > span:nth-child(2) {
            flex-grow: 4; /* default 0 */
        }
    }

    dd {
        background: rgba(250, 255, 253,0.2);
        flex-basis: 98%;

        flex-grow: 1;
        margin: 0;
    }

    .expandable {
        > dl {
            > dt:nth-child(2) {
                padding: 8px 0 8px 8px ;
            }

            dd:not(.expandable) {
                padding: 8px 0;
            }
        }


    }


</style>
