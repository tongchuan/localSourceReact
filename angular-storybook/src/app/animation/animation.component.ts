import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-animation',
  // templateUrl: './animation.component.html',
  template: `
  <button  (click)="onClick()" [@mystate]="state">sdafasdfasdf</button>

  `,
  styleUrls: ['./animation.component.css'],
  animations: [
  	trigger('mystate', [
  		state('inactive', style({
  			backgroundColor: '#eee',
  			transform: 'scale(1)'
  		})),
  		state('active', style({
  			backgroundColor: '#cfd8dc',
  			transform: 'scale(1.1)'
  		})),
  		transition('inactive => active', animate('100ms ease-in')),
  		transition('active => inactive', animate('100ms ease-out')),
      transition('void => inactive', [
        style({transform: 'translateX(-100%) scale(1)'}),
          animate(100)
        ]),
      transition('inactive => void', [
        animate(100, style({transform: 'translateX(100%) scale(1)'}))
      ]),
      transition('void => active', [
        style({transform: 'translateX(0) scale(0)'}),
        animate(200)
      ]),
      transition('active => void', [
        animate(200, style({transform: 'translateX(0) scale(0)'}))
      ])
  	])
  ]
})
export class AnimationComponent implements OnInit {
	state ='inactive'
  constructor() { }

  ngOnInit() {
  }
  onClick(){
  	this.state = this.state === 'active' ? 'inactive' : 'active';
  }
}
