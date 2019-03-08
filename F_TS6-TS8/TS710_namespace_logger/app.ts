

namespace LoggerSpace {

    class LogItem {
        
        line:string;
        time:Date;

        constructor(_line:string) {
            this.line=_line;
            this.time=new Date();
            console.log("в лог добавлена строка: "+_line);
        }

    }

    export class Logger {

        items:LogItem[];

        constructor() {
            this.items=new Array<LogItem>();
        }

        add(line:string):void {
            this.items.push(new LogItem(line));
        }

    }
    
    // вложенное пространство имён видит все объявления своего родителя
    namespace Inner {
        let innerLogger:Logger;
        let innerLogItem:LogItem;
    }
    
}


// можно использовать сущность, экспортируемую пространством имён, 
// уточняя ёё имя именем пространства
let logger1:LoggerSpace.Logger=new LoggerSpace.Logger;
logger1.add("запись №1");

// let logItem1:LoggerSpace.LogItem;
// ошибка - LogItem это внутренняя кухня простанства имён

// можно проимпортировать сущность, экспортируемую пространством имён
// по сути это назначение короткого имени
import Logger = LoggerSpace.Logger;

let logger2:Logger=new Logger;
logger2.add("запись №2");
