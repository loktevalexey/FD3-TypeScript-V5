class LogItem {
    
    line:string;
    time:Date;

    constructor(_line:string) {
        this.line=_line;
        this.time=new Date();
        console.log("в лог добавлена строка: "+_line);
    }

}

class Logger {

    items:LogItem[];

    constructor() {
        this.items=new Array<LogItem>();
    }

    add(line:string):void {
        this.items.push(new LogItem(line));
    }

}

export {Logger};
