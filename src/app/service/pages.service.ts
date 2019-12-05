import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  private REST_API_SERVER = 'http://localhost:8085/';


  constructor(private httpClient: HttpClient) {
  }

  public getNews() {
    return this.httpClient.get(this.REST_API_SERVER + 'news');
  }
  public getNewsInfoById(id) {
    return this.httpClient.get(this.REST_API_SERVER + 'news/' + id);
  }
}
