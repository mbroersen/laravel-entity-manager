import entity from "../../views/diagram/diagram";
import dialog from "../../components/dialog";
import explorer from "../../views/diagram/components/sidebar/explorer";
import Diagram from "../../models/Diagram";

export default {
    path: '/admin/diagram',
    name: 'Diagram',
    components: {
        default: entity,
    },
    beforeEnter(to, from, next) {
        next();
    },
    props: {
        default(route) {
            return {
                activeDiagram: Diagram.find(1),
            }
        },
        sidebar($route) {
            return {

            }
        }
    },
    meta: {
        showInNavigation: true,
    },
    children: [
        {
            path: '',

            components: {
                sidebar: explorer
            },

            props: {
                sidebar(route) {
                    return {
                        activeDiagram: Diagram.find(1),
                    }
                }
            }
        },
        {
            path: 'edit/:id',
            name: 'ShowEntityInDiagram',
            components: {dialog: dialog},
            beforeEnter(to, from, next) {
                next();
            },
            props: {
                default(route) {
                    return {

                    }
                }
            },
        },

    ]
}
