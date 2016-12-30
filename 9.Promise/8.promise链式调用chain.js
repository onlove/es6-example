/**
 * Created by Administrator on 2016/7/31.
 */
let p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'this is resolve');
});

p1.then((value) => {
    debugger;
    console.log('then1');
}).then((value) => {
    debugger;
    return Promise.reject('2 error');
}).catch((error) => {
    debugger;
    return 'catch 1';
}).then((value) => {
    debugger;
    return 'then 3'
}).catch((error) => {
    debugger;
    console.log('catch 2');
});