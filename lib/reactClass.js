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

  delete properties.children; ///

  var jsxElement = new DisplayElement(displayName, properties, children);

  return jsxElement;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdENsYXNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJLGlCQUFpQixRQUFRLGtCQUFSLENBQWpCOztJQUVFO0FBQ0osV0FESSxVQUNKLENBQVksTUFBWixFQUFvQixXQUFwQixFQUFpQyxlQUFqQyxFQUFrRCxlQUFsRCxFQUFtRSxpQkFBbkUsRUFBc0Ysb0JBQXRGLEVBQTRHOzBCQUR4RyxZQUN3Rzs7QUFDMUcsU0FBSyxNQUFMLEdBQWMsTUFBZCxDQUQwRztBQUUxRyxTQUFLLFdBQUwsR0FBbUIsV0FBbkIsQ0FGMEc7QUFHMUcsU0FBSyxlQUFMLEdBQXVCLGVBQXZCLENBSDBHO0FBSTFHLFNBQUssZUFBTCxHQUF1QixlQUF2QixDQUowRztBQUsxRyxTQUFLLGlCQUFMLEdBQXlCLGlCQUF6QixDQUwwRztBQU0xRyxTQUFLLG9CQUFMLEdBQTRCLG9CQUE1QixDQU4wRztHQUE1Rzs7ZUFESTs7cUNBVWE7QUFDZixhQUFPLEtBQUssV0FBTCxDQURROzs7O21DQUlLLFlBQVk7QUFDaEMsVUFBSSxTQUFTLFdBQVcsUUFBWCxLQUF3QixhQUF4QjtVQUNULGNBQWMsV0FBVyxhQUFYLEtBQTZCLGtCQUE3QjtVQUNkLGtCQUFrQixXQUFXLGlCQUFYLEtBQWlDLHNCQUFqQztVQUNsQixrQkFBa0IsV0FBVyxpQkFBWCxLQUFpQyxzQkFBakM7VUFDbEIsb0JBQW9CLFdBQVcsbUJBQVgsS0FBbUMsd0JBQW5DO1VBQ3BCLHVCQUF1QixXQUFXLHNCQUFYLEtBQXNDLDJCQUF0QztVQUN2QixhQUFhLElBQUksVUFBSixDQUFlLE1BQWYsRUFBdUIsV0FBdkIsRUFBb0MsZUFBcEMsRUFBcUQsZUFBckQsRUFBc0UsaUJBQXRFLEVBQXlGLG9CQUF6RixDQUFiLENBUDRCOztBQVNoQyxhQUFPLFVBQVAsQ0FUZ0M7Ozs7U0FkOUI7OztBQTJCTixPQUFPLE9BQVAsR0FBaUIsVUFBakI7O0FBRUEsU0FBUyxhQUFULEdBQXlCO0FBQ3ZCLE1BQUksYUFBYSxLQUFLLEtBQUw7O0FBQ2IsZ0JBQWMsS0FBSyxXQUFMOztBQUNkLGFBQVcsS0FBSyxLQUFMLENBQVcsUUFBWDs7QUFIUSxTQUtoQixXQUFXLFFBQVg7O0FBTGdCLE1BT25CLGFBQWEsSUFBSSxjQUFKLENBQW1CLFdBQW5CLEVBQWdDLFVBQWhDLEVBQTRDLFFBQTVDLENBQWIsQ0FQbUI7O0FBU3ZCLFNBQU8sVUFBUCxDQVR1QjtDQUF6Qjs7QUFZQSxJQUFNLHFCQUFxQixTQUFyQjs7QUFFTixTQUFTLHNCQUFULEdBQWtDO0FBQUUsU0FBTyxFQUFQLENBQUY7Q0FBbEM7O0FBRUEsU0FBUyxzQkFBVCxHQUFrQztBQUFFLFNBQU8sU0FBUCxDQUFGO0NBQWxDOztBQUVBLFNBQVMsd0JBQVQsQ0FBa0MsT0FBbEMsRUFBMkMsRUFBM0M7O0FBRUEsU0FBUywyQkFBVCxDQUFxQyxPQUFyQyxFQUE4QyxFQUE5QyIsImZpbGUiOiJyZWFjdENsYXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRGlzcGxheUVsZW1lbnQgPSByZXF1aXJlKCcuL2Rpc3BsYXlFbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0Q2xhc3Mge1xuICBjb25zdHJ1Y3RvcihyZW5kZXIsIGRpc3BsYXlOYW1lLCBnZXRJbml0aWFsU3RhdGUsIGdldENoaWxkQ29udGV4dCwgY29tcG9uZW50RGlkTW91bnQsIGNvbXBvbmVudFdpbGxVbm1vdW50KSB7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXI7XG4gICAgdGhpcy5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuICAgIHRoaXMuZ2V0SW5pdGlhbFN0YXRlID0gZ2V0SW5pdGlhbFN0YXRlO1xuICAgIHRoaXMuZ2V0Q2hpbGRDb250ZXh0ID0gZ2V0Q2hpbGRDb250ZXh0O1xuICAgIHRoaXMuY29tcG9uZW50RGlkTW91bnQgPSBjb21wb25lbnREaWRNb3VudDtcbiAgICB0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gY29tcG9uZW50V2lsbFVubW91bnQ7XG4gIH1cbiAgXG4gIGdldERpc3BsYXlOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmRpc3BsYXlOYW1lO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIHZhciByZW5kZXIgPSBwcm9wZXJ0aWVzWydyZW5kZXInXSB8fCBkZWZhdWx0UmVuZGVyLFxuICAgICAgICBkaXNwbGF5TmFtZSA9IHByb3BlcnRpZXNbJ2Rpc3BsYXlOYW1lJ10gfHwgZGVmYXVsdERpc3BsYXlOYW1lLFxuICAgICAgICBnZXRJbml0aWFsU3RhdGUgPSBwcm9wZXJ0aWVzWydnZXRJbml0aWFsU3RhdGUnXSB8fCBkZWZhdWx0R2V0SW5pdGlhbFN0YXRlLFxuICAgICAgICBnZXRDaGlsZENvbnRleHQgPSBwcm9wZXJ0aWVzWydnZXRDaGlsZENvbnRleHQnXSB8fCBkZWZhdWx0R2V0Q2hpbGRDb250ZXh0LFxuICAgICAgICBjb21wb25lbnREaWRNb3VudCA9IHByb3BlcnRpZXNbJ2NvbXBvbmVudERpZE1vdW50J10gfHwgZGVmYXVsdENvbXBvbmVudERpZE1vdW50LFxuICAgICAgICBjb21wb25lbnRXaWxsVW5tb3VudCA9IHByb3BlcnRpZXNbJ2NvbXBvbmVudFdpbGxVbm1vdW50J10gfHwgZGVmYXVsdENvbXBvbmVudFdpbGxVbm1vdW50LFxuICAgICAgICByZWFjdENsYXNzID0gbmV3IFJlYWN0Q2xhc3MocmVuZGVyLCBkaXNwbGF5TmFtZSwgZ2V0SW5pdGlhbFN0YXRlLCBnZXRDaGlsZENvbnRleHQsIGNvbXBvbmVudERpZE1vdW50LCBjb21wb25lbnRXaWxsVW5tb3VudCk7XG4gICAgXG4gICAgcmV0dXJuIHJlYWN0Q2xhc3M7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdENsYXNzO1xuXG5mdW5jdGlvbiBkZWZhdWx0UmVuZGVyKCkge1xuICB2YXIgcHJvcGVydGllcyA9IHRoaXMucHJvcHMsICAvLy9cbiAgICAgIGRpc3BsYXlOYW1lID0gdGhpcy5kaXNwbGF5TmFtZSwgLy8vXG4gICAgICBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW47IC8vL1xuXG4gIGRlbGV0ZSBwcm9wZXJ0aWVzLmNoaWxkcmVuOyAvLy9cblxuICB2YXIganN4RWxlbWVudCA9IG5ldyBEaXNwbGF5RWxlbWVudChkaXNwbGF5TmFtZSwgcHJvcGVydGllcywgY2hpbGRyZW4pO1xuXG4gIHJldHVybiBqc3hFbGVtZW50O1xufVxuXG5jb25zdCBkZWZhdWx0RGlzcGxheU5hbWUgPSB1bmRlZmluZWQ7IC8vL1xuXG5mdW5jdGlvbiBkZWZhdWx0R2V0SW5pdGlhbFN0YXRlKCkgeyByZXR1cm4ge307IH1cblxuZnVuY3Rpb24gZGVmYXVsdEdldENoaWxkQ29udGV4dCgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfVxuXG5mdW5jdGlvbiBkZWZhdWx0Q29tcG9uZW50RGlkTW91bnQoY29udGV4dCkge31cblxuZnVuY3Rpb24gZGVmYXVsdENvbXBvbmVudFdpbGxVbm1vdW50KGNvbnRleHQpIHt9XG4iXX0=