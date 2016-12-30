/**
 * Created by Administrator on 2016/7/23.
 */
'use strict';
//let str = 'Javscript is the best language';
//
//let isFind = str.includes("s", 5);
//let index = str.indexOf('s', 5);
//console.log(isFind, index);

var s = 'hello';
s.startsWith('l', 2); // true
s.endsWith('e', 1); // false
s.includes('e', 3); // false

console.log(s.startsWith('l', 2), s.endsWith('e', 1), s.includes('e', 3))