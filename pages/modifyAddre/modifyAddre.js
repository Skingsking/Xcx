var flag=false;
Page({
  data: {
    name: "请填写您的姓名",
    tel: "请填写您的联系方式",
    bm: "请填写邮政编码",
    // addreValue: 0,
    // addreRange: ['　　　　　　　　　　', '长沙市芙蓉区', '长沙市天心区', '长沙市雨花区', '长沙市开福区', '长沙市岳麓区', '长沙市长沙县'],
    region: ['北京市', '北京市', '东城区'],
    door: "街道门牌信息",
    // areaValue:0,
    // areaRange:['　　','60以下','60-90','90-110','110-130','130-140','140-150','150-160','160-170','170-180','180以上']
  },
   onLoad: function(options) {

      this.setData({
          name: options.name,
          tel: options.tel,
           bm: options.bm,
           //这里接收
           region: options.region.split(",") ,
          //  addreValue: options.addrevalue,
          // areaValue: options.areavalue,
          door: options.door,
          index: options.index
          })
          console.log("传过来的index"+options.index);
          console.log("接收到的index"+this.data.index);
          console.log(options.region);
   },


  //   areaPickerBindchange:function(e){
  //   this.setData({
  //     areaValue:e.detail.value
  //   })
  // },
  //   addrePickerBindchange:function(e){
  //   this.setData({
  //     addreValue:e.detail.value
  //   })
  // },
  //点击删除
    delete:function(){
      var that = this;
      wx.showModal({
       title: '提示',
       content: '确认删除该地址信息吗？',
       success: function(res) {
         if (res.confirm) {
           console.log('用户点击确定')
            wx.redirectTo({
             url: '../chooseAddre/chooseAddre?index='+that.data.index+"&sign="+'2'
             }); 
         } else if (res.cancel) {
           console.log('用户点击取消')
      }
    }
})

    },
//点击取消，返回上个页面
    cancel:function(){
      wx.navigateBack({
         delta: 1
      })
    },
    //点击保存
  formSubmit: function(e) {

    var warn ="";
    var that = this;
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
    }else if (e.detail.value.region == ""){
      warn = "请选择您的所在地区";
    }else if(e.detail.value.door==""){
      warn = "请输入您的街道地址";
    }
 
    else{
      flag=true;
      console.log('form发生了submit事件，携带数据为：', e.detail.value)
      console.log(e.detail.value.tel);
        wx.redirectTo({
          url: '../chooseAddre/chooseAddre?tel=' + e.detail.value.tel + "&door=" + e.detail.value.door + "&name=" + e.detail.value.name + "&flag=" + flag + "&areavalue=" + e.detail.value.area + "&bm=" + e.detail.value.bm + "&region=" + e.detail.value.region 
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


  bindRegionChange: function (e) {

    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  
  })