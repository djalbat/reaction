'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JSXElement = require('./jsxElement'),
    JSXDOMTextElement = require('./jsxDOMTextElement');

var JSXTextElement = function (_JSXElement) {
  _inherits(JSXTextElement, _JSXElement);

  function JSXTextElement(text) {
    _classCallCheck(this, JSXTextElement);

    var properties = {},
        children = [];

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(JSXTextElement).call(this, properties, children));

    _this.text = text;

    _this.render();
    return _this;
  }

  _createClass(JSXTextElement, [{
    key: 'render',
    value: function render() {
      this.jsxElement = new JSXDOMTextElement(this.text);
    }
  }]);

  return JSXTextElement;
}(JSXElement);

module.exports = JSXTextElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hUZXh0RWxlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUksYUFBYSxRQUFRLGNBQVIsQ0FBYjtJQUNBLG9CQUFvQixRQUFRLHFCQUFSLENBQXBCOztJQUVFOzs7QUFDSixXQURJLGNBQ0osQ0FBWSxJQUFaLEVBQWtCOzBCQURkLGdCQUNjOztBQUNoQixRQUFNLGFBQWEsRUFBYjtRQUNBLFdBQVcsRUFBWCxDQUZVOzt1RUFEZCwyQkFLSSxZQUFZLFdBSkY7O0FBTWhCLFVBQUssSUFBTCxHQUFZLElBQVosQ0FOZ0I7O0FBUWhCLFVBQUssTUFBTCxHQVJnQjs7R0FBbEI7O2VBREk7OzZCQVlLO0FBQ1AsV0FBSyxVQUFMLEdBQWtCLElBQUksaUJBQUosQ0FBc0IsS0FBSyxJQUFMLENBQXhDLENBRE87Ozs7U0FaTDtFQUF1Qjs7QUFpQjdCLE9BQU8sT0FBUCxHQUFpQixjQUFqQiIsImZpbGUiOiJqc3hUZXh0RWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIEpTWEVsZW1lbnQgPSByZXF1aXJlKCcuL2pzeEVsZW1lbnQnKSxcbiAgICBKU1hET01UZXh0RWxlbWVudCA9IHJlcXVpcmUoJy4vanN4RE9NVGV4dEVsZW1lbnQnKTtcblxuY2xhc3MgSlNYVGV4dEVsZW1lbnQgZXh0ZW5kcyBKU1hFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodGV4dCkge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSB7fSxcbiAgICAgICAgICBjaGlsZHJlbiA9IFtdO1xuICAgIFxuICAgIHN1cGVyKHByb3BlcnRpZXMsIGNoaWxkcmVuKTtcblxuICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLmpzeEVsZW1lbnQgPSBuZXcgSlNYRE9NVGV4dEVsZW1lbnQodGhpcy50ZXh0KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEpTWFRleHRFbGVtZW50O1xuIl19