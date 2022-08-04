let store = require("../utils/store.js");
let system = store.getSystemInfo();

const clientInfo = {
  "clientType": "mp",
  "appnm": "cssa",
  "model": system.model,
  "os": system.system,
  "screen": system.screenHeight + "*" + system.screenWidth,
  "version": App.version,
  "channel": "miniprogram"
}

module.exports = {
  fetch:(url, data={}, option={}) => {
    let { loading=true, toast=true, method='get'} = option;

    return new Promise((resolve, reject) =>{
      if (loading){
        wx.showLoading({
          title: '正在登录，别急', // 得改得改得改
          mask: true
        })
      }
      let env = App.config.baseApi;
      wx.request({
        url: env + url,
        data,
        method,
        header:{
          "clientInfo": JSON.stringify(clientInfo)
        },
        success:function(result){
          let res = result.data; // {code: 0, data:"", message:""}
          if (res.code == 0){
            if (loading){
              wx.hideLoading();
            }
            resolve(res.data);
          } else {
            if (toast){
              wx.showToast({
                title: res.message,
                mask: true,
                icon: "none"
              })
            } else {
              wx.highLoading();
            }
          }
        },
        fail:function(e = { code: -1, msg: errMsg, errMsg}){
          let msg = e.errMsg;
          // 测试一下
          if (msg == "request: fail timeout"){
            msg = '请求超时';
          }
          wx.showToast({
            title: msg,
            icon:"none"
          })
          reject(e);
        }
      })
    })
  }
}