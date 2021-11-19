Page({
    data:{
        b1Hidden: true,
        b2Hidden: true
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
    }
});
