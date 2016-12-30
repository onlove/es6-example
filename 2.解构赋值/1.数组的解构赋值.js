//解构赋值 变量的批量赋值
'use strict';

/*let [name,age] = ['str', 8];
console.log(name, age);  // str  8
*/

/*
 let arr = [1, , 3];
 //let a = arr[0];
 //let b = arr[1];
 //let c = arr[2];

 let [a, b, c] = arr;

 console.log(a, b, c);
 */

//嵌套
//let arr = [1, [2.1, 2.2], 3];
//let [a, [b1], c] = arr;
//console.log(a, b1, c);   // 1  2.1  3


//省略赋值

//let arr = [1, , 2, 3, 4];
//let [, , a, c, ,] = arr;
//console.log(a, c)   //  2  3


//不定赋值
//... 拓展运算符
//let arr = [1, 2, 3, 4, 5];
//let [a, , b, ...other] = arr;
//console.log(a, b, other);   // 1 3 [4, 5]


//越界
let arr = [1, 2];
let [a, b, c] = arr;
console.log(a, b, c);  // 1 2 undefined