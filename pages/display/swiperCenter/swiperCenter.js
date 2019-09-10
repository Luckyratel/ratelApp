// pages/display/swiperCenter/swiperCenter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      { time: "5:00~6:30", start: true },
      { time: "7:00~8:30", start: false },
      { time: "8:00~9:30", start: false },
      { time: "10:00~10:30", start: false },
      { time: "14:00~16:30", start: false },
      { time: "18:00~00:30", start: false }
    ],
    selectIndex:0,
    moveTo:2,
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

  setStartItem:function(e){
    var index = e.currentTarget.dataset.index;
    var list = this.data.list;
    index = parseInt(index);
    for(var i in list){
      list[i].start = false;
    }
    list[index].start = true;
    
    this.setMoveLocation(index);
    this.setData({
      list,
      selectIndex: index,
   
    })
  },

  // 设置移动位置
  setMoveLocation:function(index){
    // console.log(index);
    // var selector = wx.createSelectorQuery();
    // selector.select("#scrollPanel").boundingClientRect();
    // selector.selectViewport().scrollOffset();
    // selector.exec(function(res){
    //   console.log(res);
    // })

   
    var sumWidth = 0;
    var indexId = index
    this.setData({
      moveTo: indexId-1,
    })
  }

})