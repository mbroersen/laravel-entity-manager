import dashboard from "../../views/dashboard/dashboard";

export default {
    path: '/admin/dashboard',
    name: 'Dashboard',
    components: {default:  dashboard},
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
    }
}
