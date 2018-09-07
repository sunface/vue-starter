// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';

import '!style-loader!css-loader!less-loader!./theme/override.less'
import '!style-loader!css-loader!less-loader!./theme/common.less'

Vue.config.productionTip = false

import i18n from './lang' // Internationalization

Vue.use(iView);

import store from './store'


router.beforeEach((to, _, next) => {
    next()
})

router.afterEach(() => {
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
