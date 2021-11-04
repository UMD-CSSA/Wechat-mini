Page({
  /**
   * 页面的初始数据
   */
  data: {
    logo: '../../assets/icon-logo.png',
    iconFlag: '../../assets/icon-flag.png',
    copyrightText: 'www.duoguyu.com',
    bannerCurrent: 0, // 当前显示的banner
    bannerData: [
      { 'id': 1, 
        'focus': 'posters/主席团.png', 
        'img': 'posters/主席团合照.png', 
        'isOpenFilp': false, 
        'lines': '这是所有的老大', },
      { 'id': 2, 
        'focus': 'posters/秘书团.png', 
        'img': 'posters/秘书团合照.png', 
        'isOpenFilp': false, 
        'lines': '漂亮的小哥哥小姐姐', },
      { 'id': 3, 
        'focus': 'posters/技术部.png', 
        'img': 'posters/技术部合照.png', 
        'isOpenFilp': false, 
        'lines': '一群写bug的', },
      { 'id': 4, 
        'focus': 'posters/宣传部.png', 
        'img': 'posters/宣传部合照.png', 
        'isOpenFilp': false, 
        'lines': '好看的图都是他们做的', },
      { 'id': 5, 
        'focus': 'posters/外联部.png', 
        'img': 'posters/外联部合照.png', 
        'isOpenFilp': false, 
        'lines': '优惠和赞助都是他们搞来的', },
      { 'id': 6, 
        'focus': 'posters/组织部.png', 
        'img': 'posters/组织部合照.png',  
        'isOpenFilp': false, 
        'lines': '我真的不知道他们是干嘛的', },
      { 'id': 7, 
        'focus': 'posters/文体团.png', 
        'img': 'posters/文体团合照.png', 
        'isOpenFilp': false, 
        'lines': '能歌善舞美若天仙', },
    ],
  },

  // bannerSwiper
  bannerSwiper(e) {
    const that = this, bannerCurrent = e.detail.current;
    that.setData({
      bannerCurrent
    })
  },

  // 卡牌切换
  switchFlip: function (e) {
    const that = this;
    const index = e.currentTarget.dataset.index;
    const bannerData = that.data.bannerData;
    const isOpenFilp = that.data.bannerData[index].isOpenFilp ? false : true;
    bannerData[index].isOpenFilp = isOpenFilp;
    that.setData({
      bannerData
    });
  }
})