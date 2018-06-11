// components/form/index.js
Component({
  relations: {
    '../form-item/index': {
      type: 'child', // 关联的目标节点应为子节点
      linked: function (target) {
        console.log(target)
        let {
          validators
        } = this.data
        validators.push(target)
        this.setData({
          validators: validators,
          a: this.data.a + 10
        })
        // 每次有custom-li被插入时执行，target是该节点实例对象，触发在该节点attached生命周期之后
      },
      linkChanged: function (target) {
        // 每次有custom-li被移动后执行，target是该节点实例对象，触发在该节点moved生命周期之后
      },
      unlinked: function (target) {
        // 每次有custom-li被移除时执行，target是该节点实例对象，触发在该节点detached生命周期之后
      }
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    formData: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    validators: [],
    a: 100
  },

  /**
   * 组件的方法列表
   */
  methods: {
    submit: function (e) {
      console.log(e, 11111)
      console.log(this.properties.formData)
    }
  },
  ready() {
    var query = wx.createSelectorQuery()
    var ads = query.selectAll('.ad')
    ads.boundingClientRect(function (elems) {
      elems.forEach((elem) => {
        console.log(elem.properties)
      })
    }).exec()
  }
})