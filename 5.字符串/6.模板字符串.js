/**
 * Created by Administrator on 2016/7/24.
 */
'use strict';

let str = `123\{123'"$}\`\`\${}\\`;
console.log(str);

let name = `Weil`;
let age = 23;
let info = `My name is ${name}, age is ${age}`;
console.log(info);  // My name is Weil, age is 23

let oldLine = `<ul>
<li>${name}</li>
<li>${age}</li>
</ul>`;

console.log(oldLine);
//
/*<ul>
<li>Weil</li>
<li>23</li>
</ul>
*/



//function calc(x, y){
//    return x + y;
//}
//
//let num = `1 + 2 = ${calc(1, 2)}`;
//console.log(num, '===============');
//

//let isGirl = `Sophia is a ${true ? 'girl' : 'boy'}`;
//console.log(isGirl);
//
//let typeStr = `${[1, 2]}`;
//console.log(typeStr);