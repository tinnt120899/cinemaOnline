import {NgModule} from '@angular/core';
import {ListGroupRoutingModule} from './listgroup-routing.module';
import {ListGroupComponent} from './listgroup.component';
import {CommonModule} from '@angular/common';
import {CumRapComponent} from './cumrap/cumrap.component';
import { WrapmovieComponent } from './wrapmovie/wrapmovie.component';
import {ReactiveFormsModule} from '@angular/forms';





@NgModule({
  declarations: [
    ListGroupComponent,
    CumRapComponent,
    WrapmovieComponent,

  ],
  imports: [
    CommonModule,
    ListGroupRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  exports: [
    ListGroupComponent
  ]

})
export class ListGroupModule {
}
