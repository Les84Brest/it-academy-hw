

/**класс весы */
class Scales {

    productList:IScalable[] = [];
  
  
    //добавляет продукт на весы
  
    add(product:IScalable):void{
      this.productList.push(product);
    }
  
    // возвращает вес продуктов в кг
    getSumScale():number{
      let weight: number = 0;
      this.productList.forEach((item:IScalable):void => {
        weight += item.getScale();
      });
      return weight;
    }
    // список продуктов на весах
    getNameList():Array<string>{
      let productsNames: Array<string> = [];
      this.productList.forEach((item:IScalable):void => {
        productsNames.push(item.getName());
  
      });
      return productsNames;
    }
  }


  /**Product classes */
  interface IScalable{
    getScale(): number;
    getName(): string;
  }


abstract class Product {
    weight  = 0;
    name = '';
   
    
    getName():string{
      return this.name;
    }
    getScale():number{
      return this.weight;
    }
  }

  /* класс продукта Apple */
  class Apple implements IScalable{

    weight  = 0.43;
    name = 'Apple';
    
    getScale(): number {
      return this.weight;
    }
    getName(): string {
      return this.name;
    }  
  
  }
/* класс продукта Tomato */
 
class Tomato implements IScalable{

  
  getScale(): number {
    return this.weight;
  }
  getName(): string {
    return this.name;
  }

    weight  = 0.32;
    name = 'Tomato';
  
  
  }



/*main programm */

let scales:Scales;

function init():void{
    scales = new Scales(); 

}
 // провели инициализацию весов;

init();

let tomato: Tomato = new Tomato;
let apple:Apple = new Apple;

scales.add(tomato);
scales.add(apple);

scales.add(tomato);
scales.add(apple);

scales.add(tomato);

console.log(scales.getNameList());
console.log(scales.getSumScale());


