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
          url: '/pages/shortcuts/选课相关/Testudo',
        })
    },
    课程表(){
        wx.navigateTo({
          url: '/pages/shortcuts/选课相关/Schdule_of_Classes',
        })
    },
    注册时间(){
        wx.navigateTo({
          url: '/pages/shortcuts/选课相关/Registrtion_Status',
        })
    },
    选课(){
        wx.navigateTo({
          url: '/pages/shortcuts/选课相关/Registration',
        })
    },
    候补(){
        wx.navigateTo({
          url: '/pages/shortcuts/选课相关/Waitlist',
        })
    },
    个人课表(){
        wx.navigateTo({
          url: '/pages/shortcuts/选课相关/Student_Schedule',
        })
    },

    Testudo2(){
        wx.navigateTo({
          url: '/pages/shortcuts/学位相关/Testudo',
        })
    },
    学位模拟(){
        wx.navigateTo({
          url: '/pages/shortcuts/学位相关/Testudo',
        })
    },
    申请在读证明(){
        wx.navigateTo({
          url: '/pages/shortcuts/学位相关/Enrollment',
        })
    },
    非官方成绩单(){
        wx.navigateTo({
          url: '/pages/shortcuts/学位相关/Unofficial_Transcript',
        })
    },
    申请成绩单(){
        wx.navigateTo({
          url: '/pages/shortcuts/学位相关/Transcript',
        })
    },

    dining(){
      wx.navigateTo({
        url: '/pages/shortcuts/食宿相关/dining',
      })
    },
    student_portal_d(){
      wx.navigateTo({
        url: '/pages/shortcuts/食宿相关/student_portal_d',
      })
    },
    dining_plan(){
      wx.navigateTo({
        url: '/pages/shortcuts/食宿相关/dining_plan',
      })
    },
    dining_dollar(){
      wx.navigateTo({
        url: '/pages/shortcuts/食宿相关/dining_dollar',
      })
    },
    terripin_express(){
      wx.navigateTo({
        url: '/pages/shortcuts/食宿相关/terripin_express',
      })
    },
    resident_life(){
      wx.navigateTo({
        url: '/pages/shortcuts/食宿相关/resident_life',
      })
    },
    student_portal_rl(){
      wx.navigateTo({
        url: '/pages/shortcuts/食宿相关/student_portal_rl',
      })
    },
    oncampus(){
      wx.navigateTo({
        url: '/pages/shortcuts/食宿相关/oncampus',
      })
    },
    offcampus(){
      wx.navigateTo({
        url: '/pages/shortcuts/食宿相关/offcampus',
      })
    },

    health(){
      wx.navigateTo({
        url: '/pages/shortcuts/健康相关/health',
      })
    },
    student_portal_h(){
      wx.navigateTo({
        url: '/pages/shortcuts/健康相关/student_portal_h',
     })
    },
    covid(){
      wx.navigateTo({
        url: '/pages/shortcuts/健康相关/covid',
      })
    },
    insurance(){
      wx.navigateTo({
        url: '/pages/shortcuts/健康相关/insurance',
      })
    },

    library(){
      wx.navigateTo({
        url: '/pages/shortcuts/校园设施/library',
      })
    },
    gym(){
      wx.navigateTo({
        url: '/pages/shortcuts/校园设施/gym',
      })
    },

    isss(){
      wx.navigateTo({
        url: '/pages/shortcuts/ISSS/isss',
      })
    },
    iterp(){
      wx.navigateTo({
        url: '/pages/shortcuts/ISSS/iterp',
      })
    },
    appointment(){
      wx.navigateTo({
        url: '/pages/shortcuts/ISSS/appointment',
      })
    },


    data:{
        b1Hidden: true,
        b2Hidden: true,
        b3Hidden: true,
        b4Hidden: true,
        b5Hidden: true,
        b6Hidden: true,
        b7Hidden: true
    },

    b1Click: function(event) {
        this.setData({
            b1Hidden: (!this.data.b1Hidden)
        })
    },
    b2Click: function(event) {
        this.setData({
            b2Hidden: (!this.data.b2Hidden)
        })
    },
    b3Click: function(event) {
        this.setData({
            b3Hidden: (!this.data.b3Hidden)
        })
    },
    b4Click: function(event) {
      this.setData({
          b4Hidden: (!this.data.b4Hidden)
      })
    },
    b5Click: function(event) {
      this.setData({
          b5Hidden: (!this.data.b5Hidden)
      })
    },
    b6Click: function(event) {
      this.setData({
          b6Hidden: (!this.data.b6Hidden)
      })
    },
    b7Click: function(event) {
      this.setData({
          b7Hidden: (!this.data.b7Hidden)
      })
    }
});
