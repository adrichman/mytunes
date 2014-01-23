// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    // We have to pass the song as the trigger
    this.trigger('play', this);
    // this.
  },
  ended: function(){
    // debugger;
    this.trigger('ended', this);
    //maybe do something?
  },
  enqueue: function(){
    this.trigger('enqueue', this);
  }
});
