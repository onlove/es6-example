/**
 * Created by Administrator on 2016/7/31.
 */
let p1 = Promise.reject('fails');
p1.catch((error) => {
    console.log(error);   // fails
})