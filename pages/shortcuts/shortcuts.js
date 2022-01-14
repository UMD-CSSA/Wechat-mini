Page({
    主页(){
        wx.navigateTo({
          url: '/pages/shortcuts/umd_home/homepage',
        })
    },
    校历(){
        wx.navigateTo({
          url: '/pages/shortcuts/umd_home/Academic_Calendar',
        })
    },
    地图(){
        wx.navigateTo({
          url: '/pages/shortcuts/umd_home/Campus_Map',
        })
    },

    Testudo1(){
        wx.navigateTo({
          url: '/pages/shortcuts/course_registration/Testudo',
        })
    },
    课程表(){
        wx.navigateTo({
          url: '/pages/shortcuts/course_registration/Schdule_of_Classes',
        })
    },
    注册时间(){
        wx.navigateTo({
          url: '/pages/shortcuts/course_registration/Registration_Status',
        })
    },
    选课(){
        wx.navigateTo({
          url: '/pages/shortcuts/course_registration/Registration',
        })
    },
    候补(){
        wx.navigateTo({
          url: '/pages/shortcuts/course_registration/Waitlist',
        })
    },
    个人课表(){
        wx.navigateTo({
          url: '/pages/shortcuts/course_registration/Student_Schedule',
        })
    },

    Testudo2(){
        wx.navigateTo({
          url: '/pages/shortcuts/degree_related/Testudo',
        })
    },
    学位模拟(){
        wx.navigateTo({
          url: '/pages/shortcuts/degree_related/Testudo',
        })
    },
    申请在读证明(){
        wx.navigateTo({
          url: '/pages/shortcuts/degree_related/Enrollment',
        })
    },
    非官方成绩单(){
        wx.navigateTo({
          url: '/pages/shortcuts/degree_related/Unofficial_Transcript',
        })
    },
    申请成绩单(){
        wx.navigateTo({
          url: '/pages/shortcuts/degree_related/Transcript',
        })
    },

    dining(){
      wx.navigateTo({
        url: '/pages/shortcuts/dining_and_housing/dining',
      })
    },
    student_portal_d(){
      wx.navigateTo({
        url: '/pages/shortcuts/dining_and_housing/student_portal_d',
      })
    },
    dining_plan(){
      wx.navigateTo({
        url: '/pages/shortcuts/dining_and_housing/dining_plan',
      })
    },
    dining_dollar(){
      wx.navigateTo({
        url: '/pages/shortcuts/dining_and_housing/dining_dollar',
      })
    },
    terripin_express(){
      wx.navigateTo({
        url: '/pages/shortcuts/dining_and_housing/terripin_express',
      })
    },
    resident_life(){
      wx.navigateTo({
        url: '/pages/shortcuts/dining_and_housing/resident_life',
      })
    },
    student_portal_rl(){
      wx.navigateTo({
        url: '/pages/shortcuts/dining_and_housing/student_portal_rl',
      })
    },
    oncampus(){
      wx.navigateTo({
        url: '/pages/shortcuts/dining_and_housing/oncampus',
      })
    },
    offcampus(){
      wx.navigateTo({
        url: '/pages/shortcuts/dining_and_housing/offcampus',
      })
    },

    health(){
      wx.navigateTo({
        url: '/pages/shortcuts/health_related/health',
      })
    },
    student_portal_h(){
      wx.navigateTo({
        url: '/pages/shortcuts/health_related/student_portal_h',
     })
    },
    covid(){
      wx.navigateTo({
        url: '/pages/shortcuts/health_related/covid',
      })
    },
    insurance(){
      wx.navigateTo({
        url: '/pages/shortcuts/health_related/insurance',
      })
    },

    library(){
      wx.navigateTo({
        url: '/pages/shortcuts/school_facilities/library',
      })
    },
    gym(){
      wx.navigateTo({
        url: '/pages/shortcuts/school_facilities/gym',
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
        b1Hidden: false,
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
