import {BelongsTo, Field, HasMany, HasOne, Model, MorphTo} from "jeloquent/dist/jeloquent";
import Diagram from "./Diagram";
import Entity from "./Entity";

export default class DiagramActiveSelection extends Model {

    constructor() {

        let fields = [
            new Field('id', true),
            new BelongsTo(Diagram),
            new BelongsTo(Entity),
        ];

        super(fields);
    }

}
