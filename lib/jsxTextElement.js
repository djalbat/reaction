'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JSXDOMElement = require('./jsxDOMElement');

var JSXTextElement = function (_JSXDOMElement) {
  _inherits(JSXTextElement, _JSXDOMElement);

  function JSXTextElement(text) {
    _classCallCheck(this, JSXTextElement);

    var ref = document.createTextNode(text);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(JSXTextElement).call(this, ref));
  }

  return JSXTextElement;
}(JSXDOMElement);

module.exports = JSXTextElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hUZXh0RWxlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFJLGdCQUFnQixRQUFRLGlCQUFSLENBQWhCOztJQUVFOzs7QUFDSixXQURJLGNBQ0osQ0FBWSxJQUFaLEVBQWtCOzBCQURkLGdCQUNjOztBQUNoQixRQUFJLE1BQU0sU0FBUyxjQUFULENBQXdCLElBQXhCLENBQU4sQ0FEWTs7a0VBRGQsMkJBSUksTUFIVTtHQUFsQjs7U0FESTtFQUF1Qjs7QUFRN0IsT0FBTyxPQUFQLEdBQWlCLGNBQWpCIiwiZmlsZSI6ImpzeFRleHRFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgSlNYRE9NRWxlbWVudCA9IHJlcXVpcmUoJy4vanN4RE9NRWxlbWVudCcpO1xuXG5jbGFzcyBKU1hUZXh0RWxlbWVudCBleHRlbmRzIEpTWERPTUVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0ZXh0KSB7XG4gICAgdmFyIHJlZiA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpO1xuXG4gICAgc3VwZXIocmVmKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEpTWFRleHRFbGVtZW50O1xuIl19