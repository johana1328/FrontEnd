import Vue from 'vue'
import App from './App.vue'
import CoreuiVue from '@coreui/vue';
import router from './router/index'
import { iconsSet as icons } from './assets/icons/icons.js'
import store from './store'
import api from "./clientes/api/api.js";


Vue.config.productionTip = false;
Vue.prototype.$http = api; 
Vue.use(CoreuiVue);

// configuracion de axios
api.defaults.timeout = 10000;

api.interceptors.request.use(
  config => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.common["Authorization"] = token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  response => {
    if (response.status === 200 || response.status === 201) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
error => {
    if (error.response.status) {
      switch (error.response.status) {
        case 400:
         
         //do something
          break;
      
        case 401:
          alert("session expired");
          break;
        case 403:
          router.replace({
            path: "/login",
            query: { redirect: router.currentRoute.fullPath }
          });
           break;
        case 404:
          alert('page not exist');
          break;
        case 502:
         setTimeout(() => {
            router.replace({
              path: "/login",
              query: {
                redirect: router.currentRoute.fullPath
              }
            });
          }, 1000);
      }
      return Promise.reject(error.response);
    }
  }
);

new Vue({
  render: h => h(App),
  router,
  icons,
  store
}).$mount('#app')
