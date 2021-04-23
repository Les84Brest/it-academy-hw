import {Injectable} from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()
export class TicketsEventsService {
  
  private events$:Observable<Array<boolean>>;

  

  constructor(){
   this.events$ = new Observable<Array<boolean>>();
  }

  getTickets():Observable<Array<boolean>>{
    return this.events$;
  }
}