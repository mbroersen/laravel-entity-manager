<template>
    <dl>
        <dt>
            <icon :type="icon" />
            <text-label :label="label" />
            <icon v-if="expanded" type="expand_less" v-on:click.native="toggle"/>
            <icon v-else type="expand_more" v-on:click.native="toggle"/>
        </dt>
        <dd v-if="expanded">
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
    dd {
        margin: 10px;
    }
</style>
