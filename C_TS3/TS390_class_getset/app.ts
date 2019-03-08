
class Ship {
    
    private _speed:number;
    private _sailState:boolean;

    constructor() {
        this._speed=0; 
        this._sailState=false;
    }

    get speed():number {
        return this._speed;
    }

    set speed(value:number) { // в сеттере НЕ надо писать :void
        this._speed=value;
        if ( value )
            this._sailState=true;
        else    
            this._sailState=false;
    }
    
    show():void {
        console.log("ship sailState="+this._sailState
          +" speed="+this._speed);
    }
}

let ship1:Ship=new Ship();

console.log('скорость='+ship1.speed);

ship1.show();
ship1.speed=100;
ship1.show();
ship1.speed=0;
ship1.show();
