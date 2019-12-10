import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListPhimService {
  private REST_API_SERVER = 'http://localhost:8085/admin/danhsachphim/';


  constructor(private httpClient: HttpClient) {
  }

  public getListPhim() {
    return this.httpClient.get(this.REST_API_SERVER );
  }
  public getSuatChieuPhim(routeName) {
    return this.httpClient.get(this.REST_API_SERVER + 'lichchieu/' + routeName);
  }
  public getThongTinPhim(id) {
    return this.httpClient.get(this.REST_API_SERVER  + id);
  }
  public getTinhThanh(tinhThanh) {
    return this.httpClient.get(this.REST_API_SERVER + 'lichchieu/' + tinhThanh);
  }
}
