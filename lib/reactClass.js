'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DisplayElement = require('./displayElement');

var ReactClass = function () {
  function ReactClass(render, displayName, getChildContext, componentDidMount, componentWillUnmount) {
    _classCallCheck(this, ReactClass);

    this.render = render;
    this.displayName = displayName;
    this.getChildContext = getChildContext;
    this.componentDidMount = componentDidMount;
    this.componentWillUnmount = componentWillUnmount;
  }

  _createClass(ReactClass, null, [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var render = properties['render'] || defaultRender,
          displayName = properties['displayName'] || defaultDisplayName,
          getChildContext = properties['getChildContext'] || defaultGetChildContext,
          componentDidMount = properties['componentDidMount'] || defaultComponentDidMount,
          componentWillUnmount = properties['componentWillUnmount'] || defaultComponentWillUnmount,
          reactClass = new ReactClass(render, displayName, getChildContext, componentDidMount, componentWillUnmount);

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
function defaultGetChildContext() {
  return undefined;
}
function defaultComponentDidMount(context) {}
function defaultComponentWillUnmount(context) {}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdENsYXNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJLGlCQUFpQixRQUFRLGtCQUFSLENBQWpCOztJQUVFO0FBQ0osV0FESSxVQUNKLENBQVksTUFBWixFQUFvQixXQUFwQixFQUFpQyxlQUFqQyxFQUFrRCxpQkFBbEQsRUFBcUUsb0JBQXJFLEVBQTJGOzBCQUR2RixZQUN1Rjs7QUFDekYsU0FBSyxNQUFMLEdBQWMsTUFBZCxDQUR5RjtBQUV6RixTQUFLLFdBQUwsR0FBbUIsV0FBbkIsQ0FGeUY7QUFHekYsU0FBSyxlQUFMLEdBQXVCLGVBQXZCLENBSHlGO0FBSXpGLFNBQUssaUJBQUwsR0FBeUIsaUJBQXpCLENBSnlGO0FBS3pGLFNBQUssb0JBQUwsR0FBNEIsb0JBQTVCLENBTHlGO0dBQTNGOztlQURJOzttQ0FTa0IsWUFBWTtBQUNoQyxVQUFJLFNBQVMsV0FBVyxRQUFYLEtBQXdCLGFBQXhCO1VBQ1QsY0FBYyxXQUFXLGFBQVgsS0FBNkIsa0JBQTdCO1VBQ2Qsa0JBQWtCLFdBQVcsaUJBQVgsS0FBaUMsc0JBQWpDO1VBQ2xCLG9CQUFvQixXQUFXLG1CQUFYLEtBQW1DLHdCQUFuQztVQUNwQix1QkFBdUIsV0FBVyxzQkFBWCxLQUFzQywyQkFBdEM7VUFDdkIsYUFBYSxJQUFJLFVBQUosQ0FBZSxNQUFmLEVBQXVCLFdBQXZCLEVBQW9DLGVBQXBDLEVBQXFELGlCQUFyRCxFQUF3RSxvQkFBeEUsQ0FBYixDQU40Qjs7QUFRaEMsYUFBTyxVQUFQLENBUmdDOzs7O1NBVDlCOzs7QUFxQk4sT0FBTyxPQUFQLEdBQWlCLFVBQWpCOztBQUVBLFNBQVMsYUFBVCxHQUF5QjtBQUN2QixNQUFJLGFBQWEsS0FBSyxLQUFMOztBQUNiLGdCQUFjLEtBQUssV0FBTDs7QUFDZCxhQUFXLEtBQUssS0FBTCxDQUFXLFFBQVg7O0FBSFEsU0FLaEIsSUFBSSxjQUFKLENBQW1CLFdBQW5CLEVBQWdDLFVBQWhDLEVBQTRDLFFBQTVDLENBQVAsQ0FMdUI7Q0FBekI7O0FBUUEsSUFBTSxxQkFBcUIsU0FBckI7QUFDTixTQUFTLHNCQUFULEdBQWtDO0FBQUUsU0FBTyxTQUFQLENBQUY7Q0FBbEM7QUFDQSxTQUFTLHdCQUFULENBQWtDLE9BQWxDLEVBQTJDLEVBQTNDO0FBQ0EsU0FBUywyQkFBVCxDQUFxQyxPQUFyQyxFQUE4QyxFQUE5QyIsImZpbGUiOiJyZWFjdENsYXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRGlzcGxheUVsZW1lbnQgPSByZXF1aXJlKCcuL2Rpc3BsYXlFbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0Q2xhc3Mge1xuICBjb25zdHJ1Y3RvcihyZW5kZXIsIGRpc3BsYXlOYW1lLCBnZXRDaGlsZENvbnRleHQsIGNvbXBvbmVudERpZE1vdW50LCBjb21wb25lbnRXaWxsVW5tb3VudCkge1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyO1xuICAgIHRoaXMuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcbiAgICB0aGlzLmdldENoaWxkQ29udGV4dCA9IGdldENoaWxkQ29udGV4dDtcbiAgICB0aGlzLmNvbXBvbmVudERpZE1vdW50ID0gY29tcG9uZW50RGlkTW91bnQ7XG4gICAgdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCA9IGNvbXBvbmVudFdpbGxVbm1vdW50O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIHZhciByZW5kZXIgPSBwcm9wZXJ0aWVzWydyZW5kZXInXSB8fCBkZWZhdWx0UmVuZGVyLFxuICAgICAgICBkaXNwbGF5TmFtZSA9IHByb3BlcnRpZXNbJ2Rpc3BsYXlOYW1lJ10gfHwgZGVmYXVsdERpc3BsYXlOYW1lLFxuICAgICAgICBnZXRDaGlsZENvbnRleHQgPSBwcm9wZXJ0aWVzWydnZXRDaGlsZENvbnRleHQnXSB8fCBkZWZhdWx0R2V0Q2hpbGRDb250ZXh0LFxuICAgICAgICBjb21wb25lbnREaWRNb3VudCA9IHByb3BlcnRpZXNbJ2NvbXBvbmVudERpZE1vdW50J10gfHwgZGVmYXVsdENvbXBvbmVudERpZE1vdW50LFxuICAgICAgICBjb21wb25lbnRXaWxsVW5tb3VudCA9IHByb3BlcnRpZXNbJ2NvbXBvbmVudFdpbGxVbm1vdW50J10gfHwgZGVmYXVsdENvbXBvbmVudFdpbGxVbm1vdW50LFxuICAgICAgICByZWFjdENsYXNzID0gbmV3IFJlYWN0Q2xhc3MocmVuZGVyLCBkaXNwbGF5TmFtZSwgZ2V0Q2hpbGRDb250ZXh0LCBjb21wb25lbnREaWRNb3VudCwgY29tcG9uZW50V2lsbFVubW91bnQpO1xuICAgIFxuICAgIHJldHVybiByZWFjdENsYXNzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RDbGFzcztcblxuZnVuY3Rpb24gZGVmYXVsdFJlbmRlcigpIHtcbiAgdmFyIHByb3BlcnRpZXMgPSB0aGlzLnByb3BzLCAgLy8vXG4gICAgICBkaXNwbGF5TmFtZSA9IHRoaXMuZGlzcGxheU5hbWUsIC8vL1xuICAgICAgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuOyAvLy9cblxuICByZXR1cm4gbmV3IERpc3BsYXlFbGVtZW50KGRpc3BsYXlOYW1lLCBwcm9wZXJ0aWVzLCBjaGlsZHJlbik7XG59XG5cbmNvbnN0IGRlZmF1bHREaXNwbGF5TmFtZSA9IHVuZGVmaW5lZDsgLy8vXG5mdW5jdGlvbiBkZWZhdWx0R2V0Q2hpbGRDb250ZXh0KCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9XG5mdW5jdGlvbiBkZWZhdWx0Q29tcG9uZW50RGlkTW91bnQoY29udGV4dCkge31cbmZ1bmN0aW9uIGRlZmF1bHRDb21wb25lbnRXaWxsVW5tb3VudChjb250ZXh0KSB7fVxuIl19