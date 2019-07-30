// components/basicItem/basicItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:String,
    label:{
      type:String,
      value:"",
    },
    icon:{
      type:String,
      value:"../../images/basicItem_right.png",
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goPage:function(){
      this.triggerEvent("gopageTab");
    }
  }
})
