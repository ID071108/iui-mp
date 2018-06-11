'use strict';

Component({
  properties: {
    type: {
      type: String,
      value: ''
    },
    size: {
      type: Number,
      value: 24
    },
    shape: {
      type: String,
      value: 'square'
    }
  },
  methods: {
    onTap: function (e) {
      console.log(e)
      this.triggerEvent('iconClick')
    }
  }
});