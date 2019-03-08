
class Car {

    static carsCount:number=0;

    num:string;

    wheels:number=4;

    constructor(_num:string) {
        Car.carsCount++;
        this.num=_num; 
    }

    show():void {
        console.log('car numb='+this.num+' wheels='+this.wheels);
    }

}

let car1:Car=new Car("2870-ОГО");
car1.show();

let car2:Car=new Car("233322");
car2.show();

console.log("всего машинок создано: "+Car.carsCount);
