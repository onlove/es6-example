/**
 * Created by Administrator on 2016/7/24.
 */
'use strict';
let str = 'JavaScript is the best language!';

let [isStartWith, isEndWith]
  = [str.startsWith('S', 4), str.endsWith('!')];
console.log(isStartWith, isEndWith, str.endsWith('s', 2));