import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListRapService {
  private REST_API_SERVER = 'http://localhost:8085/cumrap/';
  constructor(private httpClient: HttpClient) {
  }

  public getListRap(tenrap) {
    return this.httpClient.get(this.REST_API_SERVER + tenrap);
  }
}
