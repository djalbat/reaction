'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSXDOMElement = require('./jsxDOMElement');

var ReactClass = function () {
  function ReactClass(render, displayName, getInitialState, componentDidMount) {
    _classCallCheck(this, ReactClass);

    this.render = render;
    this.displayName = displayName;
    this.getInitialState = getInitialState;
    this.componentDidMount = componentDidMount;
  }

  _createClass(ReactClass, [{
    key: 'getDisplayName',
    value: function getDisplayName() {
      return this.displayName;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var render = properties['render'] || defaultRender,
          displayName = properties['displayName'] || defaultDisplayName,
          getInitialState = properties['getInitialState'] || defaultGetInitialState,
          componentDidMount = properties['componentDidMount'] || defaultComponentDidMount,
          reactClass = new ReactClass(render, displayName, getInitialState, componentDidMount);

      return reactClass;
    }
  }]);

  return ReactClass;
}();

module.exports = ReactClass;

function defaultRender() {
  var properties = this.props,
      ///
  elementName = this.displayName,
      ///
  children = this.props.children; ///

  delete properties.children; ///

  var jsxElement = new JSXDOMElement(elementName, properties, children);

  return jsxElement;
}

var defaultDisplayName = undefined; ///

function defaultGetInitialState() {
  var initialState = {};

  return initialState;
}

