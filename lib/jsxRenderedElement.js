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

    this.jsxElement = null;
  }

  _createClass(JSXRenderedElement, [{
    key: 'mount',
    value: function mount(parentJSXElement) {
      this.parentJSXElement = parentJSXElement;

      var reactClass = this.reactClass,
          getInitialState = reactClass.getInitialState,
          initialState = getInitialState();

      this.state = initialState;

      this.update();
    }
  }, {
    key: 'setState',
    value: function setState(state) {
      this.state = state;

      this.remove();

      this.update();
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.jsxElement.remove();
    }
  }, {
    key: 'update',
    value: function update() {
      var parentJSXElement = this.parentJSXElement,
          props = this.properties,
          ///
      state = this.state;

      props.children = this.childJSXElements; ///;

      var reactClass = this.reactClass,
          render = reactClass.render,
          instance = {
        props: props,
        state: state
      };

      this.jsxElement = render.apply(instance);

      parentJSXElement.append(this.jsxElement);
    }
  }]);

  return JSXRenderedElement;
}();

module.exports = JSXRenderedElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hSZW5kZXJlZEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNO0FBQ0osV0FESSxrQkFDSixDQUFZLFVBQVosRUFBd0IsVUFBeEIsRUFBb0MsZ0JBQXBDLEVBQXNEOzBCQURsRCxvQkFDa0Q7O0FBQ3BELFNBQUssVUFBTCxHQUFrQixVQUFsQixDQURvRDtBQUVwRCxTQUFLLFVBQUwsR0FBa0IsVUFBbEIsQ0FGb0Q7QUFHcEQsU0FBSyxnQkFBTCxHQUF3QixnQkFBeEIsQ0FIb0Q7O0FBS3BELFNBQUssZ0JBQUwsR0FBd0IsSUFBeEIsQ0FMb0Q7O0FBT3BELFNBQUssVUFBTCxHQUFrQixJQUFsQixDQVBvRDtHQUF0RDs7ZUFESTs7MEJBV0Usa0JBQWtCO0FBQ3RCLFdBQUssZ0JBQUwsR0FBd0IsZ0JBQXhCLENBRHNCOztBQUd0QixVQUFJLGFBQWEsS0FBSyxVQUFMO1VBQ2Isa0JBQWtCLFdBQVcsZUFBWDtVQUNsQixlQUFlLGlCQUFmLENBTGtCOztBQU90QixXQUFLLEtBQUwsR0FBYSxZQUFiLENBUHNCOztBQVN0QixXQUFLLE1BQUwsR0FUc0I7Ozs7NkJBWWYsT0FBTztBQUNkLFdBQUssS0FBTCxHQUFhLEtBQWIsQ0FEYzs7QUFHZCxXQUFLLE1BQUwsR0FIYzs7QUFLZCxXQUFLLE1BQUwsR0FMYzs7Ozs2QkFRUDtBQUNQLFdBQUssVUFBTCxDQUFnQixNQUFoQixHQURPOzs7OzZCQUlBO0FBQ1AsVUFBSSxtQkFBbUIsS0FBSyxnQkFBTDtVQUNuQixRQUFRLEtBQUssVUFBTDs7QUFDUixjQUFRLEtBQUssS0FBTCxDQUhMOztBQUtQLFlBQU0sUUFBTixHQUFpQixLQUFLLGdCQUFMOztBQUxWLFVBT0gsYUFBYSxLQUFLLFVBQUw7VUFDYixTQUFTLFdBQVcsTUFBWDtVQUNULFdBQVc7QUFDVCxlQUFPLEtBQVA7QUFDQSxlQUFPLEtBQVA7T0FGRixDQVRHOztBQWNQLFdBQUssVUFBTCxHQUFrQixPQUFPLEtBQVAsQ0FBYSxRQUFiLENBQWxCLENBZE87O0FBZ0JQLHVCQUFpQixNQUFqQixDQUF3QixLQUFLLFVBQUwsQ0FBeEIsQ0FoQk87Ozs7U0FuQ0w7OztBQXVETixPQUFPLE9BQVAsR0FBaUIsa0JBQWpCIiwiZmlsZSI6ImpzeFJlbmRlcmVkRWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgSlNYUmVuZGVyZWRFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RDbGFzcywgcHJvcGVydGllcywgY2hpbGRKU1hFbGVtZW50cykge1xuICAgIHRoaXMucmVhY3RDbGFzcyA9IHJlYWN0Q2xhc3M7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgICB0aGlzLmNoaWxkSlNYRWxlbWVudHMgPSBjaGlsZEpTWEVsZW1lbnRzO1xuXG4gICAgdGhpcy5wYXJlbnRKU1hFbGVtZW50ID0gbnVsbDtcblxuICAgIHRoaXMuanN4RWxlbWVudCA9IG51bGw7XG4gIH1cbiAgXG4gIG1vdW50KHBhcmVudEpTWEVsZW1lbnQpIHtcbiAgICB0aGlzLnBhcmVudEpTWEVsZW1lbnQgPSBwYXJlbnRKU1hFbGVtZW50O1xuXG4gICAgdmFyIHJlYWN0Q2xhc3MgPSB0aGlzLnJlYWN0Q2xhc3MsXG4gICAgICAgIGdldEluaXRpYWxTdGF0ZSA9IHJlYWN0Q2xhc3MuZ2V0SW5pdGlhbFN0YXRlLFxuICAgICAgICBpbml0aWFsU3RhdGUgPSBnZXRJbml0aWFsU3RhdGUoKTtcblxuICAgIHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGU7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgc2V0U3RhdGUoc3RhdGUpIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG5cbiAgICB0aGlzLnJlbW92ZSgpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICB0aGlzLmpzeEVsZW1lbnQucmVtb3ZlKCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdmFyIHBhcmVudEpTWEVsZW1lbnQgPSB0aGlzLnBhcmVudEpTWEVsZW1lbnQsXG4gICAgICAgIHByb3BzID0gdGhpcy5wcm9wZXJ0aWVzLCAgLy8vXG4gICAgICAgIHN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICBcbiAgICBwcm9wcy5jaGlsZHJlbiA9IHRoaXMuY2hpbGRKU1hFbGVtZW50czsgLy8vO1xuXG4gICAgdmFyIHJlYWN0Q2xhc3MgPSB0aGlzLnJlYWN0Q2xhc3MsXG4gICAgICAgIHJlbmRlciA9IHJlYWN0Q2xhc3MucmVuZGVyLFxuICAgICAgICBpbnN0YW5jZSA9IHtcbiAgICAgICAgICBwcm9wczogcHJvcHMsXG4gICAgICAgICAgc3RhdGU6IHN0YXRlXG4gICAgICAgIH07XG4gICAgXG4gICAgdGhpcy5qc3hFbGVtZW50ID0gcmVuZGVyLmFwcGx5KGluc3RhbmNlKTtcbiAgICBcbiAgICBwYXJlbnRKU1hFbGVtZW50LmFwcGVuZCh0aGlzLmpzeEVsZW1lbnQpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSlNYUmVuZGVyZWRFbGVtZW50O1xuIl19
