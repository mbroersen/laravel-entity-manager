<template>
    <div>
        <h2>Entities</h2> <Button label="add" v-on:click.native="showAddDialog()"></Button>
        <router-view name="dialog"></router-view>

        <div class="entities">
            <entity-card v-bind="entity" :key="entity.id" v-for="entity in entities"></entity-card>
        </div>
    </div>
</template>

<script>

import EntityCard from "./components/entity-card";
import Button from "../../components/button";

export default {
    components: {Button, EntityCard},

    data() {
        return {
            entities: [
                {
                    id: 1,
                    name: "User",
                    classExtends: "SamUser",
                    fields: [
                        {name: 'id', 'type': 'integer', pk: true},
                        {name: 'name', 'type': 'varchar', pk: false},
                        {name: 'create_at', 'type': 'timestamp', pk: false},
                        {name: 'updated_at', 'type': 'timestamp', pk: false},
                    ],
                    relations: [
                        {name: 'client_has_account_manager', inverseEntity: 'user', ownerEntity: 'client', type: '', ownerRelationAccessor: 'clients', inverseRelationAccessor: 'accountManager', ownerField: 'id', inverseField: 'account_manager_id'},
                        {name: 'client_has_campaign_manager', inverseEntity: 'user', ownerEntity: 'client', type: '', ownerRelationAccessor: 'clients', inverseRelationAccessor: 'campaignManager', ownerField: 'id', inverseField: 'campaign_manager_id'},
                    ]
                },

                {
                    id: 2,
                    name: "User",
                    classExtends: "SamUser",
                    fields: [
                        {name: 'id', 'type': 'integer', pk: true},
                        {name: 'name', 'type': 'varchar', pk: false},
                        {name: 'create_at', 'type': 'timestamp', pk: false},
                        {name: 'updated_at', 'type': 'timestamp', pk: false},
                    ],
                    relations: [
                        {name: 'client_has_account_manager', inverseEntity: 'user', ownerEntity: 'client', type: '', ownerRelationAccessor: 'clients', inverseRelationAccessor: 'accountManager', ownerField: 'id', inverseField: 'account_manager_id'},
                        {name: 'client_has_campaign_manager', inverseEntity: 'user', ownerEntity: 'client', type: '', ownerRelationAccessor: 'clients', inverseRelationAccessor: 'campaignManager', ownerField: 'id', inverseField: 'campaign_manager_id'},
                    ]
                },

                {
                    id: 3,
                    name: "User",
                    classExtends: "SamUser",
                    fields: [
                        {name: 'id', 'type': 'integer', pk: true},
                        {name: 'name', 'type': 'varchar', pk: false},
                        {name: 'create_at', 'type': 'timestamp', pk: false},
                        {name: 'updated_at', 'type': 'timestamp', pk: false},
                    ],
                    relations: [
                        {name: 'client_has_account_manager', inverseEntity: 'user', ownerEntity: 'client', type: '', ownerRelationAccessor: 'clients', inverseRelationAccessor: 'accountManager', ownerField: 'id', inverseField: 'account_manager_id'},
                        {name: 'client_has_campaign_manager', inverseEntity: 'user', ownerEntity: 'client', type: '', ownerRelationAccessor: 'clients', inverseRelationAccessor: 'campaignManager', ownerField: 'id', inverseField: 'campaign_manager_id'},
                    ]
                },
            ]

        }
    },

    methods: {
        showAddDialog() {
            this.$router.push({name:'CreateEntity'});
        }
    }
}
</script>

<style lang="scss">
    .entities {
        display: flex;
    }
</style>
