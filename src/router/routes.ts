import {RouteConfig} from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('pages/HomePage.vue')},
      {path: 'search', component: () => import('pages/SearchPage.vue')},
      {path: 'favourite', component: () => import('pages/FavouritePage.vue')},
      {path: 'setting/Index', component: () => import('pages/SettingPage.vue')},

      {path: 'timeTools/index', component: () => import('pages/toolsPages/TimeToolsPage.vue')},
      {path: 'processTools/Index', component: () => import('pages/toolsPages/ProcessToolsPage.vue')},
      {path: 'moreTools/index', component: () => import('pages/toolsPages/MoreToolsPage.vue')},
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
