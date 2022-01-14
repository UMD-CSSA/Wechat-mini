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

  // data: {
  //   slider: [
  //     {'img':'/images/news1.jpeg'},
  //     {'img':'/images/news2.jpeg'},
  //     {'img':'/images/news3.png'},
  //     {'img':'/images/news4.jpeg'},
  //     {'img':'/images/news5.jpeg'}
  //   ],
  //   swiperCurrent: 0,
  // },

  // swiperChange: function(e){
  //   this.setData({
  //     swiperCurrent: e.detail.current
  //   })
  // },

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
      url: 'policies/policy1',
    })
  },
  policy2(){
    wx.navigateTo({
      url: 'policies/policy2',
    })
  },
  policy3(){
    wx.navigateTo({
      url: 'policies/policy3',
    })
  },
  policy4(){
    wx.navigateTo({
      url: 'policies/policy4',
    })
  },
  policy5(){
    wx.navigateTo({
      url: 'policies/policy5',
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
  
  },

  data: {
    swiperCurrent: 0,//当前所在页面的 index
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //滑动动画时长1s
    circular: true, //是否采用衔接滑动
    imgUrls: [//图片路径(可以是本地路径，也可以是图片链接)
      '/pages/home/images/news1.jpeg',
      '/pages/home/images/news2.jpeg',
      '/pages/home/images/news3.png',
      '/pages/home/images/news4.jpeg',
      '/pages/home/images/news5.jpeg'
    ],

    links: [//点击图片之后跳转的路径
      'https://mp.weixin.qq.com/s?__biz=Mzg5NjY2ODg3MQ==&mid=2247497678&idx=1&sn=1064da429dec4e27da3d5659c3a62b77&chksm=c07f3266f708bb70d5bf87fbdf76e6d73575ff79e088cf3df09a183d7d8ffdeaffa5ec6c22ed&token=1794852101&lang=zh_CN#rd',
      '../personal/personal',
      '../personal/personal',
      '../personal/personal',
      '../personal/personal',
    ] 
  },

  //轮播图的切换事件
  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },

  //点击指示点切换事件
  chuangEvent: function (e) {
    this.setData({
      swiperCurrent: e.currentTarget.id
    })
  },

  //点击图片触发事件
  swipclick: function (e) {
    console.log(this.data.swiperCurrent);
    wx.switchTab({
      url: this.data.links[this.data.swiperCurrent]
    })
  },
})

