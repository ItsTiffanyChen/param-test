let url = new URL(location.href);
console.log(url);

Vue.component('test', {
  props: ['page'],
  template: `<div><a :href="getHref">{{page}}</a></div>`,
  computed: {
    getHref() {
      return `./detail.html?id=${this.page}`
    }
  }
})

let app = new Vue({
  el: '#app',
  data: {
    pages: ['one', 'two']
  }
})