

// интерфейс управления скоростью
interface ISpeed {

    start(_speed:number):void;
    stop():void;

}

// интерфейс расширенного управления скоростью
interface ISpeedExt extends ISpeed {

    increase(delta:number):void; // увеличить скорость
    decrease(delta:number):void; // уменьшить скорость
    
}
    
class Car implements ISpeedExt {

    speed:number;
    numb:string;

    constructor(_numb:string) {
        this.speed=0; 
        this.numb=_numb;
    }

    start(_speed:number):void {
        this.speed=_speed;
    }

    stop():void {
        this.speed=0;
    }
    
    increase(delta:number):void {
        this.speed+=delta;
    }

    decrease(delta:number):void {
        this.speed-=delta;
    }
    
    beep():void {
        console.log("car "+this.numb+" beeep!");
    }

    show():void {
        console.log("car numb="+this.numb+" speed="+this.speed);
    }
}

class Ship implements ISpeed {
    
    speed:number;
    sailState:boolean;

    constructor() {
        this.speed=0; 
        this.sailState=false;
    }

    setSail(_state:boolean):void {
        this.sailState=_state;
    }

    start(_speed:number):void {
        this.speed=_speed;
        this.setSail(true);
    }

    stop():void {
        this.speed=0;
        this.setSail(false);
    }    

    show():void {
        console.log("ship sailState="+this.sailState
          +" speed="+this.speed);
    }
}

let car1:Car=new Car("2870-ОГО");

let ship1:Ship=new Ship();

function trainer(tr:ISpeed):void {
    for ( let testnum:number=0; testnum<1000; testnum++ ) {
        tr.start(100);
        tr.stop();
    }
    console.log('training finished');
}

// функция trainer ожидает объект любого класса, 
// реализующего интерфейс ISpeed или его потомка
// мы можем ей передать корабль - объект класса Ship, 
// он реализует интерфейс ISpeed
ship1.show();
trainer(ship1);
// мы можем ей передать машинку - объект класса Car, 
// он реализует интерфейс ISpeedExt - потомка ISpeed
car1.show();
trainer(car1);
