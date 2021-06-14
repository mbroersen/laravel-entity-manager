import {Field, HasMany, HasManyThrough, Model} from "jeloquent/dist/jeloquent";
import Project from "./Project";
import DiagramPosition from "./DiagramPosition";
import Entity from "./Entity";

export default class Diagram extends Model {

    constructor() {

        let fields = [
            new Field('id', true),
            new Field('name'),
            new Field('x'),
            new Field('y'),
            new Field('zoom'),
            new HasMany(DiagramPosition),
            new HasManyThrough(Project, DiagramPosition),
            new HasManyThrough(Entity, DiagramPosition),
        ];

        super(fields);
    }

}
