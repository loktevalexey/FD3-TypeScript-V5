
class Transp {

    public speed:number;

    protected maxSpeed:number;
    
    private serialNumber:string;

    constructor(_serialNumber:string) {
        this.speed=0; 
        this.maxSpeed=100;
        this.serialNumber=_serialNumber;
    }

    public getSerialNumber():string {
        return this.serialNumber;
    }
    
}

class Car extends Transp {

    public carNumber:string;

    constructor(_serialNumber:string,_carNumber:string) {
        super(_serialNumber); 
        this.carNumber=_carNumber;
        //this.serialNumber="aaa"; // нельзя - доступно только классу Transp
    }

    public show():void {
        console.log("car num="+this.carNumber
          +" speed="+this.speed+" maxspeed="+this.maxSpeed);
    }
}

let car1:Car=new Car("233322","2870-ОГО");

car1.show(); // вызов публичного метода

// обращение к публичному свойству
console.log("номерной знак машины: "+car1.carNumber); 
// в т.ч. унаследованному
console.log("скорость машины: "+car1.speed); 

// car1.serialNumber // нельзя - доступно только классу Transp
// car1.maxSpeed // нельзя - доступно только классу Transp и его потомкам
