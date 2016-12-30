/**
 * Created by Administrator on 2016/7/31.
 */
'use strict';

function* getFunc () {
    yield 'hello';
    yield 'Generator';
    yield '!';
}
let genHandler = getFunc();
//console.log([...genHandler], '通过...运行遍历器');  //["hello", "Generator", "!"] "通过...运行遍历器"

//Generator 返回的不是返回值，也不是第一个生成的内容，而是一个迭代器
//迭代器是一个可遍历的对象

console.log(genHandler.next('222'));
console.log(genHandler.next());
console.log(genHandler.next());
console.log(genHandler.next());
console.log(genHandler.next());


//for (let item of genHandler){
//    console.log(item, '通过for of循环运行遍历器')
//}




//function* buy(books){
//    for(var i=0;i<books.length;i++){
//        yield books[i];
//    }
//}
//let buying = buy(['js','html']);
//var curr;
//do {
//    curr = buying.next();
//    console.log(curr);   //{value: "js", done: false}  {value: "html", done: false} {value: undefined, done: true}
//} while (!curr.done);