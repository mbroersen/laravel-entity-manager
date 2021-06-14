import entity from "../../views/entity/entity";


export default {
    path: '/admin/relations',
    name: 'Relations',
    components: {default:  entity},
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
