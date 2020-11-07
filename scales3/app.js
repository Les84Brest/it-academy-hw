//interfaces
/**Storage Engines */
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.products = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (item) {
        var index = this.products.push(item);
        return index - 1; // индекс добавленного элемента
    };
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return this.products[index];
    };
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this.products.length;
    };
    return ScalesStorageEngineArray;
}());
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
        this.products = [];
        // обнуляем localStorage для чистоты эксперимента
        if (localStorage.getItem('scalesProducts') != null) {
            localStorage.removeItem('scalesProducts');
        }
    }
    //implimented methods
    ScalesStorageEngineLocalStorage.prototype.addItem = function (item) {
        this.getItemsFromLS(); //получаем все продукты в массив
        var index = this.products.push(item);
        localStorage.setItem('scalesProducts', JSON.stringify(this.products));
        return index - 1;
    };
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        var productHash = this.getProductHashFromLS();
        var product = new Product(productHash[index].name, productHash[index].weight);
        return product;
    };
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        this.getItemsFromLS();
        return this.products.length;
    };
    //вынимает из Local Storage продукты ложит в массив products 
    // обнуляет localStorage
    ScalesStorageEngineLocalStorage.prototype.getProductHashFromLS = function () {
        return JSON.parse(localStorage.getItem('scalesProducts'));
    };
    ScalesStorageEngineLocalStorage.prototype.getItemsFromLS = function () {
        var itemsFromLS = localStorage.getItem('scalesProducts');
        if (itemsFromLS != null) {
            // получаем хэш из продуктов
            var productsHash = JSON.parse(localStorage.getItem('scalesProducts'));
            //localStorage.setItem('scalesProducts', null); // обнуляем localStorage 
            var newProducts = [];
            // создаем массив объектов Product
            for (var _i = 0, productsHash_1 = productsHash; _i < productsHash_1.length; _i++) {
                var item = productsHash_1[_i];
                var prod = new Product(item.name, item.weight);
                newProducts.push(prod);
            }
            this.products = newProducts; //обновляем продукты
        }
    };
    return ScalesStorageEngineLocalStorage;
}());
/**класс весы */
var Scales = /** @class */ (function () {
    function Scales(_storageEngine) {
        this.storageEngine = _storageEngine;
    }
    //добавляет продукт на весы
    Scales.prototype.add = function (product) {
        this.storageEngine.addItem(product);
    };
    // возвращает вес продуктов в кг
    Scales.prototype.getSumScale = function () {
        if (this.storageEngine.getCount() === 0) {
            return 0;
        }
        var totalWeight = 0;
        for (var i = 0; i < this.storageEngine.getCount(); i++) {
            totalWeight += this.storageEngine.getItem(i).getScale();
        }
        return totalWeight;
    };
    // список продуктов на весах
    Scales.prototype.getNameList = function () {
        if (this.storageEngine.getCount() === 0) {
            return [''];
        }
        var names = [];
        for (var i = 0; i < this.storageEngine.getCount(); i++) {
            names.push(this.storageEngine.getItem(i).getName());
        }
        return names;
    };
    return Scales;
}());
/**Product class*/
var Product = /** @class */ (function () {
    function Product(_name, _weight) {
        this.weight = 0;
        this.name = '';
        this.weight = _weight;
        this.name = _name;
    }
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.getScale = function () {
        return this.weight;
    };
    // для сохранения в Local Storage
    Product.prototype.toJSON = function () {
        var hash = {
            $type: 'Product',
            weight: this.weight,
            name: this.name,
        };
        return hash;
    };
    Product.prototype.fromJSON = function (productHash) {
        return new Product(productHash.name, productHash.weight);
    };
    return Product;
}());
/*main programm */
var scalesStorageEngineArray = new ScalesStorageEngineArray();
// создаем весы с хранением в массиве
var scalesArray = new Scales(scalesStorageEngineArray);
var prod1 = new Product('Банан', 300);
var prod2 = new Product('Колбаса', 500);
var prod3 = new Product('Хлеб черный', 615);
var prod4 = new Product('Авокадо', 250);
scalesArray.add(prod1);
scalesArray.add(prod3);
scalesArray.add(prod2);
console.log('Храним в Array');
console.log(scalesArray.getSumScale());
console.log(scalesArray.getNameList());
// хранение в localStorage
var scalesStorageEngineLocalStorage = new ScalesStorageEngineLocalStorage();
var scalesLocalStorage = new Scales(scalesStorageEngineLocalStorage);
console.log('Храним в Local Storage');
scalesLocalStorage.add(prod2);
scalesLocalStorage.add(prod4);
scalesLocalStorage.add(prod3);
scalesLocalStorage.add(prod1);
console.log(scalesLocalStorage.getSumScale());
console.log(scalesLocalStorage.getNameList());
//# sourceMappingURL=app.js.map