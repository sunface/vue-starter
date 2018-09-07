import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'

import iviewEn from 'iview/dist/locale/en-US';
import iviewZh from 'iview/dist/locale/zh-CN';
import enLocale from './en'
import zhLocale from './zh'

Vue.use(VueI18n)
Vue.locale = () => {}

const messages = {
  en: {
    ...enLocale,
    ...iviewEn
  },
  zh: {
    ...zhLocale,
    ...iviewZh
  }
}

const i18n = new VueI18n({
  // set locale
  // options: en or zh
  locale: Cookies.get('language') || 'en',
  // set locale messages
  messages
})

export default i18n
