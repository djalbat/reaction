'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSXRenderedElement = function () {
  function JSXRenderedElement(reactClass, properties, childJSXElements) {
    _classCallCheck(this, JSXRenderedElement);

    this.reactClass = reactClass;
    this.properties = properties;
    this.childJSXElements = childJSXElements;

    this.parentJSXElement = null;

    this.element = null;
  }

  _createClass(JSXRenderedElement, [{
    key: 'render',
    value: function render(parentJSXElement) {
      this.parentJSXElement = parentJSXElement;

      var reactClass = this.reactClass,
          getInitialState = reactClass.getInitialState,
          initialState = getInitialState();

      this.state = initialState;

      this.renderElement();
    }
  }, {
    key: 'setState',
    value: function setState(state) {
      this.state = state;

      this.remove();

      this.renderElement();
    }
  }, {
    key: 'renderElement',
    value: function renderElement() {
      var parentJSXElement = this.parentJSXElement,
          reactClass = this.reactClass,
          props = this.properties,
          ///
      state = this.state;

      props.children = this.childJSXElements; ///;

      var render = reactClass.render,
          instance = {
        props: props,
        state: state
      },
          jsxElement = render.apply(instance); ///

      this.element = jsxElement.element; ///

      parentJSXElement.append(jsxElement);
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.element.remove();
    }
  }]);

  return JSXRenderedElement;
}();

