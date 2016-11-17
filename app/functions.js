exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(...arr); // ES6
  },

  speak: function(fn, obj) {
    return fn.bind(obj)();
  },

  functionFunction: function(str) {
    return function (str2) {
      return [str, str2].join(', ');
    }
  },

  makeClosures: function(arr, fn) {
    return arr.map(function (item) {
      return function () {
        return fn(item);
      }
    });
  },

  partial: function(fn, str1, str2) {
    return function (str3) {
      return fn(str1, str2, str3);
    }
  },

  useArguments: function() {
     var args = Array.prototype.slice.call(arguments);
     return args.reduce(function (total, item) {
       return total+item;
     },0);
  },

  callIt: function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    fn(...args);
  },

  partialUsingArguments: function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function () {
      var args2 = Array.prototype.slice.call(arguments),
        all = args.concat(args2);

      return fn(...all);
    }

  },

  curryIt: function(fn) {
    return function (a) {
      return function (b) {
        return function (c) {
          return fn(a, b, c);
        }
      }
    }

  }
};
