
class Car {

    num:string;

    // readonly-свойство можно инициализировать при описании
    readonly wheels:number=4; 

    constructor(_num:string) {

        this.num=_num; 

        // readonly-свойство можно инициализировать в конструкторе
        this.wheels=5;
    }

    show():void {
        console.log('car numb='+this.num+' wheels='+this.wheels);
        
        // readonly-свойство больше нигде изменить нельзя
        // this.wheels=6; // ошибка
    }

}

let car1:Car=new Car("2870-ОГО");
car1.show();
