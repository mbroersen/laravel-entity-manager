import {BelongsTo, Field, HasMany, HasOne, Model, MorphTo} from "jeloquent/dist/jeloquent";
import Diagram from "./Diagram";
import Entity from "./Entity";
import Project from "./Project";

export default class DiagramPosition extends Model {

    constructor() {

        let fields = [
            new Field('id', true),
            new Field('x'),
            new Field('y'),
            new Field('height'),
            new Field('width'),
            new BelongsTo(Diagram),
            new HasOne(Entity),
            new HasOne(Project),
        ];

        super(fields);
    }

}
