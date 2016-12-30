/**
 * Created by Administrator on 2016/7/28.
 */
let promiseInstance = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('this is resolve');
        reject('error');
    })
});

promiseInstance
    .then((value) => {
        console.log(value);
    })
    .catch((err) => {
        console.log(err);
    });


//promiseInstance
//    .then((value) => {
//        console.log(value);
//    });
//promiseInstance
//    .catch((err) => {
//        console.log(err);
//    });