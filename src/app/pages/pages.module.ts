import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { PagesComponent } from './pages.component';
import { PagesRoutes } from './pages.routes';
import { SilderComponent, HeaderComponent, FooterComponent } from '../tpls';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    PagesRoutes,
    TranslateModule
  ],
  declarations: [PagesComponent, HeaderComponent, FooterComponent, SilderComponent]
})
export class PagesModule { }
