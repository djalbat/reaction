'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSXElement = require('./jsxElement');

var ReactClass = function () {
  function ReactClass(render, displayName, getInitialState, componentDidMount) {
    _classCallCheck(this, ReactClass);

    this.render = render;
    this.displayName = displayName;
    this.getInitialState = getInitialState;
    this.componentDidMount = componentDidMount;
  }

  _createClass(ReactClass, [{
    key: 'getRender',
    value: function getRender() {
      return this.render;
    }
  }, {
    key: 'getDisplayName',
    value: function getDisplayName() {
      return this.displayName;
    }
  }, {
    key: 'getGetInitialState',
    value: function getGetInitialState() {
      return this.getInitialState;
    }
  }, {
    key: 'getComponentDidMount',
    value: function getComponentDidMount() {
      return this.componentDidMount;
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
  childJSXElements = this.props.children; ///

  delete properties.children; ///

  var jsxElement = new JSXElement(elementName, properties, childJSXElements);

  return jsxElement;
}

var defaultDisplayName = undefined; ///

function defaultGetInitialState() {
  var initialState = {};

  return initialState;
}

function defaultComponentDidMount() {}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdENsYXNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJLGFBQWEsUUFBUSxjQUFSLENBQWI7O0lBRUU7QUFDSixXQURJLFVBQ0osQ0FBWSxNQUFaLEVBQW9CLFdBQXBCLEVBQWlDLGVBQWpDLEVBQWtELGlCQUFsRCxFQUFxRTswQkFEakUsWUFDaUU7O0FBQ25FLFNBQUssTUFBTCxHQUFjLE1BQWQsQ0FEbUU7QUFFbkUsU0FBSyxXQUFMLEdBQW1CLFdBQW5CLENBRm1FO0FBR25FLFNBQUssZUFBTCxHQUF1QixlQUF2QixDQUhtRTtBQUluRSxTQUFLLGlCQUFMLEdBQXlCLGlCQUF6QixDQUptRTtHQUFyRTs7ZUFESTs7Z0NBUVE7QUFDVixhQUFPLEtBQUssTUFBTCxDQURHOzs7O3FDQUlLO0FBQ2YsYUFBTyxLQUFLLFdBQUwsQ0FEUTs7Ozt5Q0FJSTtBQUNuQixhQUFPLEtBQUssZUFBTCxDQURZOzs7OzJDQUlFO0FBQ3JCLGFBQU8sS0FBSyxpQkFBTCxDQURjOzs7O21DQUlELFlBQVk7QUFDaEMsVUFBSSxTQUFTLFdBQVcsUUFBWCxLQUF3QixhQUF4QjtVQUNULGNBQWMsV0FBVyxhQUFYLEtBQTZCLGtCQUE3QjtVQUNkLGtCQUFrQixXQUFXLGlCQUFYLEtBQWlDLHNCQUFqQztVQUNsQixvQkFBb0IsV0FBVyxtQkFBWCxLQUFtQyx3QkFBbkM7VUFDcEIsYUFBYSxJQUFJLFVBQUosQ0FBZSxNQUFmLEVBQXVCLFdBQXZCLEVBQW9DLGVBQXBDLEVBQXFELGlCQUFyRCxDQUFiLENBTDRCOztBQU9oQyxhQUFPLFVBQVAsQ0FQZ0M7Ozs7U0F4QjlCOzs7QUFtQ04sT0FBTyxPQUFQLEdBQWlCLFVBQWpCOztBQUVBLFNBQVMsYUFBVCxHQUF5QjtBQUN2QixNQUFJLGFBQWEsS0FBSyxLQUFMOztBQUNiLGdCQUFjLEtBQUssV0FBTDs7QUFDZCxxQkFBbUIsS0FBSyxLQUFMLENBQVcsUUFBWDs7QUFIQSxTQUtoQixXQUFXLFFBQVg7O0FBTGdCLE1BT25CLGFBQWEsSUFBSSxVQUFKLENBQWUsV0FBZixFQUE0QixVQUE1QixFQUF3QyxnQkFBeEMsQ0FBYixDQVBtQjs7QUFTdkIsU0FBTyxVQUFQLENBVHVCO0NBQXpCOztBQVlBLElBQU0scUJBQXFCLFNBQXJCOztBQUVOLFNBQVMsc0JBQVQsR0FBa0M7QUFDaEMsTUFBSSxlQUFlLEVBQWYsQ0FENEI7O0FBR2hDLFNBQU8sWUFBUCxDQUhnQztDQUFsQzs7QUFNQSxTQUFTLHdCQUFULEdBQW9DLEVBQXBDIiwiZmlsZSI6InJlYWN0Q2xhc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBKU1hFbGVtZW50ID0gcmVxdWlyZSgnLi9qc3hFbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0Q2xhc3Mge1xuICBjb25zdHJ1Y3RvcihyZW5kZXIsIGRpc3BsYXlOYW1lLCBnZXRJbml0aWFsU3RhdGUsIGNvbXBvbmVudERpZE1vdW50KSB7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXI7XG4gICAgdGhpcy5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuICAgIHRoaXMuZ2V0SW5pdGlhbFN0YXRlID0gZ2V0SW5pdGlhbFN0YXRlO1xuICAgIHRoaXMuY29tcG9uZW50RGlkTW91bnQgPSBjb21wb25lbnREaWRNb3VudDtcbiAgfVxuICBcbiAgZ2V0UmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnJlbmRlcjtcbiAgfVxuXG4gIGdldERpc3BsYXlOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmRpc3BsYXlOYW1lO1xuICB9XG5cbiAgZ2V0R2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEluaXRpYWxTdGF0ZTtcbiAgfVxuICBcbiAgZ2V0Q29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50RGlkTW91bnQ7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgdmFyIHJlbmRlciA9IHByb3BlcnRpZXNbJ3JlbmRlciddIHx8IGRlZmF1bHRSZW5kZXIsXG4gICAgICAgIGRpc3BsYXlOYW1lID0gcHJvcGVydGllc1snZGlzcGxheU5hbWUnXSB8fCBkZWZhdWx0RGlzcGxheU5hbWUsXG4gICAgICAgIGdldEluaXRpYWxTdGF0ZSA9IHByb3BlcnRpZXNbJ2dldEluaXRpYWxTdGF0ZSddIHx8IGRlZmF1bHRHZXRJbml0aWFsU3RhdGUsXG4gICAgICAgIGNvbXBvbmVudERpZE1vdW50ID0gcHJvcGVydGllc1snY29tcG9uZW50RGlkTW91bnQnXSB8fCBkZWZhdWx0Q29tcG9uZW50RGlkTW91bnQsXG4gICAgICAgIHJlYWN0Q2xhc3MgPSBuZXcgUmVhY3RDbGFzcyhyZW5kZXIsIGRpc3BsYXlOYW1lLCBnZXRJbml0aWFsU3RhdGUsIGNvbXBvbmVudERpZE1vdW50KTtcbiAgICBcbiAgICByZXR1cm4gcmVhY3RDbGFzcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0Q2xhc3M7XG5cbmZ1bmN0aW9uIGRlZmF1bHRSZW5kZXIoKSB7XG4gIHZhciBwcm9wZXJ0aWVzID0gdGhpcy5wcm9wcywgIC8vL1xuICAgICAgZWxlbWVudE5hbWUgPSB0aGlzLmRpc3BsYXlOYW1lLCAvLy9cbiAgICAgIGNoaWxkSlNYRWxlbWVudHMgPSB0aGlzLnByb3BzLmNoaWxkcmVuOyAvLy9cblxuICBkZWxldGUgcHJvcGVydGllcy5jaGlsZHJlbjsgLy8vXG5cbiAgdmFyIGpzeEVsZW1lbnQgPSBuZXcgSlNYRWxlbWVudChlbGVtZW50TmFtZSwgcHJvcGVydGllcywgY2hpbGRKU1hFbGVtZW50cyk7XG5cbiAgcmV0dXJuIGpzeEVsZW1lbnQ7XG59XG5cbmNvbnN0IGRlZmF1bHREaXNwbGF5TmFtZSA9IHVuZGVmaW5lZDsgLy8vXG5cbmZ1bmN0aW9uIGRlZmF1bHRHZXRJbml0aWFsU3RhdGUoKSB7XG4gIHZhciBpbml0aWFsU3RhdGUgPSB7fTtcblxuICByZXR1cm4gaW5pdGlhbFN0YXRlO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0Q29tcG9uZW50RGlkTW91bnQoKSB7XG4gIFxufVxuIl19
