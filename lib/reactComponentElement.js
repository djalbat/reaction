'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactElement = require('./reactElement');

var ReactComponentElement = function (_ReactElement) {
  _inherits(ReactComponentElement, _ReactElement);

  function ReactComponentElement(reactComponent, props) {
    _classCallCheck(this, ReactComponentElement);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactComponentElement).call(this, props));

    _this.reactComponent = reactComponent;
    return _this;
  }

  _createClass(ReactComponentElement, [{
    key: 'render',
    value: function render() {
      return this.reactComponent.render.apply(this);
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return this.reactComponent.getChildContext.apply(this);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.reactComponent.componentDidMount.apply(this);
    }
  }, {
    key: 'componentWillUnMount',
    value: function componentWillUnMount() {
      this.reactComponent.componentWillUnMount.apply(this);
    }
  }]);

  return ReactComponentElement;
}(ReactElement);

module.exports = ReactComponentElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdENvbXBvbmVudEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJLGVBQWUsUUFBUSxnQkFBUixDQUFmOztJQUVFOzs7QUFDSixXQURJLHFCQUNKLENBQVksY0FBWixFQUE0QixLQUE1QixFQUFtQzswQkFEL0IsdUJBQytCOzt1RUFEL0Isa0NBRUksUUFEMkI7O0FBR2pDLFVBQUssY0FBTCxHQUFzQixjQUF0QixDQUhpQzs7R0FBbkM7O2VBREk7OzZCQU9LO0FBQ1AsYUFBTyxLQUFLLGNBQUwsQ0FBb0IsTUFBcEIsQ0FBMkIsS0FBM0IsQ0FBaUMsSUFBakMsQ0FBUCxDQURPOzs7O3NDQUlTO0FBQ2hCLGFBQU8sS0FBSyxjQUFMLENBQW9CLGVBQXBCLENBQW9DLEtBQXBDLENBQTBDLElBQTFDLENBQVAsQ0FEZ0I7Ozs7d0NBSUU7QUFDbEIsV0FBSyxjQUFMLENBQW9CLGlCQUFwQixDQUFzQyxLQUF0QyxDQUE0QyxJQUE1QyxFQURrQjs7OzsyQ0FJRztBQUNyQixXQUFLLGNBQUwsQ0FBb0Isb0JBQXBCLENBQXlDLEtBQXpDLENBQStDLElBQS9DLEVBRHFCOzs7O1NBbkJuQjtFQUE4Qjs7QUF3QnBDLE9BQU8sT0FBUCxHQUFpQixxQkFBakIiLCJmaWxlIjoicmVhY3RDb21wb25lbnRFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RFbGVtZW50ID0gcmVxdWlyZSgnLi9yZWFjdEVsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3RDb21wb25lbnRFbGVtZW50IGV4dGVuZHMgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RDb21wb25lbnQsIHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5yZWFjdENvbXBvbmVudCA9IHJlYWN0Q29tcG9uZW50O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q29tcG9uZW50LnJlbmRlci5hcHBseSh0aGlzKTtcbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENvbXBvbmVudC5nZXRDaGlsZENvbnRleHQuYXBwbHkodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnJlYWN0Q29tcG9uZW50LmNvbXBvbmVudERpZE1vdW50LmFwcGx5KHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVuTW91bnQoKSB7XG4gICAgdGhpcy5yZWFjdENvbXBvbmVudC5jb21wb25lbnRXaWxsVW5Nb3VudC5hcHBseSh0aGlzKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0Q29tcG9uZW50RWxlbWVudDtcbiJdfQ==