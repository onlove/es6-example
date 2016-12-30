/**
 * Created by Administrator on 2016/7/23.
 */

function ajax ({method = 'get', url = 'default_url'} = {}) {
    console.log(method, url)
}

ajax();  //get default_url

ajax({
    method:'post',
    url:"http://www.baidu.com"
}); //post http://www.baidu.com

//let destruct = function({name,age}){
//    console.log(name,age);
//}
//destruct({name:'zfpx',age:6});