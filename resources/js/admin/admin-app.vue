<template>
    <div id="main">
        <navigation></navigation>

        <div class="route-content">
            <router-view name="default"></router-view>
        </div>
    </div>
</template>

<script>
    import navigation from "./components/navigation";

    export default {
        components: {navigation}
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    @import url('https://fonts.googleapis.com/icon?family=Material+Icons');

    html, body, #main {
        margin: 0;
        padding: 0;
        min-height: 100vh;
        min-width: 100vw;
    }

    * {
        font-family: Roboto;
        box-sizing: border-box;
    }

    .route-content {
        overflow-x: auto;
        overflow-y: auto;
        max-width: calc(100vw);
        max-height: calc(100vh - 45px);
        scroll-margin-block-end: 50px;

    }


</style>
