var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
            weight += item.weight;
        });
        return weight;
    };
    // список продуктов на весах
    Scales.prototype.getNameList = function () {
        var productsNames = [];
        this.productList.map(function (item) {
            productsNames.push(item.getName());
        });
        return productsNames;
    };
    return Scales;
}());
/**Product classes */
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
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple() {
        var _this = _super.call(this) || this;
        _this.weight = 0.43;
        _this.name = 'Apple';
        return _this;
    }
    return Apple;
}(Product));
/* класс продукта Tomato */
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato() {
        var _this = _super.call(this) || this;
        _this.weight = 0.32;
        _this.name = 'Tomato';
        return _this;
    }
    return Tomato;
}(Product));
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