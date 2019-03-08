
function test1(value:string):void {
    console.log("test1 "+value);
}

function test2(value:number):void {
    console.log("test2 "+value);
}

function test3(value:string|number):void {
    console.log("test3 "+value);
}

let f1:(v:string)=>void=null;
let f2:(v:number)=>void=null;
let f3:(v:number|string)=>void=null;

f1=test1;
// f1=test2; // ошибка
f1=test3;

// f2=test1; // ошибка
f2=test2;
f2=test3;

f3=test1; // должна бы быть ошибка, но нет!
f3=test2; // должна бы быть ошибка, но нет!
f3=test3;
