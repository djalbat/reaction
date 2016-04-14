'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSXReactElement = function () {
  function JSXReactElement(reactClass, properties, childJSXElements) {
    _classCallCheck(this, JSXReactElement);

    this.reactClass = reactClass;
    this.properties = properties;
    this.childJSXElements = childJSXElements;

    var getInitialState = reactClass.getGetInitialState(),
        initialState = getInitialState();

    this.state = initialState; ///

    this.jsxElement = undefined; ///
    this.parentJSXElement = undefined; ///
  }

  _createClass(JSXReactElement, [{
    key: 'mount',
    value: function mount(parentJSXElement) {
      this.parentJSXElement = parentJSXElement;

      this.render();

      this.remount();
    }
  }, {
    key: 'setState',
    value: function setState(state) {
      this.state = state;

      this.jsxElement.remove();

      this.render();

      this.remount();
    }
  }, {
    key: 'remount',
    value: function remount() {
      this.jsxElement.mount(this.parentJSXElement);
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.properties || {},
          ///
      state = this.state;

      props.children = this.childJSXElements; ///;

      var reactClass = this.reactClass,
          render = reactClass.getRender(),
          displayName = reactClass.getDisplayName(),
          instance = {
        props: props,
        state: state,
        displayName: displayName
      };

      this.jsxElement = render.apply(instance);
    }
  }]);

  return JSXReactElement;
}();

