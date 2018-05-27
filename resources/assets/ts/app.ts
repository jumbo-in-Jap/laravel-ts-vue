import Vue from 'vue';
import AppComponent from './components/ExampleComponent.vue';

// bootstrap();

const app = new Vue({
  el: '#app',
  render: h => h(AppComponent)
});