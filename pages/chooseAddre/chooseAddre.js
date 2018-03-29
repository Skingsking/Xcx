//var li=[];
var index = 0;
var li=[];

Page({
  data:{
    list:li,
},
  onLoad: function (options) {
  
    var flag = false;//判断是从哪个页面跳转过来
    var sign = 0//判断从修改页面中的保存还是删除按钮过来，保存为1，删除为2
    flag = options.flag;
    sign = options.sign;
    if (flag) {
   
      li.push({
        "index": index++,
        "name": options.name,
        "tel": options.tel,
        // 获取编码
        "bm": options.bm,
        "region": options.region,
        // "addre": options.addre + options.door,
        // "area":options.area,
        "image": "../../images/ico/uncheck.png",
        // "addrevalue": options.addrevalue,
        // "areavalue":options.areavalue,
        "door": options.door
      })
      
      this.setData({
        list: li
      })
    };
    if (sign == '1') {
      console.log("我是从修改页面过来的" + options.addrevalue)
      li[options.index].name = options.name;
      li[options.index].tel = options.tel;
      li[options.index].region = options.region;
      li[options.index].region = options.region;
      // li[options.index].addre = options.addre + options.door;
      // li[options.index].area=options.area;
      // li[options.index].addrevalue = options.addrevalue;
      // li[options.index].areavalue=options.areavalue;
      li[options.index].door = options.door;
      this.setData({
        list: li
      })
    };
    if (sign == '2') {
      li.splice(options.index, 1);
      this.setData({
        list: li
      })
    }
  },

  //点击新增地址 输入内容
addAddre:function(e){
  wx.navigateTo({
      url: '../newAddre/newAddre'
    })
  },


  //最大的盒子 获取到了
toCleanOrder:function(e){
  console.log(e);
  for(var i = 0;i<this.data.list.length;i++){
    if(i==e.currentTarget.dataset.index){
      li[e.currentTarget.dataset.index].image = "../../images/ico/check.jpg"}
  else{
    li[i].image = "../../images/ico/uncheck.png"
  }
}
wx.navigateTo({
    url: '../shouhuo/shouhuo?name=' +
     e.currentTarget.dataset.name + 
     "&tel=" + e.currentTarget.dataset.tel +
      "&area=" + e.currentTarget.dataset.area+
      "&bm="+e.currentTarget.dataset.bm+
    "&region=" + e.currentTarget.dataset.region +
    "&door=" + e.currentTarget.dataset.door + 
      // "&addre="+e.currentTarget.dataset.addre+
      // "&areavalue="+e.currentTarget.dataset.areavalue+
      "&flag="+true
      });
  console.log("姓名为：" + e.currentTarget.dataset.name + "，手机是：" + e.currentTarget.dataset.tel + "，地址是：" + e.currentTarget.dataset.addre+"，编码："+e.currentTarget.dataset.bm);
    //  面积是："+e.currentTarget.dataset.area+"，是否选择是："+e.currentTarget.dataset.index
},

//点击修改图标 进行修改内容  
tiaozhuan: function (e) {
 
  // 这里的   e.currentTarget.dataset.region  是一个字符串 在向修改页面传的时候
//要穿 数组形式 不然的话 他会将字符串第一个值 分割成如图所示
//e.currentTarget.dataset.region 将他转为数组 就可以了 

  console.log('地址：' + e.currentTarget.dataset.region)
    wx.navigateTo({
    url: '../modifyAddre/modifyAddre?name=' +
     e.currentTarget.dataset.name +
      "&tel=" + e.currentTarget.dataset.tel + 
      "&bm=" + e.currentTarget.dataset.bm + 
      // "&addrevalue=" + e.currentTarget.dataset.addrevalue + 
    "&region=" + e.currentTarget.dataset.region+
      "&door=" + e.currentTarget.dataset.door + 
      "&index=" + e.currentTarget.dataset.index

  })
},
 
})