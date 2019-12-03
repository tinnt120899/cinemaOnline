import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges} from '@angular/core';
import {ListRapService} from '../../../service/list-rap.service';
import {Globals} from '../../../service/globals.service';

@Component({
  selector: 'app-cumrap',
  templateUrl: './cumrap.component.html',
  styleUrls: ['./cumrap.component.scss']
})
export class CumRapComponent implements OnInit, OnChanges {
  @Input() nameList: any;
  @Input() tinhThanh: any;
  @Output() click = new EventEmitter<string>();
  // tslint:disable-next-line:ban-types
  listRap: Object;
  constructor(private listRapService: ListRapService,
              private globals: Globals) { }

  ngOnInit() {
    }

  ngOnChanges(changes: SimpleChanges): void {
    this.listRapService.getListRap(this.nameList, this.tinhThanh).subscribe(res => {
      this.listRap = res;
    });
  }

  Click(routeName: string, id: string) {
    this.click.emit(routeName);
    this.globals.idRap = id;
  }
}
