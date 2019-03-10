var friend:{fam:string,im:string,otch:string,age:number}
    ={fam:"Иванов",im:"Иван",otch:"Иванович",age:25};

console.log(friend);


var friendKey:keyof {fam:string,im:string,otch:string,age:number};
friendKey="fam";
// friendKey="fam2"; // ошибка
