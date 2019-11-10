import { Component, OnInit } from '@angular/core';
import {Email} from './inbox.model';
import { emailData } from './data';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
// paginated email data
  emailData: Array<Email>;

  // page number
  page = 1;
  // default page size
  pageSize = 4;
  // total number of records
  totalRecords = 0;

  // start and end index
  startIndex = 1;
  endIndex = 4;
  pageHtml = '<p>Tín đập troai</p>';

  constructor() { }

  ngOnInit() {
    this._fetchData();
  }

  /**
   * Handle on page click event
   */
  onPageChange(page: any) {
    this.startIndex = (page - 1) * this.pageSize + 1;
    this.endIndex = (page - 1) * this.pageSize + this.pageSize;
    if (this.endIndex > this.totalRecords) {
      this.endIndex = this.totalRecords;
    }
    this.emailData = emailData.slice(this.startIndex - 1, this.endIndex);
  }

  /**
   * Gets the email data
   * Note: In real application - you might want to call some api to get the email records
   */
  private _fetchData() {
    this.emailData = emailData;
    this.totalRecords = emailData.length;
  }
}
