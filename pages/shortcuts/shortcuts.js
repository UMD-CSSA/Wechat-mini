Page({
    主页(){
        wx.navigateTo({
          url: '/pages/shortcuts/校园官网/主页',
        })
    },
    校历(){
        wx.navigateTo({
          url: '/pages/shortcuts/校园官网/Academic_Calendar',
        })
    },
    地图(){
        wx.navigateTo({
          url: '/pages/shortcuts/校园官网/Campus_Map',
        })
    },
    Testudo1(){
        wx.navigateTo({
          url: '/pages/shortcuts/选课相关/Testudo.wxml',
        })
    },
    课程表(){
        wx.navigateTo({
          url: '/pages/shortcuts/选课相关/Schdule_of_Classes.wxml',
        })
    },
    注册时间(){
        wx.navigateTo({
          url: '/pages/shortcuts/选课相关/Registrtion_Status.wxml',
        })
    },
    选课(){
        wx.navigateTo({
          url: '/pages/shortcuts/选课相关/Registration.wxml',
        })
    },
    候补(){
        wx.navigateTo({
          url: '/pages/shortcuts/选课相关/Waitlist.wxml',
        })
    },
    个人课表(){
        wx.navigateTo({
          url: '/pages/shortcuts/选课相关/Student_Schedule.wxml',
        })
    },
    Testudo2(){
        wx.navigateTo({
          url: '/pages/shortcuts/学位相关/Testudo.wxml',
        })
    },
    学位模拟(){
        wx.navigateTo({
          url: '/pages/shortcuts/学位相关/Testudo.wxml',
        })
    },
    申请在读证明(){
        wx.navigateTo({
          url: '/pages/shortcuts/学位相关/Enrollment.wxml',
        })
    },
    非官方成绩单(){
        wx.navigateTo({
          url: '/pages/shortcuts/学位相关/Unofficial_Transcript.wxml',
        })
    },
    申请成绩单(){
        wx.navigateTo({
          url: '/pages/shortcuts/学位相关/Transcript.wxml',
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
