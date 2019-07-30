// components/topNav/topNav.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:Array,
    defaultColor:{
      type:String,
      value:"#444444",
    },
    activeColor:{
      type:String,
      value:"green",
    },
    lineStyle: {
      type: Boolean,
      value: false,
    },
    selectIndex:{
      type:Number,
      value:0,
    }
  },
  ready:function(){
    console.log(this.properties.list);
    var length = this.properties.list.length;
    this.setData({
      itemWidth: (100 / length) + '%',
      selectTab: this.properties.selectIndex,
    })
  },

  /**
   * 组件的初始数据
   */
  data: {
    selecColor:"#444444",
    selectTab: 1,
    itemWidth: "",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    selectTab:function(e){
      var index = e.currentTarget.dataset.index;
      index = parseInt(index);
      var item = this.data.list[index];
      this.setData({
        selectTab: index,
      })
      this.triggerEvent("selectTab",{index: index,item: item});
    },
  }
})
