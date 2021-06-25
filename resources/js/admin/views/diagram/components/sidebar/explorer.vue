<template>
    <side-bar>
        <div class="explorer">
            <h1>{{diagram.name}}</h1>
            <ul>
                <li>Zoom: {{diagramZoom}}</li>
                <li>Position: {{diagramPosition}}</li>
            </ul>
            <hr />
            <list-item :key="project.id" v-for="project in projects" icon="folder" :label="project.name">
                <list-item icon="table_chart" label="Entities">
                    <list-item :key="entity.id" v-for="entity in project.entitys" icon="table_chart" :label="entity.name">
                        <list-item label="fields" icon="input">
                            <template v-for="field in entity.entity_fields">
                                <dd>
                                    <div style="display: flex; flex-direction: row; justify-content: space-between; padding: 0 8px;">
                                        <icon data-type="is_primary_key" type="vpn_key" v-if="field.isPrimary === true" />
                                        <icon data-type="is_not_primary_key" type="vpn_key" v-else />
                                        <text-field :hide-label="true" label="name" :value="field.name" />
                                        <select-field :hide-label="true" label="type" v-model="field.type" :select-options="[{label: 'string', value: 'string'}, {label: 'number', value: 'number'}]" />
                                    </div>
                                </dd>
                            </template>
                            <dd>
                                <div style="display: flex; flex-direction: row; justify-content: space-between; padding: 8px; ">
                                    <Button style="flex-grow: 0;" icon="" label="add field" type="default" /> <Button icon="" label="save" type="default" />
                                </div>
                            </dd>
                        </list-item>
                        <list-item label="relations" icon="account_tree">
                            <dd><Button icon="" label="add relation" type="default" /></dd>
                        </list-item>
                        <list-item label="diagram_position" icon="picture_in_picture">
                            <dd>
                                <text-label :label="positionInDiagram(entity.diagram_position)" />
                            </dd>
                        </list-item>
                    </list-item>
                    <hr>
                    <dd><Button icon="" label="add entity" type="default" /></dd>
                </list-item>

            </list-item>
            <dl>
                <dd>
                    <Button icon="" label="add project" type="default"/>
                </dd>
            </dl>
        </div>
    </side-bar>
</template>

<style lang="scss">
    .explorer {
        h1 {
            padding: 0 8px;
        }
    }
    .icon[data-type="is_primary_key"]  {
        color: rgba(220,220,100, 0.9);
        font-size: 12px;
    }

    .icon[data-type="is_not_primary_key"] {
        color: rgba(133, 133, 133, 0.2);
        font-size: 12px;
    }
</style>

<script>
import PositionTranslator from "../../../../services/canvas/helper/PositionTranslator";
import SideBar from "../../../../components/side-bar";
import Button from "../../../../components/button";
import Icon from "../../../../components/icon";
import TextLabel from "../../../../components/text-label";
import ListItem from "../../../../components/list-item";
import TextField from "../../../../components/text-field";
import SelectField from "../../../../components/select-field";

export default {

    components: {SelectField, TextField, ListItem, TextLabel, Icon, Button, SideBar},

    props: {
        activeDiagram: {
            default: () => { return {projects: []}; }
        }
    },

    methods: {
        positionInDiagram(position) {
            return `${position?.x ?? 0}, ${position?.y ?? 0} (${position?.height ?? 0}, ${position?.width ?? 0})`
        }
    },

    computed: {

        diagram() {
            return this.activeDiagram ?? {projects: []};
        },

        diagramZoom() {
            return PositionTranslator.fastRound(100 * this.diagram?.zoom ?? 1);
        },

        diagramPosition() {
            const x = PositionTranslator.fastRound(this?.diagram?.x ?? 0);
            const y = PositionTranslator.fastRound(this?.diagram?.y ?? 0);

            return `(${x}, ${y})`;
        },

        projects() {
            return this.diagram?.projects ?? [];
        }
    }


}
</script>



