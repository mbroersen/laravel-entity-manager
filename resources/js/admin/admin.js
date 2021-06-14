import Axios from 'Axios';
import Vue from 'vue';

//vue app
import routes from './routes/default';
import App from './admin-app.vue';
import Store from './store/store';

globalThis.axios = Axios;

globalThis.app = new Vue({
    components: {App},
    el: '#app',
    router: routes,
    template: '<App />',
});
