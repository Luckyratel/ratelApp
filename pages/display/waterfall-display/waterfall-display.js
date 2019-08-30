// pages/display/waterfall-display/waterfall-display.js
var localData = require("../../../localData/waterFall-data.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    reDisplay: true, //用于瀑布流的所有数据全部重新加载，瀑布布局，
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var list = localData.list;
    var list1 = list.splice(0,4);
    this.setData({
      list: list1,
      list1: list1,
      list2: list,
      list3: list,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.setData({
      list:[],
      list2: this.data.list3,
    },()=>{
      this.setData({
        list: this.data.list1,
      }, () => {
        wx.stopPullDownRefresh();
      })
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({
      list: this.data.list.concat(this.data.list2),
      list2:[],
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})