'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSXReactElement = function () {
  function JSXReactElement(reactClass, properties, childJSXElements) {
    _classCallCheck(this, JSXReactElement);

    this.reactClass = reactClass;
    this.properties = properties;
    this.childJSXElements = childJSXElements;

    this.state = reactClass.getInitialState(); ///

    this.jsxElement = undefined; ///

    var children = this.childJSXElements,
        ///
    props = Object.assign({}, this.properties, { children: children }),
        state = this.state,
        displayName = reactClass.displayName;

    this.instance = Object.assign({
      props: props,
      state: state,
      displayName: displayName
    });

    this.render();
  }

  _createClass(JSXReactElement, [{
    key: 'mount',
    value: function mount(parentJSXElement) {
      this.jsxElement.mount(parentJSXElement);

      this.reactClass.componentDidMount.apply(this.instance);
    }
  }, {
    key: 'remount',
    value: function remount(oldJSXElement) {
      this.jsxElement.remount(oldJSXElement);
    }
  }, {
    key: 'setState',
    value: function setState(state) {
      this.state = state;

      var oldJSXElement = this.jsxElement;

      this.render();

      this.jsxElement.remount(oldJSXElement);
    }
  }, {
    key: 'render',
    value: function render() {
      this.jsxElement = this.reactClass.render.apply(this.instance);
    }
  }]);

  return JSXReactElement;
}();

module.exports = JSXReactElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hSZWFjdEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNO0FBQ0osV0FESSxlQUNKLENBQVksVUFBWixFQUF3QixVQUF4QixFQUFvQyxnQkFBcEMsRUFBc0Q7MEJBRGxELGlCQUNrRDs7QUFDcEQsU0FBSyxVQUFMLEdBQWtCLFVBQWxCLENBRG9EO0FBRXBELFNBQUssVUFBTCxHQUFrQixVQUFsQixDQUZvRDtBQUdwRCxTQUFLLGdCQUFMLEdBQXdCLGdCQUF4QixDQUhvRDs7QUFLcEQsU0FBSyxLQUFMLEdBQWEsV0FBVyxlQUFYLEVBQWI7O0FBTG9ELFFBT3BELENBQUssVUFBTCxHQUFrQixTQUFsQjs7QUFQb0QsUUFTOUMsV0FBVyxLQUFLLGdCQUFMOztBQUNYLFlBQVEsT0FBTyxNQUFQLENBQWMsRUFBZCxFQUFrQixLQUFLLFVBQUwsRUFBaUIsRUFBQyxVQUFVLFFBQVYsRUFBcEMsQ0FBUjtRQUNBLFFBQVEsS0FBSyxLQUFMO1FBQ1IsY0FBYyxXQUFXLFdBQVgsQ0FaZ0M7O0FBY3BELFNBQUssUUFBTCxHQUFnQixPQUFPLE1BQVAsQ0FBYztBQUM1QixhQUFPLEtBQVA7QUFDQSxhQUFPLEtBQVA7QUFDQSxtQkFBYSxXQUFiO0tBSGMsQ0FBaEIsQ0Fkb0Q7O0FBb0JwRCxTQUFLLE1BQUwsR0FwQm9EO0dBQXREOztlQURJOzswQkF3QkUsa0JBQWtCO0FBQ3RCLFdBQUssVUFBTCxDQUFnQixLQUFoQixDQUFzQixnQkFBdEIsRUFEc0I7O0FBR3RCLFdBQUssVUFBTCxDQUFnQixpQkFBaEIsQ0FBa0MsS0FBbEMsQ0FBd0MsS0FBSyxRQUFMLENBQXhDLENBSHNCOzs7OzRCQU1oQixlQUFlO0FBQ3JCLFdBQUssVUFBTCxDQUFnQixPQUFoQixDQUF3QixhQUF4QixFQURxQjs7Ozs2QkFJZCxPQUFPO0FBQ2QsV0FBSyxLQUFMLEdBQWEsS0FBYixDQURjOztBQUdkLFVBQUksZ0JBQWdCLEtBQUssVUFBTCxDQUhOOztBQUtkLFdBQUssTUFBTCxHQUxjOztBQU9kLFdBQUssVUFBTCxDQUFnQixPQUFoQixDQUF3QixhQUF4QixFQVBjOzs7OzZCQVVQO0FBQ1AsV0FBSyxVQUFMLEdBQWtCLEtBQUssVUFBTCxDQUFnQixNQUFoQixDQUF1QixLQUF2QixDQUE2QixLQUFLLFFBQUwsQ0FBL0MsQ0FETzs7OztTQTVDTDs7O0FBaUROLE9BQU8sT0FBUCxHQUFpQixlQUFqQiIsImZpbGUiOiJqc3hSZWFjdEVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEpTWFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0Q2xhc3MsIHByb3BlcnRpZXMsIGNoaWxkSlNYRWxlbWVudHMpIHtcbiAgICB0aGlzLnJlYWN0Q2xhc3MgPSByZWFjdENsYXNzO1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gICAgdGhpcy5jaGlsZEpTWEVsZW1lbnRzID0gY2hpbGRKU1hFbGVtZW50cztcblxuICAgIHRoaXMuc3RhdGUgPSByZWFjdENsYXNzLmdldEluaXRpYWxTdGF0ZSgpOyAgLy8vXG5cbiAgICB0aGlzLmpzeEVsZW1lbnQgPSB1bmRlZmluZWQ7ICAvLy9cbiAgICBcbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRKU1hFbGVtZW50cywgLy8vXG4gICAgICAgICAgcHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BlcnRpZXMsIHtjaGlsZHJlbjogY2hpbGRyZW59KSxcbiAgICAgICAgICBzdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgZGlzcGxheU5hbWUgPSByZWFjdENsYXNzLmRpc3BsYXlOYW1lO1xuXG4gICAgdGhpcy5pbnN0YW5jZSA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgcHJvcHM6IHByb3BzLFxuICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgZGlzcGxheU5hbWU6IGRpc3BsYXlOYW1lXG4gICAgfSk7XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgbW91bnQocGFyZW50SlNYRWxlbWVudCkge1xuICAgIHRoaXMuanN4RWxlbWVudC5tb3VudChwYXJlbnRKU1hFbGVtZW50KTtcblxuICAgIHRoaXMucmVhY3RDbGFzcy5jb21wb25lbnREaWRNb3VudC5hcHBseSh0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIHJlbW91bnQob2xkSlNYRWxlbWVudCkge1xuICAgIHRoaXMuanN4RWxlbWVudC5yZW1vdW50KG9sZEpTWEVsZW1lbnQpO1xuICB9XG5cbiAgc2V0U3RhdGUoc3RhdGUpIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG5cbiAgICB2YXIgb2xkSlNYRWxlbWVudCA9IHRoaXMuanN4RWxlbWVudDtcblxuICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgICB0aGlzLmpzeEVsZW1lbnQucmVtb3VudChvbGRKU1hFbGVtZW50KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuanN4RWxlbWVudCA9IHRoaXMucmVhY3RDbGFzcy5yZW5kZXIuYXBwbHkodGhpcy5pbnN0YW5jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBKU1hSZWFjdEVsZW1lbnQ7XG4iXX0=