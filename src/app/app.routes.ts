import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [{
  path: '',
  loadChildren: './pages/pages.module#PagesModule'
}, {
  path: 'Errors',
  loadChildren: './errors/errors.module#ErrorsModule'
}, {
  path: '**',
  redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutes {}
