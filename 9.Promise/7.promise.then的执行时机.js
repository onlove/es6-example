/**
 * Created by Administrator on 2016/7/31.
 */



//let p1= Promise.resolve('success1');
//p1.then((value) => {
//    console.log(value)
//});
//console.log('this is out!');

let p2 = new Promise((resolve, reject) => {
    console.log('this is in!');
    resolve('this is resolve!');
});

p2.then((value) => {
    console.log(value);
});

console.log('this is out!');
setTimeout(() => {
    console.log('this is setTimeout');
})
/*
    this is in!
    this is out!
    this is resolve!
    this is setTimeout
*/
