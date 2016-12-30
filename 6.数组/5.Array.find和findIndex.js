/**
 * Created by Administrator on 2016/7/25.
 */
//find findIndex
let arr = [2, 'a', '1', 23];
let res = arr.find((item, index) =>{
    return item == 2;
});

let res2 = arr.findIndex((item, index) =>{
    return item === '1';
});

console.log(res);  //  1   返回结果
console.log(res2); //  2   返回索引