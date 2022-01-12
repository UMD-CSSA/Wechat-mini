Page({
  getArtLists(accessToken){
    wx.request({
      url: 'https://api.weixin.qq.com/cgi-bin/material/get_materialcount?access_token=' + accessToken,
      method:'GET',
      success(res){
        let news_count=res.data.news_count;
        let res_id=null;
        for (var i = 0; i < Math.ceil(news_count/20);i++){
          wx.request({
            url: 'https://api.weixin.qq.com/cgi-bin/material/batchget_material?access_token=' + accessToken,
            data: {
              "type": 'news',
              "offset": i*20,
              "count": 20
            },
            method: 'POST',
            header: {
              'content-type': 'application/json'
            },
            success(res) {
              console.log('微信素材列表', res)
              for(let j=0;j<res.data.item.length;j++){
                let news_item = res.data.item[j].content.news_item;
                for(let k=0;k<news_item.length;k++){
                  let title=news_item[k].title;//标题
                  let url=news_item[k].url;//链接
                  let image_url=news_item[k].thumb_url;//封面
                  let digest=news_item[k].digest;//摘要
                  let author=news_item[k].author;//作者
                  db.collection('pushData').where({
                    _id: url
                  }).get({
                    success: function (res) {
                      res_id = res.data[0]._id;
                    }
                  })
                  if (res_id == url) {
                  } else {
                    db.collection('pushData').add({
                      data: {
                        _id: url,
                        title: title,
                        digest:digest,
                        image_url:image_url,
                      },
                      success: function (res) {
                        console.log(url+'插入成功')
                      },
                    })
                  }
                }
              }
            },
            fail(res) {
              wx.showToast({
                title: res.data.msg,
                icon: 'none'
              })
            },
            complete() {   
            }
          })
        }
      }
    })
  }
});

var serverUrl = 'http://localhost/test/getAccessToken.php';
wx.request({
  url: serverUrl,
  method: 'GET',
  dataType: 'json',
  success:function(res){
    console.log(res.data)
    that.getArtLists(res.data.access_token)
  },
})

