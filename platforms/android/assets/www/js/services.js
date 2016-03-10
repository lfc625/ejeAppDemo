angular.module('starter.services', [])
.factory('Cash',function(){
  var cashName=[{
    name:'康师傅好滋味方便面',
    price:12,
    num:1,
    time:'16:20'
  },{
    name:'不锈钢手动打蛋器',
    price:22,
    num:1,
    time:'8:30'
  },{
    name:'康师傅好滋味方便面',
    price:12,
    num:1,
    time:'7:20'
  },{
    name:'不锈钢手动打蛋器',
    price:22,
    num:1,
    time:'18:10'
  },{
    name:'康师傅好滋味方便面',
    price:12,
    num:1,
    time:'16:20'
  },{
    name:'不锈钢手动打蛋器',
    price:22,
    num:1,
    time:'16:20'
  },{
    name:'黑胶水彩画防晒遮阳太阳伞',
    price:52,
    num:1,
    time:'16:20'
  },{
    name:'黑胶水彩画防晒遮阳太阳伞',
    price:52,
    num:1,
    time:'19:20'
  },{
    name:'黑胶水彩画防晒遮阳太阳伞',
    price:52,
    num:1,
    time:'16:20'
  },{
    name:'黑胶水彩画防晒遮阳太阳伞',
    price:52,
    num:1,
    time:'16:20'
  },{
    name:'黑胶水彩画防晒遮阳太阳伞',
    price:52,
    num:1,
    time:'16:20'
  },{
    name:'黑胶水彩画防晒遮阳太阳伞',
    price:52,
    num:1,
    time:'16:20'
  }];
  return{
    all:function(){
      return cashName
    }
  }
})
.factory('Warn',function(){
  var warnInfo=[{
    name:'康师傅好滋味方便面',
    num:112
  },{
    name:'不锈钢手动打蛋器',
    num:22
  },{
    name:'黑胶水彩画防晒遮阳太阳伞',
    num:32
  },{
    name:'canon镜头风扇',
    num:511
  },{
    name:'手绘可爱复古黄木梳子',
    num:123
  },{
    name:'USB无叶迷你小风扇',
    num:5312
  },{
    name:'台湾艺术桌面垃圾桶',
    num:123
  }];
  return {
    all:function(){
      return warnInfo
    }
  };
}).factory('Dash', function(){
  var goods =[{
    id:123456789,
    name:'泡椒牛板筋100g',
    num:100,
    add:'城关区世纪广场1503',
    person:'潘玉诗',
    personId:9855564561,
    pic:'img/1.png'
  },{
    id:'123456789',
    name:'妙脆角50g',
    num:'30',
    add:'城关区世纪广场1503',
    person:'潘玉诗',
    personId:9855564561,
    pic:'img/2.png'
  },{
    id:'123456789',
    name:'乐事薯片原味120g',
    num:'1',
    add:'城关区世纪广场1503',
    person:'潘玉诗',
    personId:9855564561,
    pic:'img/3.png'
  },{
    id:'123456789',
    name:'太太乐鸡精',
    num:'50',
    add:'城关区世纪广场1503',
    person:'潘玉诗',
    personId:9855564561,
    pic:'img/4.png'
  },{
    id:'123456789',
    name:'优乐美奶茶',
    num:'5',
    add:'城关区世纪广场1503',
    person:'潘玉诗',
    personId:9855564561,
    pic:'img/5.png'
  },{
    id:'123456789',
    name:'泡椒花生15g',
    num:'3000',
    add:'城关区世纪广场1503',
    person:'潘玉诗',
    personId:9855564561,
    pic:'img/6.png'
  },{
    id:'123456789',
    name:'好丽友巧克力蛋糕',
    num:'1',
    add:'城关区世纪广场1503',
    person:'莫德凯撒',
    personId:9855564561,
    pic:'img/7.png'
  },{
    id:'123456789',
    name:'三鲜方便面',
    num:'10',
    add:'城关区世纪广场1503',
    person:'alex',
    personId:9855564561,
    pic:'img/8.png'
  },{
    id:'123456789',
    name:'麻辣鹌鹑蛋',
    num:'10',
    add:'城关区世纪广场1503',
    person:'李德海',
    personId:9855564561,
    pic:'img/9.png'
  }];
  return {
    all: function() {
      return goods;
    }
  };
})
.factory('Chats', function() {
  // Some fake testing data
  var chats = [{
    id: 0,
    name: '康师傅好滋味方便面',
    info: '96g香辣味',
    num: 1,
    reason: '包装袋破损',
    result: '未处理',
    color: '#ff7017'
  }, {
    id: 1,
    name: '不锈钢手动打蛋器',
    info: '无',
    num: 3,
    reason: '包装袋破损',
    result: '未处理',
    color: '#ff7017'
  }, {
    id: 2,
    name: '黑胶水彩画防晒遮阳太阳伞',
    info: '遮阳，挡光',
    num: 4,
    reason: '包装袋破损',
    result: '未处理',
    color: '#ff7017'
  }, {
    id: 3,
    name: 'canon镜头风扇',
    info: '无',
    num: 2,
    reason: '包装袋破损',
    result: '未处理',
    color: '#ff7017'
  }, {
    id: 4,
    name: '手绘可爱复古黄木梳子',
    info: '无',
    num: 15,
    reason: '包装袋破损',
    result: '未处理',
    color: '#ff7017'
  }, {
    id: 5,
    name: 'USB无叶迷你小风扇',
    info: '无',
    num: 1,
    reason: '无法使用',
    result: '处理中',
    color: '#ffa72b'
  }, {
    id: 6,
    name: '台湾艺术桌面垃圾桶',
    info: '无',
    num: 8,
    reason: '商品型号错误',
    result: '完成',
    color: '#999999'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
