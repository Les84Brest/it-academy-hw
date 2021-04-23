import { Component, Input, OnInit } from '@angular/core';
import { TicketsEventsService } from '../tickets-event.service';
import { TicketsDatasource } from '../tickets.datasource';

@Component({
  moduleId: module.id,
  selector: 'hall',
  templateUrl: 'hall.component.html',
  styleUrls: ['hall.component.css']
})
export class Hall {
 
  private tickets:TicketsEventsService; // служба билетов

  constructor(_tickets:TicketsEventsService){
    this.tickets =_tickets;
  }


}
