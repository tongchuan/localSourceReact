import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyup',
  // templateUrl: './keyup.component.html',
  template: `
  	<input (keyup)="onKey($event)" />
  	<p>{{values}}</p>
  	<input #box (keyup)="onKey2(box.value)">
  	<p>{{boxValue}}</p>
  	<input #box2 (keyup.enter)="onEnter(box2.value)">
  	<p>{{boxValue2}}</p>
  `,
  styleUrls: ['./keyup.component.css']
})
export class KeyupComponent implements OnInit {
	values: string = '';
	boxValue: string = '';
	boxValue2: string = '';
  constructor() { }

  ngOnInit() {
  }
  // onKey(event: any){
  // 	this.values += event.target.value + '|';
  // }
  onKey(event: KeyboardEvent) {
  	this.values += (<HTMLInputElement>event.target).value + '|' ;
  }

  onKey2(value: string) {
  	this.boxValue = value;
  }
  
  onEnter(value: string) {
  	this.boxValue2 = value;
  }
}
