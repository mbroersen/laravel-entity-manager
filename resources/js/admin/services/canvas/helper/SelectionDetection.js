import Diagram from "../../../models/Diagram";
import DiagramPosition from "../../../models/DiagramPosition";

export default class SelectionDetection {

    constructor() {
        this.timeout = null;

    }


    static collisionDetect(e) {
        if (!e?.target) {
            return;
        }

        const diagram = Diagram.find(1);
        const selectedPosition = [];
        const target = {x: (e.x - e.target.offsetLeft), y: (e.y - e.target.offsetTop), w: 5, h: 5}

        DiagramPosition.all().forEach((entity) => {
            if (!(
                (((entity.y - diagram.y) + entity.height) * diagram.zoom < (target.y)) ||
                ((entity.y - diagram.y) * diagram.zoom > (target.y + (target.h * diagram.zoom))) ||
                (((entity.x - diagram.x) + entity.width) * diagram.zoom < target.x) ||
                ((entity.x - diagram.x) * diagram.zoom > (target.x + (target.w * diagram.zoom)))
            )) {
                selectedPosition.push(entity);
            }
        });

        return selectedPosition;
    }
}
