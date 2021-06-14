<template>
    <side-bar>
        <div>
            <h1>{{diagram.name}}</h1>
            <dl>
                <dd>Zoom: {{diagramZoom}}</dd>
                <dd>Position: {{diagramPosition}}</dd>
            </dl>
            <list-item :key="project.id" v-for="project in projects" icon="folder" :label="project.name">
                <list-item :key="entity.id" v-for="entity in project.entitys" icon="table_chart" :label="entity.name">
                    <list-item label="fields" icon="input">
                        <template v-for="field in entity.entity_fields">
                            <dt>
                                <icon type="input" />
                                <icon data-type="is_primary_key" type="vpn_key" v-if="field.isPrimary === true" />
                                <icon data-type="is_not_primary_key" type="vpn_key" v-else />
                                <text-label :label="field.name" /> <text-label :label="field.type" />
                            </dt>
                        </template>
                        <dt><Button icon="" label="add field" type="default" /></dt>
                    </list-item>
                    <list-item label="relations" icon="account_tree">
                        <dt><Button icon="" label="add relation" type="default" /></dt>
                    </list-item>
                    <list-item label="diagram_position" icon="picture_in_picture">
                        <dt>
                            <text-label :label="entity.diagram_position.x+', '" />
                            <text-label :label="entity.diagram_position.y+' ('"  />
                            <text-label :label="entity.diagram_position.width+','" />
                            <text-label :label="entity.diagram_position.height+')'" />
                        </dt>
                    </list-item>


                </list-item>
                <dt><Button icon="" label="add entity" type="default" /></dt>
                <dt>
                    <Button icon="" label="add project" type="default"/>
                </dt>
            </list-item>
        </div>
    </side-bar>
</template>

<style lang="scss">

.icon[data-type="is_primary_key"]  {
    color: rgba(220,220,100, 0.9);
    font-size: 12px;
    text-outline: 1px rgba(233 ,33 , 33, 1) ;
}

.icon[data-type="is_not_primary_key"]  {
    color: rgba(133, 133,133, 0.2);
    font-size: 12px;
    text-outline: 1px rgba(233 ,33 , 33, 1) ;
}



    #explorer {
        dl {

        }


    }
</style>

<script>
import PositionTranslator from "../../../../services/canvas/helper/PositionTranslator";
import SideBar from "../../../../components/side-bar";
import Button from "../../../../components/button";
import Icon from "../../../../components/icon";
import TextLabel from "../../../../components/text-label";
import ListItem from "../../../../components/list-item";

export default {

    components: {ListItem, TextLabel, Icon, Button, SideBar},

    props: {
        activeDiagram: {
            default: () => { return {projects: []}; }
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



