// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});

    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    this.render();
    this.playerView.$el.on('ended', this.changeSongLabel.bind(this.model));
  },

  render: function(){
    $('body').append(this.$el.html([
      $('<label class="label label-info" style="display: none"></label>'),
      this.playerView.$el,
      this.libraryView.$el,
      this.songQueueView.$el
    ]));
  },
  changeSongLabel: function(){
    var song = this.get('currentSong');
    $('label').html('Last played: '+song.get('title')+", by: "+song.get('artist')+".");
  }

});
