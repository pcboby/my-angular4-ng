import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AboutsComponent } from './abouts.component';
import { AboutsRoutes } from './abouts.routes';

@NgModule({
  imports: [
    RouterModule,
    AboutsRoutes
  ],
  declarations: [AboutsComponent]
})
export class AboutsModule { }
