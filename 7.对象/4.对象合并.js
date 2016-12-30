/**
 * Created by Administrator on 2016/7/26.
 */
'use strict';

let obj1 = {x: 'x'};
let obj2 = {y: 'y'};
let obj3 = {x: 'x2'};

let obj4 = Object.assign(obj1, obj2, obj3);
console.log(obj1, obj2, obj3, obj4, obj1 === obj4);
//{x: "x2", y: "y"} {y: "y"} {x: "x2"} {x: "x2", y: "y"} true


//这是属于特殊情况
//let info = {
//    age: 23
//};
//let me = Object({name: 'Weil', info});
//console.log(me);
//
//function Util(){
//    this.hehe='heh'
//}
//Object.assign(Util.prototype,{
//    getTime(){
//        console.log(new Date, this, '-----')
//    }
//})