/**
 * Created by Administrator on 2016/7/26.
 */
//Object.is 只是更严格更合理的值相等 两个对象依然是不相等的
//== 和 === 是相等和严格相等

'use strict';

console.log(+0 === -0);           //  true
console.log(Object.is(+0, -0));   //  false

console.log(NaN === NaN);         //  false
console.log(Object.is(NaN, NaN)); //  true

console.log({} === {});           //  false
console.log(Object.is({}, {}));   //  false

