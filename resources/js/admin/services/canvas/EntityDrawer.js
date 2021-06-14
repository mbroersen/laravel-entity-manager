import EntityFieldDrawer from "./EntityFieldDrawer";
import PositionTranslator from "./helper/PositionTranslator";
import TextDrawer from "./helper/TextDrawer";
import PanelDrawer from "./helper/PanelDrawer";

export default class EntityDrawer {

    /**
     *
     * @param {CanvasRenderingContext2D} canvas
     */
    constructor(canvas) {
        this.canvas = canvas;
    }

    /**
     *
     * @param {Entity} entity
     */
    draw(entity) {
        this.drawEntity(entity);
        // this.drawFields(this.entity);
    }

    /**
     *
     * @param {Entity} entity
     */
    drawEntity(entity) {
        if (!entity) {
            return;
        }

        this.drawPanel(
            entity.diagram_position.x,
            entity.diagram_position.y,
            entity.diagram_position.width,
            entity.diagram_position.height,
            entity.name,
            {}
        );

        this.drawFields(entity);
    }

    drawPanel (x, y, width, height, name) {
        PanelDrawer.drawPanel(this.canvas, x, y, width, height, name, {});
    }

    drawText(text, x, y, options = {}) {
        TextDrawer.drawText(this.canvas, text, x, y, options);
    }

    drawFields(entity) {
        const entityFieldDrawer = new EntityFieldDrawer(this.canvas);
        entity.entity_fields.forEach((field) => {
            entityFieldDrawer.draw(entity, field);
        });
    }


}
