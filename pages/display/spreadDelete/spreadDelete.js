// pages/display/spreadDelete/spreadDelete.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        id:1,
        value:1,
      },
      {
        id: 2,
        value: 2,
      },
      {
        id: 3,
        value: 3,
      },
      {
        id: 4,
        value: 4,
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  deleteTab:function(e){
    console.log(e);
    var info = e.detail.value;
    var list = this.data.list;
    var newList = [];
    var newList = list.filter((item,index)=>{
      return (item.id!=info.id);
    })
    this.setData({
      list: newList,
    })
  }

})