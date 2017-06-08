import { ListsRoutes } from './lists.routes';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListsComponent } from './lists.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ListsRoutes
  ],
  declarations: [ListsComponent]
})
export class ListsModule { }
