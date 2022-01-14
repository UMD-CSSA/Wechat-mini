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
  },

  data: {
    selected: true,
    selected1: false,
    selected2:false,
  },
  selected: function (e) {
    this.setData({
      selected: true,
      selected1: false,
      selected2: false
    })
  },
  selected1: function (e) {
    this.setData({
      selected: false,
      selected1: true,
      selected2: false
    })
  },
  selected2: function (e) {
    this.setData({
      selected: false,
      selected1: false,
      selected2: true
    })
  },

  policy1(){
    wx.navigateTo({
      url: 'url',
    })
  },
  policy2(){
    wx.navigateTo({
      url: 'url',
    })
  },
  policy3(){
    wx.navigateTo({
      url: 'url',
    })
  },
  policy4(){
    wx.navigateTo({
      url: 'url',
    })
  },
  policy5(){
    wx.navigateTo({
      url: 'url',
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
