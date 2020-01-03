// components/progress-ring/progress-ring.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  attached: function() {
   
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    startRun: function() {
      var that = this;
      var w, h;
      wx.createSelectorQuery().in(this).select("#ring-pro").boundingClientRect(function(rect) { //监听canvas的宽高
        console.log(rect);
        w = parseInt(rect.width / 2);
        //获取canvas宽的的一半
        h = parseInt(rect.height / 2);
        //获取canvas高的一半，
        that.canvasTap(0, 100, 300, w, h);
      }).exec();
    },
    canvasTap(start, end, time, w, h) { //传入开始百分比和结束百分比的值，动画执行的时间，还有圆心横纵坐标
      var that = this;
      start++;
      if (start > end) {
        return false;
      }
      that.run(start, w, h); //调用run方法
      setTimeout(function() {
        that.canvasTap(start, end, time, w, h);
      }, time);
    },

    run(c, w, h) { //c是圆环进度百分比   w，h是圆心的坐标
      let that = this;
      var num = (2 * Math.PI / 100 * c) - 0.5 * Math.PI;
      var ctx2 = wx.createCanvasContext("ring-pro", this)
      //圆环的绘制
      ctx2.arc(w, h, w - 8, -0.5 * Math.PI, num); //绘制的动作
      ctx2.setStrokeStyle("#ff5000"); //圆环线条的颜色
      ctx2.setLineWidth("16"); //圆环的粗细
      ctx2.setLineCap("butt"); //圆环结束断点的样式  butt为平直边缘 round为圆形线帽  square为正方形线帽
      ctx2.stroke();
      //开始绘制百分比数字
      ctx2.beginPath();
      ctx2.setFontSize(20); // 字体大小 注意不要加引号
      ctx2.setFillStyle("#ff5000"); // 字体颜色
      ctx2.setTextAlign("center"); // 字体位置
      ctx2.setTextBaseline("middle"); // 字体对齐方式
      ctx2.fillText(c + "%", w, h); // 文字内容和文字坐标
      ctx2.draw();
    },


  }
})