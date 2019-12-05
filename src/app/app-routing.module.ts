import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TabsetComponent} from './component/tabset/tabset.component';
import {NewsComponent} from './component/page/news/news.component';
import {LoginComponent} from './component/page/login/login.component';
import {RegisterComponent} from './component/page/register/register.component';
import {SeatMapComponent} from './component/seat-map/seat-map.component';
import {NewsInfoComponent} from './component/page/news/news-info/news-info.component';



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
  },
  {
    path: 'news-info/:id',
    component: NewsInfoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'order',
    component: SeatMapComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
