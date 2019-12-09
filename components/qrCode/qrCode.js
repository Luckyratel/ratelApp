// components/qrCode/qrCode.js
var QRCode = require("../../utils/weapp-qrcode-min.js");
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    codeHeight:{
      type: Number,
      value: 200,
    },
    codeWidth:{
      type: Number,
      value: 200,
    },
    code: {
      type: String,
      value: '123456',
    }
  },
  observers:{
    'code':function(code){
      var qrcode = new QRCode('QrCode', {
        usingIn: this,
        height: 200,
        width: 200,
        text: code,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
      })
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  attached:function(){
    
  },
  /**
   * 组件的方法列表
   */
  methods: {
    
  }
})
