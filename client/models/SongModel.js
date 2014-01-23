// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  initialize: function(){
    this.on('ended', this.dequeue, this);
  },
  play: function(){
    // Triggering an event here will also trigger the event on the collection
    // We have to pass the song as the trigger
    this.trigger('play', this);
    // this.
  },
  ended: function(){
    // debugger;
    console.log('model ended event');
    this.trigger('ended', this);
    //maybe do something?
  },
  enqueue: function(){
    this.trigger('enqueue', this);
  },
  dequeue: function(){
    console.log('model dequeue event');
    this.trigger('dequeue', this);
  }
});
