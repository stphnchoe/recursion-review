// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (Array.isArray(obj)) {
    var results = _.map(obj, function(item) {
      return stringifyJSON(item);
    });
    return '[' + results.join(',') + ']';
  } else if (typeof obj === 'object' && obj) {
    return '{}';
  }
  return '' + obj;
};
