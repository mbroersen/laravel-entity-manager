import PositionTranslator from "./PositionTranslator";

export default class TextDrawer {


    static drawText(canvas, text, x, y, options = {}) {
        canvas.font = `${PositionTranslator.translateFontSize(options?.size ?? '12')}px Roboto`;
        canvas.textBaseline = 'top';
        canvas.fontWeight = options?.weight ?? 'normal';
        canvas.textAlign = options?.align ?? 'left';
        canvas.fillStyle = options?.color ?? 'rgba(33, 33, 33, .9)';
        canvas.fillText(
            text,
            PositionTranslator.translateX(x + 10),
            PositionTranslator.translateY(y + 10)
        );
    };
}
