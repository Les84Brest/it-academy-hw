/**класс весы */
var Scales = /** @class */ (function () {
    function Scales() {
        this.productList = [];
    }
    //добавляет продукт на весы
    Scales.prototype.add = function (product) {
        this.productList.push(product);
    };
    // возвращает вес продуктов в кг
    Scales.prototype.getSumScale = function () {
        var weight = 0;
        this.productList.forEach(function (item) {
            weight += item.getScale();
        });
        return weight;
    };
    // список продуктов на весах
    Scales.prototype.getNameList = function () {
        var productsNames = [];
        this.productList.forEach(function (item) {
            productsNames.push(item.getName());
        });
        return productsNames;
    };
    return Scales;
}());
var Product = /** @class */ (function () {
    function Product() {
        this.weight = 0;
        this.name = '';
    }
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.getScale = function () {
        return this.weight;
    };
    return Product;
}());
/* класс продукта Apple */
var Apple = /** @class */ (function () {
    function Apple() {
        this.weight = 0.43;
        this.name = 'Apple';
    }
    Apple.prototype.getScale = function () {
        return this.weight;
    };
    Apple.prototype.getName = function () {
        return this.name;
    };
    return Apple;
}());
/* класс продукта Tomato */
var Tomato = /** @class */ (function () {
    function Tomato() {
        this.weight = 0.32;
        this.name = 'Tomato';
    }
    Tomato.prototype.getScale = function () {
        return this.weight;
    };
    Tomato.prototype.getName = function () {
        return this.name;
    };
    return Tomato;
}());
/*main programm */
var scales;
function init() {
    scales = new Scales();
}
// провели инициализацию весов;
init();
var tomato = new Tomato;
var apple = new Apple;
scales.add(tomato);
scales.add(apple);
scales.add(tomato);
scales.add(apple);
scales.add(tomato);
console.log(scales.getNameList());
console.log(scales.getSumScale());
//# sourceMappingURL=app.js.map