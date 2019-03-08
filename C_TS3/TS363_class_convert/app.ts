
class Car {

    num:number;

    constructor(_num:number) {
        this.num=_num;
    }

    show():void {
        console.log("car num="+this.num);
    }
    
}

class House {
    
    num:number;
    flats:number;

    constructor(_num:number,_flats:number) {
        this.num=_num;
        this.flats=_flats;
    }

    show():void {
        console.log("house num="+this.num+" flats="+this.flats);
    }
    
}
    
// у объекта класса House есть все свойства и методы, 
// которые есть в классе Car
// а также "лишнее" свойство flats
// мы можем присвоить его объекту класса Car, 
// преобразование типа не требуется
let car1:Car=new House(21,9*4);
car1.show(); // вызовется show класса House
console.log('car1 это Car?', car1 instanceof Car);
console.log('car1 это House?', car1 instanceof House);

let carHash={
    num:2870,
    speed:100,
    show: function():void {
        console.log("carhash num="+this.num);
    }
};

// у хэша carHash есть все свойства и методы, которые есть 
// в классе Car
// а также "лишнее" свойство speed
// мы можем присвоить его объекту класса Car, 
// преобразование типа не требуется
let car2:Car=carHash;
car2.show(); // вызовется show хэша
console.log('car2 это Car?', car2 instanceof Car);
console.log('car2 это House?', car2 instanceof House);

// мы НЕ можем присвоить объекту класса Car объект класса или хэш, 
// не имеющие всех свойств и методов класса Car,
// даже если применим явное преобразование типа
let trainHash={
    speed:100,
};
// let car3:Car=<Car>trainHash; // ошибка
