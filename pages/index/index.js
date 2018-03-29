/**
* Created by Administrator on 2016/12/18 0018.
*/

var app = getApp();  // getApp代表的也是全局的 一个变量

console.log(app);


Page({
  // 我们要先记录data的值
  data: {

    mydata: [],
    shop_logo:'',
    shop_logodp: '',
    shop_name:'',
    slider:[],
    showitems:[],
    twoList: [{
      id: 1,
      name: '应季鲜果',
      count: 1,
      twodata: [{
        'id': 11,
        'name': '鸡脆骨'
      }, {
        'id': 12,
        'name': '鸡爪'
      }]
    }, {
      id: 2,
      name: '精致糕点',
      count: 6,
      twodata: [{
        'id': 13,
        'name': '羔羊排骨一条'
      }, {
        'id': 14,
        'name': '微辣'
      }]
    }, {
      id: 3,
      name: '全球美食烘培原料',
      count: 12,
      twodata: [{
        'id': 15,
        'name': '秋刀鱼'
      }, {
        'id': 16,
        'name': '锡箔纸金针菇'
      }]
    }],



  //    hidden: true,
  //  list: [],
  //    scrollTop: {
    //判断在上啦 和下拉的 时候 是不重复的
  //      scroll_top: 0,
  //      goTop_show: false
  // },
        // scrollHeight: 0,
        // floorstatus: true,
        // sortArr: [
        //   {
        //     id: 1,
        //     img: "../../images/2.jpg",
        //     title: "君御豪园住宅",
        //     introduction: "杭州不限购不限贷口住宅",
        //     money: 5000,
        //     vperson: 115,
        //     tperson: 0
        //   }
        // ],
  },
  // scrollTopFun: function (e) {
  //   console.log(e.detail);
  //   if (e.detail.scrollTop > 300) {//触发gotop的显示条件 
  //     this.setData({
  //       'scrollTop.goTop_show': true
  //     });
  //   } else {
  //     this.setData({
  //       'scrollTop.goTop_show': false
  //     });
  //   }
  // },
  // goTopFun: function (e) {
  //   var _top = this.data.scrollTop.scroll_top;//发现设置scroll-top值不能和上一次的值一样，否则无效，所以这里加了个判断 
  //   if (_top == 0) {
  //     _top = 1;
  //   } else {
  //     _top = 0;
  //   }
  //   this.setData({
  //     'scrollTop.scroll_top': _top
  //   });
  // },
  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    var that = this;
    //获取系统信息的方法 getSystemInfo
    wx.getSystemInfo({
      success: function (res) {
 
        that.setData({
          scrollHeight: res.windowHeight
        });
      }
    });
  },

  // 点击事件跳转不同的页面
  toast: function () {
    wx.redirectTo({
    
      url: '../merchant/merchant'
    })
  },
  aaass: function () {
    wx.navigateTo({
      url: '../indexsd/indexsd'
    })
  },



  shop: function () {
    wx.redirectTo({
      url: '../shopdp/shopdp'
    })
  },
  //加载数据
  onReady:function(){
    var thtas=this;
    wx.request({
      url: 'http://192.168.50.220/index.php/topwxapi?format=json&v=v1&shop_id=2&method=shop.index',
      data: {}, //参数
      header: {
        'content-type': 'application/json' // 默认值  
      },
      //回调
      success: function (e) {
        console.log(e.data.data);
        thtas.setData({
          //获取店铺背景图
          shop_logo: e.data.data.logo_image.shop_logo,
          //获取店铺图
          shop_logodp: e.data.data.shopdata.shop_logo,
          //获取店铺名称
          shop_name: e.data.data.shopdata.shop_name,
          //获取轮播图
          slider: e.data.data.slider,
          //获取
          showitems: e.data.data.showitems,
      
         
        
        })
        }
    })
  },




  // 他会被自动调用
  // 事件加载完成后立即执行
  onLoad: function () {
    // 改变this的指向
    var _this = this;
    

    //调用
    wx.request({
      url: 'https://ald.taobao.com/recommend.htm?refer=https%3A%2F%2Fnvxie.tmall.com%2F%3Fspm%3D875.7931836%2FA.category2016012.1.3BE3zs%26acm%3Dlb-zebra-148799-667863.1003.8.708026%26scm%3D1003.8.lb-zebra-148799-667863.ITEM_14561689118972_708026&_ksTS=1481695013054_24&recommendItemIds=520977874105,521592405602,538360596870,537220616233,538418774145,537221512924,521707014915,537179865700,530470780158,538534380467,539902676181,538420334083,542815769280,542829390830,539914384202,39693260749&needCount=16&shopId=67483927&sellerID=722929151&appID=03131&isTmall=true&moduleId=15503973940recommend.',

      data: {}, //参数
      header: {}, //报文头
      //回调
      success: function (res) {
      console.log(res);
        _this.setData({
          mydata: res.data.itemList
        })
      }
    })



    app.getUserInfo(function (res) {
      // console.log('ok了')
      // console.log(res.userInfo)
    })
  },
  // 上啦 方法
  onReachBottom: function (data) {
    //打印为空第一次
    console.log(data);
    this.TapBaoApi();
    //data数据
    console.log(this)
  },
  //定义一个方法
  TapBaoApi: function () {
    //定义的  thisthis page指向
    var that = this;
    wx.request({
      url: 'https://ald.taobao.com/recommend.htm?refer=https%3A%2F%2Fnvxie.tmall.com%2F%3Fspm%3D875.7931836%2FA.category2016012.1.3BE3zs%26acm%3Dlb-zebra-148799-667863.1003.8.708026%26scm%3D1003.8.lb-zebra-148799-667863.ITEM_14561689118972_708026&_ksTS=1481695013054_24&recommendItemIds=520977874105,521592405602,538360596870,537220616233,538418774145,537221512924,521707014915,537179865700,530470780158,538534380467,539902676181,538420334083,542815769280,542829390830,539914384202,39693260749&needCount=16&shopId=67483927&sellerID=722929151&appID=03131&isTmall=true&moduleId=15503973940recommend.', //仅为示例，并非真实的接口地址
      data: {
        x: '1',
        y: '2'
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        // console.log(res.data)
        // var 指向  新的data内容 
        let items = res.data.itemList;
        //一组数据
        console.log(items)

        //打印的mydataydata 方法
        //两组
        console.log(that.data.mydata)

        //将两个data数组 添加到一起
        var newattr = that.data.mydata.concat(items);
        //data合并的方法
        that.setData({
          mydata: newattr
        })

        console.log(newattr)

      }
    })
  },


  // 下拉的方法
  // 回到的是 miss方法 也就是我们的数据
  onPullDownRefresh: function (curr) {
    this.miss();

  },
  // 定义一个 方法 函数
  miss: function () {
    var that = this;
    wx.request({
      url: 'https://ald.taobao.com/recommend.htm?refer=https%3A%2F%2Fnvxie.tmall.com%2F%3Fspm%3D875.7931836%2FA.category2016012.1.3BE3zs%26acm%3Dlb-zebra-148799-667863.1003.8.708026%26scm%3D1003.8.lb-zebra-148799-667863.ITEM_14561689118972_708026&_ksTS=1481695013054_24&recommendItemIds=520977874105,521592405602,538360596870,537220616233,538418774145,537221512924,521707014915,537179865700,530470780158,538534380467,539902676181,538420334083,542815769280,542829390830,539914384202,39693260749&needCount=16&shopId=67483927&sellerID=722929151&appID=03131&isTmall=true&moduleId=15503973940recommend.', //仅为示例，并非真实的接口地址
      data: {
        x: '3',
        y: '4'
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        // console.log(res.data)
        var one = res.data.itemList;

        console.log(one);
        that.setData({
          mydata: one
        })
        //关闭刷新
        wx.stopPullDownRefresh();

      }
    })
  },




})

