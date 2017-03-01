'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactElement = require('./reactElement');

var ReactFunctionElement = function (_ReactElement) {
  _inherits(ReactFunctionElement, _ReactElement);

  function ReactFunctionElement(reactFunction, props) {
    _classCallCheck(this, ReactFunctionElement);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactFunctionElement).call(this, props));

    _this.reactFunction = reactFunction;

    _this.state = _this.getInitialState();
    return _this;
  }

  _createClass(ReactFunctionElement, [{
    key: 'render',
    value: function render() {
      return this.reactFunction(this.props, this.context);
    }
  }, {
    key: 'getInitialState',
    value: function getInitialState() {
      if (this.reactFunction.getInitialState) {
        return this.reactFunction.getInitialState(this.props, this.context);
      }

      return {};
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      if (this.reactFunction.getChildContext) {
        return this.reactFunction.getChildContext(this.props, this.context);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.reactFunction.componentDidMount) {
        this.reactFunction.componentDidMount(this.props, this.context);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.reactFunction.componentWillUnmount) {
        this.reactFunction.componentWillUnmount(this.props, this.context);
      }
    }
  }]);

  return ReactFunctionElement;
}(ReactElement);

module.exports = ReactFunctionElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWFjdEZ1bmN0aW9uRWxlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU0sZUFBZSxRQUFRLGdCQUFSLENBQWY7O0lBRUE7OztBQUNKLFdBREksb0JBQ0osQ0FBWSxhQUFaLEVBQTJCLEtBQTNCLEVBQWtDOzBCQUQ5QixzQkFDOEI7O3VFQUQ5QixpQ0FFSSxRQUQwQjs7QUFHaEMsVUFBSyxhQUFMLEdBQXFCLGFBQXJCLENBSGdDOztBQUtoQyxVQUFLLEtBQUwsR0FBYSxNQUFLLGVBQUwsRUFBYixDQUxnQzs7R0FBbEM7O2VBREk7OzZCQVNLO0FBQ1AsYUFBTyxLQUFLLGFBQUwsQ0FBbUIsS0FBSyxLQUFMLEVBQVksS0FBSyxPQUFMLENBQXRDLENBRE87Ozs7c0NBSVM7QUFDaEIsVUFBSSxLQUFLLGFBQUwsQ0FBbUIsZUFBbkIsRUFBb0M7QUFDdEMsZUFBTyxLQUFLLGFBQUwsQ0FBbUIsZUFBbkIsQ0FBbUMsS0FBSyxLQUFMLEVBQVksS0FBSyxPQUFMLENBQXRELENBRHNDO09BQXhDOztBQUlBLGFBQU8sRUFBUCxDQUxnQjs7OztzQ0FRQTtBQUNoQixVQUFJLEtBQUssYUFBTCxDQUFtQixlQUFuQixFQUFvQztBQUN0QyxlQUFPLEtBQUssYUFBTCxDQUFtQixlQUFuQixDQUFtQyxLQUFLLEtBQUwsRUFBWSxLQUFLLE9BQUwsQ0FBdEQsQ0FEc0M7T0FBeEM7Ozs7d0NBS2tCO0FBQ2xCLFVBQUksS0FBSyxhQUFMLENBQW1CLGlCQUFuQixFQUFzQztBQUN4QyxhQUFLLGFBQUwsQ0FBbUIsaUJBQW5CLENBQXFDLEtBQUssS0FBTCxFQUFZLEtBQUssT0FBTCxDQUFqRCxDQUR3QztPQUExQzs7OzsyQ0FLcUI7QUFDckIsVUFBSSxLQUFLLGFBQUwsQ0FBbUIsb0JBQW5CLEVBQXlDO0FBQzNDLGFBQUssYUFBTCxDQUFtQixvQkFBbkIsQ0FBd0MsS0FBSyxLQUFMLEVBQVksS0FBSyxPQUFMLENBQXBELENBRDJDO09BQTdDOzs7O1NBbENFO0VBQTZCOztBQXdDbkMsT0FBTyxPQUFQLEdBQWlCLG9CQUFqQiIsImZpbGUiOiJyZWFjdEZ1bmN0aW9uRWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVhY3RFbGVtZW50ID0gcmVxdWlyZSgnLi9yZWFjdEVsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3RGdW5jdGlvbkVsZW1lbnQgZXh0ZW5kcyBSZWFjdEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihyZWFjdEZ1bmN0aW9uLCBwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMucmVhY3RGdW5jdGlvbiA9IHJlYWN0RnVuY3Rpb247XG5cbiAgICB0aGlzLnN0YXRlID0gdGhpcy5nZXRJbml0aWFsU3RhdGUoKTtcbiAgfVxuIFxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RGdW5jdGlvbih0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQpO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGlmICh0aGlzLnJlYWN0RnVuY3Rpb24uZ2V0SW5pdGlhbFN0YXRlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWFjdEZ1bmN0aW9uLmdldEluaXRpYWxTdGF0ZSh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICBpZiAodGhpcy5yZWFjdEZ1bmN0aW9uLmdldENoaWxkQ29udGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMucmVhY3RGdW5jdGlvbi5nZXRDaGlsZENvbnRleHQodGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5yZWFjdEZ1bmN0aW9uLmNvbXBvbmVudERpZE1vdW50KSB7XG4gICAgICB0aGlzLnJlYWN0RnVuY3Rpb24uY29tcG9uZW50RGlkTW91bnQodGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcbiAgICB9XG4gIH1cbiBcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMucmVhY3RGdW5jdGlvbi5jb21wb25lbnRXaWxsVW5tb3VudCkge1xuICAgICAgdGhpcy5yZWFjdEZ1bmN0aW9uLmNvbXBvbmVudFdpbGxVbm1vdW50KHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RGdW5jdGlvbkVsZW1lbnQ7XG4iXX0=