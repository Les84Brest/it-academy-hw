
//interfaces

interface IScalable {
  getScale(): number;
  getName(): string;
}

interface IStorageEngine {

  addItem(item: Product): number;
  getItem(index: number): Product;
  getCount(): number;

}


/**Storage Engines */

class ScalesStorageEngineArray implements IStorageEngine {

  products: Product[] = [];

  addItem(item: Product): number {

    let index = this.products.push(item);
    return index - 1; // индекс добавленного элемента

  }
  getItem(index: number): Product {
    return this.products[index];
  }
  getCount(): number {
    return this.products.length;
  }

}

class ScalesStorageEngineLocalStorage implements IStorageEngine {

  products: Product[] = [];

  //implimented methods

  addItem(item: Product): number {
    this.getItemsFromLS(); //получаем все продукты в массив
    let index: number = this.products.push(item);
    
    localStorage.setItem('scalesProducts', JSON.stringify(this.products));
    return index - 1;

  }
  getItem(index: number): Product {
    this.getItemsFromLS(); //получаем все продукты в массив
    if(this.products.length > 0 && index < this.products.length){
      return this.products[index];
    }

  }
  getCount(): number {
    throw new Error("Method not implemented.");
  }

  //вынимает из Local Storage продукты и ложит в массив products

  private getItemsFromLS() {
    if (localStorage.getItem('scalesProducts') != null) {
      // получаем хэш из продуктов
      
      let productsHash = JSON.parse(localStorage.getItem('scalesProducts'));
      
      for (const item of productsHash) {
        let prod:Product = Product.fromJSON(item);
        this.products.push(prod);
      }

    }
  }

}
/**класс весы */
class Scales<StorageEngine extends IStorageEngine> {

  storageEngine: StorageEngine;

  constructor(_storageEngine: StorageEngine) {
    this.storageEngine = _storageEngine;
  }

  //добавляет продукт на весы

  add(product: Product): void {
    this.storageEngine.addItem(product);
  }

  // возвращает вес продуктов в кг
  getSumScale(): number {
    if (this.storageEngine.getCount() === 0) {
      return 0;
    }
    let totalWeight = 0;
    for (let i = 0; i < this.storageEngine.getCount(); i++) {
      totalWeight += this.storageEngine.getItem(i).getScale();

    }

    return totalWeight;
  }
  // список продуктов на весах
  getNameList(): Array<string> {
    if (this.storageEngine.getCount() === 0) {
      return [''];
    }
    let names: Array<string> = [];
    for (let i = 0; i < this.storageEngine.getCount(); i++) {
      names.push(this.storageEngine.getItem(i).getName());

    }
    return names;
  }
}




/**Product classes */

class Product {
  private weight = 0;
  private name = '';
  
  constructor(_name:string, _weight:number){
    this.weight = _weight;
    this.name = _name;
  }

  getName(): string {
    return this.name;
  }
  getScale(): number {
    return this.weight;
  }
// для сохранения в Local Storage
  static toJSON(): Object{
    let hash = {
      $type: 'Product',
      weight: this.weight,
      name: this.name,
    }
    return hash;
  }

  static fromJSON(productHash: {name:string, weight: number} ):Product{
    return new Product(productHash.name, productHash.weight);
  }
}


/*main programm */
let scalesStorageEngineArray = new ScalesStorageEngineArray();
// создаем весы с хранением в массиве
let scalesArray = new Scales(scalesStorageEngineArray);


let prod1 = new Product('Банан', 300);
let prod2 = new Product('Колбаса', 500);
let prod3 = new Product('Хлеб черный', 615);
let prod4 = new Product('Авокадо', 250);

scalesArray.add(prod1);
scalesArray.add(prod3);
scalesArray.add(prod2);

console.log(scalesArray.getSumScale());
console.log(scalesArray.getNameList());

