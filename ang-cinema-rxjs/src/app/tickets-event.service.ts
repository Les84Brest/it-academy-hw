import { Observable } from 'rxjs';

import { of } from 'rxjs/observable/of';
import { Injectable } from "@angular/core";




@Injectable()
export class TicketsEventsService {

  private seats = [
    false, false, false, false, false,
    false, true, false, false, false,
    false, false, true, false, false,
    false, false, false, false, false,

  ];

  getObservable(): Observable<boolean[]> {
    let observ = of(this.seats);
    return observ;
  }

  public getOrderedTickets(cnt: number): Array<number> | string {
    let orderedTickets: Array<number> = [];
    let orderedTicketsCount = cnt; // колличество билетов, которые нужно выдать
    let newTickets = this.seats.slice(); //копируем массив для работы
    let i = 0;
    //Узнаем есть ли нужное кол-во мест подряд для заказа
    let freeNearTickets: number[] = []; //свободные места рядом
    let freeZoneFlag: boolean = false; // флаг начала зоны свободных билетов
    newTickets.forEach(item => {
      if (!item) {
        if (freeZoneFlag) { //зона свободных билетов начата
          freeNearTickets[freeNearTickets.length - 1]++; //добавляем свободный билет
        } else {
          freeZoneFlag = true;
          freeNearTickets.push(1); // начинаем новую зону свободных белетов
        }
      } else {
        freeZoneFlag = false; // нет свободного билета. 
      }

    });

    //анализируем зоны свободных билетов

    if(freeNearTickets.length == 0){
      return "Все билеты проданы";
    }else{
      let matchFlag = false; - //флаг Зона подходит для продажи
      freeNearTickets.forEach(item => {
        if (item >= orderedTicketsCount) matchFlag = true;
      })
      if (!matchFlag){
        return "Нет достаточного количества свободных мест, <br> которые бы находились рядом! ";
      }
    }
    

    while (i < newTickets.length) {
      if (orderedTicketsCount == 0) {
        break; //если все заказанные билеты выданы то выходим
      }
      if (!newTickets[i]) {

        //добавляем заказанные билеты в массив
        if (orderedTicketsCount > 0) {
          orderedTickets.push(i + 1);
          orderedTicketsCount--;
          newTickets[i]= true; // отметили билет как выданный
          i++;
        }
      } else {
        //попытка не удалась обнуляем все
        orderedTickets = [];
        orderedTicketsCount = cnt;
        newTickets = this.seats.slice();
        i++;
      }
    }

    if (orderedTicketsCount > 0) { // если не смогли все билеты выдать, то возвращаем ошибку
      return "Не могу выдать билеты";
    }
    else {
      this.seats = newTickets; // обновляем инфу по билетам
      return orderedTickets; // возвращаем массив выданных билетов
    }

  }

}

// 
// import { Observable } from "rxjs";
// import { from } from 'rxjs/observable/from';

// @Injectable()
// export class TicketsEventsService {
//   seats = [false, false, false, true];

//   getObservable(): Observable<boolean[]>{

//     let observ = from(this.seats);
//     return from(this.seats);
//   }


//   public getOrderedTickets(cnt: number): Array<number> | string {
//     let orderedTickets: Array<number> = [];
//     let orderedTicketsCount = cnt; // колличество билетов, которые нужно выдать
//     let newTickets = this.tickets.slice(); //копируем массив для работы
//     let i = 0;
//     while (i < newTickets.length) {
//       if (orderedTicketsCount == 0) {
//         break; //если все заказанные билеты выданы то выходим
//       }
//       if (newTickets[i].notOrdered) {

//         //добавляем заказанные билеты в массив
//         if (orderedTicketsCount > 0) {
//           orderedTickets.push(i + 1);
//           orderedTicketsCount--;
//           newTickets[i].notOrdered = false;
//           i++;
//         }
//       } else {
//         //попытка не удалась обнуляем все
//         orderedTickets = [];
//         orderedTicketsCount = cnt;
//         newTickets = this.tickets.slice();
//         i++;
//       }
//     }

//     if (orderedTicketsCount > 0) { // если не смогли все билеты выдать, то возвращаем ошибку
//       return "Не могу выдать билеты";
//     }
//     else{ 
//       this.tickets = newTickets; // обновляем инфу по билетам
//       console.log(this.tickets);

//       return  orderedTickets; // возвращаем массив выданных билетов
//     }

//   }

//   /**Возращает количество еще непроданных билетов */
//   public getFreeTickets(): number {
//     let freeTickets: number = 0;
//     this.tickets.forEach(item => {
//       if (item.notOrdered) {
//         freeTickets++;
//       }
//     })
//     return freeTickets;
//   }


// }

// function from(arg0: boolean[]): number {
//   throw new Error("Function not implemented.");
// }
