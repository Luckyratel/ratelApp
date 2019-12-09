// pages/display/barCode/barCode.js
var barcode = require("../../../utils/barCode.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    codeShow:false,
    code:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.barc('barcode', '123445',700,200); //单位是rpx
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  convert_length: function(length) {
    return Math.round(wx.getSystemInfoSync().windowWidth * length / 750);
  },

  barc: function(id, code, width, height) {
    barcode.code128(wx.createCanvasContext(id), code, this.convert_length(width), this.convert_length(height))
  },

  setCodeStr:function(e){
    var show = this.data.codeShow;
    if(e.detail.value){
      // show = true
    }
    else{
      show = false;
    }
    this.setData({
      code: e.detail.value,
      codeShow: show,
    })
    
  },

  makeCode:function(){
    
    this.barc('barcode', this.data.code, 700, 200); //单位是rpx
    this.setData({
      codeShow: true,
    })
  }


})