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
    value: function render(childJSXElement, domElement) {
      var jsxElement = JSXElement.fromDOMElement(domElement);

      jsxElement.append(childJSXElement);
    }
  }]);

  return ReactDOM;
}();

module.exports = ReactDOM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdERPTS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSSxhQUFhLFFBQVEsY0FBUixDQUFiOztJQUVFOzs7Ozs7OzJCQUNVLGlCQUFpQixZQUFZO0FBQ3pDLFVBQUksYUFBYSxXQUFXLGNBQVgsQ0FBMEIsVUFBMUIsQ0FBYixDQURxQzs7QUFHekMsaUJBQVcsTUFBWCxDQUFrQixlQUFsQixFQUh5Qzs7OztTQUR2Qzs7O0FBUU4sT0FBTyxPQUFQLEdBQWlCLFFBQWpCIiwiZmlsZSI6InJlYWN0RE9NLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgSlNYRWxlbWVudCA9IHJlcXVpcmUoJy4vanN4RWxlbWVudCcpO1xuXG5jbGFzcyBSZWFjdERPTSB7XG4gIHN0YXRpYyByZW5kZXIoY2hpbGRKU1hFbGVtZW50LCBkb21FbGVtZW50KSB7XG4gICAgdmFyIGpzeEVsZW1lbnQgPSBKU1hFbGVtZW50LmZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuXG4gICAganN4RWxlbWVudC5hcHBlbmQoY2hpbGRKU1hFbGVtZW50KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuIl19
