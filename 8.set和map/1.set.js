/**
 * Created by Administrator on 2016/7/26.
 */

//Set的参数接受一个数组
//讲述不能重复的数值是一个什么情况

//let obj = {
//    a: 'a'
//};
//let s = new Set([1, 'str']);
//console.log(s, s.size, s.length);
////<entries>[9][1, 'str', obj, NaN, 0, {}, {}, null, undefined]   9 undefined
//
//
//

//let s = new Set([1, 'str']);
//console.log(s) //{1, 'str'}
//let res = s.add({a:'a'});
//let res2 = s.delete('str');
//console.log(res, res2); //{1, {a: "a"}}  true;

//console.log("=============");
//let obj = {
//    a: 'a'
//};
//let s = new Set([1, obj])
//let res3 = s.has(obj);
//console.log(res3);  // true
//let res4= s.clear();
//console.log(s, res4);  // Set {}  undefined


let s = new Set([1, 'str', {}, {}, null, undefined]);
let ents = s.entries();
let ents2 = s.keys();
console.log(s.entries());

for(let item of ents){
    console.log(item);  //[1, 1],["str", "str"],[{}, {}], [{}, {}], [null, null], [undefined, undefined]
}

for(let item of ents2){
    console.log(item); //1 str {} {} null undefined
}


//拓展运算符号 ...是使用了for of 的遍历方法
//let set = new Set(['a', 'b', 'c', 'a']);
//let arr = [...set];
//console.log(arr);


//去重
//let arr2 = [1, 2, 3, 5, 1, 4, 3];
//arr2 = Array.from(new Set(arr2));
//console.log(arr2);


