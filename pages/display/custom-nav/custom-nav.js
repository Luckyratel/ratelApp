// pages/display/custom-nav/custom-nav.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  goHome:function(){
    wx.reLaunch({
      url: '/pages/index/index',
    })
  }
})