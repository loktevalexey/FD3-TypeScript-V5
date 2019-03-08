
class Car {

    numb:string;
    speed:number;
    
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

}

class Ship {
    
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

    showShip():void {
        console.log("ship sailState="+this.sailState
          +" speed="+this.speed);
    }
}

    
function trainer(trainee:Car|Ship):void {
    for ( let test=0; test<10; test++ ) {
        if ( trainee instanceof Car ) {
            // внутри этого if считается, что trainee - Car
            trainee.beep();
        }
        if ( trainee instanceof Ship ) {
            // внутри этого if считается, что trainee - Ship
            trainee.showShip();
        }
    }
}

let car1:Car=new Car("2870-ОГО");
trainer(car1);

let ship1:Ship=new Ship();
trainer(ship1);
