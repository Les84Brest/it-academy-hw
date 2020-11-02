export class Product {
  weight  = 0;
  name = '';
 
  
  getName():string{
    return this.name;
  }
  getScale():number{
    return this.weight;
  }
}

