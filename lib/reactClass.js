'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DisplayElement = require('./displayElement');

var ReactClass = function () {
  function ReactClass(render, displayName, getInitialState, getChildContext, componentDidMount, componentWillUnmount) {
    _classCallCheck(this, ReactClass);

    this.render = render;
    this.displayName = displayName;
    this.getInitialState = getInitialState;
    this.getChildContext = getChildContext;
    this.componentDidMount = componentDidMount;
    this.componentWillUnmount = componentWillUnmount;
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
          getChildContext = properties['getChildContext'] || defaultGetChildContext,
          componentDidMount = properties['componentDidMount'] || defaultComponentDidMount,
          componentWillUnmount = properties['componentWillUnmount'] || defaultComponentWillUnmount,
          reactClass = new ReactClass(render, displayName, getInitialState, getChildContext, componentDidMount, componentWillUnmount);

      return reactClass;
    }
  }]);

  return ReactClass;
}();

module.exports = ReactClass;

function defaultRender() {
  var properties = this.props,
      ///
  displayName = this.displayName,
      ///
  children = this.props.children; ///

  return new DisplayElement(displayName, properties, children);
}

var defaultDisplayName = undefined; ///
function defaultGetInitialState() {
  return {};
}
function defaultGetChildContext() {
  return undefined;
}
function defaultComponentDidMount(context) {}
function defaultComponentWillUnmount(context) {}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdENsYXNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJLGlCQUFpQixRQUFRLGtCQUFSLENBQWpCOztJQUVFO0FBQ0osV0FESSxVQUNKLENBQVksTUFBWixFQUFvQixXQUFwQixFQUFpQyxlQUFqQyxFQUFrRCxlQUFsRCxFQUFtRSxpQkFBbkUsRUFBc0Ysb0JBQXRGLEVBQTRHOzBCQUR4RyxZQUN3Rzs7QUFDMUcsU0FBSyxNQUFMLEdBQWMsTUFBZCxDQUQwRztBQUUxRyxTQUFLLFdBQUwsR0FBbUIsV0FBbkIsQ0FGMEc7QUFHMUcsU0FBSyxlQUFMLEdBQXVCLGVBQXZCLENBSDBHO0FBSTFHLFNBQUssZUFBTCxHQUF1QixlQUF2QixDQUowRztBQUsxRyxTQUFLLGlCQUFMLEdBQXlCLGlCQUF6QixDQUwwRztBQU0xRyxTQUFLLG9CQUFMLEdBQTRCLG9CQUE1QixDQU4wRztHQUE1Rzs7ZUFESTs7cUNBVWE7QUFDZixhQUFPLEtBQUssV0FBTCxDQURROzs7O21DQUlLLFlBQVk7QUFDaEMsVUFBSSxTQUFTLFdBQVcsUUFBWCxLQUF3QixhQUF4QjtVQUNULGNBQWMsV0FBVyxhQUFYLEtBQTZCLGtCQUE3QjtVQUNkLGtCQUFrQixXQUFXLGlCQUFYLEtBQWlDLHNCQUFqQztVQUNsQixrQkFBa0IsV0FBVyxpQkFBWCxLQUFpQyxzQkFBakM7VUFDbEIsb0JBQW9CLFdBQVcsbUJBQVgsS0FBbUMsd0JBQW5DO1VBQ3BCLHVCQUF1QixXQUFXLHNCQUFYLEtBQXNDLDJCQUF0QztVQUN2QixhQUFhLElBQUksVUFBSixDQUFlLE1BQWYsRUFBdUIsV0FBdkIsRUFBb0MsZUFBcEMsRUFBcUQsZUFBckQsRUFBc0UsaUJBQXRFLEVBQXlGLG9CQUF6RixDQUFiLENBUDRCOztBQVNoQyxhQUFPLFVBQVAsQ0FUZ0M7Ozs7U0FkOUI7OztBQTJCTixPQUFPLE9BQVAsR0FBaUIsVUFBakI7O0FBRUEsU0FBUyxhQUFULEdBQXlCO0FBQ3ZCLE1BQUksYUFBYSxLQUFLLEtBQUw7O0FBQ2IsZ0JBQWMsS0FBSyxXQUFMOztBQUNkLGFBQVcsS0FBSyxLQUFMLENBQVcsUUFBWDs7QUFIUSxTQUtoQixJQUFJLGNBQUosQ0FBbUIsV0FBbkIsRUFBZ0MsVUFBaEMsRUFBNEMsUUFBNUMsQ0FBUCxDQUx1QjtDQUF6Qjs7QUFRQSxJQUFNLHFCQUFxQixTQUFyQjtBQUNOLFNBQVMsc0JBQVQsR0FBa0M7QUFBRSxTQUFPLEVBQVAsQ0FBRjtDQUFsQztBQUNBLFNBQVMsc0JBQVQsR0FBa0M7QUFBRSxTQUFPLFNBQVAsQ0FBRjtDQUFsQztBQUNBLFNBQVMsd0JBQVQsQ0FBa0MsT0FBbEMsRUFBMkMsRUFBM0M7QUFDQSxTQUFTLDJCQUFULENBQXFDLE9BQXJDLEVBQThDLEVBQTlDIiwiZmlsZSI6InJlYWN0Q2xhc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBEaXNwbGF5RWxlbWVudCA9IHJlcXVpcmUoJy4vZGlzcGxheUVsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3RDbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHJlbmRlciwgZGlzcGxheU5hbWUsIGdldEluaXRpYWxTdGF0ZSwgZ2V0Q2hpbGRDb250ZXh0LCBjb21wb25lbnREaWRNb3VudCwgY29tcG9uZW50V2lsbFVubW91bnQpIHtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlcjtcbiAgICB0aGlzLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gICAgdGhpcy5nZXRJbml0aWFsU3RhdGUgPSBnZXRJbml0aWFsU3RhdGU7XG4gICAgdGhpcy5nZXRDaGlsZENvbnRleHQgPSBnZXRDaGlsZENvbnRleHQ7XG4gICAgdGhpcy5jb21wb25lbnREaWRNb3VudCA9IGNvbXBvbmVudERpZE1vdW50O1xuICAgIHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQgPSBjb21wb25lbnRXaWxsVW5tb3VudDtcbiAgfVxuICBcbiAgZ2V0RGlzcGxheU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzcGxheU5hbWU7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgdmFyIHJlbmRlciA9IHByb3BlcnRpZXNbJ3JlbmRlciddIHx8IGRlZmF1bHRSZW5kZXIsXG4gICAgICAgIGRpc3BsYXlOYW1lID0gcHJvcGVydGllc1snZGlzcGxheU5hbWUnXSB8fCBkZWZhdWx0RGlzcGxheU5hbWUsXG4gICAgICAgIGdldEluaXRpYWxTdGF0ZSA9IHByb3BlcnRpZXNbJ2dldEluaXRpYWxTdGF0ZSddIHx8IGRlZmF1bHRHZXRJbml0aWFsU3RhdGUsXG4gICAgICAgIGdldENoaWxkQ29udGV4dCA9IHByb3BlcnRpZXNbJ2dldENoaWxkQ29udGV4dCddIHx8IGRlZmF1bHRHZXRDaGlsZENvbnRleHQsXG4gICAgICAgIGNvbXBvbmVudERpZE1vdW50ID0gcHJvcGVydGllc1snY29tcG9uZW50RGlkTW91bnQnXSB8fCBkZWZhdWx0Q29tcG9uZW50RGlkTW91bnQsXG4gICAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ID0gcHJvcGVydGllc1snY29tcG9uZW50V2lsbFVubW91bnQnXSB8fCBkZWZhdWx0Q29tcG9uZW50V2lsbFVubW91bnQsXG4gICAgICAgIHJlYWN0Q2xhc3MgPSBuZXcgUmVhY3RDbGFzcyhyZW5kZXIsIGRpc3BsYXlOYW1lLCBnZXRJbml0aWFsU3RhdGUsIGdldENoaWxkQ29udGV4dCwgY29tcG9uZW50RGlkTW91bnQsIGNvbXBvbmVudFdpbGxVbm1vdW50KTtcbiAgICBcbiAgICByZXR1cm4gcmVhY3RDbGFzcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0Q2xhc3M7XG5cbmZ1bmN0aW9uIGRlZmF1bHRSZW5kZXIoKSB7XG4gIHZhciBwcm9wZXJ0aWVzID0gdGhpcy5wcm9wcywgIC8vL1xuICAgICAgZGlzcGxheU5hbWUgPSB0aGlzLmRpc3BsYXlOYW1lLCAvLy9cbiAgICAgIGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbjsgLy8vXG5cbiAgcmV0dXJuIG5ldyBEaXNwbGF5RWxlbWVudChkaXNwbGF5TmFtZSwgcHJvcGVydGllcywgY2hpbGRyZW4pO1xufVxuXG5jb25zdCBkZWZhdWx0RGlzcGxheU5hbWUgPSB1bmRlZmluZWQ7IC8vL1xuZnVuY3Rpb24gZGVmYXVsdEdldEluaXRpYWxTdGF0ZSgpIHsgcmV0dXJuIHt9OyB9XG5mdW5jdGlvbiBkZWZhdWx0R2V0Q2hpbGRDb250ZXh0KCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9XG5mdW5jdGlvbiBkZWZhdWx0Q29tcG9uZW50RGlkTW91bnQoY29udGV4dCkge31cbmZ1bmN0aW9uIGRlZmF1bHRDb21wb25lbnRXaWxsVW5tb3VudChjb250ZXh0KSB7fVxuIl19