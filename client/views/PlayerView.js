// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  setSong: function(song){
    this.model = song;
    $('label').css('display', 'block');
    this.$el.on('ended', this.model.ended.bind(this.model));
    this.render();
  },

  render: function(){
    $('label').html("Currently playing: "+this.model.get('title')+", by "+this.model.get('artist'));
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
