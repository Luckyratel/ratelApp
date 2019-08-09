// components/spreadDelete/spreadDelete.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    itemInfo:Object,
  },
  attached: function() {
    var animationData = wx.createAnimation();

    // animationData.translateX(-70).step();
    this.setData({
      animationData: animationData.export(),
    })
  },
  /**
   * 组件的初始数据
   */
  data: {
    animationData: {},
    startX: -1,
    endX:'',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 滑动开始事件
    touchStart: function(e) {
      console.log("开始滑动");
      this.setData({
        startX: e.touches[0].pageX,
      })
    },
    // 滑动结束事件
    touchEnd: function(e) {
      console.log("结束滑动");
      var endX = e.changedTouches[0].pageX;
      var animationData = wx.createAnimation({
        duration: 300,
      });
      if ((endX - this.data.startX) <= -60) {
        animationData.translateX(-90).step();
        this.setData({
          animationData: animationData.export(),
        })
      }

      if ((endX - this.data.startX) >= 60){
        animationData.translateX(0).step();
        this.setData({
          animationData: animationData.export(),
        })
      }
      this.setData({
        endX: endX,
      })
    },

    //删除事件 
    deleteTab:function(){
      var animationData = wx.createAnimation({
        duration:300,
      });
      animationData.translateX(0).step();
      this.setData({
        animationData: animationData.export(),
      })
     setTimeout(()=>{
       this.triggerEvent("deletetab", { value: this.data.itemInfo });
     },310)
    }

   

  }
})