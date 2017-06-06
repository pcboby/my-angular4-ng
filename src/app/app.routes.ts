import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [{
  path: 'Dashboard',
  loadChildren: './dashboard/dashboard.module#DashboardModule'
}, {
  path: 'Errors',
  loadChildren: './errors/errors.module#ErrorsModule'
}, {
  path: '**',
  redirectTo: 'Dashboard'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutes {}
