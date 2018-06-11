// components/scroll-flow/scrollFlow.js
Component({
  /**
   * 页面的属性值
   */
  properties: {
    config: {
      type: Object,
      value: {},
      desc: '侧边栏内容'
    }
  },
  multipleSlots: true,
  externalClasses: ['wrap-cls', 'sidebar-cls', 'content-cls'],
  /**
   * 页面的初始数据
   */
  data: {
    activeIndex: 0,
    scrollTops: []
  },
  methods: {
    tap: function (e) {
      this.setData({
        scrollTo: e.currentTarget.dataset.for,
        active: e.currentTarget.dataset.key
      })
    },
    scroll: function (e) {
      let _top = e.detail.scrollTop;
      let _st = this.data.scrollTops;
      for (let i = 0; i < _st.length; i++) {
        if (_top < _st[i]) {
          this.setData({
            activeIndex: i
          })
          break
        }
      }
    }
  },
  ready() {
    wx.createSelectorQuery().in(this).selectAll('.view').boundingClientRect(function (rects) {
      let _arr = []
      let _h = 0
      rects.forEach(function (rect) {
        _h += rect.height
        _arr.push(_h)
      })
      this.setData({
        scrollTops: _arr
      })
      _arr = _h = null
    }.bind(this)).exec()
  }
})