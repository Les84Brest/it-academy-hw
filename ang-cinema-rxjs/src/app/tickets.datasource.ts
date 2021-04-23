import { Injectable } from "@angular/core";

@Injectable()
export class TicketsDatasource {

  private tickets: Array<{ notOrdered: boolean }> = [
    { notOrdered: true },
    { notOrdered: true },
    { notOrdered: true },
    { notOrdered: true },
    { notOrdered: true },
    { notOrdered: true },
    { notOrdered: true },
    { notOrdered: true },
    { notOrdered: true },
    { notOrdered: true },
    
  ];

  /** 
   * Возвращаем массив номеров билетов либо сообщение, что 
   * подряд идущих билетов нет
   */
  public getOrderedTickets(cnt: number): Array<number> | string {
    let orderedTickets: Array<number> = [];
    let orderedTicketsCount = cnt; // колличество билетов, которые нужно выдать
    let newTickets = this.tickets.slice(); //копируем массив для работы
    let i = 0;
    while (i < newTickets.length) {
      if (orderedTicketsCount == 0) {
        break; //если все заказанные билеты выданы то выходим
      }
      if (newTickets[i].notOrdered) {

        //добавляем заказанные билеты в массив
        if (orderedTicketsCount > 0) {
          orderedTickets.push(i + 1);
          orderedTicketsCount--;
          newTickets[i].notOrdered = false;
          i++;
        }
      } else {
        //попытка не удалась обнуляем все
        orderedTickets = [];
        orderedTicketsCount = cnt;
        newTickets = this.tickets.slice();
        i++;
      }
    }

    if (orderedTicketsCount > 0) { // если не смогли все билеты выдать, то возвращаем ошибку
      return "Не могу выдать билеты";
    }
    else{ 
      this.tickets = newTickets; // обновляем инфу по билетам
      console.log(this.tickets);
      
      return  orderedTickets; // возвращаем массив выданных билетов
    }

  }

  /**Возращает количество еще непроданных билетов */
  public getFreeTickets(): number {
    let freeTickets: number = 0;
    this.tickets.forEach(item => {
      if (item.notOrdered) {
        freeTickets++;
      }
    })
    return freeTickets;
  }
  public getTotalTicketsCount() {
    return this.tickets.length;
  }
  log(s: string): void {
    console.log("Logger::log - " + s);
  }

}
