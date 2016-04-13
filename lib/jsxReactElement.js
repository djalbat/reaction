'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSXReactElement = function () {
  function JSXReactElement(reactClass, properties) {
    _classCallCheck(this, JSXReactElement);

    this.reactClass = reactClass;
    this.properties = properties;

    this.jsxElement = null;

    this.parentJSXElement = null;
  }

  _createClass(JSXReactElement, [{
    key: 'mount',
    value: function mount(parentJSXElement) {
      var reactClass = this.reactClass,
          getInitialState = reactClass.getGetInitialState(),
          initialState = getInitialState();

      this.state = initialState;

      this.renderJSXElement();

      this.jsxElement.mount(parentJSXElement);

      this.parentJSXElement = parentJSXElement;
    }
  }, {
    key: 'setState',
    value: function setState(state) {
      this.state = state;

      this.jsxElement.remove();

      this.renderJSXElement();

      var parentJSXElement = this.parentJSXElement;

      this.jsxElement.mount(parentJSXElement); ///
    }
  }, {
    key: 'renderJSXElement',
    value: function renderJSXElement() {
      var props = this.properties || {},
          ///
      state = this.state;

      // props.children = this.childJSXElements; ///;

      var reactClass = this.reactClass,
          render = reactClass.getRender(),
          instance = {
        props: props,
        state: state
      };

      this.jsxElement = render.apply(instance);
    }
  }]);

  return JSXReactElement;
}();

module.exports = JSXReactElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hSZWFjdEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNO0FBQ0osV0FESSxlQUNKLENBQVksVUFBWixFQUF3QixVQUF4QixFQUFvQzswQkFEaEMsaUJBQ2dDOztBQUNsQyxTQUFLLFVBQUwsR0FBa0IsVUFBbEIsQ0FEa0M7QUFFbEMsU0FBSyxVQUFMLEdBQWtCLFVBQWxCLENBRmtDOztBQUlsQyxTQUFLLFVBQUwsR0FBa0IsSUFBbEIsQ0FKa0M7O0FBTWxDLFNBQUssZ0JBQUwsR0FBd0IsSUFBeEIsQ0FOa0M7R0FBcEM7O2VBREk7OzBCQVVFLGtCQUFrQjtBQUN0QixVQUFJLGFBQWEsS0FBSyxVQUFMO1VBQ2Isa0JBQWtCLFdBQVcsa0JBQVgsRUFBbEI7VUFDQSxlQUFlLGlCQUFmLENBSGtCOztBQUt0QixXQUFLLEtBQUwsR0FBYSxZQUFiLENBTHNCOztBQU90QixXQUFLLGdCQUFMLEdBUHNCOztBQVN0QixXQUFLLFVBQUwsQ0FBZ0IsS0FBaEIsQ0FBc0IsZ0JBQXRCLEVBVHNCOztBQVd0QixXQUFLLGdCQUFMLEdBQXdCLGdCQUF4QixDQVhzQjs7Ozs2QkFjZixPQUFPO0FBQ2QsV0FBSyxLQUFMLEdBQWEsS0FBYixDQURjOztBQUdkLFdBQUssVUFBTCxDQUFnQixNQUFoQixHQUhjOztBQUtkLFdBQUssZ0JBQUwsR0FMYzs7QUFPZCxVQUFJLG1CQUFtQixLQUFLLGdCQUFMLENBUFQ7O0FBU2QsV0FBSyxVQUFMLENBQWdCLEtBQWhCLENBQXNCLGdCQUF0QjtBQVRjOzs7dUNBWUc7QUFDakIsVUFBSSxRQUFRLEtBQUssVUFBTCxJQUFtQixFQUFuQjs7QUFDUixjQUFRLEtBQUssS0FBTDs7OztBQUZLLFVBTWIsYUFBYSxLQUFLLFVBQUw7VUFDYixTQUFTLFdBQVcsU0FBWCxFQUFUO1VBQ0EsV0FBVztBQUNULGVBQU8sS0FBUDtBQUNBLGVBQU8sS0FBUDtPQUZGLENBUmE7O0FBYWpCLFdBQUssVUFBTCxHQUFrQixPQUFPLEtBQVAsQ0FBYSxRQUFiLENBQWxCLENBYmlCOzs7O1NBcENmOzs7QUFxRE4sT0FBTyxPQUFQLEdBQWlCLGVBQWpCIiwiZmlsZSI6ImpzeFJlYWN0RWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgSlNYUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RDbGFzcywgcHJvcGVydGllcykge1xuICAgIHRoaXMucmVhY3RDbGFzcyA9IHJlYWN0Q2xhc3M7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcblxuICAgIHRoaXMuanN4RWxlbWVudCA9IG51bGw7XG5cbiAgICB0aGlzLnBhcmVudEpTWEVsZW1lbnQgPSBudWxsO1xuICB9XG5cbiAgbW91bnQocGFyZW50SlNYRWxlbWVudCkge1xuICAgIHZhciByZWFjdENsYXNzID0gdGhpcy5yZWFjdENsYXNzLFxuICAgICAgICBnZXRJbml0aWFsU3RhdGUgPSByZWFjdENsYXNzLmdldEdldEluaXRpYWxTdGF0ZSgpLFxuICAgICAgICBpbml0aWFsU3RhdGUgPSBnZXRJbml0aWFsU3RhdGUoKTtcblxuICAgIHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGU7XG5cbiAgICB0aGlzLnJlbmRlckpTWEVsZW1lbnQoKTtcblxuICAgIHRoaXMuanN4RWxlbWVudC5tb3VudChwYXJlbnRKU1hFbGVtZW50KTtcblxuICAgIHRoaXMucGFyZW50SlNYRWxlbWVudCA9IHBhcmVudEpTWEVsZW1lbnQ7XG4gIH1cblxuICBzZXRTdGF0ZShzdGF0ZSkge1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcblxuICAgIHRoaXMuanN4RWxlbWVudC5yZW1vdmUoKTtcblxuICAgIHRoaXMucmVuZGVySlNYRWxlbWVudCgpO1xuXG4gICAgdmFyIHBhcmVudEpTWEVsZW1lbnQgPSB0aGlzLnBhcmVudEpTWEVsZW1lbnQ7XG5cbiAgICB0aGlzLmpzeEVsZW1lbnQubW91bnQocGFyZW50SlNYRWxlbWVudCk7ICAvLy9cbiAgfVxuXG4gIHJlbmRlckpTWEVsZW1lbnQoKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wZXJ0aWVzIHx8IHt9LCAgLy8vXG4gICAgICAgIHN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICBcbiAgICAvLyBwcm9wcy5jaGlsZHJlbiA9IHRoaXMuY2hpbGRKU1hFbGVtZW50czsgLy8vO1xuXG4gICAgdmFyIHJlYWN0Q2xhc3MgPSB0aGlzLnJlYWN0Q2xhc3MsXG4gICAgICAgIHJlbmRlciA9IHJlYWN0Q2xhc3MuZ2V0UmVuZGVyKCksXG4gICAgICAgIGluc3RhbmNlID0ge1xuICAgICAgICAgIHByb3BzOiBwcm9wcyxcbiAgICAgICAgICBzdGF0ZTogc3RhdGVcbiAgICAgICAgfTsgXG5cbiAgICB0aGlzLmpzeEVsZW1lbnQgPSByZW5kZXIuYXBwbHkoaW5zdGFuY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSlNYUmVhY3RFbGVtZW50O1xuIl19
