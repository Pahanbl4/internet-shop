export const childRoutes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    data: { icon: 'dashboard', text: 'Dashboard' }
  },
  {
    path: 'charts',
    loadChildren: () =>
      import('./charts/charts.module').then(m => m.ChartsModule),
    data: { icon: 'bar_chart', text: 'Charts' }
  },
  {
    path: 'tables',
    loadChildren: () =>
      import('./tables/tables.module').then(m => m.TablesModule),
    data: { icon: 'table_chart', text: 'Tables' }
  },
  {
    path: 'animations',
    loadChildren: () =>
      import('./animations/animations.module').then(m => m.AnimationsModule),
    data: { icon: 'perm_media', text: 'Animations' }
  },
  {
    path: 'google-maps',
    loadChildren: () =>
      import('./google-map-demo/google-map-demo.module').then(
        m => m.GoogleMapDemoModule
      ),
    data: { icon: 'place', text: 'Google Maps' }
  }
];
