var ModelResultItem = require('../Model/ModelResultItem.js');

var ModelResultItemCollection = Backbone.Collection.extend({
  model: ModelResultItem,
  //url: 'http://192.168.2.21/get_random',
  initialize: function(){
    /*this.fetch();*/
  }
});

module.exports = ModelResultItemCollection;
