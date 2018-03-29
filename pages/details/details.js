var App = getApp();  //全局的一个变量

// Page({
//   data: {

//   },
//   onLoad: function (options,aaa) {
//     this.setData({
//       title: options.title,
//       id: options.id
//     })
//   }
// })

Page({

  /** 
   * 页面的初始数据 
   */
  data: {
    Industry: {},
    isshow: true
  },
    onLoad: function (options,aaa) {
    this.setData({
      title: options.title,
      id: options.id
    })
  },

  /** 
   * 生命周期函数--监听页面加载 
   */
  onLoad: function (res) {
    var that = this
    wx.request({
      url: 'http://www.sojson.com/open/api/weather/json.shtml?city=杭州',
      header: {
        'content-type': 'application/json' // 默认值  
      },
      success: function (res) {
        //选择承级 拿到数据
        console.log(res)
        var miss = res.data.data.forecast
        that.setData({
          Industry: miss
        })
      },
      fail: function () {
        console.log("fail")
      },
      complete: function () {
        that.setData({
          isshow: false
        })
      }
    })
  },

  /** 
   * 生命周期函数--监听页面初次渲染完成 
   */
  onReady: function () {

  },

  /** 
   * 生命周期函数--监听页面显示 
   */
  onShow: function () {

  },

  /** 
   * 生命周期函数--监听页面隐藏 
   */
  onHide: function () {

  },

  /** 
   * 生命周期函数--监听页面卸载 
   */
  onUnload: function () {

  },

  /** 
   * 页面相关事件处理函数--监听用户下拉动作 
   */
  onPullDownRefresh: function () {

  },

  /** 
   * 页面上拉触底事件的处理函数 
   */
  onReachBottom: function () {

  },

  /** 
   * 用户点击右上角分享 
   */
  onShareAppMessage: function () {

  }
})  