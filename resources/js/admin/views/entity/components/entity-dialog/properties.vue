<template>
    <div>
        <text-field :value.sync="modelName" label="name"></text-field>
        <text-field :value.sync="classExtends" label="classExtends"></text-field>
        <select-field :value.sync="classExtends" label="classExtends" :select-options="[
             {label: 'value 1', value: 1},
             {label: 'value 3', value: 3},
             {label: 'value 4', value: 4},
             {label: 'value 5', value: 5},
             {label: 'value 10', value: 10},
             {label: 'value 9', value: 9},
         ]"></select-field>
    </div>


</template>

<script>
    import SelectField from "../../../../components/select-field";
    import TextField from "../../../../components/text-field";
    import ApiEntity from "../../../../services/entity/ApiEntity";

    export default {
        components: {TextField, SelectField},

        data() {
            return {
                classExtends: 'SamUser',
            }
        },

        computed: {
            modelName: {
                get() {
                    return ApiEntity.getInstance().currentNewEntity().name;
                },

                set(name) {
                    ApiEntity.getInstance()
                        .currentNewEntity()
                        .name = name;
                }
            }
        }

    }
</script>
