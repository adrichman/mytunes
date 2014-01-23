// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  initialize: function(){
    this.on('ended', this.dequeue, this);
  },
  play: function(){
    this.trigger('play', this);
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
