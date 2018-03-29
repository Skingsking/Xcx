var App = getApp();  //全局的一个变量




Page({
  data: {
    carts: [],               // 购物车列表
    hasList: false,          // 列表是否有数据
    totalPrice: 0,           // 总价，初始为0
    selectAllStatus: true    // 全选状态，默认全选


  },
  onShow() {
    this.setData({
      hasList: true,        // 既然有数据了，那设为true吧
      carts: [
        { id: 1, title: '新鲜芹菜 半斤',ys:'黄色 ',fs:'现货 ',lx:'大货 ', image: 'http://www.jinyisoubu.com/images/a2/17/36/3e0cb9564d2280bff46b06dd961cb98376f7d89d.jpg_t.jpg', num: 4, price: 100.59, selected: true },
        { id: 2, title: '素米 500g', ys: '黄色 ', fs: '现货 ', lx: '大货 ', image: 'http://www.jinyisoubu.com/images/22/b4/d8/88d2cc1791fa503cd655901d224f2a52d9e01f39.JPG_t.JPG', num: 1, price: 0.03, selected: true }
      ]
    });
  },
//计算总价
  //总价 = 选中的商品1的 价格 * 数量 + 选中的商品2的 价格 * 数量 + ...
  //根据公式，可以得到
  getTotalPrice() {
   
    let carts = this.data.carts;                  // 获取购物车列表
    let total = 0;
    for (let i = 0; i < carts.length; i++) {         // 循环列表得到每个数据
      if (carts[i].selected) {                   // 判断选中才会计算价格
        total += carts[i].num * carts[i].price;     // 所有价格加起来
      }
    }
    this.setData({                                // 最后赋值到data中渲染到页面
      carts: carts,
      //保留小数点后两位
      totalPrice: total.toFixed(2)
    });
  },

//选择事件  
//点击时选中，再点击又变成没选中状态，其实就是改变 selected 字段。
//通过 data-index="{{index}}" 把当前商品在列表数组中的下标传给事件。
  selectList(e) {
   
    const index = e.currentTarget.dataset.index;    // 获取data- 传进来的index
    let carts = this.data.carts;                    // 获取购物车列表
    const selected = carts[index].selected;         // 获取当前商品的选中状态
    carts[index].selected = !selected;              // 改变状态
    this.setData({
      carts: carts
    });
    this.getTotalPrice();                           // 重新获取总价
  },
//全选事件
//全选就是根据全选状态 selectAllStatus 去改变每个商品的 selected
  selectAll(e) {
    let selectAllStatus = this.data.selectAllStatus;    // 是否全选状态
    selectAllStatus = !selectAllStatus;
    let carts = this.data.carts;

    for (let i = 0; i < carts.length; i++) {
      carts[i].selected = selectAllStatus;            // 改变所有商品状态
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      carts: carts
    });
    this.getTotalPrice();                               // 重新获取总价
  },

  // 增加数量
  //点击+号，num加1，点击-号，如果num > 1，则减1
  addCount(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    num = num + 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },
  // 减少数量
  minusCount(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    if (num <= 1) {
      return false;
    }
    num = num - 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },

//删除商品
//点击删除按钮则从购物车列表中删除当前元素，删除之后如果购物车为空，改变购物车为空标识hasList为false
  deleteList(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    carts.splice(index, 1);              // 删除购物车列表里这个商品
    this.setData({
      carts: carts
    });
    if (!carts.length) {                  // 如果购物车为空
      this.setData({
        hasList: false              // 修改标识为false，显示购物车为空页面
      });
    } else {                              // 如果不为空
      this.getTotalPrice();           // 重新计算总价格
    }
  },





})
