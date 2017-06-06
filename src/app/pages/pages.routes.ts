import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'Dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'
  }, {
    path: 'Forms', loadChildren: './forms/forms.module#FormsModule'
  }, {
    path: 'Aboutus', loadChildren: './aboutus/aboutus.module#AboutusModule'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutes { }
