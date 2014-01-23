// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  model: SongModel,

  initialize: function(){
    Songs.prototype.initialize.apply(this, arguments);
    this.on('add', function(song){
      if(this.models.length === 1){
        this.playFirst();
      }
    }, this);
    this.on('ended', function(song){
        console.log('ended');
        this.shift();
        this.playFirst();
      }, this);
    },

  playFirst: function(song){
    if (this.models.length > 0){
      this.at(0).play();
    }
  }



});