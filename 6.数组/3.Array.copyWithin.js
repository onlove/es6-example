/**
 * Created by Administrator on 2016/7/25.
 */
//Array.copyWithin
//Array.prototype.copyWithin(target, start = 0, end = this.length);
//target 被覆盖的下标
//start 截取的开始下标
//end 截取结束的下标后一个


//let arr = [1, 2, 3, 4, 5];
//var arr2 = [1, 2, 3, 4, 5];
//console.log(arr, arr2);
//let b = arr.copyWithin(1, 0, 2);
//let d = arr2.copyWithin(3, 0, 3);
//console.log(b, d);
////[1, 1, 2, 4, 5]
////[1, 2, 3, 4, 1]

console.log([1, 2, 3, 4, 5].copyWithin(2, 1, 4));  //[1, 2, 2, 3, 4]