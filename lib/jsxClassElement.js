'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JSXBaseElement = require('./jsxBaseElement');

var JSXClassElement = function (_JSXBaseElement) {
  _inherits(JSXClassElement, _JSXBaseElement);

  function JSXClassElement(reactClass, properties, children) {
    _classCallCheck(this, JSXClassElement);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(JSXClassElement).call(this, properties, children));

    _this.reactClass = reactClass;

    var displayName = reactClass.getDisplayName(),
        state = reactClass.getInitialState(); ///

    _this.instance = Object.assign(_this.instance, {
      displayName: displayName,
      state: state
    });

    _this.render();
    return _this;
  }

  _createClass(JSXClassElement, [{
    key: 'setState',
    value: function setState(state) {
      this.instance = Object.assign(this.instance, {
        state: state
      });

      this.forceUpdate();
    }
  }, {
    key: 'render',
    value: function render() {
      this.jsxElement = this.reactClass.render.apply(this.instance);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.reactClass.componentDidMount.apply(this.instance);
    }
  }]);

  return JSXClassElement;
}(JSXBaseElement);

module.exports = JSXClassElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hDbGFzc0VsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJLGlCQUFpQixRQUFRLGtCQUFSLENBQWpCOztJQUVFOzs7QUFDSixXQURJLGVBQ0osQ0FBWSxVQUFaLEVBQXdCLFVBQXhCLEVBQW9DLFFBQXBDLEVBQThDOzBCQUQxQyxpQkFDMEM7O3VFQUQxQyw0QkFFSSxZQUFZLFdBRDBCOztBQUc1QyxVQUFLLFVBQUwsR0FBa0IsVUFBbEIsQ0FINEM7O0FBSzVDLFFBQUksY0FBYyxXQUFXLGNBQVgsRUFBZDtRQUNBLFFBQVEsV0FBVyxlQUFYLEVBQVI7O0FBTndDLFNBUTVDLENBQUssUUFBTCxHQUFnQixPQUFPLE1BQVAsQ0FBYyxNQUFLLFFBQUwsRUFBZTtBQUMzQyxtQkFBYSxXQUFiO0FBQ0EsYUFBTyxLQUFQO0tBRmMsQ0FBaEIsQ0FSNEM7O0FBYTVDLFVBQUssTUFBTCxHQWI0Qzs7R0FBOUM7O2VBREk7OzZCQWlCSyxPQUFPO0FBQ2QsV0FBSyxRQUFMLEdBQWdCLE9BQU8sTUFBUCxDQUFjLEtBQUssUUFBTCxFQUFlO0FBQzNDLGVBQU8sS0FBUDtPQURjLENBQWhCLENBRGM7O0FBS2QsV0FBSyxXQUFMLEdBTGM7Ozs7NkJBUVA7QUFDUCxXQUFLLFVBQUwsR0FBa0IsS0FBSyxVQUFMLENBQWdCLE1BQWhCLENBQXVCLEtBQXZCLENBQTZCLEtBQUssUUFBTCxDQUEvQyxDQURPOzs7O3dDQUlXO0FBQ2xCLFdBQUssVUFBTCxDQUFnQixpQkFBaEIsQ0FBa0MsS0FBbEMsQ0FBd0MsS0FBSyxRQUFMLENBQXhDLENBRGtCOzs7O1NBN0JoQjtFQUF3Qjs7QUFrQzlCLE9BQU8sT0FBUCxHQUFpQixlQUFqQiIsImZpbGUiOiJqc3hDbGFzc0VsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBKU1hCYXNlRWxlbWVudCA9IHJlcXVpcmUoJy4vanN4QmFzZUVsZW1lbnQnKTtcblxuY2xhc3MgSlNYQ2xhc3NFbGVtZW50IGV4dGVuZHMgSlNYQmFzZUVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihyZWFjdENsYXNzLCBwcm9wZXJ0aWVzLCBjaGlsZHJlbikge1xuICAgIHN1cGVyKHByb3BlcnRpZXMsIGNoaWxkcmVuKTtcblxuICAgIHRoaXMucmVhY3RDbGFzcyA9IHJlYWN0Q2xhc3M7XG5cbiAgICB2YXIgZGlzcGxheU5hbWUgPSByZWFjdENsYXNzLmdldERpc3BsYXlOYW1lKCksXG4gICAgICAgIHN0YXRlID0gcmVhY3RDbGFzcy5nZXRJbml0aWFsU3RhdGUoKTsgLy8vXG5cbiAgICB0aGlzLmluc3RhbmNlID0gT2JqZWN0LmFzc2lnbih0aGlzLmluc3RhbmNlLCB7XG4gICAgICBkaXNwbGF5TmFtZTogZGlzcGxheU5hbWUsXG4gICAgICBzdGF0ZTogc3RhdGVcbiAgICB9KTtcblxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBzZXRTdGF0ZShzdGF0ZSkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBPYmplY3QuYXNzaWduKHRoaXMuaW5zdGFuY2UsIHtcbiAgICAgIHN0YXRlOiBzdGF0ZVxuICAgIH0pO1xuXG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuanN4RWxlbWVudCA9IHRoaXMucmVhY3RDbGFzcy5yZW5kZXIuYXBwbHkodGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnJlYWN0Q2xhc3MuY29tcG9uZW50RGlkTW91bnQuYXBwbHkodGhpcy5pbnN0YW5jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBKU1hDbGFzc0VsZW1lbnQ7XG4iXX0=