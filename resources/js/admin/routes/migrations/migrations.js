import migrations from "../../views/migrations/migrations";

export default {
    path: '/admin/migrations',
    name: 'Migrations',
    components: {default:  migrations},
    beforeEnter(to, from, next) {
        next();
    },
    props: {
        default(route) {
            return {

            }
        }
    }
}
