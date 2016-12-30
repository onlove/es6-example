'use strict';

/*
function func() {
    setTimeout(function () {
        console.log(this.id);
    }.bind(this))

    setTimeout(() => {
        console.log(this.id)
    })
}

let obj = {
    id: 123
};
func.call(obj);
*/

//箭头函数的this是定义时候决定的
//{} 1.作用域  2.对象

//let obj = {
//    id: 123,
//    func1: function(){
//        setTimeout(function () {
//            console.log(this.id);
//        })
//    },
//    func2: function(){
//        setTimeout(() => {
//            console.log(this.id);
//        })
//    },
//    func3: () => {
//        setTimeout(() => {
//            console.log(this.id);
//        })
//    }
//};
//obj.func1();
//obj.func2();
//obj.func3();

[1, 2, 3].forEach(function (val) {
    return console.log(val);
}); // 1、2、3


var person = {
    name: 'zfpx',
    getName: function getName() {
        var _this = this;

        setTimeout(function () {
            console.log(this);
        }, 1000); //在浏览器执行的话this指向window
        setTimeout(function () {
            return console.log(_this);
        }, 1000); //在浏览器执行的话this指向person
    }
};
person.getName();
