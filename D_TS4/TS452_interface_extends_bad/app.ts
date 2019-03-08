
// интерфейс управления скоростью
interface ISpeed {

    start(_speed:number):void;
    stop():void;

}

// интерфейс... ЧЕГО??? получается смесь из двух видов функционала!
interface ISpeedShip extends ISpeed {
    
    setSail(_state:boolean):void;
        
}
   
class Ship implements ISpeedShip {
    
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
// он реализует интерфейс ISpeedShip - потомка ISpeed
ship1.show();
trainer(ship1);