module.exports = JSXRenderedElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hSZW5kZXJlZEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNO0FBQ0osV0FESSxrQkFDSixDQUFZLFVBQVosRUFBd0IsVUFBeEIsRUFBb0MsZ0JBQXBDLEVBQXNEOzBCQURsRCxvQkFDa0Q7O0FBQ3BELFNBQUssVUFBTCxHQUFrQixVQUFsQixDQURvRDtBQUVwRCxTQUFLLFVBQUwsR0FBa0IsVUFBbEIsQ0FGb0Q7QUFHcEQsU0FBSyxnQkFBTCxHQUF3QixnQkFBeEIsQ0FIb0Q7O0FBS3BELFNBQUssZ0JBQUwsR0FBd0IsSUFBeEIsQ0FMb0Q7O0FBT3BELFNBQUssT0FBTCxHQUFlLElBQWYsQ0FQb0Q7R0FBdEQ7O2VBREk7OzJCQVdHLGtCQUFrQjtBQUN2QixXQUFLLGdCQUFMLEdBQXdCLGdCQUF4QixDQUR1Qjs7QUFHdkIsVUFBSSxhQUFhLEtBQUssVUFBTDtVQUNiLGtCQUFrQixXQUFXLGVBQVg7VUFDbEIsZUFBZSxpQkFBZixDQUxtQjs7QUFPdkIsV0FBSyxLQUFMLEdBQWEsWUFBYixDQVB1Qjs7QUFTdkIsV0FBSyxhQUFMLEdBVHVCOzs7OzZCQVloQixPQUFPO0FBQ2QsV0FBSyxLQUFMLEdBQWEsS0FBYixDQURjOztBQUdkLFdBQUssTUFBTCxHQUhjOztBQUtkLFdBQUssYUFBTCxHQUxjOzs7O29DQVFBO0FBQ2QsVUFBSSxtQkFBbUIsS0FBSyxnQkFBTDtVQUNuQixhQUFhLEtBQUssVUFBTDtVQUNiLFFBQVEsS0FBSyxVQUFMOztBQUNSLGNBQVEsS0FBSyxLQUFMLENBSkU7O0FBTWQsWUFBTSxRQUFOLEdBQWlCLEtBQUssZ0JBQUw7O0FBTkgsVUFRVixTQUFTLFdBQVcsTUFBWDtVQUNULFdBQVc7QUFDVCxlQUFPLEtBQVA7QUFDQSxlQUFPLEtBQVA7T0FGRjtVQUlBLGFBQWEsT0FBTyxLQUFQLENBQWEsUUFBYixDQUFiOztBQWJVLFVBZWQsQ0FBSyxPQUFMLEdBQWUsV0FBVyxPQUFYOztBQWZELHNCQWlCZCxDQUFpQixNQUFqQixDQUF3QixVQUF4QixFQWpCYzs7Ozs2QkFvQlA7QUFDUCxXQUFLLE9BQUwsQ0FBYSxNQUFiLEdBRE87Ozs7U0FuREw7OztBQXdETixPQUFPLE9BQVAsR0FBaUIsa0JBQWpCIiwiZmlsZSI6ImpzeFJlbmRlcmVkRWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgSlNYUmVuZGVyZWRFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RDbGFzcywgcHJvcGVydGllcywgY2hpbGRKU1hFbGVtZW50cykge1xuICAgIHRoaXMucmVhY3RDbGFzcyA9IHJlYWN0Q2xhc3M7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgICB0aGlzLmNoaWxkSlNYRWxlbWVudHMgPSBjaGlsZEpTWEVsZW1lbnRzO1xuXG4gICAgdGhpcy5wYXJlbnRKU1hFbGVtZW50ID0gbnVsbDtcblxuICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gIH1cbiAgXG4gIHJlbmRlcihwYXJlbnRKU1hFbGVtZW50KSB7XG4gICAgdGhpcy5wYXJlbnRKU1hFbGVtZW50ID0gcGFyZW50SlNYRWxlbWVudDtcblxuICAgIHZhciByZWFjdENsYXNzID0gdGhpcy5yZWFjdENsYXNzLFxuICAgICAgICBnZXRJbml0aWFsU3RhdGUgPSByZWFjdENsYXNzLmdldEluaXRpYWxTdGF0ZSxcbiAgICAgICAgaW5pdGlhbFN0YXRlID0gZ2V0SW5pdGlhbFN0YXRlKCk7XG5cbiAgICB0aGlzLnN0YXRlID0gaW5pdGlhbFN0YXRlO1xuXG4gICAgdGhpcy5yZW5kZXJFbGVtZW50KCk7XG4gIH1cblxuICBzZXRTdGF0ZShzdGF0ZSkge1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcblxuICAgIHRoaXMucmVtb3ZlKCk7XG5cbiAgICB0aGlzLnJlbmRlckVsZW1lbnQoKTtcbiAgfVxuXG4gIHJlbmRlckVsZW1lbnQoKSB7XG4gICAgdmFyIHBhcmVudEpTWEVsZW1lbnQgPSB0aGlzLnBhcmVudEpTWEVsZW1lbnQsXG4gICAgICAgIHJlYWN0Q2xhc3MgPSB0aGlzLnJlYWN0Q2xhc3MsXG4gICAgICAgIHByb3BzID0gdGhpcy5wcm9wZXJ0aWVzLCAgLy8vXG4gICAgICAgIHN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICBcbiAgICBwcm9wcy5jaGlsZHJlbiA9IHRoaXMuY2hpbGRKU1hFbGVtZW50czsgLy8vO1xuXG4gICAgdmFyIHJlbmRlciA9IHJlYWN0Q2xhc3MucmVuZGVyLFxuICAgICAgICBpbnN0YW5jZSA9IHtcbiAgICAgICAgICBwcm9wczogcHJvcHMsXG4gICAgICAgICAgc3RhdGU6IHN0YXRlXG4gICAgICAgIH0sXG4gICAgICAgIGpzeEVsZW1lbnQgPSByZW5kZXIuYXBwbHkoaW5zdGFuY2UpOyAvLy9cblxuICAgIHRoaXMuZWxlbWVudCA9IGpzeEVsZW1lbnQuZWxlbWVudDsgIC8vL1xuXG4gICAgcGFyZW50SlNYRWxlbWVudC5hcHBlbmQoanN4RWxlbWVudCk7XG4gIH1cblxuICByZW1vdmUoKSB7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSlNYUmVuZGVyZWRFbGVtZW50O1xuIl19
