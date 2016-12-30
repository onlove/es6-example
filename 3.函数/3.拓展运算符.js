/**
 * Created by Administrator on 2016/7/23.
 */

//function add (a, ...arg) {
//    let res = 0;
//    //for(let i = 0, len = arg.length; i < len; i++){
//    //    res += i;
//    //}
//
//    for(let i = arg.length-1; i >= 0; i--){
//        res += i;
//    }
//
//    return res;
//}
//
//let res = add(1, 2, 3, 4, 5);
//console.log(res);
//
////求最大值
//let arr = [3, 61, 6, 7];
//let m = Math.max.apply(null, arr);
//let n = Math.max(...arr);
//console.log(m, n);


//let print = function(a,b,c){
//    console.log(a,b,c);
//}
//print([1,2,3]);       // [1, 2, 3] undefined undefined
//print(...[1,2,3]);    // 1 2 3

// 可以替代apply
//var m1 = Math.max.apply(null, [8, 9, 4, 1]);
//var m2 = Math.max(...[8, 9, 4, 1]);
//console.log(m1, m2);


// 可以替代concat
//var arr1 = [1, 3];
//var arr2 = [3, 5];
//var arr3 = arr1.concat(arr2);
//var arr4 = [...arr1, ...arr2];
//console.log(arr3,arr4);  //[1, 3, 3, 5] [1, 3, 3, 5]


let rest = function(a,...b){
    console.log(a,b);
}
rest(1,2,3);   // 1 [2, 3]