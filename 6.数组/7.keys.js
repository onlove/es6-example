/**
 * Created by Administrator on 2016/7/25.
 */
let arr = [1, 'a', '1', 23, NaN, Infinity];

let arrKey = arr.entries();
console.log(arrKey);  // ArrayIterator {}

for(let item of arrKey){
    console.log(item);  // [0, 1] [1, "a"] [2, "1"] [3, 23] [4, NaN] [5, Infinity]
}

let arrKeys = arr.keys();
console.log(arrKeys);
for(let item of arrKeys){
    console.log(item);  //0 1 2 3 4 5
}

let arrkeyss = arr.values();
console.log(arrkeyss);
for(let item of arrkeyss){
    console.log(item);  //1, 'a', '1', 23, NaN, Infinity
}