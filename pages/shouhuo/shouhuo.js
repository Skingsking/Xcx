var flag = false;
Page({
  data: {
    name: "",
    tel: "",
    area: "",
    // areavalue: "",
    // addre: "",
    region:"",
    bm:"",
    door: "",
    display1: "flex",
    display2: "none",

  },

  onLoad: function (options) {
    flag = options.flag;
    console.log("..." + flag)
    if (!flag) {
      this.setData({
        display1: "flex",
        display2: "none",
      })

    } else {
      this.setData({
        display1: "none",
        display2: "flex",
        name: options.name,
        tel: options.tel,
       area: options.area,
        bm: options.bm,
        region: options.region,
        door: options.door,
        // addre: options.addre
      })
    }


  },

  toChooseAddre: function () {
    wx.redirectTo({
      url: '../chooseAddre/chooseAddre'
    });
  },

  // shdz: function () {
  //   //返回的页面
  //   wx.navigateTo({
  //     url: '../chooseAddre/chooseAddre',
  //   })
    //返回多少级页面
    // wx.navigateBack({
    //   delta: 0
    // })

  },


  // timePickerBindchange:function(e){
  //   this.setData({
  //     timeValue:e.detail.value
  //   })
  // },
  // datePickerBindchange:function(e){
  //   this.setData({
  //     dateValue:e.detail.value
  //   })
  // },
  //点击立即预约
  // formSubmit:function (e) {

  //   wx.navigateTo({
  //     url: '../confirm/confirm?tel=' + that.data.tel + "&addre=" + that.data.addre + "&door=" + that.data.door + "&date=" + e.detail.value.date
  //     //？后面跟的是需要传递到下一个页面的参数
  //   });
  //   console.log('form发生了submit事件，携带数据为：', e.detail.value);

  // }






)