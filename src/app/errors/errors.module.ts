import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ErrorsComponent } from './errors.component';
import { ErrorsRoutes } from './errors.routes';

@NgModule({
  imports: [
    ErrorsRoutes,
    RouterModule
  ],
  declarations: [ErrorsComponent]
})
export class ErrorsModule { }
