// components/input/index.js
Component({
  behaviors: ['wx://form-field'],
  externalClasses: ['input-cls'],
  properties: {
    inline: {
      type: Boolean,
      value: true
    },
    type: {
      type: String,
      value: '',
      desc: '指定input还是textarea'
    },
    inputType: {
      type: String,
      value: '',
      desc: '指定input的类型'
    },
    label: {
      type: String,
      value: '',
      desc: '标题'
    },
    value: {
      type: String,
      value: '',
      desc: '输入框值'
    },
    required: {
      type: Boolean,
      value: false,
      desc: '是否必填'
    },
    errorMsg: {
      type: String,
      value: '',
      desc: '错误提示'
    },
    placeholder: {
      type: String,
      value: '请输入内容',
      desc: '占位符'
    },
    validator: {
      type: Object,
      value: {
        requred: false,
        min: '',
        max: '',
        callback: () => {}
      },
      desc: '验证器'
    },
    disabled: {
      type: Boolean,
      value: false
    },
    name: {
      type: String,
      value: ''
    }
  },
  data: {
    _value: '123'
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onInput: function (e) {
      this.setData({
        _value: e.detail.value
      })
      this.triggerEvent("input", e)
    },
    onFocus: function (e) {
      this.triggerEvent("focus", e)
    },
    onBlur: function (e) {
      let value = e.detail.value
      let len = value.length
      let {
        label,
        validator
      } = this.properties
      let {
        required,
        min,
        max,
        callback
      } = validator
      if (required) {
        if (!value) {
          this.setData({
            errorMsg: label + '不能为空'
          })
        } else {
          if (min && min > len) {
            this.setData({
              errorMsg: '长度不能小于' + min + '个字节'
            })
            return
          }
          if (max && max < len) {
            this.setData({
              errorMsg: '长度不能大于于' + max + '个字节'
            })
            return
          }
          if (callback) {
            this.setData({
              errorMsg: callback() || ''
            })
            return
          }
        }
      }
      this.triggerEvent("blur", e)
    }
  }
})