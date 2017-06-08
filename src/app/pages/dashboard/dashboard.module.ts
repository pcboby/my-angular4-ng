import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutes,
    TranslateModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
