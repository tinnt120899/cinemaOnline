import { Component} from '@angular/core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fafilm = faFilm;
  tinhThanh: any = [
    {
      name: 'Hồ Chí Minh',
      routeName: 'hcm'
    },
    {
      name: 'Hà Nội',
      routeName: 'hanoi'
    },
    {
      name: 'Cà Mau',
      routeName: 'camau'
    }
  ];


  // scroll(el: HTMLElement) {
  //   el.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  // }
}
