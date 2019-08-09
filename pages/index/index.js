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
  }
})
