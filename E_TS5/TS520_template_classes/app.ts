
// хранилище однородных (похожих) объектов произвольного класса StorageItem
class StorageArea<StorageItem> {

    items: StorageItem[];

    constructor() {
        this.items=[];
    }

    // сохранить объект на складе
    storeItem(item:StorageItem):number {
        let index:number=this.items.length;
        this.items.push(item);
        //console.log("сохранён объект"
        //    +" размером "+item.getWidth()+"x"+item.getHeight()+"x"+item.getDepth()+" мм,"
        //    +" весом "+item.getWeight()+" г"
        //);
        return index;
    }

    // получить сохранённый объект (объект продолжает храниться)
    getItem(index:number):StorageItem {
        return this.items[index];
    }
}

class Computer {

    // специально чтобы классы Computer и Car были несовместимыми
    price:number; 
    
    getWidth():number { return 200; }
    getHeight():number { return 500; }
    getDepth():number { return 500; }

    getWeight():number { return 500; }
    
}

class Car {
    
    // специально чтобы классы Computer и Car были несовместимыми
    model:string; 
    
    getWidth():number { return 2000; }
    getHeight():number { return 2000; }
    getDepth():number { return 4000; }

    getWeight():number { return 1000000; }
    
}

// склад компьютеров
let computersStorageArea=new StorageArea<Computer>();

let computer1:Computer=new Computer;
let computer2:Computer=new Computer;
let computer3:Computer=new Computer;

// сохраним на складе 3 компьютера
let computerIndex1:number=computersStorageArea.storeItem(computer1);
let computerIndex2:number=computersStorageArea.storeItem(computer2);
let computerIndex3:number=computersStorageArea.storeItem(computer3);
   
// склад автомобилей
let carsStorageArea=new StorageArea<Car>();

let car1:Car=new Car;
let car2:Car=new Car;
let car3:Car=new Car;

// сохраним на складе 3 автомобиля
let carIndex1:number=carsStorageArea.storeItem(car1);
let carIndex2:number=carsStorageArea.storeItem(car2);
let carIndex3:number=carsStorageArea.storeItem(car3);

// получим один из хранимых объектов
// мы можем без преобразования типа получить и Car, и Computer
let item11:Car=carsStorageArea.getItem(carIndex2);
let item12:Computer=computersStorageArea.getItem(computerIndex2);
