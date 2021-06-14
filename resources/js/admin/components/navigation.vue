<template>
    <nav>
        <div :key="link" v-for="link in links">
            <router-link :to="{name: link}">{{link}}</router-link>
        </div>

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


<style lang="scss">
    $navigation-height: 40px;

    nav {
        display: flex;
        align-items: stretch;
        height: $navigation-height;
        background: rgba(66,66,240, 0.9);

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
            font-family: Arial;
            font-size: 14px;
            transition: all 2s;

            a {
                color: rgba(255,255,255,1);
                text-decoration: none;

                &:hover {
                    border-bottom: 2px solid red;
                    background: rgba(66, 66, 240, 0.3);
                }

                &.router-link-active {
                    border-bottom: 2px solid red;
                }
            }



        }
    }
</style>
