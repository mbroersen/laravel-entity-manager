import PositionTranslator from "./helper/PositionTranslator";
import TextDrawer from "./helper/TextDrawer";

export default class RelationDrawer {


    static drawReleation(canvas, entityOne, entityTwo)
    {
        let isOnLeft = (entityOne.x - entityTwo.x) > entityOne.width;
        let isOnTop = (entityOne.x - entityTwo.y) > entityOne.height;

        canvas.beginPath();
        canvas.strokeStyle = 'rgba(33, 133, 233, .9)';
        canvas.moveTo(PositionTranslator.translateX(entityOne.diagram_position.x + entityOne.diagram_position.width), PositionTranslator.translateY(entityOne.diagram_position.y + (entityOne.diagram_position.height / 2)));
        canvas.lineTo(PositionTranslator.translateX(entityTwo.diagram_position.x), PositionTranslator.translateY(entityTwo.diagram_position.y + (entityTwo.diagram_position.height / 2)));
        canvas.stroke();

        TextDrawer.drawText(canvas, "n..1", (entityOne.diagram_position.x + entityOne.diagram_position.width), entityOne.diagram_position.y + (entityOne.diagram_position.height / 2), {color: 'rgba(33, 133, 233, .9)'});
        TextDrawer.drawText(canvas, "1", (entityTwo.diagram_position.x - 20), entityTwo.diagram_position.y + (entityTwo.diagram_position.height / 2), {align: 'right', color: 'rgba(33, 133, 233, .9)'});
    }
}
