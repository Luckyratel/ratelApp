// components/water-item/water-item.js
const praiseSrc = "../../images/praise.png";
const praisedSrc = "../../images/praised.png";
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    info:{
      type:Object,
      value:{},
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    praiseImg: praiseSrc,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    setPraise:function(){
      if(this.data.praiseImg == praisedSrc){
        this.setData({
          praiseImg: praiseSrc,
        })
      }
      else{
        this.setData({
        praiseImg: praisedSrc,
      })
      }
      
    }
  }
})
