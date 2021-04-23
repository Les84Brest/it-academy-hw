import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';

import { ProductCardComponent } from './product-card/product-card.component';
import { SpriteBgDirective } from './spritebg.attr.directive';

@NgModule({
  imports: [ BrowserModule, FormsModule, CommonModule],
  declarations: [
    ProductCardComponent,
    SpriteBgDirective,
  ],
  providers: [],
  bootstrap: [ProductCardComponent]
})
export class AppModule { }
