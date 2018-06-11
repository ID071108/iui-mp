// components/tabs/tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs: {
      type: Array,
      value: ["选项一", "选项二", "选项三"]
    },
    activeIndex: {
      type: Number,
      value: 0,
      desc: '指定打开的标签页'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    activeIndex: 0,
    width: 0,
    sliderOffset: 0,
    sliderLeft: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabClick: function (e) {
      this.setData({
        sliderOffset: e.currentTarget.offsetLeft,
        activeIndex: e.currentTarget.id
      })
      this.triggerEvent('tabClick', e.currentTarget)
    }
  },
  ready: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          width: res.windowWidth / that.data.tabs.length,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  }
})
