/**
 * Created by Administrator on 2016/7/24.
 */
'use strict';
//let x = 'x';
//let y = 'y';
//let str = tagTemplet`12${x}3${y}`;
//
//function tagTemplet (strArr, ...other){
//    console.log(strArr, other);
//    return 'rrr';
//}
//
//console.log(str);


var name = 's',age = 8;
function desc(strings,...values){
    console.log(strings,values);
    // strings ["", " is ", " old!"]
    // ...values ["s", 8]
}
desc`${name} is ${age} old!`;