Page({
  news(){
    wx.navigateTo({
      url: 'announcement',
    })
  }, 
  
  manual(){
    wx.navigateTo({
      url: 'manual',
    })
  },

  renting(){
    wx.navigateToMiniProgram({
      appId: 'wxdfc5ddf39f121903',
    })
  },

  cssa(){
    wx.navigateTo({
      url: 'cssa_struct/cssa_struct',
    })
  },

  data: {
    slider: [
      {'img':'images/新闻1.jpeg'},
      {'img':'images/新闻2.jpeg'},
      {'img':'images/新闻3.png'},
      {'img':'images/新闻4.jpeg'},
      {'img':'images/新闻5.jpeg'}
    ],
    swiperCurrent: 0,
  },
  swiperChange: function(e){
    this.setData({
      swiperCurrent: e.detail.current
    })
  }
})



