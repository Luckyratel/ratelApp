// pages/display/topNav/topNav.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:['全部','待付款','待收货','已收货'],
    lineStyle: false,
    title:"",
    selectIndex: 0,
    selectItem:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var list = this.data.list;
    var selectIndex = this.data.selectIndex;
    this.setSelectItem(this.data.lineStyle)
    this.setData({
      selectItem: list[selectIndex],
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
  // 选择事件
  selectTab:function(e){
    console.log(e);
    this.setData({
      selectItem: e.detail.item,
    })
  },

  // 选择是否有下滑线效果
  selectLine:function(){
    this.setSelectItem(!this.data.lineStyle);
    this.setData({
      lineStyle: !this.data.lineStyle,
    })
  },

  // 工具类
  setSelectItem:function(type){
    if (type) {
      this.setData({
        title: "无下划线",
      })
    }
    else {
      this.setData({
        title: "有下划线",
      })
    }
  }
})