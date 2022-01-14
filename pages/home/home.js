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

  data: {
    selected: true,
    selected1: false,
    selected2:false,

    swiperCurrent: 0,//当前所在页面的 index
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //滑动动画时长1s
    circular: true, //是否采用衔接滑动
    imgUrls: [//图片路径(可以是本地路径，也可以是图片链接)
      '/pages/home/images/news1.jpeg',
      '/pages/home/images/news2.jpeg',
      '/pages/home/images/news3.jpeg',
      '/pages/home/images/news4.jpeg',
      '/pages/home/images/news5.png'
    ],

    links: [//点击图片之后跳转的路径
      '/pages/home/news/news1',
      '/pages/home/news/news2',
      '/pages/home/news/news3',
      '/pages/home/news/news4',
      '/pages/home/news/news5'
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
    wx.navigateTo({
      url: this.data.links[this.data.swiperCurrent]
    })
  },
})

