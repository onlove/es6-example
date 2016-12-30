/**
 * Created by Administrator on 2016/7/26.
 */
let para = 'bbcc'
let obj = {
    add(){
        return 123;
    },
    [para]:123
}

let obj2 = {
    add: function () {
    }
}
console.log(obj, obj.add())