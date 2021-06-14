import Axios from "Axios";
import Entity from "../../models/Entity";
import {Field} from "jeloquent/dist/jeloquent";
import EntityField from "../../models/EntityField";

export default class ApiEntity {

    endpoint = '/api/v1/entity';

    constructor()
    {

    }

    static getInstance() {
        return globalThis?.ApiEntityService ?? (globalThis.ApiEntityService = new ApiEntity());
    }


    loadRemoteSet(filters = {}, limit = 1000, offset = 0)
    {
        Axios.get(this.endpoint, {params: {filters, limit, offset}})
            .then((response) => {
                Entity.insert(response.data);
            });
    }

    loadEntity(id)
    {
        Axios.get(`${this.endpoint}/${id}`)
            .then((response) => {
                Entity.insert(response.data);
            }).catch((error) => {this.onError(error)});
    }

    all()
    {
        return Entity.all();
    }

    currentNewEntity()
    {
        if (!this.newEntity) {
            this.newEntity = new Entity();
            this.newEntity.save();

            let fieldId = new EntityField();
            fieldId.name = 'id';
            fieldId.entity_id = this.newEntity.primaryKey;
            fieldId.type = 'integer';
            fieldId.save();

            let fieldName = new EntityField();
            fieldName.name = 'name';
            fieldName.entity_id = this.newEntity.primaryKey;
            fieldName.type = 'string';
            fieldName.save();


            // this.newEntity = Entity.find(this.newEntity.primaryKey);
        }

        return this.newEntity;
    }

    get(id)
    {
        return Entity.find(id);
    }

    add()
    {
        return new Promise((resolve) => {
            this.loading = true;
            Axios.post(this.endpoint, this.currentNewEntity().toJson())
                .then((response) => this.onSuccess(response))
                .catch((error) => this.onError(error))
                .finally(() => this.finally(resolve));
        });
    }

    update(entityModel)
    {
        this.entityModel = entityModel;
        this.validate(this.entityModel);

        return new Promise((resolve) => {
            Axios.put(this.endpoint, this.entityModel)
                .then((response) => this.onSuccess(response))
                .catch((error) => this.onError(error))
                .finally(() => this.finally(resolve));
        });
    }

    delete() {
        return new Promise((resolve) => {
            Axios.delete(this.endpoint, this.entityModel.primaryKey)
                .then((response) => this.onSuccess(response))
                .catch((error) => this.onError(error))
                .finally(() => this.finally(resolve));
        });
    }

    validate()
    {
        return true;
    }

    onSuccess(response)
    {
        this.success = true;
    }

    onError(error)
    {
        this.success = false;
    }

    finally(resolve)
    {
        this.loading = false;
        resolve();
    }

    getMessage()
    {
        if (this.success === false) {
            return 'Error';
        }
        return 'Success';
    }

    getErrors()
    {
        return [];
    }
}
