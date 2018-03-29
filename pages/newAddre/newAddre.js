var index = 0;
var tcity = require("../../utils/citys.js");

Page({
  data:{
    name:"请填写您的姓名",
    tel:"请填写您的联系方式",
    bm: "请填写邮政编码",
    door:"街道门牌信息",

    region: ['北京市', '北京市', '东城区'],
    // customItem: '全部'
    // areaValue:0,
    // areaRange:['　　','60以下','60-90','90-110','110-130','130-140','140-150','150-160','160-170','170-180','180以上']
  },
  //   areaPickerBindchange:function(e){
  //   this.setData({
  //     areaValue:e.detail.value
  //   })
  // },

  bindRegionChange: function (e) {
   
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  //   addrePickerBindchange:function(e){
  //   this.setData({
  //     addreValue:e.detail.value
  //   })
  // },
  //form 点击提交按钮
  formSubmit: function(e) {
    console.log(e.detail.value.region);
    var warn ="";
    var that = this;
    var flag = false;
    if(e.detail.value.name==""){
      warn = "请填写您的姓名！";
    }else if(e.detail.value.tel==""){
      warn = "请填写您的手机号！";
    } else if(!(/^1(3|4|5|7|8)\d{9}$/.test(e.detail.value.tel))){
      warn = "手机号格式不正确";
    
    } else if (e.detail.value.bm == "") {
      warn = "请填写邮政编码！";
    } else if (!(/^\d{6}$/.test(e.detail.value.bm))) {
      warn = "邮政编码不正确！";
    }else if (e.detail.value.region ==""){
      warn = "请选择您的所在地区";
    }else if(e.detail.value.door==""){
      warn = "请输入您的街道地址";
    }else{
      flag=true;
      console.log('form发生了submit事件，携带数据为：', e.detail.value)
 
        wx.navigateTo({
          url: '../chooseAddre/chooseAddre?tel=' + e.detail.value.tel +  "&door=" + e.detail.value.door + "&name=" + e.detail.value.name + "&region=" + e.detail.value.region + "&flag=" + flag +  "&bm=" + e.detail.value.bm
     
        //？后面跟的是需要传递到下一个页面的参数

      }); 
       
    }
    if(flag==false){
      wx.showModal({
      title: '提示',
      content:warn
    })
    }
    
  },
  
  })