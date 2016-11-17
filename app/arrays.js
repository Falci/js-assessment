exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce(function (total, item) {
      return total + item;
    }, 0);
  },

  remove: function(arr, item) {
    var index;

    while((index = arr.indexOf(item))> -1){
      arr.splice(index, 1);
    }

    return arr;
  },

  removeWithoutCopy: function(arr, item) {
    return this.remove(arr, item);
  },

  append: function(arr, item) {
    arr.push(item);

    return arr;
  },

  truncate: function(arr) {
    arr.pop();

    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);

    return arr;
  },

  curtail: function(arr) {
    arr.shift();

    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);

    return arr;
  },

  count: function(arr, item) {
    return arr.filter(function (i) {
      return i === item
    }).length;
  },

  duplicates: function(arr) {
    var result = [];

    arr.forEach(function(item, index){
      if(arr.lastIndexOf(item) !== index){
        if(!~result.indexOf(item)){
          result.push(item);
        }
      }
    });

    return result;
  },

  square: function(arr) {
    return arr.map(function (item) {
      return item*item;
    });
  },

  findAllOccurrences: function(arr, target) {
    var index = 0,
      occ = [];

    while((index = arr.indexOf(target, index)) > -1) {
      occ.push(index++);
    }

    return occ;
  }
};
