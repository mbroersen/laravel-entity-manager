<template>
    <div class="field-row">
        <div>{{pk}}</div>
        <div>{{name}}</div>
        <div>{{type}}</div>
    </div>
</template>

<script>
    export default {
        props: {
            type: {
                default() {
                    return '';
                }
            },
            name: {
                default() {
                    return '';
                }
            },
            pk: {
                default() {
                    return '';
                }
            },
        }
    }
</script>


<style lang="scss">
    .field-row {
        display: flex;
        flex-direction: row;
        width: 320px;
        > div {
            padding: 5px;
            height: 30px;
            border-bottom: 1px solid rgba(233,233,233, 0.4);
            flex: 1 0 30%;

            //&:nth-child(1) {
            //    width: 40px;
            //}
            //
            //&:nth-child(2) {
            //    width: 140px;
            //}
        }
    }


</style>
