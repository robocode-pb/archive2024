/*let a = Number(prompt('hub'));
let index = 1; 
console.log(a);
do{
    console.log(`Number ${index} ${Math.random()*100}`);
    a--;
    index++;
   
} while (a >0)*/

let a;
let maxNumber = 0;
do{;
    a = Number(prompt('Number = '));
    if(maxNumber<a) maxNumber =a;
} while (a != 0);
alert(maxNumber);
