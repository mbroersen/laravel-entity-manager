<template>
    <div>
        <div class="fields">
            <field v-for="field in fields" :key="field.primaryKey" :field="field"></field>
        </div>

        <Button label="add field" v-on:click.native="addField()"></Button>
    </div>
</template>

<script>
    import Button from "../../../../components/button";
    import ApiEntity from "../../../../services/entity/ApiEntity";
    import EntityField from "../../../../models/EntityField";
    import Field from "./fields/field";
    export default {
        components: {Field, Button},

        data() {
            return {
                dataFields: []
            }
        },

        computed: {
            fields() {
                this.dataFields = ApiEntity.getInstance().currentNewEntity().entity_fields;
                return this.dataFields;
            }
        },

        methods: {
            addField() {
                let field = new EntityField();
                field.entity_id = ApiEntity.getInstance().currentNewEntity().primaryKey;
                field.save();
                this.dataFields = ApiEntity.getInstance().currentNewEntity().entity_fields;
            },
        }
    }
</script>
