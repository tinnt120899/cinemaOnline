import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListPhimService {
  private REST_API_SERVER = 'http://localhost:8085/';


  constructor(private httpClient: HttpClient) {
  }

  public getListPhim() {
    return this.httpClient.get(this.REST_API_SERVER + 'lichchieu');
  }
  public getSuatChieuPhim(routeName) {
    return this.httpClient.get(this.REST_API_SERVER + routeName);
  }
  public getThongTinPhim(id) {
    return this.httpClient.get(this.REST_API_SERVER + 'thongtinphim/' + id);
  }
}
