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
    key: 'fromObject',
    value: function fromObject(object) {
      var render = object['render'] || defaultRender,
          displayName = object['displayName'] || defaultDisplayName,
          getChildContext = object['getChildContext'] || defaultGetChildContext,
          componentDidMount = object['componentDidMount'] || defaultComponentDidMount,
          componentWillUnmount = object['componentWillUnmount'] || defaultComponentWillUnmount,
          reactClass = new ReactClass(render, displayName, getChildContext, componentDidMount, componentWillUnmount);

      return reactClass;
    }
  }]);

  return ReactClass;
}();

module.exports = ReactClass;

function defaultRender() {
  return new DisplayElement(this.displayName, this.props, this.children);
}

var defaultDisplayName = undefined; ///
function defaultGetChildContext() {
  return undefined;
}
function defaultComponentDidMount(context) {}
function defaultComponentWillUnmount(context) {}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdENsYXNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJLGlCQUFpQixRQUFRLGtCQUFSLENBQWpCOztJQUVFO0FBQ0osV0FESSxVQUNKLENBQVksTUFBWixFQUFvQixXQUFwQixFQUFpQyxlQUFqQyxFQUFrRCxpQkFBbEQsRUFBcUUsb0JBQXJFLEVBQTJGOzBCQUR2RixZQUN1Rjs7QUFDekYsU0FBSyxNQUFMLEdBQWMsTUFBZCxDQUR5RjtBQUV6RixTQUFLLFdBQUwsR0FBbUIsV0FBbkIsQ0FGeUY7QUFHekYsU0FBSyxlQUFMLEdBQXVCLGVBQXZCLENBSHlGO0FBSXpGLFNBQUssaUJBQUwsR0FBeUIsaUJBQXpCLENBSnlGO0FBS3pGLFNBQUssb0JBQUwsR0FBNEIsb0JBQTVCLENBTHlGO0dBQTNGOztlQURJOzsrQkFTYyxRQUFRO0FBQ3hCLFVBQUksU0FBUyxPQUFPLFFBQVAsS0FBb0IsYUFBcEI7VUFDVCxjQUFjLE9BQU8sYUFBUCxLQUF5QixrQkFBekI7VUFDZCxrQkFBa0IsT0FBTyxpQkFBUCxLQUE2QixzQkFBN0I7VUFDbEIsb0JBQW9CLE9BQU8sbUJBQVAsS0FBK0Isd0JBQS9CO1VBQ3BCLHVCQUF1QixPQUFPLHNCQUFQLEtBQWtDLDJCQUFsQztVQUN2QixhQUFhLElBQUksVUFBSixDQUFlLE1BQWYsRUFBdUIsV0FBdkIsRUFBb0MsZUFBcEMsRUFBcUQsaUJBQXJELEVBQXdFLG9CQUF4RSxDQUFiLENBTm9COztBQVF4QixhQUFPLFVBQVAsQ0FSd0I7Ozs7U0FUdEI7OztBQXFCTixPQUFPLE9BQVAsR0FBaUIsVUFBakI7O0FBRUEsU0FBUyxhQUFULEdBQXlCO0FBQ3ZCLFNBQU8sSUFBSSxjQUFKLENBQW1CLEtBQUssV0FBTCxFQUFrQixLQUFLLEtBQUwsRUFBWSxLQUFLLFFBQUwsQ0FBeEQsQ0FEdUI7Q0FBekI7O0FBSUEsSUFBTSxxQkFBcUIsU0FBckI7QUFDTixTQUFTLHNCQUFULEdBQWtDO0FBQUUsU0FBTyxTQUFQLENBQUY7Q0FBbEM7QUFDQSxTQUFTLHdCQUFULENBQWtDLE9BQWxDLEVBQTJDLEVBQTNDO0FBQ0EsU0FBUywyQkFBVCxDQUFxQyxPQUFyQyxFQUE4QyxFQUE5QyIsImZpbGUiOiJyZWFjdENsYXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRGlzcGxheUVsZW1lbnQgPSByZXF1aXJlKCcuL2Rpc3BsYXlFbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0Q2xhc3Mge1xuICBjb25zdHJ1Y3RvcihyZW5kZXIsIGRpc3BsYXlOYW1lLCBnZXRDaGlsZENvbnRleHQsIGNvbXBvbmVudERpZE1vdW50LCBjb21wb25lbnRXaWxsVW5tb3VudCkge1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyO1xuICAgIHRoaXMuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcbiAgICB0aGlzLmdldENoaWxkQ29udGV4dCA9IGdldENoaWxkQ29udGV4dDtcbiAgICB0aGlzLmNvbXBvbmVudERpZE1vdW50ID0gY29tcG9uZW50RGlkTW91bnQ7XG4gICAgdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCA9IGNvbXBvbmVudFdpbGxVbm1vdW50O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbU9iamVjdChvYmplY3QpIHtcbiAgICB2YXIgcmVuZGVyID0gb2JqZWN0WydyZW5kZXInXSB8fCBkZWZhdWx0UmVuZGVyLFxuICAgICAgICBkaXNwbGF5TmFtZSA9IG9iamVjdFsnZGlzcGxheU5hbWUnXSB8fCBkZWZhdWx0RGlzcGxheU5hbWUsXG4gICAgICAgIGdldENoaWxkQ29udGV4dCA9IG9iamVjdFsnZ2V0Q2hpbGRDb250ZXh0J10gfHwgZGVmYXVsdEdldENoaWxkQ29udGV4dCxcbiAgICAgICAgY29tcG9uZW50RGlkTW91bnQgPSBvYmplY3RbJ2NvbXBvbmVudERpZE1vdW50J10gfHwgZGVmYXVsdENvbXBvbmVudERpZE1vdW50LFxuICAgICAgICBjb21wb25lbnRXaWxsVW5tb3VudCA9IG9iamVjdFsnY29tcG9uZW50V2lsbFVubW91bnQnXSB8fCBkZWZhdWx0Q29tcG9uZW50V2lsbFVubW91bnQsXG4gICAgICAgIHJlYWN0Q2xhc3MgPSBuZXcgUmVhY3RDbGFzcyhyZW5kZXIsIGRpc3BsYXlOYW1lLCBnZXRDaGlsZENvbnRleHQsIGNvbXBvbmVudERpZE1vdW50LCBjb21wb25lbnRXaWxsVW5tb3VudCk7XG4gICAgXG4gICAgcmV0dXJuIHJlYWN0Q2xhc3M7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdENsYXNzO1xuXG5mdW5jdGlvbiBkZWZhdWx0UmVuZGVyKCkge1xuICByZXR1cm4gbmV3IERpc3BsYXlFbGVtZW50KHRoaXMuZGlzcGxheU5hbWUsIHRoaXMucHJvcHMsIHRoaXMuY2hpbGRyZW4pO1xufVxuXG5jb25zdCBkZWZhdWx0RGlzcGxheU5hbWUgPSB1bmRlZmluZWQ7IC8vL1xuZnVuY3Rpb24gZGVmYXVsdEdldENoaWxkQ29udGV4dCgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfVxuZnVuY3Rpb24gZGVmYXVsdENvbXBvbmVudERpZE1vdW50KGNvbnRleHQpIHt9XG5mdW5jdGlvbiBkZWZhdWx0Q29tcG9uZW50V2lsbFVubW91bnQoY29udGV4dCkge31cbiJdfQ==