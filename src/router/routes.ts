import {RouteConfig} from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('pages/Index.vue')},
      {path: 'search', component: () => import('pages/Search.vue')},
      {path: 'favourite', component: () => import('pages/Favourite.vue')},
      {path: 'timeTools/index', component: () => import('pages/timeTools/Index.vue')},
      {path: 'processTools/Index', component: () => import('pages/processTools/Index.vue')},
      {path: 'setting/Index', component: () => import('pages/setting/Index.vue')},
      {path: 'moreTools/index', component: () => import('pages/moreTools/Index.vue')},
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
