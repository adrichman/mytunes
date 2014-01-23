// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  tagName: 'table',
  className: 'table table-striped table-hover queue-table',
  initialize: function() {
    this.render();
    this.collection.on('change', function(){
      this.repaint;
    }, this);
    this.collection.on('add', this.addOne, this)

    // .on('remove', function(){
    // }, this);
  },

  addOne: function(song){
    var songQueueEntryView = new SongQueueEntryView({model: song});
    this.$el.append(songQueueEntryView.render());
  },

  render: function() {
    return this.$el;
  },
  repaint: function(){
    // this.$el.empty();
    this.$el.html(this.$el);
  }

});
