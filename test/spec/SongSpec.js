describe('SongModel', function() {
  var model;

  beforeEach(function() {
    model = new SongModel({
      artist: 'data',
      url: '/test/testsong.mp3',
      title:'test song'
    });
    spyOn(model, 'trigger').andCallThrough();
  });

  describe('play', function() {
    it('triggers a "play" event', function() {
      model.play();
      expect(model.trigger).toHaveBeenCalledWith('play', model);
    });
  });

  describe('enqueue', function() {
    it('triggers an "enqueue" event', function() {
      model.enqueue();
      expect(model.trigger).toHaveBeenCalledWith('enqueue', model);
    });
  });

  describe('dequeue', function() {
    it('triggers a "dequeue" event', function() {
      model.dequeue();
      expect(model.trigger).toHaveBeenCalledWith('dequeue', model);
    });
  });

  describe('ended', function() {
    it('triggers an "ended" event', function() {
      model.play();
      model.ended();
      expect(model.trigger).toHaveBeenCalledWith('ended', model);
    });
  });

  describe('play count', function(){
    it('should have a play count of zero if it has not been played', function(){
      var count = model.get('playCount');
      expect(count).toEqual(0);
    });
    it('should increment the play count when it is played', function(){
      model.play();
      model.play();
      var count = model.get('playCount');
      expect(count).toEqual(2);
    });
  });
});
