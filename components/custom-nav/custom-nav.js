// components/custom-nav/custom-nav.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type: String,
      value: '测试'
    },
    homeUrl: String,
  },
  // 组件生命函数
  attached:function(){
    this.initNav();
  },
  /**
   * 组件的初始数据
   */
  data: {
    navHeight: '',
    height: '',
    top: '',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    initNav:function(){
      let navHeight = 0;
      let statausBarHeight,menuButtomTop,menuButtomRight;
      wx.getSystemInfo({
        success: (res) => {
          let menuButtonObject = wx.getMenuButtonBoundingClientRect();
          let menuButtonHeight = menuButtonObject.height;
          navHeight = res.statusBarHeight + menuButtonObject.height + (menuButtonObject.top - res.statusBarHeight) * 2;
          this.setData({
            navHeight: navHeight,
            height: menuButtonHeight,
            top: menuButtonObject.top,
          })
        },
      })
    },
    goBack:function(){
      wx.navigateBack();
    },
    goHome:function(){
     this.triggerEvent('homeTab');
    },
  }
})
