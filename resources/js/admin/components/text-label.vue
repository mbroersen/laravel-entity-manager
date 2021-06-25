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

    $button-padding: 8px;

    .label {
        font-size: 12px;
        text-transform: uppercase;
        padding: 8px;
    }

</style>
