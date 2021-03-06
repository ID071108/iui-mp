// components/input/index.js
Component({
  relations: {
    '../form/index': {
      type: 'parent', // 关联的目标节点应为父节点
      linked: function (target) {
        // console.log(target)
      },
      linkChanged: function (target) {
        // 每次被移动后执行，target是custom-ul节点实例对象，触发在moved生命周期之后
      },
      unlinked: function (target) {
        // 每次被移除时执行，target是custom-ul节点实例对象，触发在detached生命周期之后
      }
    }
  },
  /**
   * 组件的属性列表
   */
  externalClasses: ['label-cls'],
  /**
   * 组件的属性列表
   */
  properties: {
    inline: {
      type: Boolean,
      value: true
    },
    label: {
      type: String,
      value: ''
    },
    prop: {
      type: String,
      value: ''
    }
  },
  data: {},
  /**
   * 组件的方法列表
   */
  methods: {}
})