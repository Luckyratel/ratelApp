//index.js
//获取应用实例
Page({
  data:{

  },
  onLoad:function(){

  },
  onShow:function(){

  },
  goTest:function(){
    wx.navigateTo({
      url: '/pages/display/test/test',
    })
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
  
  goQrCode: function() {
    wx.navigateTo({
      url: '/pages/display/qrCode/qrCode',
    })
  },

  goBarCode: function() {
    wx.navigateTo({
      url: '/pages/display/barCode/barCode',
    })
  },

  goProTab: function() {
    wx.navigateTo({
      url: '/pages/display/progress/progress',
    })
  },

  goCustomTab: function() {
    wx.navigateTo({
      url: '/pages/display/custom-nav/custom-nav',
    })
  }
 
})
