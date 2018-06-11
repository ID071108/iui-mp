// pages/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    form: {
      name: ''
    }
  },
  func: function () {
    console.log(111)
  },
  handleNameInput: function (e) {
    // console.log(e.detail.detail.value)
    this.setData({
      name: e.detail.detail.value
    })
  },
  submit: function (e) {
    console.log(e)
  }
})