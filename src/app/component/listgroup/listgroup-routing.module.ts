import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ListGroupComponent} from './listgroup.component';
import {MovieInfoComponent} from '../tabset/movie-info/movie-info.component';




const routes: Routes = [
  {
    path: '',
    redirectTo: '/bhdbc',
    pathMatch: 'full'
  },
  {
    path: 'bhdbc',
    component: ListGroupComponent
  },
  {
    path: 'bhdgv',
    component: ListGroupComponent
  },
  {
    path: 'bhdq9',
    component: ListGroupComponent
  },
  {
    path: 'bhdq2',
    component: ListGroupComponent
  },
  {
    path: 'bhdq1',
    component: ListGroupComponent
  },
  {
    path: 'bhdq10',
    component: ListGroupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListGroupRoutingModule {

}
