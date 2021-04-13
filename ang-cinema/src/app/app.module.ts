import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Cinema } from './cinema/cinema.component';
import { NumwordPipe } from './numword.pipe';
import { Cash } from './cash/cash.component';
import { Hall } from './hall/hall.component';
import { TicketsDatasource } from './tickets.datasource';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [Cinema, Cash, Hall, NumwordPipe ],
  providers: [TicketsDatasource],
  bootstrap: [Cinema]
})
export class AppModule { }
