import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { RouterModule } from '@angular/router';
import { FormRoutes } from './form.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormRoutes,
    FormsModule
  ],
  declarations: [FormComponent]
})
export class FormModule { }
