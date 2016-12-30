/**
 * Created by Administrator on 2016/7/29.
 */
'use strict';
//let p1 = Promise.resolve('success1');
//p1.then((value)=> {
//    console.log(value);
//    debugger;
//});


//let p2Ins = new Promise((resolve, reject) => {
//    setTimeout(resolve, 1000, 'success2');
//});
//let p2 = Promise.resolve(p2Ins);
//p2.then((value) => {
//    console.log(value);
//})


//let thenableObj = {};
//thenableObj.then = (resolve, reject) => {
//    setTimeout(resolve, 1000, "success2");
//};
//let p3 = Promise.resolve(thenableObj);
//p3.then((value) => {
//    console.log(value);
//})


let p4 = Promise.resolve('success');
p4.then((value) => {
    console.log(value); // success
});

