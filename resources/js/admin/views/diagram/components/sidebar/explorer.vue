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
                    <dt>{{project.name}}</dt>
                    <dd>
                        <dl>
                            <template v-for="entity in project.entitys">
                                <dt>{{entity.name}}</dt>
                                <dd>
                                    <dl>
                                        <template v-for="field in entity.entity_fields">
                                            <dt>{{field.name}}</dt>
                                            <dd>{{field.type}}</dd>
                                        </template>
                                    </dl>
                                </dd>
                            </template>
                        </dl>

                    </dd>
                </template>
            </dl>
        </div>
    </side-bar>
</template>

<style lang="scss">
    #explorer {
        dl {
            font-family: "Roboto Mono";
        }
    }
</style>

<script>
import PositionTranslator from "../../../../services/canvas/helper/PositionTranslator";
import SideBar from "../../../../components/side-bar";

export default {

    components: {SideBar},

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

