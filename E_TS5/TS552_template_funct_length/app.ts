
interface ISizeable {
    getLength():number;
}

class Letter implements ISizeable {
    
    letterText:String;

    constructor(txt:String) {
        this.letterText=txt;
    }

    getLength():number {
        return this.letterText.length;
    }
    
}

let letter1:Letter=new Letter("А здоровье моё не очень. То лапы ломит, то хвост отваливается.");
let letter2:Letter=new Letter("Я вам пишу, чего же боле?");

function getLengthDiff<Item extends ISizeable>(item1:Item,item2:Item):number {
    return item1.getLength()-item2.getLength();
}

console.log( getLengthDiff<Letter>(letter1,letter2) );
console.log( getLengthDiff(letter1,letter2) ); // TypeScript автоматически вычисляет тИповый аргумент

class Pencil implements ISizeable {
    
    length:number;

    constructor(length:number) {
        this.length=length;
    }

    getLength():number {
        return this.length;
    }
    
}

let newPencil:Pencil=new Pencil(200);
let oldPencil:Pencil=new Pencil(80);

console.log( getLengthDiff<Pencil>(newPencil,oldPencil) );
console.log( getLengthDiff(newPencil,oldPencil) ); // TypeScript автоматически вычисляет тИповый аргумент

// TypeScript не позволит вызвать функцию с параметрами разных типов, 
// даже если оба типа реализуют интерфейс ISizeable
// getLengthDiff(newPencil,letter1)
