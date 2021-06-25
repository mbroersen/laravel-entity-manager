import PositionTranslator from "./helper/PositionTranslator";

export default class SelectionDrawer {

    constructor(canvas) {
        this.canvas = canvas;
    }

    draw(position) {

        if (!position) {
            return;
        }

        this.canvas.strokeStyle = 'rgba(66, 199, 255, .9)';
        this.canvas.lineWidth = 2;

        this.canvas.beginPath();
        this.canvas.rect(
            PositionTranslator.translateX(position.x - 5),
            PositionTranslator.translateY(position.y - 5),
            PositionTranslator.translateWidth(position.width + 10),
            PositionTranslator.translateHeight(position.height + 10)
        );

        this.canvas.stroke();


        this.canvas.beginPath();
        this.canvas.fillStyle = 'rgba(66, 199, 255, 1)';
        this.canvas.rect(
            PositionTranslator.translateX((position.x - 10)),
            PositionTranslator.translateY(position.y - 10),
            PositionTranslator.translateWidth(14),
            PositionTranslator.translateHeight(14)
        );

        this.canvas.rect(
            PositionTranslator.translateX(((position.x + position.width) - 5)),
            PositionTranslator.translateY(position.y - 10),
            PositionTranslator.translateWidth(14),
            PositionTranslator.translateHeight(14)
        );

        this.canvas.rect(
            PositionTranslator.translateX((position.x - 10)),
            PositionTranslator.translateY((position.y + position.height) - 5),
            PositionTranslator.translateWidth(14),
            PositionTranslator.translateHeight(14)
        );

        this.canvas.rect(
            PositionTranslator.translateX(((position.x + position.width) - 5)),
            PositionTranslator.translateY((position.y + position.height) - 5),
            PositionTranslator.translateWidth(14),
            PositionTranslator.translateHeight(14)
        );

        this.canvas.fill();


    }

}
