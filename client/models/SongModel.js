// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  initialize: function(){
    this.on('ended', this.dequeue, this);
    this.set('playCount', 0);
  },
  play: function(){
    this.trigger('play', this);
    this.set('playCount', this.get('playCount')+1);
  },
  ended: function(){
    this.trigger('ended', this);
  },
  enqueue: function(){
    this.trigger('enqueue', this);
  },
  dequeue: function(){
    this.trigger('dequeue', this);
  }

});
