import {BelongsTo, Field, HasMany, Model} from "jeloquent/dist/jeloquent";
import Entity from "./Entity";
import DiagramPosition from "./DiagramPosition";


export default class Project extends Model {

    constructor() {
        let fields = [
            new Field('id', true),
            new Field('name'),
            new BelongsTo(DiagramPosition),
            new HasMany(Entity),
        ]
        super(fields);
    }

}
