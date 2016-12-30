/**
 * Created by Administrator on 2016/7/28.
 */
//let promiseInstance = new Promise((resolve, reject) => {
//    setTimeout(() => {
//        resolve('this is resolve');
//    })
//});
//
//promiseInstance
//    .then((value) => {
//        console.log(value);  // this is resolve
//    })
//    .catch((err) => {
//        console.log(err);
//    });


function ajaxPromise(queryUrl) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', queryUrl, true);
        xhr.send(null);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.responseText);
                } else {
                    reject(xhr.responseText)
                }
            }
        }
    })
}
ajaxPromise('https://api.github.com/')
    .then((value) => {
        console.log(value);   //{ "current_user_url": "https://api.github.com/user",....}
    })
    .catch((err) => {
        console.log(err);
    });


// promise内部的resolve方法运行导致Promise实例的状态发生改变
// 状态从pending变到resolve
// 当状态从pending变到resolve的时候，Promise实例的then方法会被Promise执行;