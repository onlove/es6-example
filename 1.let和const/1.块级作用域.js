/**
 * Created by Administrator on 2016/7/22.
 */
for (var i = 0; i < 3; i++){
    setTimeout(function(){
        console.log(i)
    })
}

for (let i = 0; i < 3; i++){
    setTimeout(function(){
        console.log(i)
    })
}

{
    var a = 5;
    let b = 6;
}

console.log(a, b)