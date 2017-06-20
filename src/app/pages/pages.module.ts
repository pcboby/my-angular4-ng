import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { PagesComponent } from './pages.component';
import { PagesRoutes } from './pages.routes';
import { SilderComponent, HeaderComponent, FooterComponent } from '../tpls';
import { MaterialModule } from "@angular/material";

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    PagesRoutes,
    TranslateModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [PagesComponent, HeaderComponent, FooterComponent, SilderComponent]
})
export class PagesModule { }
