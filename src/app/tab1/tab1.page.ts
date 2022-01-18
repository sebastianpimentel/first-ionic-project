import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor() {}

  ngOnInit() {
    let num=20;
    //debugge;//temporal
    num=40;
    num=num+25;
    num=0;
      console.log(num);
      
  }
}
