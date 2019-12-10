import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Globals} from './globals.service';

@Injectable({
  providedIn: 'root'
})
export class ListRapService {
  private REST_API_SERVER = 'http://localhost:8085/admin/danhsachrap';
  constructor(private httpClient: HttpClient) {
  }

  public getListRap(tenrap, cumrap) {
    return this.httpClient.get(this.REST_API_SERVER + '/dk' + '?heThongRap=' + tenrap + '&cumRap=' + cumrap);
  }

  public  getListRapById(id) {
    return this.httpClient.get(this.REST_API_SERVER + '/' + id);
  }
}
