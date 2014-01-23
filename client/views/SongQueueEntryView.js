// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'li',

  template: _.template('<p>(<%= artist %>) :: <%= title %></p>'),

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
