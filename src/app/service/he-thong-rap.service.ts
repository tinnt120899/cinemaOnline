import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class HeThongRapService {
  private REST_API_SERVER = 'http://localhost:8085/hethongrap';
  constructor(private httpClient: HttpClient) {
  }
  public getHeThongRap(tinhThanh) {
    return this.httpClient.get(this.REST_API_SERVER + '?tinhThanh=' + tinhThanh);
  }
}
