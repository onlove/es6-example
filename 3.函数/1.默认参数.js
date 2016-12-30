/**
 * Created by Administrator on 2016/7/23.
 */
//TypeScript

/*function add (x, y){
    // y || (y = 0)
    if(typeof y === "undefined"){
        y = 0;
    }
    return x + y;
}*/

function add (x, y = 0){
    return x + y;
}

let res = add(1, 2);
let res1 = add(1, null);
console.log(res); // 3
console.log(res1) // 1