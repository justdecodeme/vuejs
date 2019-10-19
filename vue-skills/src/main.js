import Vue from 'vue'
import App from './App.vue'
import { ValidationProvider, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

Vue.config.productionTip = false

extend('required', {
  ...required,
  message: 'The {_field_} field is required'
});

new Vue({
  render: h => h(App),
  el: '#app',
  components: {
    ValidationProvider
  },
  data: () => ({
    value: ''
  })
}).$mount('#app');
