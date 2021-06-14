<template>
    <card :name="name">
        <dl>
            <dt>extends</dt>
            <dd>{{classExtends}}</dd>
        </dl>

        <data-table title="Fields">
            <field-row slot="header" v-bind="{name: 'Name', type: 'Type', pk: 'PK'}"></field-row>
            <field-row slot="rows" :key="field.name" v-for="field in fields" v-bind="field"></field-row>
        </data-table>
        <data-table title="Relations">
            <relation-row slot="header" v-bind="{name: 'name', inverseEntity: 'Inverse entity', ownerEntity: 'Owner entity', type: 'Type', ownerRelationAccessor: 'owner accessor', inverseRelationAccessor: 'inverse accessor', ownerField: 'owner field', inverseField: 'inverse field'}"></relation-row>
            <relation-row slot="rows" :key="relation.name" v-for="relation in relations" v-bind="relation"></relation-row>
        </data-table>

        <Button label="edit" slot="footer" type="default" v-on:click.native="showEditDialog"></Button>
    </card>


</template>

<script>
    import DataTable from "../../../components/data-table";
    import Card from "../../../components/card";
    import FieldRow from "../../../components/row/fieldRow";
    import RelationRow from "../../../components/row/relationRow";
    import Button from "../../../components/button";


    export default {
        components: {Button, Card, DataTable, FieldRow, RelationRow},

        props: {
            id: {

            },

            name: {

            },

            classExtends: {

            },

            relations: {
                default() {
                    return [];
                }
            },

            fields: {
                default() {
                    return [];
                }
            }
        },

        methods: {
            showEditDialog() {
                this.$router.push({name: 'ShowEntity', params: {id: this.id}});
            }
        }

    }
</script>

<style lang="scss">
    .edit-button {
         transition: all 200ms;
         float: right;
         padding: 5px 10px;
         &:hover {
             cursor: pointer;
             color: rgba(33,33,33,.7);
             background: rgba(0, 99, 220,0.7);
         }
    }
</style>
