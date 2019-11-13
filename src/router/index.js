import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dae6fb34cbca4631a9ab3c569d554e43',
      component: () => import('@/views/index.vue'),
      meta: {
        title: '首页'
      },
    },
    {
      path: '/page1',
      name: '8a88eddc14ae4f2d994466a427806378',
      component: () => import('@/views/index.vue'),
      meta: {
        title: 'page1'
      },
      children: [
        {
          path: 'page1-1',
          name: '213083c1b1a54dbea4545ad84cf1c665',
          component: () => import('@/views/page1/page1-1.vue'),
          meta: {
            title: 'page1-1'
          }
        },
        {
          path: 'page1-2',
          name: '9a0069ee95cb4fd5804424d6e2211c86',
          component: () => import('@/views/page1/page1-2.vue'),
          meta: {
            title: 'page1-2'
          }
        },
        {
          path: 'page1-3',
          name: '656650c57c96404eab2e28105955722f',
          component: () => import('@/views/page1/page1-3.vue'),
          meta: {
            title: 'page1-3'
          }
        },
      ]
    },
    {
      path: '/page2',
      name: 'c9c700f6102442d884f2acab8e1d1d03',
      component: () => import('@/views/index.vue'),
      meta: {
        title: 'page2'
      },
      children: [
        {
          path: 'page2-1',
          name: 'e3936a0064e94b698aded8dbf51a4911',
          component: () => import('@/views/page2/page2-1.vue'),
          meta: {
            title: 'page2-1'
          }
        },
        {
          path: 'page2-2',
          name: '4be8aed5884245e990c170b5c6cf1500',
          component: () => import('@/views/page2/page2-2.vue'),
          meta: {
            title: 'page2-2'
          }
        },
        {
          path: 'page2-3',
          name: 'edb394c8cfe945ce950230e8bae91438',
          component: () => import('@/views/page2/page2-3.vue'),
          meta: {
            title: 'page2-3'
          }
        },
      ]
    },
    {
      path: '/page3',
      name: '98866a0a88fd41b1aded2564a5ac6a7a',
      component: () => import('@/views/index.vue'),
      meta: {
        title: 'page3'
      },
      children: [
        {
          path: 'page3-1',
          name: 'cafbcea9f02643c7bdbe48d8fb23a045',
          component: () => import('@/views/page3/page3-1.vue'),
          meta: {
            title: 'page3-1'
          }
        },
        {
          path: 'page3-2',
          name: '885e3b62ff294755bcc7c0124e08ae49',
          component: () => import('@/views/page3/page3-2.vue'),
          meta: {
            title: 'page3-2'
          }
        },
        {
          path: 'page3-3',
          name: '10f24f26ce714b8e90637c02ad4150f0',
          component: () => import('@/views/page3/page3-3.vue'),
          meta: {
            title: 'page3-3'
          }
        },
        {
          path: 'page3-4',
          name: '64376b7577a74cb495b5e662275ec856',
          component: () => import('@/views/page3/page3-4.vue'),
          meta: {
            title: 'page3-4'
          }
        }
      ]
    },
    
  ]
})
