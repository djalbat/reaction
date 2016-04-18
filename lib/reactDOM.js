'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSXElement = require('./jsxElement');

var ReactDOM = function () {
  function ReactDOM() {
    _classCallCheck(this, ReactDOM);
  }

  _createClass(ReactDOM, null, [{
    key: 'render',
    value: function render(jsxElement, parentDOMElement) {
      var parentJSXElement = JSXElement.fromDOMElement(parentDOMElement);

      parentJSXElement.empty();

      jsxElement.mount(parentJSXElement); ///
    }
  }]);

  return ReactDOM;
}();

module.exports = ReactDOM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdERPTS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSSxhQUFhLFFBQVEsY0FBUixDQUFiOztJQUVFOzs7Ozs7OzJCQUNVLFlBQVksa0JBQWtCO0FBQzFDLFVBQUksbUJBQW1CLFdBQVcsY0FBWCxDQUEwQixnQkFBMUIsQ0FBbkIsQ0FEc0M7O0FBRzFDLHVCQUFpQixLQUFqQixHQUgwQzs7QUFLMUMsaUJBQVcsS0FBWCxDQUFpQixnQkFBakI7QUFMMEM7OztTQUR4Qzs7O0FBVU4sT0FBTyxPQUFQLEdBQWlCLFFBQWpCIiwiZmlsZSI6InJlYWN0RE9NLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgSlNYRWxlbWVudCA9IHJlcXVpcmUoJy4vanN4RWxlbWVudCcpO1xuXG5jbGFzcyBSZWFjdERPTSB7XG4gIHN0YXRpYyByZW5kZXIoanN4RWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCkge1xuICAgIHZhciBwYXJlbnRKU1hFbGVtZW50ID0gSlNYRWxlbWVudC5mcm9tRE9NRWxlbWVudChwYXJlbnRET01FbGVtZW50KTtcblxuICAgIHBhcmVudEpTWEVsZW1lbnQuZW1wdHkoKTtcblxuICAgIGpzeEVsZW1lbnQubW91bnQocGFyZW50SlNYRWxlbWVudCk7IC8vL1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007XG4iXX0=