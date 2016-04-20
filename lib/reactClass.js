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

  _createClass(ReactClass, null, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdENsYXNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJLGFBQWEsUUFBUSxjQUFSLENBQWI7O0lBRUU7QUFDSixXQURJLFVBQ0osQ0FBWSxNQUFaLEVBQW9CLFdBQXBCLEVBQWlDLGVBQWpDLEVBQWtELGlCQUFsRCxFQUFxRTswQkFEakUsWUFDaUU7O0FBQ25FLFNBQUssTUFBTCxHQUFjLE1BQWQsQ0FEbUU7QUFFbkUsU0FBSyxXQUFMLEdBQW1CLFdBQW5CLENBRm1FO0FBR25FLFNBQUssZUFBTCxHQUF1QixlQUF2QixDQUhtRTtBQUluRSxTQUFLLGlCQUFMLEdBQXlCLGlCQUF6QixDQUptRTtHQUFyRTs7ZUFESTs7bUNBUWtCLFlBQVk7QUFDaEMsVUFBSSxTQUFTLFdBQVcsUUFBWCxLQUF3QixhQUF4QjtVQUNULGNBQWMsV0FBVyxhQUFYLEtBQTZCLGtCQUE3QjtVQUNkLGtCQUFrQixXQUFXLGlCQUFYLEtBQWlDLHNCQUFqQztVQUNsQixvQkFBb0IsV0FBVyxtQkFBWCxLQUFtQyx3QkFBbkM7VUFDcEIsYUFBYSxJQUFJLFVBQUosQ0FBZSxNQUFmLEVBQXVCLFdBQXZCLEVBQW9DLGVBQXBDLEVBQXFELGlCQUFyRCxDQUFiLENBTDRCOztBQU9oQyxhQUFPLFVBQVAsQ0FQZ0M7Ozs7U0FSOUI7OztBQW1CTixPQUFPLE9BQVAsR0FBaUIsVUFBakI7O0FBRUEsU0FBUyxhQUFULEdBQXlCO0FBQ3ZCLE1BQUksYUFBYSxLQUFLLEtBQUw7O0FBQ2IsZ0JBQWMsS0FBSyxXQUFMOztBQUNkLHFCQUFtQixLQUFLLEtBQUwsQ0FBVyxRQUFYOztBQUhBLFNBS2hCLFdBQVcsUUFBWDs7QUFMZ0IsTUFPbkIsYUFBYSxJQUFJLFVBQUosQ0FBZSxXQUFmLEVBQTRCLFVBQTVCLEVBQXdDLGdCQUF4QyxDQUFiLENBUG1COztBQVN2QixTQUFPLFVBQVAsQ0FUdUI7Q0FBekI7O0FBWUEsSUFBTSxxQkFBcUIsU0FBckI7O0FBRU4sU0FBUyxzQkFBVCxHQUFrQztBQUNoQyxNQUFJLGVBQWUsRUFBZixDQUQ0Qjs7QUFHaEMsU0FBTyxZQUFQLENBSGdDO0NBQWxDOztBQU1BLFNBQVMsd0JBQVQsR0FBb0MsRUFBcEMiLCJmaWxlIjoicmVhY3RDbGFzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIEpTWEVsZW1lbnQgPSByZXF1aXJlKCcuL2pzeEVsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3RDbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHJlbmRlciwgZGlzcGxheU5hbWUsIGdldEluaXRpYWxTdGF0ZSwgY29tcG9uZW50RGlkTW91bnQpIHtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlcjtcbiAgICB0aGlzLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gICAgdGhpcy5nZXRJbml0aWFsU3RhdGUgPSBnZXRJbml0aWFsU3RhdGU7XG4gICAgdGhpcy5jb21wb25lbnREaWRNb3VudCA9IGNvbXBvbmVudERpZE1vdW50O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIHZhciByZW5kZXIgPSBwcm9wZXJ0aWVzWydyZW5kZXInXSB8fCBkZWZhdWx0UmVuZGVyLFxuICAgICAgICBkaXNwbGF5TmFtZSA9IHByb3BlcnRpZXNbJ2Rpc3BsYXlOYW1lJ10gfHwgZGVmYXVsdERpc3BsYXlOYW1lLFxuICAgICAgICBnZXRJbml0aWFsU3RhdGUgPSBwcm9wZXJ0aWVzWydnZXRJbml0aWFsU3RhdGUnXSB8fCBkZWZhdWx0R2V0SW5pdGlhbFN0YXRlLFxuICAgICAgICBjb21wb25lbnREaWRNb3VudCA9IHByb3BlcnRpZXNbJ2NvbXBvbmVudERpZE1vdW50J10gfHwgZGVmYXVsdENvbXBvbmVudERpZE1vdW50LFxuICAgICAgICByZWFjdENsYXNzID0gbmV3IFJlYWN0Q2xhc3MocmVuZGVyLCBkaXNwbGF5TmFtZSwgZ2V0SW5pdGlhbFN0YXRlLCBjb21wb25lbnREaWRNb3VudCk7XG4gICAgXG4gICAgcmV0dXJuIHJlYWN0Q2xhc3M7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdENsYXNzO1xuXG5mdW5jdGlvbiBkZWZhdWx0UmVuZGVyKCkge1xuICB2YXIgcHJvcGVydGllcyA9IHRoaXMucHJvcHMsICAvLy9cbiAgICAgIGVsZW1lbnROYW1lID0gdGhpcy5kaXNwbGF5TmFtZSwgLy8vXG4gICAgICBjaGlsZEpTWEVsZW1lbnRzID0gdGhpcy5wcm9wcy5jaGlsZHJlbjsgLy8vXG5cbiAgZGVsZXRlIHByb3BlcnRpZXMuY2hpbGRyZW47IC8vL1xuXG4gIHZhciBqc3hFbGVtZW50ID0gbmV3IEpTWEVsZW1lbnQoZWxlbWVudE5hbWUsIHByb3BlcnRpZXMsIGNoaWxkSlNYRWxlbWVudHMpO1xuXG4gIHJldHVybiBqc3hFbGVtZW50O1xufVxuXG5jb25zdCBkZWZhdWx0RGlzcGxheU5hbWUgPSB1bmRlZmluZWQ7IC8vL1xuXG5mdW5jdGlvbiBkZWZhdWx0R2V0SW5pdGlhbFN0YXRlKCkge1xuICB2YXIgaW5pdGlhbFN0YXRlID0ge307XG5cbiAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdENvbXBvbmVudERpZE1vdW50KCkge1xuICBcbn1cbiJdfQ==