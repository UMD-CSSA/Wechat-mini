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


    

    data:{
        b1Hidden: true,
        b2Hidden: true,
        b3Hidden: true,
        b4hidden: true
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
    },
    b4Click: function(event) {
      // console.log(this.data.b4Hidden)
      this.setData({
          b4Hidden: (!this.data.b4Hidden)
      })
      // console.log(this.data.b4Hidden)
  }
});
