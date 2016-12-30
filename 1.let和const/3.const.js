/**
 * Created by Administrator on 2016/7/22.
 */


/*const USER_TYPE = {
    1: "普通用户",
    2: "超级用户",
    3: "管理员"
}

const b = 'a';
b = 'b';
console.log(b);  // Assignment to constant variable.
    */


/*const names = ['str'];
names.push('one');
console.log(names);  // ["str", "one"]*/



const A = "0";
{
    const A = "A";
    console.log(A)  // A
}
{
    const A = "B";
    console.log(A)  // B
}
console.log(A);   // 0