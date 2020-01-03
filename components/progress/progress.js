// components/progress/progress.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    progressDate: {
      type:Number,
      value: 46,
      observer: 'progressChange',

    },
  },
 
  /**
   * 组件的初始数据
   */
  data: {
    list: [1, 2, 3, 4],
    leftRate: 25,
    animation: wx.createAnimation({}).export(),
    passPoint:0,
  },
  attached:function(){
    var size = this.data.list.length;
    
    this.setData({
      leftRate: 100/size,
    },()=>{
      // console.log(1);
    })
    this.makeProgress();
  },

  /**
   * 组件的方法列表
   */
  methods: {
    progressChange:function(){
      this.makeProgress();
    },
    makeProgress:function(){
      var size = this.data.list.length;
      var rate = 100 / size;
      var animation = wx.createAnimation({
        duration: 50,
        timingFunction: 'ease'
      })
      animation.width(this.data.progressDate + '%').backgroundColor('blue').step()
      this.setData({
        animation: animation.export(),
        passPoint: parseInt(this.data.progressDate / rate),
      }, () => {
        // console.log(this.data.passPoint);
      })
    }
  }
})
