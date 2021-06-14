<template>
    <aside class="sidebar" v-if="show" :data-position="position">
        <slot name="default"></slot>
    </aside>
</template>

<script>
    export default {
        props: {
            position: {
                default: () => "left"
            }
        },

        data() {
            return {
                show: true,
            }
        }
    }
</script>

<style lang="scss">
    $sidebar-background-color: rgba(255, 255, 255, 1);
    $sidebar-border: rgba(166, 166, 166, 0.7) 1px solid;
    $sidebar-width: 300px;
    $sidebar-z-index: 100;
    $sidebar-left: 0;
    $sidebar-inner-spacing: 0 20px;
    $sidebar-top: 41px;

    aside.sidebar {
        position: fixed;
        top: $sidebar-top;
        z-index: $sidebar-z-index;

        width: $sidebar-width;
        height: calc(100vh - #{$sidebar-top});
        overflow-y: hidden;

        background: $sidebar-background-color;
        padding: $sidebar-inner-spacing;


        &:not([data-position^="right"]) {
            left: $sidebar-left;
            border-right: $sidebar-border;
        }

        &[data-position^="right"] {
            right: $sidebar-left;
            border-left: $sidebar-border;
        }
    }
</style>
