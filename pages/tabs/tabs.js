// pages/tabs/tabs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIndex: 0
  },
  tabClick: function(e) {
    let activeIndex = e.detail.id
    this.setData({
      activeIndex: activeIndex
    })
  }
})