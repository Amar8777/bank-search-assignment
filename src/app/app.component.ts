import { Component, OnInit } from '@angular/core';
import { Banks } from './banks';
import { PagerService } from './services/index';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  searchText;
  bankdata: any = [];
  selectedCity: String = 'MUMBAI';

  cities = ['MUMBAI', 'PUNE', 'BANGLORE'];
  private allItems: any[];
  pager: any = {};
  pagedItems: any[];
  inputName: String = '';
  constructor(private http: Http, private pagerService: PagerService) {
    this.selectedCity = this.cities[1];
  }

  ngOnInit() {
    this.fetchbankdetails();
  }

  fetchbankdetails() {
    this.http.get('https://vast-shore-74260.herokuapp.com/banks?city=' + this.selectedCity)
      .map((response: Response) => response.json())
      .subscribe(data => {
        this.allItems = data;
        this.setPage(1);
      });
  }

  onChange(city: any) {
    alert(city);
    this.fetchbankdetails();
  }
  setPage(page: number) {
    this.pager = this.pagerService.getPager(this.allItems.length, page);
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }



  details(item) {

  }
}
