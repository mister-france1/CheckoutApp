import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/CheckoutPage.vue') }],
  },
  {
    path: '/upsell',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/UpsellPage.vue') }],
  },
  {
    path: '/thankyou',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ThankYouPage.vue') }],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
