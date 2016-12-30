/**
 * Created by Administrator on 2016/7/27.
 */
'use strict';
//let objMap = {'objMap': 'objMap'};
//let arrMap = ['a', 'r', 'r'];
//
//let map = new Map([[objMap, 'o'], [arrMap, 'a'], [1, 2]]);
//console.log(map);
//
//console.log([...map]);
////[ [{objMap:'objMap'}, 'o'], [['a', 'r', 'r'], 'a'], [1, 2] ]

//let arr = ['a', 'b', 'c'];
//let mapVal = [arr.map((item, index, array)=>[index, item])];
//console.log(mapVal); // [[0, 'a'], [1, 'b'], [2, 'c']]
//let arrToMap = new Map(mapVal);
//console.log(arrToMap);


var map = new Map();
map.set('zfpx',{name:'zfpx'});//添加键值对
map.set('age',{age:7});
console.log(map)  //Map {"zfpx" => Object {name: "zfpx"}, "age" => Object {age: 7}}
map.forEach(function (item) { //循环键值对
    console.log(item); //Object {name: "zfpx"}   Object {age: 7}
});
console.log(map.size); //Map的长度  2
console.log(map.has('zfpx'));//是否存在  true
map.delete('zfpx'); //删除
console.log(map); // Map {"age" => Object {age: 7}}
map.clear(); //清空
console.log(map)  //Map {}