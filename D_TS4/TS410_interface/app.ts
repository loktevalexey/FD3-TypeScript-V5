
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


let car1:Car=new Car("2870-ОГО");

car1.start(100);
car1.show();
