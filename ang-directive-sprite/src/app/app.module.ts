import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ProductCardComponent } from './product-card/product-card.component';
import { SpriteBgDirective } from './spritebg.attr.directive';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [
    ProductCardComponent,
    SpriteBgDirective,
  ],
  providers: [],
  bootstrap: [ProductCardComponent]
})
export class AppModule { }
