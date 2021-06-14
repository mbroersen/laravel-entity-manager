import PositionTranslator from "./PositionTranslator";
import TextDrawer from "./TextDrawer";

export default class PanelDrawer {

    static drawPanel(canvas, x, y, width, height, text, options = {}) {
        canvas.lineWidth = options?.borderSize ?? 1;
        canvas.strokeStyle = options?.borderColor ?? 'rgba(33, 33, 33, .9)';

        const translated = {
            x: PositionTranslator.translateX(x),
            y: PositionTranslator.translateY(y),
            width: PositionTranslator.translateWidth(width),
            heigth: PositionTranslator.translateHeight(height)
        }

        canvas.fillStyle = options?.color ?? 'rgba(244, 244, 244, .9)';
        canvas.rect(
            translated.x,
            translated.y,
            translated.width,
            translated.heigth
        );

        canvas.fill();
        canvas.stroke();

        canvas.beginPath();
        canvas.moveTo(PositionTranslator.translateX(x), PositionTranslator.translateY(y + 35));
        canvas.lineTo(PositionTranslator.translateX(x + width), PositionTranslator.translateY(y + 35));
        canvas.stroke();

        let color = options?.textColor ?? 'rgba(255, 0, 255, .9)';
        let size = options?.textSize ?? 20;
        TextDrawer.drawText(canvas, text, x, y, {color, size});
    };
}
