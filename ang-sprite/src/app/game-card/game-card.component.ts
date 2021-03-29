import { Component } from '@angular/core';

enum Direction {
  Up = 1,
  Down = 2,
  Left = 3,
  Right = 4,
}

@Component({
  selector: 'game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})


export class GameCardComponent {

   cardImage:string = '../../assets/cards-spr.png';

  constructor() { }

 
}
