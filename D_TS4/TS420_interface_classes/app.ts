
// устройство с мотором
interface IEngine {

    // долить топливо
    addFuel(_add:number):void;

}

// водный транспорт
interface IWaterTransp {

    // спустить на воду
    waterLaunch():void;

}

// моторная лодка - и устройство с мотором, и водный транспорт
class MotorShip implements IEngine, IWaterTransp {

    // уровень топлива
    fuelLevel:number;

    // находится ли на воде
    onWater:boolean;

    constructor() {
        this.fuelLevel=0;
        this.onWater=false;
    }

    addFuel(_add:number):void {
        this.fuelLevel+=_add;
    }

    waterLaunch():void {
        this.onWater=true;
    }
    
    show():void {
        console.log('ship fuelLevel='+this.fuelLevel
          +' onWater='+this.onWater);
    }
}

// бензоколонка
class GasStation {

    addEngineFuel(motor:IEngine):void {
        // бензоколонке всё равно - катер это или автомобиль
        // она работает с интерфейсом IEngine
        motor.addFuel(100);
    }

}

// портовый рабочий
class PortWorker {

    shipWaterLaunch(ship:IWaterTransp):void {
        // портовому рабочему всё равно, 
        // подводная это лодка, катер или плот
        // он работает с интерфейсом IWaterTransp
        ship.waterLaunch();
    }

}

let motorShip1:MotorShip=new MotorShip;

let gasStation1:GasStation=new GasStation;

let portWorker1:PortWorker=new PortWorker;

gasStation1.addEngineFuel(motorShip1);
portWorker1.shipWaterLaunch(motorShip1);

motorShip1.show();
