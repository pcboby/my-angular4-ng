import { FormsRoutes } from './forms.routes';
import { RouterModule } from '@angular/router';
import { FormsComponent } from './forms.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    RouterModule,
    FormsRoutes
  ],
  declarations: [FormsComponent]
})
export class FormsModule { }
