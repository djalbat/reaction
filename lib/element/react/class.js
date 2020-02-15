'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactElement = require('../react');

var ReactClassElement = function (_ReactElement) {
  _inherits(ReactClassElement, _ReactElement);

  function ReactClassElement(reactClass, props) {
    _classCallCheck(this, ReactClassElement);

    var _this = _possibleConstructorReturn(this, (ReactClassElement.__proto__ || Object.getPrototypeOf(ReactClassElement)).call(this, props));

    _this.reactClass = reactClass;

    var initialState = _this.getInitialState();

    _this.setInitialState(initialState);
    return _this;
  }

  _createClass(ReactClassElement, [{
    key: 'render',
    value: function render(update) {
      return this.reactClass.render.call(this, update);
    }
  }, {
    key: 'getInitialState',
    value: function getInitialState() {
      return this.reactClass.getInitialState.call(this);
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext(context) {
      return this.reactClass.getChildContext.call(this, context);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount(domElement) {
      this.reactClass.componentDidMount.call(this, domElement);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.reactClass.componentWillUnmount.call(this);
    }
  }]);

  return ReactClassElement;
}(ReactElement);

module.exports = ReactClassElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L3JlYWN0L2NsYXNzLmpzIl0sIm5hbWVzIjpbIlJlYWN0RWxlbWVudCIsInJlcXVpcmUiLCJSZWFjdENsYXNzRWxlbWVudCIsInJlYWN0Q2xhc3MiLCJwcm9wcyIsImluaXRpYWxTdGF0ZSIsImdldEluaXRpYWxTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInVwZGF0ZSIsInJlbmRlciIsImNhbGwiLCJjb250ZXh0IiwiZ2V0Q2hpbGRDb250ZXh0IiwiZG9tRWxlbWVudCIsImNvbXBvbmVudERpZE1vdW50IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGVBQWVDLFFBQVEsVUFBUixDQUFyQjs7SUFFTUMsaUI7OztBQUNKLDZCQUFZQyxVQUFaLEVBQXdCQyxLQUF4QixFQUErQjtBQUFBOztBQUFBLHNJQUN2QkEsS0FEdUI7O0FBRzdCLFVBQUtELFVBQUwsR0FBa0JBLFVBQWxCOztBQUVBLFFBQU1FLGVBQWUsTUFBS0MsZUFBTCxFQUFyQjs7QUFFQSxVQUFLQyxlQUFMLENBQXFCRixZQUFyQjtBQVA2QjtBQVE5Qjs7OzsyQkFFTUcsTSxFQUFRO0FBQ2IsYUFBTyxLQUFLTCxVQUFMLENBQWdCTSxNQUFoQixDQUF1QkMsSUFBdkIsQ0FBNEIsSUFBNUIsRUFBa0NGLE1BQWxDLENBQVA7QUFDRDs7O3NDQUVpQjtBQUNoQixhQUFPLEtBQUtMLFVBQUwsQ0FBZ0JHLGVBQWhCLENBQWdDSSxJQUFoQyxDQUFxQyxJQUFyQyxDQUFQO0FBQ0Q7OztvQ0FFZUMsTyxFQUFTO0FBQ3ZCLGFBQU8sS0FBS1IsVUFBTCxDQUFnQlMsZUFBaEIsQ0FBZ0NGLElBQWhDLENBQXFDLElBQXJDLEVBQTJDQyxPQUEzQyxDQUFQO0FBQ0Q7OztzQ0FFaUJFLFUsRUFBWTtBQUM1QixXQUFLVixVQUFMLENBQWdCVyxpQkFBaEIsQ0FBa0NKLElBQWxDLENBQXVDLElBQXZDLEVBQTZDRyxVQUE3QztBQUNEOzs7MkNBRXNCO0FBQ3JCLFdBQUtWLFVBQUwsQ0FBZ0JZLG9CQUFoQixDQUFxQ0wsSUFBckMsQ0FBMEMsSUFBMUM7QUFDRDs7OztFQTdCNkJWLFk7O0FBZ0NoQ2dCLE9BQU9DLE9BQVAsR0FBaUJmLGlCQUFqQiIsImZpbGUiOiJjbGFzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVhY3RFbGVtZW50ID0gcmVxdWlyZSgnLi4vcmVhY3QnKTtcblxuY2xhc3MgUmVhY3RDbGFzc0VsZW1lbnQgZXh0ZW5kcyBSZWFjdEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihyZWFjdENsYXNzLCBwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMucmVhY3RDbGFzcyA9IHJlYWN0Q2xhc3M7XG5cbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB0aGlzLmdldEluaXRpYWxTdGF0ZSgpO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoaW5pdGlhbFN0YXRlKTtcbiAgfVxuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENsYXNzLnJlbmRlci5jYWxsKHRoaXMsIHVwZGF0ZSk7XG4gIH1cblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDbGFzcy5nZXRJbml0aWFsU3RhdGUuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDbGFzcy5nZXRDaGlsZENvbnRleHQuY2FsbCh0aGlzLCBjb250ZXh0KTtcbiAgfVxuICBcbiAgY29tcG9uZW50RGlkTW91bnQoZG9tRWxlbWVudCkge1xuICAgIHRoaXMucmVhY3RDbGFzcy5jb21wb25lbnREaWRNb3VudC5jYWxsKHRoaXMsIGRvbUVsZW1lbnQpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5yZWFjdENsYXNzLmNvbXBvbmVudFdpbGxVbm1vdW50LmNhbGwodGhpcyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdENsYXNzRWxlbWVudDtcbiJdfQ==