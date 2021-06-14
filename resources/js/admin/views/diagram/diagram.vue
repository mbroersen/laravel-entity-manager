<template>
    <div>
        <router-view name="dialog"></router-view>
        <router-view name="sidebar"></router-view>
        <canvas class="diagram"
                ref="diagramCanvas"
                :width="width"
                :height="height"
                v-on:mousedown="(e) => collisionDetect(e)"
                v-on:mousemove="(e) => dragBoard(e)"
                v-on:mouseup="(e) => dragEnd(e)"
                v-on:mouseleave="(e) => dragEnd(e)"
                v-on:wheel="e => zoom(e)"
        ></canvas>
    </div>
</template>


<script>
    import DiagramDrawer from "../../services/canvas/DiagramDrawer";
    import PositionTranslator from "../../services/canvas/helper/PositionTranslator";
    import Diagram from "../../models/Diagram";
    import Entity from "../../models/Entity";
    import DiagramPosition from "../../models/DiagramPosition";
    import EntityField from "../../models/EntityField";
    import RelationDrawer from "../../services/canvas/RelationDrawer";
    import Project from "../../models/Project";

    export default {

        props: {
            activeDiagram: {
                default: () => null
            }
        },

        data() {
            return {
                canvas: null,
                timeout: null,
                debounce: false,
                diagramDrawer: null,
                board: {
                    selectedEntity: null,
                },
                drag: {
                    startPosition: {
                        x: 0,
                        y: 0,
                    },
                    dragElement: "board",
                    dragging: false,
                    debounce: false,
                }
            }
        },

        methods: {
            draw() {
                //new DiagramDrawer(this.$refs.diagramCanvas.getContext('2d'));

                this.clearBoard();

               // this.projectDrawer.draw(Project.find(1));
                this.diagramDrawer.draw(this.activeDiagram);

                this.drawRelation();
                this.collisionDetect();
                this.showSelection();

            },

            clearBoard() {
                this.canvas.beginPath();
                this.canvas.fillStyle = 'rgba(244, 244, 244, 1)';
                this.canvas.rect(0, 0, this.width, this.height);
                this.canvas.fill();
            },

            showSelection() {
                this.canvas.strokeStyle = 'rgba(66, 199, 255, .9)';
                this.canvas.lineWidth = 2;

                if (!this.board.selectedEntity) {
                    return;
                }

                this.canvas.beginPath();
                this.canvas.rect(
                    PositionTranslator.translateX(this.board.selectedEntity.x - 5),
                    PositionTranslator.translateY(this.board.selectedEntity.y - 5),
                    PositionTranslator.translateWidth(this.board.selectedEntity.width + 10),
                    PositionTranslator.translateHeight(this.board.selectedEntity.height + 10)
                );
                this.canvas.stroke();
            },

            drawRelation() {
                RelationDrawer.drawReleation(this.canvas, Entity.find(1), Entity.find(2));
            },

            zoom(e) {
                if (e.deltaY > 0) {
                    const diagram = Diagram.find(1)
                    diagram.zoom += 0.01;
                    diagram.save();

                } else if (e.deltaY < 0) {
                    const diagram = Diagram.find(1)
                    diagram.zoom -= 0.01;
                    diagram.save();
                }
                this.draw();
            },


            dragEnd(e) {
                this.drag.dragging = false;
            },

            dragBoard (e) {

                if (!this.drag.dragging) {
                    return;
                }

                if (this.drag.debounce) {
                    return;
                }

                this.drag.debounce = true;
                setTimeout(() => {
                    const diagram = Diagram.find(1);
                    diagram.x = (e.x - e.target.offsetLeft) - this.drag.startPosition.x;
                    diagram.y = (e.y - e.target.offsetTop) - this.drag.startPosition.y;
                    diagram.save();

                    this.draw();
                    this.drag.debounce = false;
                }, 50);
            },

            collisionDetect(e) {
                if (!e?.target) {
                    return ;
                }

                if (this.drag.dragging) {
                    return;
                }

                const diagram = Diagram.find(1);

                this.drag.startPosition.x = (e.x - e.target.offsetLeft) - diagram.x;
                this.drag.startPosition.y = (e.y - e.target.offsetTop) - diagram.y;
                this.drag.dragging = true;

                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    const entityOne = {x: 0 , y: 0, height: 200, width: 200};
                    const entityTwo = {x: 450, y: 0, height: 200, width: 200};
                    const target = {x: (e.x - e.target.offsetLeft), y: (e.y - e.target.offsetTop), w: 5, h: 5}

                    let entity = null;
                    let set = new Set([entityOne, entityTwo]);
                    for (entity of set) {
                        if (!(
                            (((entity.y - diagram.y)  + entity.height ) * diagram.zoom < (target.y) ) ||
                            ((entity.y - diagram.y) * diagram.zoom > (target.y + (target.h* diagram.zoom))) ||
                            (((entity.x - diagram.x) + entity.width) * diagram.zoom < target.x) ||
                            ((entity.x - diagram.x) * diagram.zoom > ( target.x + (target.w* diagram.zoom )))
                        ) ){
                            this.board.selectedEntity = entity;
                            return;
                        }
                        this.board.selectedEntity = null;
                    }
                }, 50);
            }
        },

        computed: {
            width() {
                return window.innerWidth;
            },

            height() {
                return window.innerHeight - 50;
            },
        },

        watch: {
            board: {
                deep: true,
                handler() {
                    this.draw();
                }
            }
        },

        mounted() {
            this.canvas = this.$refs.diagramCanvas.getContext('2d');
            this.diagramDrawer = new DiagramDrawer(this.canvas);
            this.draw();
        },

        beforeRouteEnter(to, from, next) {

            DiagramPosition.insert([{
                id: 1,
                x: 0,
                y: 0,
                height: 200,
                width: 200,
                diagram_id: 1,
            },
                {
                    id: 2,
                    x: 450,
                    y: 0,
                    height: 200,
                    width: 200,
                    diagram_id: 1,
                },
                {
                    id: 3,
                    x: -50,
                    y: -50,
                    height: 500,
                    width: 800,
                    diagram_id: 1,
                },
            ]);

            Entity.insert([
                {
                    id: 1,
                    name: 'User',
                    project_id: 1,
                    diagram_position_id: 1,
                },
                {
                    id: 2,
                    name: 'Team',
                    project_id: 1,
                    diagram_position_id: 2,
                }
            ]);

            EntityField.insert([
                {id: 1, name: 'mark_id', position: 1, type:'number', entity_id: 1},
                {id: 2, name: 'mark_name', position: 2, type:'string', entity_id: 1},
                {id: 3, name: 'mark_team_id', position: 3, type:'number', entity_id: 1},

                {id: 4, name: 'id', position: 1, type:'number', entity_id: 2},
                {id: 5, name: 'name', position: 2, type:'string', entity_id: 2},
                {id: 6, name: 'description', position: 3, type:'number', entity_id: 2},
            ]);

            Project.insert([
                {
                    id: 1,
                    name: 'Project Mark',
                    diagram_position_id: 3,
                }
            ]);

            Diagram.insert([{
                'id': 1,
                'left': 0,
                'top': 0,
                'zoom': 1,
                'name': 'My new diagram',
            }]);
            Diagram.find(1);
            next();
        }

    }
</script>

<style lang="scss">

</style>
