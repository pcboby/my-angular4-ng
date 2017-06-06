import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutusRoutes } from './aboutus.routes';
import { AboutusComponent } from './aboutus.component';

@NgModule({
  imports: [
    RouterModule,
    AboutusRoutes
  ],
  declarations: [AboutusComponent]
})

export class AboutusModule { }
