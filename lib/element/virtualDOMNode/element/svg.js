'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var nameUtilities = require('../../../utilities/name'),
    VirtualDOMElement = require('../element');

var isSVGAttributeName = nameUtilities.isSVGAttributeName;

var VirtualDOMSVGElement = /*#__PURE__*/function (_VirtualDOMElement) {
  _inherits(VirtualDOMSVGElement, _VirtualDOMElement);

  function VirtualDOMSVGElement(tagName, props) {
    _classCallCheck(this, VirtualDOMSVGElement);

    var domElement = document.createElementNS('http://www.w3.org/2000/svg', tagName);
    return _possibleConstructorReturn(this, _getPrototypeOf(VirtualDOMSVGElement).call(this, props, domElement));
  }

  _createClass(VirtualDOMSVGElement, [{
    key: "isAttributeName",
    value: function isAttributeName(name) {
      return isSVGAttributeName(name);
    }
  }]);

  return VirtualDOMSVGElement;
}(VirtualDOMElement);

module.exports = VirtualDOMSVGElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN2Zy5qcyJdLCJuYW1lcyI6WyJuYW1lVXRpbGl0aWVzIiwicmVxdWlyZSIsIlZpcnR1YWxET01FbGVtZW50IiwiaXNTVkdBdHRyaWJ1dGVOYW1lIiwiVmlydHVhbERPTVNWR0VsZW1lbnQiLCJ0YWdOYW1lIiwicHJvcHMiLCJkb21FbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50TlMiLCJuYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYSxHQUFHQyxPQUFPLENBQUMseUJBQUQsQ0FBN0I7QUFBQSxJQUNNQyxpQkFBaUIsR0FBR0QsT0FBTyxDQUFDLFlBQUQsQ0FEakM7O0lBR1FFLGtCLEdBQXVCSCxhLENBQXZCRyxrQjs7SUFFRkMsb0I7OztBQUNKLGdDQUFZQyxPQUFaLEVBQXFCQyxLQUFyQixFQUE0QjtBQUFBOztBQUMxQixRQUFNQyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5Qiw0QkFBekIsRUFBdURKLE9BQXZELENBQW5CO0FBRDBCLDZGQUdwQkMsS0FIb0IsRUFHYkMsVUFIYTtBQUkzQjs7OztvQ0FFZUcsSSxFQUFNO0FBQ3BCLGFBQU9QLGtCQUFrQixDQUFDTyxJQUFELENBQXpCO0FBQ0Q7Ozs7RUFUZ0NSLGlCOztBQVluQ1MsTUFBTSxDQUFDQyxPQUFQLEdBQWlCUixvQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5hbWVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsaXRpZXMvbmFtZScpLFxuICAgICAgVmlydHVhbERPTUVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7XG5cbmNvbnN0IHsgaXNTVkdBdHRyaWJ1dGVOYW1lIH0gPSBuYW1lVXRpbGl0aWVzO1xuXG5jbGFzcyBWaXJ0dWFsRE9NU1ZHRWxlbWVudCBleHRlbmRzIFZpcnR1YWxET01FbGVtZW50IHtcbiAgY29uc3RydWN0b3IodGFnTmFtZSwgcHJvcHMpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIHRhZ05hbWUpO1xuXG4gICAgc3VwZXIocHJvcHMsIGRvbUVsZW1lbnQpO1xuICB9XG5cbiAgaXNBdHRyaWJ1dGVOYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gaXNTVkdBdHRyaWJ1dGVOYW1lKG5hbWUpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmlydHVhbERPTVNWR0VsZW1lbnQ7XG4iXX0=