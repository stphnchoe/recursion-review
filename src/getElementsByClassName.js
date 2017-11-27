// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  // created a container variable
  var results = [];

  var searchForClassName = function(node) {
    if (_(node.classList).contains(className)) {
      results.push(node);
    }

    for (var i = 0; i < node.childNodes.length; i++) {
      searchForClassName(node.childNodes[i]);
    }
    return results;
  };

  return searchForClassName(document.body);
  
};
