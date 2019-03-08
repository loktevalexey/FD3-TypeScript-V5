
class Transp {

    speed:number;

    constructor() {
        this.speed=0; 
    }

    start(_speed:number):void {
        this.speed=_speed;
    }

    stop():void {
        this.speed=0;
    }
    
}

class Car extends Transp {

    numb:string;

    constructor(_numb:string) {
        super(); 
        this.numb=_numb;
    }

    beep():void {
        console.log("car "+this.numb+" beeep!");
    }

    show():void {
        console.log("car numb="+this.numb+" speed="+this.speed);
    }
}

class Ship extends Transp {
    
    sailState:boolean;

    constructor() {
        super();
        this.sailState=false;
    }

    setSail(_state:boolean):void {
        this.sailState=_state;
    }

    start(_speed:number):void {
        super.start(_speed);
        this.setSail(true);
    }

    stop():void {
        super.stop();
        this.setSail(false);
    }    

    show():void {
        console.log("ship sailState="+this.sailState
          +" speed="+this.speed);
    }
}

let car1:Car=new Car("2870-ОГО");

let ship1:Ship=new Ship();

console.log( car1 instanceof Transp );
console.log( car1 instanceof Car );
console.log( ship1 instanceof Transp );
console.log( ship1 instanceof Ship );

function trainer(tr:Transp):void {
    for ( let testnum:number=0; testnum<1000; testnum++ ) {
        tr.start(100);
        tr.stop();
    }
    console.log('training finished');
}

// функция trainer ожидает объект класса Transp
// но мы можем передать также объект любого класса-потомка
trainer(car1);
trainer(ship1);

// переменной класса-предка можно присвоить 
// объект любого класса-потомка
let trcar:Transp=car1;
let trship:Transp=ship1;
// у этих объектов можно работать теперь 
// только с теми свойствами и методами, которые есть у Transp

// переменной класса-потомка нельзя присвоить 
// объект класса-предка напрямую
// let car2:Car=trcar; // ошибка
// let ship2:Ship=trship; // ошибка
// присвоить можно только с явным преобразованием
let car3:Car=<Car>trcar;
let ship3:Ship=trship as Ship;
// теперь это "честные" объекты классов Car и Ship
car3.show();
ship3.show();
