import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 配置你自己的路由
const routes = [
  {
    path: '/welcome',
    name: 'welcome',
    component: () => import('./Welcome')
  },
  {
    path: '/protocol',
    name: 'protocol',
    component: () => import('./Protocol')
  },
  {
    path: '/categories',
    name: 'categories',
    component: () => import('./Categories')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('./Home'),
    children: [
      {
        path: 'categories/:category',
        component: () => import('./Home/Posts')
      },
      {
        path: 'user/posts',
        component: () => import('./Home/MyPosts')
      }
    ]
  },
  {path: '/posts/:id', component: () => import('./Post')},
  {path: '/comments/:id', component: () => import('./Comment')}
]

export default new VueRouter({
  routes,
  mode: 'hash'
})
