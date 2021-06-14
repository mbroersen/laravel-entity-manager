<template>
    <span class="icon material-icons" v-bind:class>
        {{type}}
    </span>
</template>

<script>
    export default {
        props: {
            type: {
                default() {
                    return "Add"
                }
            }
        }
    }
</script>

<style lang="scss">
    $button-height: 36px;
    $button-padding: 8px;

    .icon {
        font-size: 12px;
        vertical-align: middle;
        line-height: $button-height - ($button-padding * 2);
    }
</style>
