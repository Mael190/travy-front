import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/agenda',
    name: 'agenda',
    component: () => import('../views/AgendaView.vue')
  },
  {
    path: '/channel/:id',
    name: 'channel',
    component: () => import('../views/ChannelView.vue')
  },
  {
    path: '/message/:id',
    name: 'message',
    component: () => import('../views/MessageView.vue')
  },
  {
    path: '/todo',
    name: 'todo',
    component: () => import('../views/ToDoView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('token');

  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router
