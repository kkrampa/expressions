var ValueExpression = function(obj) {
  this.type = 'value';
  
  this.renderHtml = function() {
    return '<div>value</div>';
  }
};

var SumExpression = function(obj) {
  this.type = 'sum';
  
  this.left = null;
  this.right = null;
}

var SumExpression = function(obj) {
  this.type = 'diff';
  
  this.left = null;
  this.right = null;
}

var MulExpression = function(obj) {
  this.type = 'mul';
  
  this.left = null;
  this.right = null;
}
                      

var ExpressionFactory = {
  getExpression: function(type) {
    switch (type) {
      case 'value':
        return {value: null};
      case 'sum':
        return {left: {type: 'empty', expression: {}}, right: {type: 'empty', expression: {}}};
      case 'diff':
        return {left: {type: 'empty', expression: {}}, right: {type: 'empty', expression: {}}};
      case 'empty':
        return {};
    }
  }
}

angular.module('app').controller('MainController', function() {
  
  this.operations = [
    {value: 'sum', name: 'SUM'},
    {value: 'diff', name: 'DIFF'},
    {value: 'mul', name: 'MULTIPLICATION'},
    {value: 'value', name: 'VALUE'}
  ];
  
  this.expression = {
    type: 'sum',
    expression: {
      left: {expression: {value: 1}, type: 'value'},
      right: {expression: {value: 2}, type: 'value'}
    }
  };
  
  this.onChange = function(expression) {
    console.log(expression)
    expression.expression = ExpressionFactory.getExpression(expression.type);
  }
});