/**
 * Created by Administrator on 2016/7/25.
 */
//Array.from 复制数组
//复制有深拷贝和浅拷贝
let obj = {
    a: 'a',
    b: 'b'
};


let arr = [1, 2, 3, obj];

//let arr2 = arr;

let arr3 = Array.from(arr);
obj.c = 'c';
arr[0] = 111;

console.log(arr, arr3);


let bodyDOM = document.querySelectorAll('body');
let bodyArr = Array.from(bodyDOM || []);


let arr2 = [1, 2, 3];
let arr4 = Array.from(arr2);
console.log(arr4);  // [1, 2, 3]
