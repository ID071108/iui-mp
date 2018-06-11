// pages/icon/icon.js
Page({
  /**
   * 页面的初始数据
   */
  properties: {
    type: {
      type: String,
      value: '',
      desc: '指定图标类型'
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
  
  },
  tap: (e) => {
    console.warn('trigger event on Children element success !')
  }
})