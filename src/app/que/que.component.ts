import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-que',
  templateUrl: './que.component.html',
  styleUrls: ['./que.component.css']
})
export class QueComponent implements OnInit {
que2 = [];


  count1 = 0 ;
  count2 = 0 ;
  timeLeft: number = 60;
  interval;
lose = 0;
  i = 1 ;
  u = true ;
  constructor(private rout: ActivatedRoute , private api: ApiService) { }

  ngOnInit() {
    var id  = this.rout.snapshot.paramMap.get('id');
    this.api.getAllque2(id).subscribe(
      (Response: any) => this.que2 = Response.results
    );
  }
kk() {
    if (this.i === 10) {
      this.u = false ;
    } else {
      this.i = this.i + 1 ;
    }

}
  hh() {
    this.count1 = this.count1 + 1 ;

  }
  jj() {
    this.count2 = this.count1 ;
    this.lose = 10 - this.count2 ;
    this.u = false ;
  }
  startTimer() {

    this.interval = setInterval(() => {

      if(this.timeLeft > 0) {

        this.timeLeft--;

      } else {

        this.timeLeft = 60;

      }

    },1000);

  }



}
