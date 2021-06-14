import PositionTranslator from "./helper/PositionTranslator";
import TextDrawer from "./helper/TextDrawer";

export default class EntityFieldDrawer {

    /**
     * @param {CanvasRenderingContext2D} canvas
     */
    constructor(canvas) {
        this.canvas = canvas;
    }

    /**
     *
     * @param {Entity} entity
     * @param {EntityField} entityField
     */
    draw(entity, entityField) {
        const fieldPosition = (entityField.position * 30);

        this.drawText(entityField.name, entity.diagram_position.x, entity.diagram_position.y + fieldPosition, {size: 16, weight: 'bold', align: 'left', color: 'rgba(33, 33, 33, .9)'})
        this.drawText(entityField.type, entity.diagram_position.x + 170, entity.diagram_position.y + fieldPosition, {size: 16, weight: 'bold', align: 'right', color: 'rgba(33, 33, 33, .9)'})
    }

    drawText(text, x, y, options = {}) {
        TextDrawer.drawText(this.canvas, text, x, y, options);
    };


}
