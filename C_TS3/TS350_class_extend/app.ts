
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
        // конструктор класса-потомка должен вызвать 
        // конструктор класса-предка
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
        // переопределённый метод ОБЫЧНО должен вызвать 
        // метод класса-предка, т.е. РАСШИРИТЬ его новым поведением
        super.start(_speed);
        this.setSail(true);
    }

    stop():void {
        // переопределённый метод ОБЫЧНО должен вызвать 
        // метод класса-предка, т.е. РАСШИРИТЬ его новым поведением
        super.stop();
        this.setSail(false);
    }    

    show():void {
        console.log("ship sailState="+this.sailState
          +" speed="+this.speed);
    }
}

let car1:Car=new Car("2870-ОГО");

car1.show();
car1.start(100);
car1.show();
car1.stop();
car1.show();

car1.beep();

let ship1:Ship=new Ship();

ship1.show();
ship1.setSail(true);
ship1.show();
ship1.setSail(false);
ship1.show();

ship1.start(100);
ship1.show();
ship1.stop();
ship1.show();
