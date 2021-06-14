import {Database, Store} from 'jeloquent';
import Project from "../models/Project";
import Entity from "../models/Entity";
import EntityField from "../models/EntityField";
import Diagram from "../models/Diagram";
import DiagramPosition from "../models/DiagramPosition";

const models = [
    Entity,
    Project,
    EntityField,
    Diagram,
    DiagramPosition,
];

const store = new Store();
store.add(new Database('app', models));
store.use('app');

globalThis.models = models;

export default store;

