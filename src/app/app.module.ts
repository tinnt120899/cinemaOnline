import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SlideShowComponent} from './component/slideshow/slideshow.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NewsComponent} from './component/page/news/news.component';
import {CommonModule} from '@angular/common';
import {ListGroupModule} from './component/listgroup/listgroup.module';
import {HttpClientModule} from '@angular/common/http';
import {ListPhimService} from './service/list-phim.service';
import {ListRapService} from './service/list-rap.service';
import {FooterComponent} from './component/footer/footer.component';
import {TabsetModule} from './component/tabset/tabset.module';
import {EditorModule} from '@tinymce/tinymce-angular';
import {LoginComponent} from './component/page/login/login.component';
import {RegisterComponent} from './component/page/register/register.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {ArchwizardModule} from 'angular-archwizard';
import {Globals} from './service/globals.service';
import {HeThongRapService} from './service/he-thong-rap.service';
import { SeatMapComponent } from './component/seat-map/seat-map.component';
import {BookTicketComponent} from './component/seat-map/book-ticket.component';
import {LichChieuService} from './service/lich-chieu.service';
import {PagesService} from './service/pages.service';
import {NewsInfoComponent} from './component/page/news/news-info/news-info.component';
import {ToasterService} from './toaster.service';
import {SentgmailService} from './service/sentgmail.service';


@NgModule({
  declarations: [
    AppComponent,
    SlideShowComponent,
    NewsComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    SeatMapComponent,
    BookTicketComponent,
    NewsInfoComponent
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
    TabsetModule,
    NgbPaginationModule,
    EditorModule,
    FormsModule,
    ArchwizardModule
  ],
  providers: [ListPhimService, ListRapService, Globals, HeThongRapService, LichChieuService, PagesService, ToasterService, SentgmailService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
