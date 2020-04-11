import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient) { }

  getAll() {
    return this.http.get('https://opentdb.com/api_category.php');
  }
  getAllque2(id) {
    return this.http.get('https://opentdb.com/api.php?amount=10&category='  + id);
  }
}
