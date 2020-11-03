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
//ScalesStorageEngineLocalStorage 
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
/**Product classes */
var Product = /** @class */ (function () {
    function Product() {
        this.weight = 500;
        this.name = 'Какой-то продукт!';
    }
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.getScale = function () {
        return this.weight;
    };
    return Product;
}());
/*main programm */
var scalesStorageEngineArray = new ScalesStorageEngineArray();
// создаем весы с хранением в массиве
var scalesArray = new Scales(scalesStorageEngineArray);
var prod1 = new Product();
var prod2 = new Product();
var prod3 = new Product();
var prod4 = new Product();
scalesArray.add(prod1);
scalesArray.add(prod3);
scalesArray.add(prod2);
console.log(scalesArray.getSumScale());
console.log(scalesArray.getNameList());
//# sourceMappingURL=app.js.map