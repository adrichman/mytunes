describe('SongQueueEntryView', function() {

  beforeEach(function() {
    dequeueSpy = spyOn(SongQueueEntryView.prototype, 'dequeueSong').andCallThrough();
    songData1 = {
      artist: 'data',
      url: '/test/testsong.mp3',
      title:'test song'
    };
    songData2 = {
      artist: 'data',
      url: '/test/testsong2.mp3',
      title:'test song 2'
    };
  });

  afterEach(function() {
    dequeueSpy.reset();
  });

  describe('clicking', function() {
    it('calls the dequeue method', function() {
      var song2 = new SongModel(songData2);
      var songQueueEntryView = new SongQueueEntryView({model: song2});
      songQueueEntryView.$el.click();
      expect(dequeueSpy).toHaveBeenCalled();
    });

    it('removes the song from the queue', function(){
      var song2 = new SongModel(songData2);
      var songsQueue = new SongQueue();
      songsQueue.add(song2);
      var songQueueEntryView = new SongQueueEntryView({model: song2});
      expect(songsQueue.models.length).toEqual(1);
      songQueueEntryView.$el.click();
      expect(songsQueue.models.length).toEqual(0);
    });
  });
});
