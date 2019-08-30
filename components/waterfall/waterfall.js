// components/waterfall/waterfall.js
var leftHeight = 0;
var rightHeight = 0;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      value:[],
    },
    reDisplay:{
      type:Boolean,  //用于瀑布流的所有数据全部重新加载，瀑布布局，
      value:true,
    },
    pageSize: { //用来规定延迟时间的长短， 通过延迟让图片按顺序加载
      type:Number,
      value: 10, 
    }
  },
  observers:{
    "list":function(list){
      if(list.length ==0){
        leftHeight = 0;
        rightHeight = 0;
        this.setData({
          left:[],
          right:[],
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    left:[1],
    right:[],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    loading:function(e){
      var index = e.currentTarget.dataset.index;
      var pageSize = this.data.pageSize;
      setTimeout( ()=>{
        var imgHeight = e.detail.height;
        var imgWidth = e.detail.width;
        var realWidth = 750*0.45;
        var realHeight = realWidth*(imgHeight/imgWidth)+150
        var left = this.data.left;
        var right = this.data.right;
        var reDisplay = this.data.reDisplay;
        var list = this.data.list;
        if (reDisplay) {
          left = [];
          right = [];
          leftHeight = 0;
          rightHeight = 0;
          reDisplay = !reDisplay;
        } 
      
        if (leftHeight <= rightHeight) {  
          left.push(list[index]);
          leftHeight = leftHeight + realHeight;
        }
        else {
          if ((leftHeight - rightHeight) < 10) {  
            left.push(list[index]);
            leftHeight = leftHeight + realHeight;
          }
          else {
            right.push(list[index]);
            rightHeight = rightHeight + realHeight;
          }
        }
        
        this.setData({
          left,
          right,
          reDisplay: false,
        })
      },((index%pageSize)+1)*100 )
      
    },
  }
})
