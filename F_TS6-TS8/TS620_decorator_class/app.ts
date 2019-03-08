
function born<ClassConstructor extends Function>
  (OriginConstructor: ClassConstructor):any {
    // функция-декоратор получит конструктор декорируемого класса

    // и может описать новый конструктор
    function NewConstructor(_num:string) {
        // новый конструктор обычно вызывает старый 
        // через call или apply
        OriginConstructor.call(this,_num);
        // можно добавить новое свойство
        this.bornTime=new Date();
    }

    NewConstructor.prototype=Object.create(OriginConstructor.prototype);
    NewConstructor.prototype.constructor=NewConstructor;

    // можно добавить новый метод
    NewConstructor.prototype.getBornTime=function() {
        return this.bornTime;
    }

    // функция-декоратор должна вернуть новый конструктор
    return NewConstructor;
}
    
@born
class Car {

    num:string;
   
    constructor(_num:string) {
        this.num=_num; 
    }

    show():void {
        console.log('car numb='+this.num);
    }

}

let car1:any=new Car("2870-ОГО"); 
// new Car возвращает уже не объект класса Car -
// обращаемся к методу оригинального класса:
car1.show(); 
// обращаемся к свойству, которое добавил декоратор:
console.log(car1.bornTime); 
// обращаемся к методу, который добавил декоратор:
console.log(car1.getBornTime()); 
