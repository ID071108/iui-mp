## 小程序ui组件

### cell
> 可跳转列表项
+ code
```js
<cell 
  title="title"
  value="value" 
  label="label" 
  isLink="{{true}}" 
  linkType="navigateTo"
  url="/path/to/your/page"
>
</cell>
```
+ properties: {
  + title
  ```js
    {
      type: String,
      description: '左侧标题'
    }P
  ```
  + label
  ```js
    {
      type: String,
      description: '标题下方的描述信息'
    }
  ```
  + value
  ```js
    {
      type: String,
      description: '右侧内容'
    }
  ```
  + onlyTapFooter: 
  ```js
    {
      type: Boolean,
      description: '只有点击 footer 区域才触发 tab 事件'
    }
  ```
  + isLink
  ```js
    {
      type: null,
      value: '',
      description: '是否展示右侧箭头并开启尝试以 url 跳转'
    }
  ```
  + linkType
  ```js
    {
      type: String,
      value: 'navigateTo',
      description: '链接类型，可选值为 navigateTo，redirectTo，switchTab，reLaunch'
    }
  ```
  + url: 
   ```js
    {
      type: String,
      value: ''
    }
  ```
}

### cell-group
> 可跳转列表组
+ code
```js
<cell-group>
  <cell 
    title="title"
    value="value" 
    label="label" 
    isLink="{{true}}" 
    linkType="navigateTo"
    url="/path/to/your/page"
  >
  </cell>
</cell-group>
```
* 使用cell-group会在cell之间产生分割线

### grids
> 九宫格组件，可传入任意长度数组
+ code
```js
 <grids grids="{{grids}}"></grids>
 /**
 grids: [{
  label: 'iui',
  iconPath: '../../public/logo/pulse.png',
  url: '/'
  }]
 **/
```
+ properties: 
  ```js
    grids: [{
      label: 标题,
      iconPath: 图片地址,
      url: 跳转路径
    }]
  ```
### icon
> 图标组件, 使用字体图标(阿里图标库), 或使用自定义图标并传入图片路径
+ code
```js
  <!-- 字体图标 -->
  <view class="iconfont icon-xx"></view>
  <text class="iconfont icon-xx"></text>
  <!-- 自定义图标 -->
  <icon type="xx" size="size" iconPath="...url"></icon>
```
+ properties: 
  ```js
    {
      class: 'iconfont icon-*'
      type: {
        type: String,
        default: 'smile'
      }
      size: {
        type: Number
        default: 24
      },
      iconPath: {
        type: String
        default: ''
      },
      shape: {
        type: String,
        default: 'square',
        options: 'square' || 'circle'
      }
    }
  ```

### tabs
> 导航栏标签页
+ code
```js
  <tabs tabs="{{tabs}}" bind:tabClick="tabClick" activeIndex="{{activeIndex}}" />
  /*
  data: {
    tabs: ["选项1", "选项2", "选项3"],
    activeIndex: 2
  }
  */
```
+ properties: 
  ```js
    {
      tabs: {
        type: Array,
        value: ["选项一", "选项二", "选项三"]
      },
      activeIndex: {
        type: Number,
        value: 0,
        desc: '指定打开的标签页'
      },
      tabClick: {
        type: Function,
        default: '',
        desc: '绑定一个标签页点击事件'
      } 
    }
  ```
