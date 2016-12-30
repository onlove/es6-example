/**
 * Created by Administrator on 2016/7/27.
 */
//集合 并集  交集  差集
let s1 = new Set([1, 3, 5, 7]);
let s2 = new Set([1, 4, 5, 8]);

//并集
let bj = new Set([...s1, ...s2]);
console.log(bj);  // {1, 3, 5, 7, 4, 8}

//交集
let jj = new Set([...s1].filter(value => s2.has(value)));
console.log(jj);  // {1, 5}

//差集
let cj = new Set([...s1].filter(value =>!s2.has(value)));
console.log(cj);  //{3, 7}