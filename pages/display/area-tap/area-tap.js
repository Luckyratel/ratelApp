// pages/display/area-tap/area-tap.js
var rate = 1;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    rate = wx.getSystemInfoSync().windowWidth / 750;
    console.log(rate);
  },
  getLocation: function(e) {
    // var pageX = e.detail.x;
    // var pageY = e.detail.y;
    // console.log('x:' + pageX);
    // console.log('y:' + pageY);
    // console.log('ratex:' + pageX/rate);
    // console.log('ratey:' + pageY/rate);
    wx.createSelectorQuery().select("#point").boundingClientRect((react) => {
      console.log(react);
      console.log('x:' + react.left);
      console.log('y:' + react.top);
      console.log('ratex:' + react.left/rate);
      console.log('ratey:' + react.top/rate);
    }).exec();
  }
})