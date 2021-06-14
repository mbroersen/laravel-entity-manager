<template>
    <span class="label" v-if="label">{{label}}</span>
</template>

<script>
    export default {

        props: {
            label: {
                default() {
                    return null;
                }
            }
        }

    }
</script>

<style lang="scss">

    $button-height: 36px;
    $button-padding: 8px;

    .label {
        font-size: 12px;
        text-transform: uppercase;
        vertical-align: middle;
        line-height: $button-height - ($button-padding * 2);
    }

</style>
