'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JSXBaseElement = require('./jsxBaseElement');

var JSXComponentElement = function (_JSXBaseElement) {
  _inherits(JSXComponentElement, _JSXBaseElement);

  function JSXComponentElement(reactComponent, properties, children) {
    _classCallCheck(this, JSXComponentElement);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(JSXComponentElement).call(this, properties, children));

    _this.reactComponent = reactComponent;

    _this.render();
    return _this;
  }

  _createClass(JSXComponentElement, [{
    key: 'render',
    value: function render() {
      this.jsxElement = this.reactComponent.render.apply(this.instance);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.reactComponent.componentDidMount.apply(this.instance);
    }
  }]);

  return JSXComponentElement;
}(JSXBaseElement);

module.exports = JSXComponentElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hDb21wb25lbnRFbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSSxpQkFBaUIsUUFBUSxrQkFBUixDQUFqQjs7SUFFRTs7O0FBQ0osV0FESSxtQkFDSixDQUFZLGNBQVosRUFBNEIsVUFBNUIsRUFBd0MsUUFBeEMsRUFBa0Q7MEJBRDlDLHFCQUM4Qzs7dUVBRDlDLGdDQUVJLFlBQVksV0FEOEI7O0FBR2hELFVBQUssY0FBTCxHQUFzQixjQUF0QixDQUhnRDs7QUFLaEQsVUFBSyxNQUFMLEdBTGdEOztHQUFsRDs7ZUFESTs7NkJBU0s7QUFDUCxXQUFLLFVBQUwsR0FBa0IsS0FBSyxjQUFMLENBQW9CLE1BQXBCLENBQTJCLEtBQTNCLENBQWlDLEtBQUssUUFBTCxDQUFuRCxDQURPOzs7O3dDQUlXO0FBQ2xCLFdBQUssY0FBTCxDQUFvQixpQkFBcEIsQ0FBc0MsS0FBdEMsQ0FBNEMsS0FBSyxRQUFMLENBQTVDLENBRGtCOzs7O1NBYmhCO0VBQTRCOztBQWtCbEMsT0FBTyxPQUFQLEdBQWlCLG1CQUFqQiIsImZpbGUiOiJqc3hDb21wb25lbnRFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgSlNYQmFzZUVsZW1lbnQgPSByZXF1aXJlKCcuL2pzeEJhc2VFbGVtZW50Jyk7XG5cbmNsYXNzIEpTWENvbXBvbmVudEVsZW1lbnQgZXh0ZW5kcyBKU1hCYXNlRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0Q29tcG9uZW50LCBwcm9wZXJ0aWVzLCBjaGlsZHJlbikge1xuICAgIHN1cGVyKHByb3BlcnRpZXMsIGNoaWxkcmVuKTtcblxuICAgIHRoaXMucmVhY3RDb21wb25lbnQgPSByZWFjdENvbXBvbmVudDtcbiAgICBcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuanN4RWxlbWVudCA9IHRoaXMucmVhY3RDb21wb25lbnQucmVuZGVyLmFwcGx5KHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5yZWFjdENvbXBvbmVudC5jb21wb25lbnREaWRNb3VudC5hcHBseSh0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEpTWENvbXBvbmVudEVsZW1lbnQ7XG4iXX0=