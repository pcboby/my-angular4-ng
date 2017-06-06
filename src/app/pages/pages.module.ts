import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { PagesRoutes } from './pages.routes';
import { SilderComponent, HeaderComponent, FooterComponent } from '../tpls';

@NgModule({
  imports: [
    RouterModule,
    PagesRoutes
  ],
  declarations: [PagesComponent, HeaderComponent, FooterComponent, SilderComponent]
})
export class PagesModule { }
