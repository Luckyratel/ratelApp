//index.js
//获取应用实例
Page({
  data:{

  },
  onLoad:function(){

  },
  onShow:function(){

  },
  goPage:function(){
    wx.navigateTo({
      url: '/pages/display/topNav/topNav',
    })
  },
  goDeletePage:function(){
    wx.navigateTo({
      url: '/pages/display/spreadDelete/spreadDelete',
    })
  },

  goWaterFall:function(){
    wx.navigateTo({
      url: '/pages/display/waterfall-display/waterfall-display',
    })
  },

  goSwiperCenter:function(){
    wx.navigateTo({
      url: '/pages/display/swiperCenter/swiperCenter',
    })
  },

  goQuantityEdit: function () {
    wx.navigateTo({
      url: '/pages/display/quantityEdit/quantityEdit',
    })
  },

 
})
