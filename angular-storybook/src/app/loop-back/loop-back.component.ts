import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loop-back',
  // templateUrl: './loop-back.component.html',
  template: `
  	<input #box (keyup)="0">
  	<p>{{box.value}}</p>
  `,
  styleUrls: ['./loop-back.component.css']
})
export class LoopBackComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
