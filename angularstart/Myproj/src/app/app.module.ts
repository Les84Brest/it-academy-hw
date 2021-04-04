import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './FormComponent/form.component';
import {LinkComponent} from './LinkComponent/link.component';


@NgModule({
  declarations: [
    AppComponent,
    LinkComponent,
	FormComponent,
  ],
  imports: [
    BrowserModule, FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
