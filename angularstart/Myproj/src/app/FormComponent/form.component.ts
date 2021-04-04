import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  
  selector: 'form-comp',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent {
  
  constructor(){}
 
  public carName: string = "Porshe Panamera";
  public carNum: string = "1847 ЕТ-1";
  carOwner:string = 'Alex Семенюк';
  carPrice:number = 10115;
  
  getCarRegistration():Date{
    return new Date();
  }

  FormSubmit(frm:NgForm){
    console.log( frm.value);
    console.log(frm.errors);
    

    
  }
}
