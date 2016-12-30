/**
 * Created by Administrator on 2016/7/31.
 */
'use strict';
//function* genFunc(initValue){
//    let first = yield new Promise((resolve, reject) => {
//        setTimeout(resolve, 1000, 'first-' + initValue);
//    });
//
//    let second = yield new Promise((resolve, reject) => {
//        setTimeout(resolve, 500, 'second-' + first);
//    });
//
//    let third = yield new Promise((resolve, reject) => {
//        setTimeout(resolve, 700, 'third-' + second);
//    })
//}
//
//var getHandler = genFunc('init');
//getHandler.next().value.then((value) => {
//    console.log(value);   // init-first
//    return getHandler.next(value).value;
//}).then((value) => {
//    console.log(value);   // init-first-second
//    return getHandler.next(value).value;
//}).then((value) => {
//    console.log(value);   // init-first-second-third
//    return getHandler.next(value).value;
//}).then((value) => {
//    console.log(value);
//})

//function* genFunc(initValue) {
//    let first = yield new Promise((resolve) => {
//        setTimeout(()=> {
//            debugger;
//            resolve(initValue + '-first');
//        }, 1000);
//    });
//
//    let second = yield new Promise((resolve) => {
//        setTimeout(()=> {
//            debugger;
//            resolve(first + '-second');
//        }, 1000);
//    });
//
//    let third = yield new Promise((resolve) => {
//        setTimeout(()=> {
//            debugger;
//            resolve(second + '-third');
//        }, 1000);
//    });
//}
//
//var it = genFunc('init');
//
//it.next().value.then((value) => {
//    console.log(value);   // init-first
//    debugger;
//    return it.next(value).value;
//}).then((value) => {
//    console.log(value);   // init-first-second
//    debugger;
//    return it.next(value).value;
//}).then((value) => {
//    console.log(value);   // init-first-second-third
//    debugger;
//    return it.next(value).value;
//}).then((value) => {
//    console.log(value);
//})


//function buy(books) {
//    let i = 0;
//    return {
//        next(){
//            let done = i == books.length;
//            let value = !done ? books[i++] : undefined;
//            return {
//                value: value,
//                done: done
//            }
//        }
//    }
//}
//
//let iterators = buy(['js', 'html']);
//var curr;
//do {
//    curr = iterators.next();
//    console.log(curr);
//} while (!curr.done);

//{value: "js", done: false}
//{value: "html", done: false}
//{value: undefined, done: true}


class Person {
    constructor(name){
        this.name = name;
    }
    getName(){
        console.log(this.name);
    }
}
let person = new Person('zfpx');
person.getName();