import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: () => import('@/views/template')},

    { path: '/404', component: () => import('@/views/errorPage/page404')},
    { path: '*', redirect: '/404'}
  ]
})



export const routerMap = [
  // { path: '/404', component: () => import('@/views/errorPage/404'), hidden: true },
  { path: '/', component: () => import('@/views/template'), hidden: true },
  // {
  //   path: '/infra',
  //   component: Layout,
  //   redirect: '/infra/service', 
  //   alwaysShow: true, // will always show the root menu
  //   meta: { title: 'Infra',icon: 'component'},
  //   children: [{
  //     path: 'service',
  //     component: () => import('@/views/infra/service'),
  //     name: 'service',
  //     meta: {
  //       title: 'Service'
  //     }
  //   }, 
  //   {
  //     path: 'application',
  //     component: () => import('@/views/infra/application'),
  //     name: 'application',
  //     meta: {
  //       title: 'Application'
  //     }
  //   },
  //   {
  //     path: 'server',
  //     component: () => import('@/views/infra/server'),
  //     name: 'server',
  //     meta: {
  //       title: 'Cloud Server'
  //     }
  //   }
  // ]
  // },
  { path: '*', redirect: '/404', hidden: true }
]
