<template>
    <div class="data-table">
        <h3>{{title}}</h3>
        <div class="table-scroll">
            <header class="table-header" v-if="$slots['header']">
                <slot name="header"></slot>
            </header>
            <slot name="rows"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                default() {
                    return "Data Table";
                }
            }
        }
    }
</script>

<style lang="scss">

    .data-table {
        .table-scroll {
            overflow-x: auto;
            overflow-y: auto;
            .table-header {
                padding: 5px 10px;
                height: 35px;
                font-size: 14px;
                width: 1800px;
                border-bottom: 2px solid rgba(233,233,233, .9);
                background: rgba(200, 200, 200, .7);
            }
        }
    }


</style>
