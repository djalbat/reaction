'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseElement = require('./baseElement');

var TextElement = function (_BaseElement) {
  _inherits(TextElement, _BaseElement);

  function TextElement(text) {
    _classCallCheck(this, TextElement);

    var domElement = document.createTextNode(text);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TextElement).call(this, domElement));
  }

  return TextElement;
}(BaseElement);

module.exports = TextElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS90ZXh0RWxlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFJLGNBQWMsUUFBUSxlQUFSLENBQWQ7O0lBRUU7OztBQUNKLFdBREksV0FDSixDQUFZLElBQVosRUFBa0I7MEJBRGQsYUFDYzs7QUFDaEIsUUFBSSxhQUFhLFNBQVMsY0FBVCxDQUF3QixJQUF4QixDQUFiLENBRFk7O2tFQURkLHdCQUlJLGFBSFU7R0FBbEI7O1NBREk7RUFBb0I7O0FBUTFCLE9BQU8sT0FBUCxHQUFpQixXQUFqQiIsImZpbGUiOiJ0ZXh0RWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIEJhc2VFbGVtZW50ID0gcmVxdWlyZSgnLi9iYXNlRWxlbWVudCcpO1xuXG5jbGFzcyBUZXh0RWxlbWVudCBleHRlbmRzIEJhc2VFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodGV4dCkge1xuICAgIHZhciBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCk7XG5cbiAgICBzdXBlcihkb21FbGVtZW50KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHRFbGVtZW50O1xuIl19