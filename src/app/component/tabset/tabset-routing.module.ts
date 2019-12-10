import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieInfoComponent} from './movie-info/movie-info.component';





const routes: Routes = [
  {
    path: 'danhsachphim/:id',
    component: MovieInfoComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [
  ],
  exports: [RouterModule]
})
export class TabsetRoutingModule {

}
