
type StringList=Array<string>;

var sl1:StringList=["a","b","c"];
var sl2:StringList=sl1;


type Man={fam:string,im:string,otch:string,age:number};

var friend:Man
    ={fam:"Иванов",im:"Иван",otch:"Иванович",age:25};

var friendKey:keyof Man;
friendKey="fam";
//friendKey="fam2"; // ошибка
