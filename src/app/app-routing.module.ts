import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TabsetComponent} from './component/tabset/tabset.component';
import {ListGroupComponent} from './component/listgroup/listgroup.component';
import {NewsComponent} from './component/page/news/news.component';
import {MovieInfoComponent} from './component/tabset/movie-info/movie-info.component';



const routes: Routes = [
  {
    path: '',
    component: TabsetComponent
  },
  {
    path: 'lichchieu',
    component: TabsetComponent
  },
  {
    path: 'cumrap', loadChildren: () => import('./component/listgroup/listgroup.module').then(m => m.ListGroupModule)
  },
  {
    path: 'tintuc',
    component: NewsComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
