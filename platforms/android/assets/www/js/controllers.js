angular.module('starter.controllers', [])



.controller('DashCtrl', function($scope, $ionicSlideBoxDelegate, Dash) {
      $scope.goods=Dash.all();
      $scope.menuState={show: false};
      $scope.title={name: '商品采购单'}
      $scope.toggle=function(){
          $scope.menuState.show=!$scope.menuState.show;
      }
      $scope.goSlide = function(index){
        $ionicSlideBoxDelegate.slide(index);
        $scope.menuState.show=false;
        if($ionicSlideBoxDelegate.currentIndex()===2){
          $scope.title={name: '快递配送单'}
        }else if($ionicSlideBoxDelegate.currentIndex()===1){
          $scope.title={name: '商品入库单'}
        }else if($ionicSlideBoxDelegate.currentIndex()===0){
          $scope.title={name: '商品采购单'}
        }
      };  
})

.controller('ChatsCtrl', function($scope, $ionicSlideBoxDelegate, $timeout, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
  $scope.menuState={show: false}
  $scope.title={name: '入库信息'}
  $scope.toggle=function(){
      $scope.menuState.show=!$scope.menuState.show;
  }
  $scope.goSlide = function(index){
    $ionicSlideBoxDelegate.slide(index);
    $scope.menuState.show=false;
    if($ionicSlideBoxDelegate.currentIndex()===0){
      $scope.title={name: '入库信息'}
    }else if($ionicSlideBoxDelegate.currentIndex()===1){
      $scope.title={name: '库存预警提示'}
    }else if($ionicSlideBoxDelegate.currentIndex()===2){
      $scope.title={name: '问题件信息'}
    }
  };
  
  $scope.doRefresh = function() {
        
        console.log('Refreshing!');
        $timeout( function() {

        $scope.chats.push({name: '统一方便面'+ Math.floor(Math.random() * 1000) + 2,
                            info: '96g香辣味',num: 66});
        $scope.chats.push({name: '今麦郎方便面'+ Math.floor(Math.random() * 1000) + 2,
                            info: '96g香辣味',num: 66});
        $scope.chats.push({name: '五谷道场方便面'+ Math.floor(Math.random() * 1000) + 2,
                            info: '96g香辣味',num: 66});


        //Stop the ion-refresher from spinning
        $scope.$broadcast('scroll.refreshComplete');
        
        }, 800);
        
    };

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, $ionicSlideBoxDelegate) {
  $scope.settings = {
    enableFriends: true
  };
   $scope.nextSlide = function() {
    $ionicSlideBoxDelegate.next();
  };
})
.controller('WarnCtrl', function($scope,$Warn){
  $scope.warns=Warn.all();
})
.controller('CashCtrl',function($scope, $ionicSlideBoxDelegate, Cash){
  $scope.cashs = Cash.all();
  $scope.menuState={show: false}
  $scope.toggle=function(){
      $scope.menuState.show=!$scope.menuState.show;
  }
  $scope.title={name: '单一商品销售统计'};
  $scope.goSlide = function(index){
    $ionicSlideBoxDelegate.slide(index);
    $scope.menuState.show=false;
    if($ionicSlideBoxDelegate.currentIndex()===0){
      $scope.title={name: '单一商品销售统计'}
    }else if($ionicSlideBoxDelegate.currentIndex()===1){
      $scope.title={name: '销售金额时刻列表'}
    }else if($ionicSlideBoxDelegate.currentIndex()===2){
      $scope.title={name: '销售金额日统计图'}
    }
  };
})