import { Component, Input, OnInit } from '@angular/core';
import { TicketsDatasource } from '../tickets.datasource';

@Component({
  moduleId: module.id,
  selector: 'hall',
  templateUrl: 'hall.component.html',
  styleUrls: ['hall.component.css']
})
export class Hall {
 @Input() someinfo:string;

  private tickets:TicketsDatasource; // служба билетов

  constructor(_tickets:TicketsDatasource){
    this.tickets =_tickets;
  }
getFreeTickets():number{
  return this.tickets.getFreeTickets();
}

getOrderedTickets():number{
  return this.tickets.getTotalTicketsCount() - this.tickets.getFreeTickets();
}

}
