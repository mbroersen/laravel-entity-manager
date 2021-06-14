import {BelongsTo, Field, Model} from "jeloquent/dist/jeloquent";
import Entity from "./Entity";


export default class EntityField extends Model{

    constructor() {
        let fields = [
            new Field('id', true),
            new Field('name'),
            new Field('position'),
            new Field('isPrimary'),
            new Field('isForeignKey'),
            new Field('type'),
            new BelongsTo(Entity),
        ]
        super(fields);
    }

}
