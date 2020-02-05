import React from 'react';

const Dashboard = React.lazy(() => import('./views//Dashboard/Dashboard_Prueba'));
const Integration = React.lazy(() => import('./views/Integration/integration'));
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/integration', name: 'Integracion', component: Integration },
];

export default routes;
