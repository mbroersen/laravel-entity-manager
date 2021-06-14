const routes = {
    {
        path: '/route/{:id}',
        name: 'user-dashboard'
        beforeEnter: (to, from, next) {
            //load and store data.
//             Axios.get(`/api/user-dashboard-data/${to.params.id}`).then(() => {
//                 storeInMemStore(storeKey, response.data);
//                 next();
//             });
        },
        components: {header: 'user-dashboard-header', default: 'user-dashboard'},
        props: {
            header: (route) => {
                const id = route.params.id;
                const data = fetchFromMemStore(storeKey);

                return {
                    id,
                    data,
                }
            }
        }
    }
};

const router = new VueRouter({
    mode: 'history',
    routes,
});

router.beforeEach((to, from, next) => {
    //check for permission by user

//     if (hasAccess) {
//         EventBus.$emit('start-loader');
//         next();
//         return;
//     }
//     next('/no-permission');
}

router.afterEach((to, from) => {
//     EventBus.$emit('stop-loader');
});

export default router;
