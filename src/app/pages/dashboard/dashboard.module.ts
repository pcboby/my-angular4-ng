import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routes';

@NgModule({
  imports: [
    RouterModule,
    DashboardRoutes,
    TranslateModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
