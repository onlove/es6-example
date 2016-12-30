/**
 * Created by Administrator on 2016/7/23.
 */

//let func = function(a){
//    return a + 1;
//};
//
//let func2 = (a) => a + 1;
//
//let res1 = func(1);
//let res2 = func2(2);
//
//console.log(res1, res2);



let arr = [1, 4, 5, 8];

let r = arr.map(function (item, index, arr){
    return item * item;
});

let r1 = arr.map(item => item *item);

console.log(r, r1);