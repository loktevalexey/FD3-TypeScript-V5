
class Car {

    num:string;
    wheels:number=4;

    constructor(_num:string);
    constructor(_num1:number,_num2:string);
    constructor(_num1:any,_num2?:any) {

        if ( typeof(_num1)==="string" ) {
            // в _num1 - полный номер
            this.num=_num1; 
        }
        if ( typeof(_num1)==="number" ) {
            // номер складывается из _num1 и _num2
            this.num=_num1+"-"+_num2; 
        }

    }

    show():void {
        console.log('car numb='+this.num+' wheels='+this.wheels);
    }

}

let car1:Car=new Car("2870-ОГО");
car1.show();

let car2:Car=new Car(2870,"ОГО");
car2.show();
