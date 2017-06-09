import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'Dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'
  }, {
    path: 'Form', loadChildren: './form/form.module#FormModule'
  }, {
    path: 'Lists', loadChildren: './lists/lists.module#ListsModule'
  }, {
    path: 'Abouts', loadChildren: './abouts/abouts.module#AboutsModule'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutes { }
