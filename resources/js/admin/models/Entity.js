import {BelongsTo, Field, HasMany, HasOne, Model} from "jeloquent/dist/jeloquent";
import Project from "./Project";
import EntityField from "./EntityField";
import DiagramPosition from "./DiagramPosition";

export default class Entity extends Model {

    constructor() {

        let fields = [
            new Field('id', true),
            new Field('name'),
            new BelongsTo(Project),
            new BelongsTo(DiagramPosition),
            new HasMany(EntityField),
        ];

        super(fields);
    }

}
