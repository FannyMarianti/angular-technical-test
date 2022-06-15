import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=58b9b56bdac44e47a4ad819ffb06aea2');
  }

  getFilterData(filter = null) {
    if (filter) {
      return this.http.get('https://newsapi.org/v2/everything?', { params: filter! })
    } else {
      return this.http.get(`https://newsapi.org/v2/everything?`);
    }



  }
}
