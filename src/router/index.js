import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/login',
    name: 'Login',
    class: 'caca',
    component: Login
  },
  {
    path: '/scenarios',
    name: 'User Scenarios',
    component: () => import(/* webpackChunkName: "about" */ '../views/Scenarios.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// Redirections
router.beforeEach((to, from, next) => {
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  // Homepage when logged in
  if (to.path === '/' && loggedIn) {
    next('/scenarios');
  }

  // Redirect to login on auth required pages
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }

  // Redirect to scenarios if user is already logged in
  if (to.path === '/login' && loggedIn) {
    next('/scenarios');
  }


});

export default router
