import entity from "../../views/entity/entity";
import dialog from "../../components/dialog";
import EntityDialog from "../../views/entity/components/entity-dialog";

export default {
    path: '/admin/entity',
    name: 'Entity',
    components: {default:  entity},
    beforeEnter(to, from, next) {
        next();
    },
    props: {
        default(route) {
            return {

            }
        }
    },
    meta: {
        showInNavigation: true,
    },
    children: [
        {
            path: 'edit/:id',
            name: 'ShowEntity',
            components: {dialog: dialog},
            beforeEnter(to, from, next) {
                next();
            },
            props: {
                default(route) {
                    return {
                        activeDiagram: globalThis.activeDiagram
                    }
                }
            },
        },
        {
            path: 'new',
            name: 'CreateEntity',
            components: {dialog: EntityDialog},
            beforeEnter(to, from, next) {
                next();
            },
            props: {
                default(route) {
                    return {

                    }
                }
            },
        }

    ]
}
