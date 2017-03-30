angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope) {

  $scope.signIn = function(){
    window.location = "#/tab/dash";
  }
})


.controller('DashCtrl', function($scope) {

  $scope.redirect = function(){
    window.location = "#/tab/chats";
  }

  $scope.list = [];
  $scope.addList = function(item){
    $scope.list.push({
      nome: item.nome,
      tel: item.tel,
      cep: item.cep
    });

    $scope.nome = '';
    $scope.tel = '';
    $scope.cep = '';

  }

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.redirect = function(){
    window.location = "#/tab/account";
  }

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);

  $scope.moveItem = function(item, fromIndex, toIndex) {
    $scope.items.splice(fromIndex, 1);
    $scope.items.splice(toIndex, 0, item);
  };

  

  $scope.items = [
  { id: 'Calabresa' },
  { id: 'Cebola' },
  { id: 'Frango' },
  { id: 'Catupiry' },
  { id: 'Presunto' },
  { id: 'Lombinho' },
  { id: 'Palmito' },
  { id: 'Azeitona' },
  { id: 'Oregano' },
  { id: 'Batata Palha' }
  ];
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
