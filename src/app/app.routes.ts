import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) },
  
  {
    path: 'admin',
    loadComponent: () => import('./navbar/navbar.component').then(m => m.NavbarComponent),
    children: [
      { path: '', redirectTo: 'reportes', pathMatch: 'full' },
      { path: 'reportes', loadComponent: () => import('./admin/reportes/reports/reports.component').then(m => m.ReportsComponent) },
      { path: 'categoria', loadComponent: () => import('./admin/mantenedores/categoria/categoria/categoria.component').then(m => m.CategoriaComponent) },
      { path: 'subcategorias', loadComponent: () => import('./admin/mantenedores/subcategorias/subcategoria/subcategoria.component').then(m => m.SubcategoriaComponent) },
      { path: 'producto', loadComponent: () => import('./admin/mantenedores/producto/producto.component').then(m => m.ProductoComponent) },
      { path: 'usuario', loadComponent: () => import('./admin/mantenedores/usuario/usuario/usuario.component').then(m => m.UsuarioComponent) },
      { path: 'empleado', loadComponent: () => import('./admin/mantenedores/empleado/empleado/empleado.component').then(m => m.EmpleadoComponent) },
      { path: 'mesa', loadComponent: () => import('./admin/mantenedores/mesa/mesa/mesa.component').then(m => m.MesaComponent) },
      { path: 'tipocomprobante', loadComponent: () => import('./admin/mantenedores/tipocomprobante/tipocomprobante.component').then(tp => tp.TipocomprobanteComponent) },
      
    ]
  },

  {
    path: 'mesero',
    loadComponent: () => import('./navbar/navbar.component').then(m => m.NavbarComponent),
    children: [

      { path: '', redirectTo: 'mesas', pathMatch: 'full' }, // Esta línea es la nueva
      { path: 'mesas', loadComponent: () => import('./mesero/mesas/distribucion-mesas/distribucion-mesas.component').then(m => m.DistribucionMesasComponent) },
      { path: 'pagos', loadComponent: () => import('./mesero/pagos/pagos.component').then(m => m.PagosComponent) },
      
    ]
  },

  {
    path: 'cocina',
    loadComponent: () => import('./navbar/navbar.component').then(m => m.NavbarComponent),
    children: [
      { path: '', redirectTo: 'pedidos-pendientes', pathMatch: 'full' }, // Esta línea es la nueva

      { path: 'pedidos-pendientes', loadComponent: () => import('./cocina/pedidos-pendientes/pedidos-pendientes/pedidos-pendientes.component').then(m => m.PedidosPendientesComponent) },
    ]
  },


  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' } // Redirigir a login por defecto
];
