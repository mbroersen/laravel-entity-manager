import EntityDrawer from "./EntityDrawer";
import PanelDrawer from "./helper/PanelDrawer";

export default class ProjectDrawer {

    /**
     *
     * @param {CanvasRenderingContext2D} canvas
     */
    constructor(canvas) {
        this.canvas = canvas;
    }


    draw(project) {
        this.drawProject(project);
        this.drawEntities(project);
    }


    drawProject(project) {
        PanelDrawer.drawPanel(this.canvas, project.diagram_position.x, project.diagram_position.y, project.diagram_position.width, project.diagram_position.height, project.name, {textSize: 20, textColor: 'rgba(188, 66, 66, 0.9)'})
    }


    drawEntities(project) {
        const entityDrawer = new EntityDrawer(this.canvas);
        project.entitys.forEach((entity) => {
            entityDrawer.draw(entity);
        });
    }




}
