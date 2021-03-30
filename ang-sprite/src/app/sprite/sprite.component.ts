import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'sprite',
  templateUrl: './sprite.component.html',
  styleUrls: ['./sprite.component.css']
})



export class SpriteComponent {

@Input("url")
public imageUrl:string;

@Input("offset-x")
public offsetX:number;

@Input("offset-y")
public offsetY:number;

@Input("width")
public imgWidth:number;

@Input("height")
public imgHeight:number;


@Output("spiteClick")
private spiteClick:EventEmitter<string> =new EventEmitter<string>();



constructor() { }

handleClick(){
  this.offsetX = -(Math.floor(Math.random()*12)*192);
  this.offsetY = -(Math.floor(Math.random()*3)*280);
  this.spiteClick.emit('clicked');

}


}
