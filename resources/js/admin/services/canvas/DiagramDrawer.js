import EntityDrawer from "./EntityDrawer";
import ProjectDrawer from "./ProjectDrawer";

export default class DiagramDrawer {

    /**
     * @param {CanvasRenderingContext2D} canvas
     */
    constructor(canvas) {
        this.canvas = canvas;
    }

    draw(diagram) {
        this.drawEntities(diagram);
    }

    drawEntities(diagram)
    {
        const projectDrawer = (new ProjectDrawer(this.canvas));

        diagram.projects.forEach((project) => {
            projectDrawer.draw(project);
        });
    }


    // drawProjects() {
    //     const projectDrawer = (new ProjectDrawerDrawer(this.canvas));
    //
    //     Project.all().forEach((project) => {
    //         projectDrawer.draw(project);
    //     });
    // }
}
