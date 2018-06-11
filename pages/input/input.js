// pages/input/input.js
Page({
  behaviors: ['wx://form-field'],
  /**
   * 页面的初始数据
   */
  data: {

  },
  onLoad: () => {
    var query = wx.createSelectorQuery()
    query.selectAll('.ad').boundingClientRect(function (elems) {
      elems.forEach((elem) => {
        // console.log(elem)
      })
    }).exec()
    // console.log(inps)
  },
  handleNameFocus: (e) => {
    console.log(e, 12222)
  },
  handleNameBlur: (e) => {
    console.log(e, 12222)
  },
  handleNameInput: (e) => {
    console.log(e, 12222)
  }
})