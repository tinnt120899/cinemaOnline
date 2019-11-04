import {NgModule} from '@angular/core';
import {TabsetComponent} from './tabset.component';
import {TabsetRoutingModule} from './tabset-routing.module';
import {MovieInfoComponent} from './movie-info/movie-info.component';
import {CommonModule} from '@angular/common';
import {NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    TabsetComponent,
    MovieInfoComponent
  ],
  imports: [
    TabsetRoutingModule,
    CommonModule,
    NgbTabsetModule
  ],
  exports: [],
  providers: []

})
export class TabsetModule {
}
