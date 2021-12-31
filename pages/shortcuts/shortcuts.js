Page({
    主页(){
        wx.navigateTo({
          url: '/pages/shortcuts/校园官网/主页',
        })
    },

    data:{
        b1Hidden: true,
        b2Hidden: true,
        b3Hidden: true
    },
    b1Click: function(event) {
        // console.log(this.data.b1Hidden)
        this.setData({
            b1Hidden: (!this.data.b1Hidden)
        })
        // console.log(this.data.b1Hidden)
    },
    b2Click: function(event) {
        // console.log(this.data.b2Hidden)
        this.setData({
            b2Hidden: (!this.data.b2Hidden)
        })
        // console.log(this.data.b2Hidden)
    },
    b3Click: function(event) {
        // console.log(this.data.b3Hidden)
        this.setData({
            b3Hidden: (!this.data.b3Hidden)
        })
        // console.log(this.data.b3Hidden)
    }
});
