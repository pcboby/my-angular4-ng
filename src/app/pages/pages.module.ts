import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { PagesRoutes } from './pages.routes';

@NgModule({
  imports: [
    RouterModule,
    PagesRoutes
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