function defaultComponentDidMount() {}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdENsYXNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJLGdCQUFnQixRQUFRLGlCQUFSLENBQWhCOztJQUVFO0FBQ0osV0FESSxVQUNKLENBQVksTUFBWixFQUFvQixXQUFwQixFQUFpQyxlQUFqQyxFQUFrRCxpQkFBbEQsRUFBcUU7MEJBRGpFLFlBQ2lFOztBQUNuRSxTQUFLLE1BQUwsR0FBYyxNQUFkLENBRG1FO0FBRW5FLFNBQUssV0FBTCxHQUFtQixXQUFuQixDQUZtRTtBQUduRSxTQUFLLGVBQUwsR0FBdUIsZUFBdkIsQ0FIbUU7QUFJbkUsU0FBSyxpQkFBTCxHQUF5QixpQkFBekIsQ0FKbUU7R0FBckU7O2VBREk7O3FDQVFhO0FBQ2YsYUFBTyxLQUFLLFdBQUwsQ0FEUTs7OzttQ0FJSyxZQUFZO0FBQ2hDLFVBQUksU0FBUyxXQUFXLFFBQVgsS0FBd0IsYUFBeEI7VUFDVCxjQUFjLFdBQVcsYUFBWCxLQUE2QixrQkFBN0I7VUFDZCxrQkFBa0IsV0FBVyxpQkFBWCxLQUFpQyxzQkFBakM7VUFDbEIsb0JBQW9CLFdBQVcsbUJBQVgsS0FBbUMsd0JBQW5DO1VBQ3BCLGFBQWEsSUFBSSxVQUFKLENBQWUsTUFBZixFQUF1QixXQUF2QixFQUFvQyxlQUFwQyxFQUFxRCxpQkFBckQsQ0FBYixDQUw0Qjs7QUFPaEMsYUFBTyxVQUFQLENBUGdDOzs7O1NBWjlCOzs7QUF1Qk4sT0FBTyxPQUFQLEdBQWlCLFVBQWpCOztBQUVBLFNBQVMsYUFBVCxHQUF5QjtBQUN2QixNQUFJLGFBQWEsS0FBSyxLQUFMOztBQUNiLGdCQUFjLEtBQUssV0FBTDs7QUFDZCxhQUFXLEtBQUssS0FBTCxDQUFXLFFBQVg7O0FBSFEsU0FLaEIsV0FBVyxRQUFYOztBQUxnQixNQU9uQixhQUFhLElBQUksYUFBSixDQUFrQixXQUFsQixFQUErQixVQUEvQixFQUEyQyxRQUEzQyxDQUFiLENBUG1COztBQVN2QixTQUFPLFVBQVAsQ0FUdUI7Q0FBekI7O0FBWUEsSUFBTSxxQkFBcUIsU0FBckI7O0FBRU4sU0FBUyxzQkFBVCxHQUFrQztBQUNoQyxNQUFJLGVBQWUsRUFBZixDQUQ0Qjs7QUFHaEMsU0FBTyxZQUFQLENBSGdDO0NBQWxDOztBQU1BLFNBQVMsd0JBQVQsR0FBb0MsRUFBcEMiLCJmaWxlIjoicmVhY3RDbGFzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIEpTWERPTUVsZW1lbnQgPSByZXF1aXJlKCcuL2pzeERPTUVsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3RDbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHJlbmRlciwgZGlzcGxheU5hbWUsIGdldEluaXRpYWxTdGF0ZSwgY29tcG9uZW50RGlkTW91bnQpIHtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlcjtcbiAgICB0aGlzLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gICAgdGhpcy5nZXRJbml0aWFsU3RhdGUgPSBnZXRJbml0aWFsU3RhdGU7XG4gICAgdGhpcy5jb21wb25lbnREaWRNb3VudCA9IGNvbXBvbmVudERpZE1vdW50O1xuICB9XG4gIFxuICBnZXREaXNwbGF5TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNwbGF5TmFtZTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICB2YXIgcmVuZGVyID0gcHJvcGVydGllc1sncmVuZGVyJ10gfHwgZGVmYXVsdFJlbmRlcixcbiAgICAgICAgZGlzcGxheU5hbWUgPSBwcm9wZXJ0aWVzWydkaXNwbGF5TmFtZSddIHx8IGRlZmF1bHREaXNwbGF5TmFtZSxcbiAgICAgICAgZ2V0SW5pdGlhbFN0YXRlID0gcHJvcGVydGllc1snZ2V0SW5pdGlhbFN0YXRlJ10gfHwgZGVmYXVsdEdldEluaXRpYWxTdGF0ZSxcbiAgICAgICAgY29tcG9uZW50RGlkTW91bnQgPSBwcm9wZXJ0aWVzWydjb21wb25lbnREaWRNb3VudCddIHx8IGRlZmF1bHRDb21wb25lbnREaWRNb3VudCxcbiAgICAgICAgcmVhY3RDbGFzcyA9IG5ldyBSZWFjdENsYXNzKHJlbmRlciwgZGlzcGxheU5hbWUsIGdldEluaXRpYWxTdGF0ZSwgY29tcG9uZW50RGlkTW91bnQpO1xuICAgIFxuICAgIHJldHVybiByZWFjdENsYXNzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RDbGFzcztcblxuZnVuY3Rpb24gZGVmYXVsdFJlbmRlcigpIHtcbiAgdmFyIHByb3BlcnRpZXMgPSB0aGlzLnByb3BzLCAgLy8vXG4gICAgICBlbGVtZW50TmFtZSA9IHRoaXMuZGlzcGxheU5hbWUsIC8vL1xuICAgICAgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuOyAvLy9cblxuICBkZWxldGUgcHJvcGVydGllcy5jaGlsZHJlbjsgLy8vXG5cbiAgdmFyIGpzeEVsZW1lbnQgPSBuZXcgSlNYRE9NRWxlbWVudChlbGVtZW50TmFtZSwgcHJvcGVydGllcywgY2hpbGRyZW4pO1xuXG4gIHJldHVybiBqc3hFbGVtZW50O1xufVxuXG5jb25zdCBkZWZhdWx0RGlzcGxheU5hbWUgPSB1bmRlZmluZWQ7IC8vL1xuXG5mdW5jdGlvbiBkZWZhdWx0R2V0SW5pdGlhbFN0YXRlKCkge1xuICB2YXIgaW5pdGlhbFN0YXRlID0ge307XG5cbiAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdENvbXBvbmVudERpZE1vdW50KCkge1xuICBcbn1cbiJdfQ==