import Vue from 'vue';
import VueRouter from 'vue-router';

import Auth from './components/auth/Auth.vue';
import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';
import Newsfeed from './components/dash/Newsfeed.vue';
import Dash from './components/dash/Dash.vue';
import Profile from './components/dash/Profile.vue';

Vue.use(VueRouter);


var router = new VueRouter({
  routes: [
      {
          path: '/',
          component: Dash,
          redirect: '/newsfeed',
          children: [
            {
              path: 'newsfeed',
              component: Newsfeed,
              meta: { requireAuth: true }
            },
            {
              path: 'profile/:username',
              component: Profile
            }
          ]
        },

        {
          path: "/auth",
          component: Auth,
          redirect: "/auth/login",
          children: [
              {
                path: "login",
                component: Login,
                meta: { requireGuest: true }
              },
              {
                path: "register",
                component: Register,
                meta: { requireGuest: true }

              },
          ]
      },
      
  ]
});

export default router;