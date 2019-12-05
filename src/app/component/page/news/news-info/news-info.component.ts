import { Component, OnInit } from '@angular/core';
import {PagesService} from '../../../../service/pages.service';

@Component({
  selector: 'app-news-info',
  templateUrl: './news-info.component.html',
  styleUrls: ['./news-info.component.scss']
})
export class NewsInfoComponent implements OnInit {
  listNewsInfo: {};

  constructor(private pagesService: PagesService) { }

  ngOnInit() {
    this.pagesService.getNewsInfoById(window.location.pathname.replace('/news-info/', '')).subscribe(res => {
      this.listNewsInfo = res[0];
    });
  }

}
