import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SlideShowComponent } from './component/slideshow/slideshow.component';
import { TabsetComponent } from './component/tabset/tabset.component';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsComponent } from './component/page/news/news.component';
import { MovieInfoComponent } from './component/tabset/movie-info/movie-info.component';
import {CommonModule} from '@angular/common';
import {ListGroupModule} from './component/listgroup/listgroup.module';
import {HttpClientModule} from '@angular/common/http';
import {ListPhimService} from './service/list-phim.service';
import {ListRapService} from './service/list-rap.service';
import { FooterComponent } from './component/footer/footer.component';
import {TabsetModule} from './component/tabset/tabset.module';


@NgModule({
  declarations: [
    AppComponent,
    SlideShowComponent,
    NewsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CommonModule,
    ListGroupModule,
    HttpClientModule,
    TabsetModule
  ],
  providers: [ListPhimService, ListRapService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
