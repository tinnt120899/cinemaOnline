import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Globals} from './globals.service';

@Injectable({
  providedIn: 'root'
})
export class ListRapService {
  private REST_API_SERVER = 'http://localhost:8085/cumrap';
  constructor(private httpClient: HttpClient) {
  }

  public getListRap(tenrap, tinhThanh) {
    return this.httpClient.get(this.REST_API_SERVER + '?heThongRap=' + tenrap + '&tinhThanh=' + tinhThanh);
  }

  public  getListRapById(id) {
    return this.httpClient.get(this.REST_API_SERVER + '/' + id);
  }
}
