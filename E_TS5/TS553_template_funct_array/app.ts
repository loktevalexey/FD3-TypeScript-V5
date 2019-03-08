
function getNext<Item>(arr:Item[],prev:Item):Item {

    for ( let i:number=0; i<arr.length-1; i++ ) {
        if ( arr[i]==prev ) {
            return arr[i+1];
        }
    }
    return null;

}

let arr1:number[]=[3,5,7,9];
console.log( getNext(arr1,5) );

let arr2:string[]=["однажды","студёную","зимнюю","пору"];
console.log( getNext(arr2,"студёную") );

// вторым аргументом нельзя передать число, если первым уже передан массив строк
// как только мы передали массив строк, TypeScript решил что Item это string
// getNext(arr2,5)
