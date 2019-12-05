import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LichChieuService {
  private REST_API_SERVER = 'http://localhost:8085/';


  constructor(private httpClient: HttpClient) {
  }

  public getNgayChieu(id: string) {
    return this.httpClient.get(this.REST_API_SERVER + 'ngaychieu/' + id);
  }

  public getSuatChieu(id: string) {
    return this.httpClient.get(this.REST_API_SERVER + 'suatchieu/' + id);
  }

  public getSeatMap(id: string) {
    return this.httpClient.get(this.REST_API_SERVER + 'seatmap/' + id);
  }
}
