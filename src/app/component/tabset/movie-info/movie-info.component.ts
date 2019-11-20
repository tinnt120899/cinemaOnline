import {Component, OnInit} from '@angular/core';
import {ListPhimService} from '../../../service/list-phim.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})

export class MovieInfoComponent implements OnInit {
  thongTinPhim: {};
  link: string;

  constructor(private listPhimService: ListPhimService, private sanitizer: DomSanitizer) {
  }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit() {
    this.listPhimService.getThongTinPhim(window.location.pathname.replace('/thongtinphim/', '')).subscribe(res => {
      this.thongTinPhim = res[0];
      // @ts-ignore
      this.link = 'https://www.youtube.com/embed/' + this.thongTinPhim.linkTrailer;

    });
  }

}
