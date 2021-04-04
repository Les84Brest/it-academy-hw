import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  
  selector: 'link-comp',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.sass']
})
export class LinkComponent {
  
  

  @ViewChild("comm") commentRef: any; 
 
  public currentComment:string="комментарий";
  public setComment():void{
    console.log(this.commentRef);
    this.currentComment = this.commentRef.nativeElement.value;
  }
}
