export const routes  = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: 'landing-home',
    action: () => import('../pages/landigHome/index.js'),
  },
  {
    path: '/create',
    component: 'create-product',
    action: () => import('../pages/createProducts/index.js'),
  },
];
