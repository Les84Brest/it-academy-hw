import { Component } from '@angular/core';

import { TicketsDatasource } from '../tickets.datasource';

@Component({
  moduleId: module.id,
  selector: 'cash',
  templateUrl: 'cash.component.html',
  styleUrls: ['cash.component.css']
})
export class Cash {

  
  messageType:string;
  private tickets:TicketsDatasource;
  showMessage: boolean = false; // настройка показа сообщения
  offlineTickets: number = 1; //автоматом присваиваем 1 билет к заказу
  onlineTickets: number = 1; //автоматом присваиваем 1 билет к заказу
  orderedTicketsCount: number;
  messageError: boolean = false;
  messageInfo: boolean = false;
  orderedTickets:Array<number>|string;
  messageClases:Object = {};

  constructor(_tickets:TicketsDatasource){
    this.tickets = _tickets;
  } 

  showOrderInfo(orderedTickets:Array<number>|string){
    if(typeof(orderedTickets) == 'string'){
      this.messageError = true;
      this.showMessage = true;
      this.messageClases = {error: true, success: false};
    }
    if(Array.isArray(orderedTickets)){
      this.messageInfo = true;
      this.showMessage = true;
      this.orderedTicketsCount = orderedTickets.length;
      this.messageClases = {error: false, success: true};
    }
  }

  renderTicket(ticket: number, lastTiket: string):string{
    if(lastTiket){
      return `${ticket} `;
    }else{
      return `${ticket}, `;
    }
  }
/**обрабатываем заказ билетов в онлайн кассе */
  clickHelperOnline():void{
    if(this.onlineTickets === undefined) return;
    this.orderedTickets = this.tickets.getOrderedTickets(this.onlineTickets);
    this.showOrderInfo(this.orderedTickets);
  }
/** обрабатываем заказ билетов в кассе театра */
  clickHelperOffline():void{
    if(this.offlineTickets === undefined) return;
    this.orderedTickets = this.tickets.getOrderedTickets(this.offlineTickets);
    this.showOrderInfo(this.orderedTickets);
 
  }

}
