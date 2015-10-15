angular.module('wildcardFilterModule', [])    
.filter('wildcardFilter', function() {
   return function (items, expression, property) {
         
    var regexExpression = '';
    if(expression) {
        regexExpression = expression.split('*').join('(.)*');
    }
       
    if(regexExpression.indexOf('(.)*') != 0) {
        regexExpression = '^' + regexExpression;
    }
       
    if(regexExpression.indexOf('(.)*') >= 0 &&
        regexExpression.lastIndexOf('(.)*') != (regexExpression.length - 1)) {
        regexExpression = regexExpression + '$';
    }
       
    var filtered = [];
    var pattern = new RegExp(regexExpression, 'i'); 
    angular.forEach(items, function(item) {
       if(pattern.test(item[property])) {
          filtered.push(item);
        }
    });
  
    return filtered;
  };
});