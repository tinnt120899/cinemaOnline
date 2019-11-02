import {Component, Input, OnInit} from '@angular/core';
import {ListRapService} from '../../../service/list-rap.service';

@Component({
  selector: 'app-cumrap',
  templateUrl: './cumrap.component.html',
  styleUrls: ['./cumrap.component.scss']
})
export class CumRapComponent implements OnInit {
  @Input() nameList: any;
  // tslint:disable-next-line:ban-types
  listRap: Object;
  constructor(private listRapService: ListRapService) { }

  ngOnInit() {
      this.listRapService.getListRap(this.nameList).subscribe(res => {
        this.listRap = res;
      });
  }


}
