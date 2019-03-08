

// интерфейс управления скоростью
interface ISpeed {

    start(_speed:number):void;
    stop():void;

}

class Car implements ISpeed {

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
// реализующего интерфейс ISpeed
// мы можем ей передать машинку - объект класса Car
car1.show();
trainer(car1);
// мы можем ей передать корабль - объект класса Ship
ship1.show();
trainer(ship1);
