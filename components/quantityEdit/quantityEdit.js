// components/quantityEdit/quantityEdit.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    quantity:1,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addTab:function(){
      this.setData({
        quantity: this.data.quantity + 1,
      })
    },
    subTab:function(){
      var quantity = this.data.quantity - 1; 
      this.setData({
        quantity: quantity<=0? 1:quantity,
      })
    }
  }
})
