<template>
    <div class="card">
        <header>
            <span class="title">{{name}}</span>
        </header>
        <section>
            <slot name="default"></slot>
        </section>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>
<script>

export default {
    props: {
        name: {
            default() {
                return "User"
            }
        }
    }

}
</script>


<style lang="scss">

    $card-max-width: 345px;
    $card-shadow: 0 2px 4px 0 rgba(0,0,0,0.2), 0 2px 10px 0 rgba(0,0,0,0.19);
    $card-border:  1px solid rgba(33, 33, 33, 0.1);


    .card {
        max-width: $card-max-width;
        width: 100vw;
        box-shadow: $card-shadow;
        border: $card-border;
        border-radius: 4px;
        margin: 10px;


        header {
            width: 100%;
            height: 55px;
            font-size: 20px;
            padding: 10px 20px;
        }

        section {
            width: 100%;
            min-height: 100px;
            padding: 10px 20px;
        }

        footer {
            width: 100%;
            height: 55px;
            font-size: 20px;
            padding: 10px 20px;

            font-weight: bold;
        }

    }

</style>
