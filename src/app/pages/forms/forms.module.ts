import { CommonModule } from '@angular/common';
import { FormsRoutes } from './forms.routes';
import { RouterModule } from '@angular/router';
import { FormsComponent } from './forms.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsRoutes
  ],
  declarations: [FormsComponent]
})
export class FormsModule { }
