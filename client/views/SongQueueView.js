// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  tagName: 'ul',
  initialize: function() {
    this.render();
    this.collection.on('change', function(){
      console.log('change!!');
      this.repaint;
    }, this);
  },

  add: function(song){
    console.log('change!!');
    var songQueueEntryView = new SongQueueEntryView({model: song});
    this.$el.append(songQueueEntryView.render());
  },
  render: function() {
    return this.$el;
  },
  repaint: function(){
    // this.$el.empty();
    this.$el.html(this.$el);
    console.log('sup!');
  }

});
