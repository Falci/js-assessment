exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  live: false,
  count: function (start, end) {
    var counter = this;
    counter.live = true;

    function pick() {
      if(start > end || !counter.live){
        return;
      }

      console.log(start++);
      setTimeout(pick, 100);
    }

    pick();

    return {
      cancel: function () {
        counter.live = false;
      }
    }
  }
};
