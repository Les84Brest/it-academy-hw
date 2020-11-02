

/**класс весы */
class Scales {

    productList:Product[] = [];
  
  
    //добавляет продукт на весы
  
    add(product:Product):void{
      this.productList.push(product);
    }
  
    // возвращает вес продуктов в кг
    getSumScale():number{
      let weight: number = 0;
      this.productList.forEach((item:Product):void => {
        weight += item.weight;
      });
      return weight;
    }
    // список продуктов на весах
    getNameList():Array<string>{
      let productsNames: Array<string> = [];
      this.productList.map((item:Product):void => {
        productsNames.push(item.getName());
  
      })
      return productsNames;
    }
  }


  /**Product classes */

class Product {
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
  class Apple extends Product{
    weight  = 0.43;
    name = 'Apple';
  
    constructor(){
      super();
    }
  
  }
/* класс продукта Tomato */
 
class Tomato extends Product{
    weight  = 0.32;
    name = 'Tomato';
  
    
    constructor(){
      super();
    }
  
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


