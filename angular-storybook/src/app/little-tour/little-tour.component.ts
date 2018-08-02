import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-little-tour',
  // templateUrl: './little-tour.component.html',
  // template:  `
  // 	<input
  // 		#newHero
  // 		(keyup.enter)="addItem(newHero.value)"
  // 		(blur)="addItem(newHero.value); newHero.value='' " />
  // 		<button (click)="addItem(newHero.value)">Add</button>
  // 	<ul>
  // 		<li *ngFor="let item of listData">
  // 			{{item}}
  // 		</li>
  // 	</ul>
  // `,
  template:  `
  	<input
  		#newHero
  		(keyup.enter)="addItem(newHero)"
  		(blur)="addItem(newHero); newHero.value='' " />
  		<button (click)="addItem(newHero)">Add</button>
  	<ul>
  		<li *ngFor="let item of listData">
  			{{item}}
  		</li>
  	</ul>
  `,
  styleUrls: ['./little-tour.component.css']
})
export class LittleTourComponent implements OnInit {
	listData: Array<string> = []
  constructor() { }

  ngOnInit() {
  }
  // addItem(eveny: any){
  // 	this.listData.push(event.target.value)
  // }
  // addItem(value: string){
  // 	if(value){
  // 		this.listData.push(value)
  // 		console.log(this)
  // 	}
  // }
  addItem(element: any){
  	// console.log(element)
  	if(element.value){
  		this.listData.push(element.value)
  		element.value = ''
  		// console.log(this)
  	}
  }
}
