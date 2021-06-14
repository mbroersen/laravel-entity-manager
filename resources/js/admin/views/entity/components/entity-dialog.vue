<template>
     <Dialog title="add new entity">
         <Tabs :active-tab.sync="activeTab" :tabs="{
             'Properties': 'properties',
             'Fields': 'fields',
             'Relations': 'relations',
         }">
            <component :is="activeTab"></component>
         </Tabs>
         <Button label="add entity" v-on:click.native="addEntity"></Button>
     </Dialog>
</template>

<script>
    import Dialog from "../../../components/dialog";
    import Button from "../../../components/button";
    import fields from "./entity-dialog/fields";
    import properties from "./entity-dialog/properties";
    import relations from "./entity-dialog/relations";
    import Tabs from "../../../components/tabs";
    import ApiEntity from "../../../services/entity/ApiEntity";

    export default {
        components: {Tabs, Button, Dialog, properties, fields, relations},

        data() {
            return {
                activeTab: 'properties',
            };
        },

        methods: {
            addEntity() {


                ApiEntity.getInstance().add().then(() => {
                    console.log('hello');
                });

            }
        }
    }
</script>



