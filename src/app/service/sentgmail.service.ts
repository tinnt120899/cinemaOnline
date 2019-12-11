import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SentgmailService {
  private REST_API_SERVER = 'http://localhost:8085/sentgmail';


  constructor(private httpClient: HttpClient) {
  }
  public sentgmail(gmail, noiDung) {
    return this.httpClient.get(this.REST_API_SERVER  + '?gmail=' + gmail + '&noiDung=' + noiDung);
  }
}
