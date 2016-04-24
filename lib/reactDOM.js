'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = require('./element');

var ReactDOM = function () {
  function ReactDOM() {
    _classCallCheck(this, ReactDOM);
  }

  _createClass(ReactDOM, null, [{
    key: 'render',
    value: function render(element, parentDOMElement) {
      var parentProps = { children: [] },
          ///
      parent = new Element(parentDOMElement, parentProps),
          sibling = null,
          context = undefined;

      element.mount(parent, sibling, context);
    }
  }]);

  return ReactDOM;
}();

module.exports = ReactDOM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdERPTS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSSxVQUFVLFFBQVEsV0FBUixDQUFWOztJQUVFOzs7Ozs7OzJCQUNVLFNBQVMsa0JBQWtCO0FBQ3ZDLFVBQU0sY0FBYyxFQUFDLFVBQVUsRUFBVixFQUFmOztBQUNBLGVBQVMsSUFBSSxPQUFKLENBQVksZ0JBQVosRUFBOEIsV0FBOUIsQ0FBVDtVQUNBLFVBQVUsSUFBVjtVQUNBLFVBQVUsU0FBVixDQUppQzs7QUFNdkMsY0FBUSxLQUFSLENBQWMsTUFBZCxFQUFzQixPQUF0QixFQUErQixPQUEvQixFQU51Qzs7OztTQURyQzs7O0FBV04sT0FBTyxPQUFQLEdBQWlCLFFBQWpCIiwiZmlsZSI6InJlYWN0RE9NLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG5jbGFzcyBSZWFjdERPTSB7XG4gIHN0YXRpYyByZW5kZXIoZWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudFByb3BzID0ge2NoaWxkcmVuOiBbXX0sIC8vL1xuICAgICAgICAgIHBhcmVudCA9IG5ldyBFbGVtZW50KHBhcmVudERPTUVsZW1lbnQsIHBhcmVudFByb3BzKSxcbiAgICAgICAgICBzaWJsaW5nID0gbnVsbCxcbiAgICAgICAgICBjb250ZXh0ID0gdW5kZWZpbmVkO1xuXG4gICAgZWxlbWVudC5tb3VudChwYXJlbnQsIHNpYmxpbmcsIGNvbnRleHQpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007XG4iXX0=