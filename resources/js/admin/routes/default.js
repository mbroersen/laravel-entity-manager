import Vue from 'vue';
import VueRouter from 'vue-router';
import dashboard from "./dashboard/dashboard";
import project from "./project/project";
import entity from "./entity/entity";
import migrations from "./migrations/migrations";
import relations from "./relations/relations";
import diagram from "./diagram/diagram";


Vue.use(VueRouter);


const routes = [
    // {
    //     path: '/no-permission',
    //     components: {error: ErrorView},
    //     name: 'no-permission',
    //     props: {
    //         error: (route) => {
    //             return {
    //                 title: "Sorry - 403",
    //                 subtitle: "This page is unavailable for your account.<br>This can be solved by contacting your campaign manager."
    //             }
    //         }
    //     },
    //     meta: {
    //         key: (route) => 'no-permission',
    //         permissionLevel: 3,
    //     },
    // },
    {
        path: '/admin/?',
        redirect: {name: 'dashboard'},
        meta: {
            headerOptions: {
                showHeader: false
            }
        }
    },
    dashboard,
    project,
    entity,
    migrations,
    relations,
    diagram,

    // {
    //     path: '*',
    //     name: 'not-found',
    //     components: {error: ErrorView},
    //     meta: {
    //         key: (route) => 'not-found',
    //     }
    // },
];

/**
 * Router options
 *
 * @type {VueRouter}
 */
const router = new VueRouter({
    mode: 'history',
    routes,
});



router.beforeEach((to, from, next) => {
    next();
});


router.afterEach((to, from) => {

});

export default router;
