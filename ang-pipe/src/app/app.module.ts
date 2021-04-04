import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ApplesReport } from './applesrepot/applesrepot.component';
import { NumwordPipe } from './numword.pipe';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ApplesReport, NumwordPipe ],
  providers: [],
  bootstrap: [ApplesReport]
})
export class AppModule { }
