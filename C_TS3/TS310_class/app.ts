
class Car {

    num:string; // описываем свойство класса

    wheels:number=4; // описываем свойство и инициализируем его
    
    constructor(_num:string) {

        // свойства должны быть явно описаны
        // а здесь - присваивание ранее описанному свойству
        this.num=_num; 

    }

    show():void {
        console.log('car numb='+this.num+' wheels='+this.wheels);
    }

}

let car1:Car=new Car("2870-ОГО");
car1.show();
