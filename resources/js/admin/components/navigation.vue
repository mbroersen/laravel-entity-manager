<template>
    <nav>

            <router-link tag="div" :key="link" v-for="link in links" :to="{name: link}">{{link}}</router-link>

    </nav>
</template>

<script>
    export default {
        computed: {
            links() {
                return this.$router.getRoutes()
                    .filter(route => route.meta.showInNavigation)
                    .map( route => route.name)
                    .filter(val => !!val);
            }
        }
    }
</script>

<!--//https://coolors.co/3c91e6-9fd356-342e37-fafffd-fa824c-->

<style lang="scss">

    $navigation-height: 40px;
    $font: Roboto;
    $navigation-color-bg: rgba(60, 145, 230, .9);
    $navigation-color-hover: rgba(159, 211, 86, .9);
    $navigation-border: 2px solid rgba(250, 130, 76, .9);
    $navigation-color-text: rgba(52, 46, 55, 1);

    nav {
        display: flex;
        align-items: stretch;
        height: $navigation-height;
        background: $navigation-color-bg;

        overflow-x: scroll;
        max-width: 100vw;

        /* Hide scrollbar for Chrome, Safari and Opera */
        &::-webkit-scrollbar {
            display: none;
        }
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */

        div {
            padding: 15px 30px;
            font-weight: bold;
            font-family: $font;
            font-size: 14px;
            transition: all 2s;
            height: 100%;
            color: $navigation-color-text;

            &:hover {
                cursor: pointer;
                border-bottom: $navigation-border;
                background: $navigation-color-hover;
            }

            &.router-link-active {
                border-bottom: 2px solid rgba(250, 130, 76, .9);
            }



        }
    }
</style>
