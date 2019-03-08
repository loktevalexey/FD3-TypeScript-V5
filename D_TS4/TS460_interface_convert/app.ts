

// интерфейс управления скоростью
interface ISpeed {

    start(_speed:number):void;
    stop():void;

}

class Car {

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

function trainer(tr:ISpeed):void {
    for ( let testnum:number=0; testnum<1000; testnum++ ) {
        tr.start(100);
        tr.stop();
    }
    console.log('training finished');
}

// функция trainer ожидает объект любого класса, 
// реализующего интерфейс ISpeed

let car1:Car=new Car("2870-ОГО");
// мы можем ей передать машинку - объект класса Car, 
// хоть он НЕ реализует интерфейс ISpeed,
// но имеет все методы, задекларированные в интерфейсе; 
// никакого преобразования типа не требуется
car1.show();
trainer(car1);

let car2={
    start: function(_speed:number):void {  },
    stop: function():void {},
    getInfo: function():void {},
};
// мы можем ей передать обычный хэш - 
// хоть он НЕ реализует никаких интерфейсов,
// но имеет все методы, задекларированные в интерфейсе ISpeed; 
// никакого преобразования типа не требуется
trainer(car2);

let car3={
    start: function(_speed:number):void {  },
};
// мы можем ей передать обычный хэш, даже если в нём нет всех методов, 
// задекларированных в интерфейсе ISpeed, 
// если применим явное преобразование типа
trainer(<ISpeed>car3);
// но trainer, конечно, сработать не сможет - 
// на этапе выполнения кода окажется что метода stop нет
