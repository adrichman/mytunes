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
        console.log('queue heard model ended event');
        if (this.models.length > 0){
          this.playFirst();
        }
      }, this);

    this.on('dequeue', function(song){
      console.log('queue heard model dequeue event')
      this.remove(song);
    });
  },
  playFirst: function(song){
      this.at(0).play();
  }
});