import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AboutsComponent } from './abouts.component';
import { AboutsRoutes } from './abouts.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AboutsRoutes
  ],
  declarations: [AboutsComponent]
})
export class AboutsModule { }
