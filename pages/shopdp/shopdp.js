var App = getApp();  //全局的一个变量


Page({
  // 这个里面是挂载的数据
  // 你的所有操作都用过围绕着你挂载的数据来操作

  data: {
    //  比如、
    // 首先 你应该在进页面的时候页面初始化这个不用说你知道的
    // 然后 在初始化的时候你会获取到你所需要的所有东西
    // 为了双向绑定 所有你把要你所有的数据进行提前注册 这样你才能在你获取到数据的时候进行挂载
    // 然后通过获取data里面的值  比如content;   可以为 this.content  获取到值来进行操作

    // 你首先要好好看看 小程序的钩子函数 当他页面什么时候加载 什么时候执行那个函数 都是写好的
    // 你只需要知道 什么时候直接用就可以了
    //大概就这样
    //content: '',

    // 这里调用的是图片的轮播内容
    movies: [
      { url: 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg' },
      { url: 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg' },
      { url: 'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg' },
      { url: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg' }
    ],

    //举个例子
    // txtArray 这个是你的数据
    txtArray: [
      { id: '1', changeColor: false, txt: '蓝色' },
      { id: '2', changeColor: false, txt: '红色' },
    ],

    txtArrayxs: [
      { id: '1', changeColorxs: false, txt: '现货' },
      { id: '2', changeColorxs: false, txt: '大货' },
    ],

    txtArrayxslx:[
      { id: '1', changeColorxs: false, txt: '大货' },
      { id: '2', changeColorxs: false, txt: '剪版' },
    ],

    // input默认是1  加减输入框 
    num: 1,
    // 使用data数据对象设置样式名  
    minusStatus: 'disabled',
    // items: [
    //   {
    //     "url": "http://127.0.0.1/1.flv",
    //     "title": "这是标题一"
    //   },
    //   {
    //     "url": "http://127.0.0.1/2.flv",
    //     "title": "这是标题二"
    //   }
    // ],

    // text:"这是一个页面"
    actionSheetHidden: true,

    type: '收藏',




  },
  toggle: function (e) {
    var that = this;
    var type = that.data.type === '收藏' ? '已收藏' : '收藏';
    that.setData({
      type: type
    });
  },

  toasts: function () {
    //返回带tabbar的页面
    wx.switchTab({
      url: '../index/index',
    })
    //返回多少级页面
    // wx.navigateBack({
    //   delta: 0
    // })

  },

  shopms: function () {
    //返回的页面
    wx.redirectTo({
    
      url: '../shopms/shopms',
    })
    //返回多少级页面
    // wx.navigateBack({
    //   delta: 0
    // })

  },




  //颜色
  //点击按钮 判断改变颜色
  changeColor: function (res) {
    
    //txtArray这个是点击事件传过来的某个按钮的点击事件
    //获取的为属性值
    var txtArray = res.target.dataset;
   
    // txtArray.itme.changeColor = true;
    // this.data.txtArray 这个是你绑定在model层的数据
    var dataTxtArray = this.data.txtArray
    // 然后循环
    for (var i = 0; i < dataTxtArray.length;i++){
      // 通过id判断如果传过来的数据的id和挂载的id相同的话改变这个按钮的changeColor
      if (dataTxtArray[i].id == txtArray.itme.id){
        dataTxtArray[i].changeColor = true
      }else {
        // 如果不相同的话都当初没有选中来操作
        dataTxtArray[i].changeColor = false
      }
    }
    // 然后把整个数组传过去更新model
    // 没了就这样
    this.setData({
      txtArray: dataTxtArray
    })
    
  },
  //销售方式
  changeColorxs: function (res) {
    var txtArrayxs = res.target.dataset;
    var xslenght = this.data.txtArrayxs;
    for (var i = 0; i < xslenght.length; i++) {
      if (xslenght[i].id == txtArrayxs.itme.id) {
        xslenght[i].changeColorxs = true
      } else {
        // 如果不相同的话都当初没有选中来操作
        xslenght[i].changeColorxs = false
      }
    }
    this.setData({
      txtArrayxs: xslenght
    })

   
  },
  // 销售类型
  changeColorxslx: function (res) {
    var txtArrayxslx = res.target.dataset;
    var xslenghtlx = this.data.txtArrayxslx;
    for (var i = 0; i < xslenghtlx.length; i++) {
      if (xslenghtlx[i].id == txtArrayxslx.itme.id) {
        xslenghtlx[i].changeColorxslx = true
      } else {
        // 如果不相同的话都当初没有选中来操作
        xslenghtlx[i].changeColorxslx = false
      }
    }
    this.setData({
      txtArrayxslx: xslenghtlx
    })


  },
 
  /* 点击减号 */
  bindMinus: function () {
    var num = this.data.num;
    // 如果大于1时，才可以减  
    if (num > 1) {
      num--;
    }
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num <= 1 ? 'disabled' : 'normal';
    // 将数值与状态写回  
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
  },
  /* 点击加号 */
  bindPlus: function () {
    var num = this.data.num;
    // 不作过多考虑自增1  
    num++;
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num < 1 ? 'disabled' : 'normal';
  
    // 将数值与状态写回  
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
  },
  /* 输入框事件获取输入的值 */
  bindManual: function (e) {
    //在这里直接改变num的值 输入小数点后两位
    var num = Math.round(e.detail.value * 100) / 100;
 // 将数值与状态写回  
      this.setData({
        num: num
      });
   },



  listenerButton: function () {
    this.setData({
      //取反
      actionSheetHidden: !this.data.actionSheetHidden
    });
  },

  listenerActionSheet: function () {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },

  //这是个啥函数呀
  modalcnt: function () {
    // this相当于全局变量 顶级的变量  你挂载的所有东西都在这个this里面
    // 你挂在的数据是在  this.data 里面

    var me = this;
    // 然后这个三个变量
    //debugger;
    var txtArray = me.data.txtArray,       //获取的是你挂载在data里的数据  
      txtArrayxs = me.data.txtArrayxs,
      catalogs = me.data.txtArrayxslx
   
    //这个numb相当于一个计数器
  
    //所以这个计数器当为0的时候证明 你选中的没值  这个时候应该提示他请选择颜色
    var numb = 0;
    var num1 = 0;
    var num2 = 0;
    for (var i = 0; i < txtArray.length; i++) {
      //循环到你获取的数据判断你的changeColor 如果为true的话 证明选中了；

      if (txtArray[i].changeColor == true) {
        //判断获取到的id1  2 3....
        numb = txtArray[i].id;
      }
    }
    for (var i = 0; i < txtArrayxs.length; i++) {
      //循环到你获取的数据判断你的changeColor 如果为true的话 证明选中了；

      if (txtArrayxs[i].changeColorxs == true) {
        num1 = txtArrayxs[i].id;
      }
    }

    for (var i = 0; i < catalogs.length;i++) {
      //debugger;
      //循环到你获取的数据判断你的changeColor 如果为true的话 证明选中了；
      if (catalogs[i].changeColorxslx == true) {
        num2 = catalogs[i].id;
      }
    }
  

    if (numb !==0 && num1 !== 0 && num2 !==0 ) {
    
      //走购买逻辑  可以用隐藏域将值存起来
      wx.navigateTo({
        url: '../shouhuo/shouhuo',
      })
    } else if(numb==0){
     
      wx.showModal({


        title: '提示',
        content: '请选择颜色',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })

    }else if(num1==0){
      wx.showModal({


        title: '提示',
        content: '请选择方式',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }else if(num2==0){
      wx.showModal({


        title: '提示',
        content: '请选择类型',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
},


 

  //这是个啥函数呀
  currss: function () {
    // this相当于全局变量 顶级的变量  你挂载的所有东西都在这个this里面
    // 你挂在的数据是在  this.data 里面

    var me = this;
    // 然后这个三个变量
    //debugger;
    var txtArray = me.data.txtArray,       //获取的是你挂载在data里的数据  
      txtArrayxs = me.data.txtArrayxs,
      catalogs = me.data.txtArrayxslx

    //这个numb相当于一个计数器

    //所以这个计数器当为0的时候证明 你选中的没值  这个时候应该提示他请选择颜色
    var numb = 0;
    var num1 = 0;
    var num2 = 0;
    for (var i = 0; i < txtArray.length; i++) {
      //循环到你获取的数据判断你的changeColor 如果为true的话 证明选中了；

      if (txtArray[i].changeColor == true) {
        //判断获取到的id1  2 3....
        numb = txtArray[i].id;
      }
    }
    for (var i = 0; i < txtArrayxs.length; i++) {
      //循环到你获取的数据判断你的changeColor 如果为true的话 证明选中了；

      if (txtArrayxs[i].changeColorxs == true) {
        num1 = txtArrayxs[i].id;
      }
    }

    for (var i = 0; i < catalogs.length; i++) {
      //debugger;
      //循环到你获取的数据判断你的changeColor 如果为true的话 证明选中了；
      if (catalogs[i].changeColorxslx == true) {
        num2 = catalogs[i].id;
      }
    }


    if (numb !== 0 && num1 !== 0 && num2 !== 0) {

      //走购买逻辑  可以用隐藏域将值存起来
      wx.showToast({
        title: '加入成功',
        icon: 'success',
        duration: 2000,
        
      })  
      //隐藏盒子
      this.setData({
        actionSheetHidden: !this.data.actionSheetHidden
      })
    } else if (numb == 0) {

      wx.showModal({


        title: '提示',
        content: '请选择颜色',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })

    } else if (num1 == 0) {
      wx.showModal({


        title: '提示',
        content: '请选择方式',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    } else if (num2 == 0) {
      wx.showModal({


        title: '提示',
        content: '请选择类型',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
  },

// 点击购物车跳转购物车页面
  shopche: function () {
    //返回的页面
    wx.navigateTo({
      url: '../gouwu/gouwu',
    })
   

  },

})
