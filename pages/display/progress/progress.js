// pages/display/progress/progress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    progressDate: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var progress = this.data.progressDate;
    var that = this;
    setInterval(()=>{
      progress = progress + 15;
      if (progress >= 100){
        that.setData({
          progressDate: 100,
        })
        clearInterval();
      }
      else{
        that.setData({
          progressDate: progress,
        })
      }
    },2000)
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})