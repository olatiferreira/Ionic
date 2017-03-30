angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Pizza Calabresa',
    lastText: 'Ingredientes: Calabresa, catupiry e cebola.',
    face: 'img/pizza.jpg'
  }, {
    id: 1,
    name: 'Pizza Muçarela',
    lastText: 'Ingredientes: Muçarela e cebola.',
    face: 'img/pizza.jpg'
  }, {
    id: 2,
    name: 'Pizza Francana',
    lastText: 'Ingredientes: Batata palha, frango, catupiry, cebola e oregano.',
    face: 'img/pizza.jpg'
  }, {
    id: 3,
    name: 'Pizza Lombinho',
    lastText: 'Ingredientes: Lombinho, frango e catupiry.',
    face: 'img/pizza.jpg'
  }, {
    id: 4,
    name: 'Pizza Frango Catupiry',
    lastText: 'Ingredientes: Frango e catupiry.',
    face: 'img/pizza.jpg'
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
