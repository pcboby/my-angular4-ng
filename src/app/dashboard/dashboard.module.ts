import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routes';

@NgModule({
  imports: [
    RouterModule,
    DashboardRoutes
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
