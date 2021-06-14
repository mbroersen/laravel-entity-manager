import Diagram from "../../../models/Diagram";

export default class PositionTranslator {

    /**
     *
     * @param {number} x
     * @return {number}
     */
    static translateX(x)
    {
        const diagram = Diagram.find(1);

        return (x - diagram.x) * diagram.zoom;
    }

    /**
     *
     * @param {number} y
     * @return {number}
     */
    static translateY(y)
    {
        const diagram = Diagram.find(1);

        return (y - diagram.y) * diagram.zoom;
    }

    /**
     *
     * @param {number} height
     * @return {number}
     */
    static translateHeight(height)
    {
        const diagram = Diagram.find(1);

        return height * diagram.zoom;
    }

    /**
     *
     * @param {number} width
     * @return {number}
     */
    static translateWidth(width)
    {
        const diagram = Diagram.find(1);

        return width * diagram.zoom;
    }

    /**
     *
     * @param fontSize
     * @return {number}
     */
    static translateFontSize(fontSize)
    {
        const diagram = Diagram.find(1);

        return this.fastRound(fontSize * diagram.zoom);
    }

    /**
     *
     * @param {number} number
     * @return {number}
     */
    static fastRound(number)
    {
        return (number + (number > 0 ? 0.5 : -0.5)) << 0;
    }
}
