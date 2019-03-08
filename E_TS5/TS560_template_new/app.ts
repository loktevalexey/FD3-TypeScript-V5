
// параметризованная фабрика
// умеет создавать и возвращать объекты любых типов
function uniFactory<objtype>(classRef: { new (): objtype; }): objtype {

   return new classRef();

}
    
class Computer {
    
    getWidth():number { return 200; }
    getHeight():number { return 500; }
    getDepth():number { return 500; }

    getWeight():number { return 500; }
    
    show():void {
        console.log("Компьютер"
        +" размером "+this.getWidth()+"x"
          +this.getHeight()+"x"+this.getDepth()+" мм,"
        +" весом "+this.getWeight()+" г");
    }

}

class Car {
    
    getWidth():number { return 2000; }
    getHeight():number { return 2000; }
    getDepth():number { return 4000; }

    getWeight():number { return 1000000; }
    
    show():void {
        console.log("Машинка"
        +" размером "+this.getWidth()+"x"
          +this.getHeight()+"x"+this.getDepth()+" мм,"
        +" весом "+this.getWeight()+" г");
    }
    
}


// вызов функции-фабрики можно параметризовать
let newComputer:Computer=uniFactory<Computer>(Computer);
newComputer.show();
// или не параметризовать
let newCar:Car=uniFactory(Car);
newCar.show();
