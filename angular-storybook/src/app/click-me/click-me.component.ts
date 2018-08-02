import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-click-me',
  templateUrl: './click-me.component.html',
  styleUrls: ['./click-me.component.css']
})
export class ClickMeComponent implements OnInit {
	@Input() clickMessage: string;
  constructor() { }

  ngOnInit() {
  }
  onClickMe(){
  	this.clickMessage = 'You are my hero!';
  }
}
