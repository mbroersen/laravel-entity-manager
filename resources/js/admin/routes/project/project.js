import project from "../../views/project/project";


export default {
    path: '/admin/project',
    name: 'Project',
    components: {default:  project},
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
