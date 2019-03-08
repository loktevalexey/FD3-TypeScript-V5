
abstract class Transp {

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

    abstract show():void;
        
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

let car1:Car=new Car("2870-ОГО");

car1.show();

// let transp1:Transp=new Transp; // ошибка

function trainer(tr:Transp):void {
    for ( let testnum:number=0; testnum<1000; testnum++ ) {
        tr.start(100);
        tr.stop();
    }
    console.log('training finished');
}

// функция trainer ожидает объект класса Transp, но таких объектов не бывает
// мы можем ей передать объект любого неабстрактного класса-потомка Transp
trainer(car1);
