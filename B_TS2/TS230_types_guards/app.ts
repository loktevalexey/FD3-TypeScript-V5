
function getLength1(value:string|number):number {
    if ( typeof(value)==="number" ) {
        // внутри этого if считается, что value - число
        return value;
    }
    if ( typeof(value)==="string" ) {
        // внутри этого if считается, что value - строка
        return value.length;
    }
}

console.log( getLength1(5) );
console.log( getLength1("___") );


function getLength2(value:string|number):number {
    if ( (typeof(value))[0]==="n" ) {
        //return value; // нельзя
        return <number>value;
    }
    if ( (typeof(value))[0]==="s" ) {
        // return value.length; // нельзя
        return (<string>value).length;
    }
}

console.log( getLength2(5) );
console.log( getLength2("___") );
