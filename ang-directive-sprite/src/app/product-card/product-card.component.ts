import { Attribute, Component, Input } from '@angular/core';

type Product ={
  productName: string,
  price: number,
  ip:  number,
  workTime: string,
  image: string,
}

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})



export class ProductCardComponent {

  spriteSrc: string = '../assets/kol-JBL.jpg';
  @Input('sprite-url') spriteURL:string;
 
  productData: Array<Product> = [
    {
      productName: 'SVEN PS-650',
      price: 261.47,
      ip: 54,
      workTime: '15 часов',
      image: '../assets/kol-sven.jpg',
    },
    {
      productName: 'JBL Flip 5 ',
      price: 238.05,
      ip: 66,
      workTime: '13 часов',
      image: '../assets/kol-JBL.jpg',
    },
  ]

  

  currentProduct: Product;

  constructor(
    
  ) { 
    this.currentProduct = this.productData[0];
   
    
  }
  getImageURL():string{
    return this.currentProduct.image;
  }

}
