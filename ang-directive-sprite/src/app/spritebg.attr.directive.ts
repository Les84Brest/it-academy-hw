import { Directive, ElementRef, Attribute, HostBinding, HostListener, Input, AfterViewInit } from "@angular/core";

@Directive({
  selector: "[spritebg]",
})
export class SpriteBgDirective implements AfterViewInit {
  @Input('sprite-url') spriteURL:string;
  @Input("sprite-offset-x") offsetX: number;
  
  offsetY: number;
  spriteWidth: number;
  spriteHeight: number;
  
  imageNumber: number = 1;
 

  constructor(
    private element: ElementRef,
   /* @Attribute("sprite-offset-x") offsetX: number,*/
    @Attribute("sprite-offset-y") offsetY: number,
    @Attribute("sprite-width") spriteWidth: number,
    @Attribute("sprite-height") spriteHeight: number,
   /* @Attribute("sprite-url") spriteURL: string = "../assets/default-smile.jpg",*/

  ) {

    // this.spriteURL = spriteURL || "../assets/default-smile.jpg";
    // this.offsetX = offsetX || 0;
    this.offsetY = offsetY || 0;
    this.spriteWidth = spriteWidth || 400;
    this.spriteHeight = spriteHeight || 400;

  }

  ngAfterViewInit() {
    

    this.element.nativeElement.style.backgroundImage = `url(${this.spriteURL})`;
    this.element.nativeElement.style.width = this.spriteWidth + 'px';
    this.element.nativeElement.style.height = this.spriteHeight + 'px';
  }

  @HostBinding("style.backgroundPositionX")
  private bgPositionX: string;

  @HostBinding("style.backgroundPositionY")
  private bgPositionY: string;
  @HostListener("click")

  nextImage(): void {
    // координаты сдвигов изображения спрайта
    let images: Array<{x:number, y:number}> = [
      {
        x: 0,
        y: 0,
      },
      {
        x: -400,
        y: 0,
      },
      {
        x: 0,
        y: -400,
      },
      {
        x: -400,
        y: -400,
      }
    ]
    if(this.imageNumber < images.length) {
      this.bgPositionX = images[this.imageNumber].x + 'px';
      this.bgPositionY = images[this.imageNumber].y + 'px';
      this.imageNumber++;
    }else{
      this.imageNumber = 0;
      this.bgPositionX = images[this.imageNumber].x + 'px';
      this.bgPositionY = images[this.imageNumber].y + 'px';
    }
    
  }

  

}
