var car1 = {
    num: '2870-ОГО',
    model: 'Волга',
    show: function (prefix) {
        console.log(prefix + " " + this.num + " " + this.model);
        // обращаемся к несуществующему свойству - ошибки нет, т.к. this:any
        console.log(prefix + " " + this.price);
    }
};
car1.show("INFO #1:");
var car2 = {
    num: '2870-ОГО',
    model: 'Волга',
    show: function (prefix) {
        console.log(prefix + " " + this.num + " " + this.model);
        // обращаемся к несуществующему свойству - ошибки нет, т.к. this:any
        console.log(prefix + " " + this.price);
    }
};
car2.show("INFO #2:");
var car3 = {
    num: '2870-ОГО',
    model: 'Волга',
    show: function (prefix) {
        console.log(prefix + " " + this.num + " " + this.model);
        // теперь к price обратиться нельзя - TS знает что this:Car
        //console.log(prefix+" "+this.price); // ошибка
    }
};
car3.show("INFO #3:");
//# sourceMappingURL=app.js.map