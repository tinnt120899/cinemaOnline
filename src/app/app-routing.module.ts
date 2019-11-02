import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TabsetComponent} from './component/tabset/tabset.component';



const routes: Routes = [
  {
    path: 'lichchieu',
    component: TabsetComponent
  },
  {
    path: 'cumrap', loadChildren: () => import('./component/listgroup/listgroup.module').then(m => m.ListGroupModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
