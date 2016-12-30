/**
 * Created by Administrator on 2016/7/28.
 */
let promiseIns1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'success1');
});

let promiseIns2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'success2');
});

let promiseIns3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'success3');
});

let promiseIns4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1500, 'success4');
});

Promise.all([promiseIns1, promiseIns2, promiseIns3, promiseIns4])
    .then((value) => {
        console.log(value);  //["success1", "success2", "success3", "success4"]
    })
    .catch((err) => {
        console.log(err);
    });

//Promise.all([1, false, [1, 3], 'str'])
//    .then((value) => {
//        console.log(value);
//    })
//    .catch((err) => {
//        console.log(err);
//    })
