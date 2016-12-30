/**
 * Created by Administrator on 2016/7/23.
 */
'use strict';
//解构赋值 变量的批量赋值
//解构赋值 把右侧的数据类型赋值到左侧构造的相似数据类型中
//let obj = {
//    name: 'a',
//    age: 18,
//    height: '170cm',
//    arr:[1, 2, 3]
//};
//
//
//let {x, y, z} = obj;
//let {name, age, height} = obj;
////let {a: mya, b:myb, c:myc} = obj;
//let {a: mya, b:myb, c:myc, arr:[, , m]} = obj;
//
//console.log(x, y, z);
//console.log(a, b, c);
//console.log(mya, myb, myc);
//console.log(mya, myb, myc, m);

let obj = {name:'str',age:8};
let {name, age} = obj;
let {name: myname, age: myage} = obj;

console.log(name,age,myname,myage); // str 8  str 8

