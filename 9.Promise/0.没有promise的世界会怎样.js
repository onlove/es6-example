/**
 * Created by Administrator on 2016/7/28.
 */

//通过照片获得人名
$.ajax({
    url: 'getPersonNameByPhoto',
    method: '***',
    data: 'some img file',
    success: (res) => {
        //通过姓名或者电话
        $.ajax({
            url: 'getPersonNumByPersonName',
            method: '***',
            data: res.PersonName,
            success: (res)=> {
                //通过电话获取微信
                $.ajax({
                    url: 'getWeChatByPhoneNum',
                    method: '***',
                    data: res.PhoneNum,
                    success: (res)=> {
                        //通过微信获取微博
                        $.ajax({
                            url: 'getWeBoByWeChat,
                            method: '***',
                            data: res.WeChat,
                            success: (res)=> {
                                console.log(res.weibo, "get it")
                            },
                            error: (err)=> {
                                console.log(err)
                            }
                        })
                    },
                    error: (err)=> {
                        console.log(err)
                    }
                })
            },
            error: (err)=> {
                console.log(err)
            }

        })

    },
    error: (err)=> {
        console.log(err)
    }
})