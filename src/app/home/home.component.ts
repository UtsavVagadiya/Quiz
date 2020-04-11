import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
cat = [] ;
  constructor(private  api: ApiService , private rout: Router ) { }

  ngOnInit() {
    this.api.getAll().subscribe(
      (Response: any) => this.cat = Response.trivia_categories
    );
  }

  getAllque(id) {
    this.rout.navigate(['./home/', id]);

  }

}
