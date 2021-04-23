import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'apl-report',
  templateUrl: 'applesrepot.component.html',
  styleUrls: ['applesrepot.component.css']
})
export class ApplesReport {
  apples = {
    value: 15,
  }
  apples1 = {
    value: 25,
  }
  apples2 = {
    value: 125,
  }
  apples3 = {
    value: 350,
  }
  constructor(){}
  
}
