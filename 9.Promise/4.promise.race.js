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

Promise.race([promiseIns1, promiseIns2, promiseIns3, promiseIns4])
    .then((value) => {
        console.log(value);  //success3
    })
    .catch((err) => {
        console.log(err);
    })