module.exports = JSXReactElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hSZWFjdEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNO0FBQ0osV0FESSxlQUNKLENBQVksVUFBWixFQUF3QixVQUF4QixFQUFvQyxnQkFBcEMsRUFBc0Q7MEJBRGxELGlCQUNrRDs7QUFDcEQsU0FBSyxVQUFMLEdBQWtCLFVBQWxCLENBRG9EO0FBRXBELFNBQUssVUFBTCxHQUFrQixVQUFsQixDQUZvRDtBQUdwRCxTQUFLLGdCQUFMLEdBQXdCLGdCQUF4QixDQUhvRDs7QUFLcEQsUUFBSSxrQkFBa0IsV0FBVyxrQkFBWCxFQUFsQjtRQUNBLGVBQWUsaUJBQWYsQ0FOZ0Q7O0FBUXBELFNBQUssS0FBTCxHQUFhLFlBQWI7O0FBUm9ELFFBVXBELENBQUssVUFBTCxHQUFrQixTQUFsQjtBQVZvRCxRQVdwRCxDQUFLLGdCQUFMLEdBQXdCLFNBQXhCO0FBWG9ELEdBQXREOztlQURJOzswQkFlRSxrQkFBa0I7QUFDdEIsV0FBSyxnQkFBTCxHQUF3QixnQkFBeEIsQ0FEc0I7O0FBR3RCLFdBQUssTUFBTCxHQUhzQjs7QUFLdEIsV0FBSyxPQUFMLEdBTHNCOzs7OzZCQVFmLE9BQU87QUFDZCxXQUFLLEtBQUwsR0FBYSxLQUFiLENBRGM7O0FBR2QsV0FBSyxVQUFMLENBQWdCLE1BQWhCLEdBSGM7O0FBS2QsV0FBSyxNQUFMLEdBTGM7O0FBT2QsV0FBSyxPQUFMLEdBUGM7Ozs7OEJBVU47QUFDUixXQUFLLFVBQUwsQ0FBZ0IsS0FBaEIsQ0FBc0IsS0FBSyxnQkFBTCxDQUF0QixDQURROzs7OzZCQUlEO0FBQ1AsVUFBSSxRQUFRLEtBQUssVUFBTCxJQUFtQixFQUFuQjs7QUFDUixjQUFRLEtBQUssS0FBTCxDQUZMOztBQUlQLFlBQU0sUUFBTixHQUFpQixLQUFLLGdCQUFMOztBQUpWLFVBTUgsYUFBYSxLQUFLLFVBQUw7VUFDYixTQUFTLFdBQVcsU0FBWCxFQUFUO1VBQ0EsY0FBYyxXQUFXLGNBQVgsRUFBZDtVQUNBLFdBQVc7QUFDVCxlQUFPLEtBQVA7QUFDQSxlQUFPLEtBQVA7QUFDQSxxQkFBYSxXQUFiO09BSEYsQ0FURzs7QUFlUCxXQUFLLFVBQUwsR0FBa0IsT0FBTyxLQUFQLENBQWEsUUFBYixDQUFsQixDQWZPOzs7O1NBckNMOzs7QUF3RE4sT0FBTyxPQUFQLEdBQWlCLGVBQWpCIiwiZmlsZSI6ImpzeFJlYWN0RWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgSlNYUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RDbGFzcywgcHJvcGVydGllcywgY2hpbGRKU1hFbGVtZW50cykge1xuICAgIHRoaXMucmVhY3RDbGFzcyA9IHJlYWN0Q2xhc3M7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgICB0aGlzLmNoaWxkSlNYRWxlbWVudHMgPSBjaGlsZEpTWEVsZW1lbnRzO1xuXG4gICAgdmFyIGdldEluaXRpYWxTdGF0ZSA9IHJlYWN0Q2xhc3MuZ2V0R2V0SW5pdGlhbFN0YXRlKCksXG4gICAgICAgIGluaXRpYWxTdGF0ZSA9IGdldEluaXRpYWxTdGF0ZSgpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IGluaXRpYWxTdGF0ZTsgIC8vL1xuXG4gICAgdGhpcy5qc3hFbGVtZW50ID0gdW5kZWZpbmVkOyAgLy8vXG4gICAgdGhpcy5wYXJlbnRKU1hFbGVtZW50ID0gdW5kZWZpbmVkOyAgLy8vXG4gIH1cbiAgXG4gIG1vdW50KHBhcmVudEpTWEVsZW1lbnQpIHtcbiAgICB0aGlzLnBhcmVudEpTWEVsZW1lbnQgPSBwYXJlbnRKU1hFbGVtZW50O1xuXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgICBcbiAgICB0aGlzLnJlbW91bnQoKTtcbiAgfVxuXG4gIHNldFN0YXRlKHN0YXRlKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuXG4gICAgdGhpcy5qc3hFbGVtZW50LnJlbW92ZSgpO1xuXG4gICAgdGhpcy5yZW5kZXIoKTtcblxuICAgIHRoaXMucmVtb3VudCgpO1xuICB9XG5cbiAgcmVtb3VudCgpIHtcbiAgICB0aGlzLmpzeEVsZW1lbnQubW91bnQodGhpcy5wYXJlbnRKU1hFbGVtZW50KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BlcnRpZXMgfHwge30sICAvLy9cbiAgICAgICAgc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgIFxuICAgIHByb3BzLmNoaWxkcmVuID0gdGhpcy5jaGlsZEpTWEVsZW1lbnRzOyAvLy87XG5cbiAgICB2YXIgcmVhY3RDbGFzcyA9IHRoaXMucmVhY3RDbGFzcyxcbiAgICAgICAgcmVuZGVyID0gcmVhY3RDbGFzcy5nZXRSZW5kZXIoKSxcbiAgICAgICAgZGlzcGxheU5hbWUgPSByZWFjdENsYXNzLmdldERpc3BsYXlOYW1lKCksXG4gICAgICAgIGluc3RhbmNlID0ge1xuICAgICAgICAgIHByb3BzOiBwcm9wcyxcbiAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgZGlzcGxheU5hbWU6IGRpc3BsYXlOYW1lXG4gICAgICAgIH07XG5cbiAgICB0aGlzLmpzeEVsZW1lbnQgPSByZW5kZXIuYXBwbHkoaW5zdGFuY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSlNYUmVhY3RFbGVtZW50O1xuIl19
