<template>
    <side-bar>
        <div>
            <h1>{{diagram.name}}</h1>
            <dl>
                <dd>Zoom: {{diagramZoom}}</dd>
                <dd>Position: {{diagramPosition}}</dd>
            </dl>
            <dl >
                <template v-for="project in projects">
                    <dt>
                        <icon type="folder"></icon>
                        <text-label :label="project.name" />
                        <icon type="expand_less"></icon>
                    </dt>
                    <dd>
                        <dl>
                            <template v-for="entity in project.entitys">
                                <dt>
                                    <icon type="table_chart"></icon>
                                    <text-label :label="entity.name" />
                                    <icon type="expand_less"></icon>
                                </dt>

                                <dd>
                                    <dl>
                                        <template v-for="field in entity.entity_fields">
                                            <dt>
                                                <icon type="input" />
                                                <icon data-type="is_primary_key" type="vpn_key" v-if="field.isPrimary === true" />
                                                <icon data-type="is_not_primary_key" type="vpn_key" v-else />
                                                <text-label :label="field.name" /> <text-label :label="field.type" />
                                            </dt>
                                        </template>
                                        <dt><Button icon="" label="add field" type="default" /></dt>
                                    </dl>
                                </dd>
                            </template>
                            <dt><Button icon="" label="add entity" type="default" /></dt>
                        </dl>

                    </dd>
                </template>
                <dt>
                    <Button icon="" label="add project" type="default"/>
                </dt>
            </dl>
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

export default {

    components: {TextLabel, Icon, Button, SideBar},

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



