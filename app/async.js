exports = typeof window === 'undefined' ? global : window;

function Promise() {
  this.resolve = function(){};
  this.then = function(callback) {
    this.resolve = callback;
  };
}

// I know, I know....
function ajax(url) {
  var promise = new Promise(),
    req;

  if (window.XMLHttpRequest) { // Mozilla, Safari, ...
      req = new XMLHttpRequest();
  } else if (window.ActiveXObject) { // IE 8 and older
      req = new ActiveXObject("Microsoft.XMLHTTP");
  }

  req.onreadystatechange = function(){
    if (req.readyState === 4) {
      var data = JSON.parse(req.responseText);

      promise.resolve(data);
    }
  };

  req.open('GET', url, true);
  req.send(null);

  return promise;
}

exports.asyncAnswers = {
  async: function(value) {
    var promise = new Promise();

    setTimeout(function () {
      promise.resolve(value);
    }, 1);

    return promise;
  },

  manipulateRemoteData: function(url) {
    var promise = new Promise();

    ajax(url)
      .then(function (data) {
        var people = data.people.map(function (person) {
            return person.name;
          })
          .sort();

        promise.resolve(people);
      });

    return promise;
  }
};
