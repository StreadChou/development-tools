import {RouteConfig} from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('pages/Index.vue')},
      {path: 'search', component: () => import('pages/Search.vue')},
      {path: 'timeTools/index', component: () => import('pages/TimeTools/Index.vue')},
      {path: 'processTools/Index', component: () => import('pages/ProcessTools/Index.vue')},
      {path: 'setting/Index', component: () => import('pages/Setting/Index.vue')},
      {path: 'more/index', component: () => import('pages/MoreTools/Index.vue')},
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
