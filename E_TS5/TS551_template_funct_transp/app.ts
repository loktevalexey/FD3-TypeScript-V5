
interface ITransp {
    start(_speed:number):void;
    stop():void;
    show():void;
}

class Car implements ITransp {

    numb:string;
    speed:number;

    constructor(_numb:string) {
        this.numb=_numb;
    }
    
    start(_speed:number):void {
        this.speed=_speed;
    }

    stop():void {
        this.speed=0;
    }

    show():void {
        console.log("машинка №="+this.numb);
    }
}

class Ship implements ITransp {
    
    sailState:boolean;
    speed:number;

    constructor() {
        this.sailState=false;
    }

    start(_speed:number):void {
        this.sailState=true;
        this.speed=_speed;
    }

    stop():void {
        this.sailState=false;
        this.speed=0;
    }

    show():void {
        console.log("кораблик парус="+this.sailState);
    }
    
}

let car1:Car=new Car("2870-ОГО");

let ship1:Ship=new Ship();

function trainer<Trn extends ITransp>(trn:Trn):void {
    trn.show();
    for ( let testnum:number=0; testnum<1000; testnum++ ) {
        trn.start(100);
        trn.stop();
    }
    console.log('training finished');
}

trainer<Car>(car1);

trainer<Ship>(ship1);
