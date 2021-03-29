import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { GameDeskComponent } from './game-desk/game-desk.component';
import { HotelComponent } from './hotel.component';
import { GameCardComponent } from './game-card/game-card.component';
import { SpriteComponent } from './sprite/sprite.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [
    GameDeskComponent,
   HotelComponent,
   GameCardComponent,
   SpriteComponent,
  ],
  providers: [],
  bootstrap: [GameDeskComponent]
})
export class AppModule { }
