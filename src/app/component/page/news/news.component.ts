import { Component, OnInit } from '@angular/core';
import {PagesService} from '../../../service/pages.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  listNews: {};


  constructor(private pagesService: PagesService) { }

  ngOnInit() {
    this.pagesService.getNews().subscribe(res => {
      this.listNews = res;
      console.log(this.listNews);
    });
  }

}
