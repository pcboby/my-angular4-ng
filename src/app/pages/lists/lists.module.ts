import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListsComponent } from './lists.component';
import { ListsRoutes } from "./lists.routes";

@NgModule({
  imports: [
    RouterModule,
    ListsRoutes
  ],
  declarations: [ListsComponent]
})
export class ListsModule { }
