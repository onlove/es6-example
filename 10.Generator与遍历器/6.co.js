/**
 * Created by DT274 on 2016/8/3.
 */
function* genFunc(initVal) {
    let first = yield new Promise((resolve) => {
        setTimeout(()=>{
            resolve('first');
        },1000);
    });

    let second = yield new Promise((resolve) => {
        setTimeout(()=>{
            resolve(first+'-second');
        },1000);
    });

    let third = yield new Promise((resolve) => {
        setTimeout(()=>{
            resolve(second+'-third');
        },1000);
    });
}

function co(fn) {
    return function(initVal) {
        var it = fn();//得到迭代器
        var curr = null;//当前迭代到的对象
        function next(val) {
            curr = it.next(val);
            console.log(val);
            if(!curr.done){
                curr.value.then(next);
            }
        }
        next();
    }
}

co(genFunc)();