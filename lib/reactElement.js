'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactElement = function () {
  function ReactElement(props) {
    _classCallCheck(this, ReactElement);

    this.props = props;

    this.parent = undefined;
    this.sibling = undefined;
    this.context = undefined;

    this.children = props.children; ///
  }

  _createClass(ReactElement, [{
    key: 'getDOMElement',
    value: function getDOMElement() {
      return null;
    }
  }, {
    key: 'getParent',
    value: function getParent() {
      return this.parent;
    }
  }, {
    key: 'getSibling',
    value: function getSibling() {
      return this.sibling;
    }
  }, {
    key: 'getChildren',
    value: function getChildren() {
      return this.children;
    }
  }, {
    key: 'mount',
    value: function mount(parent, sibling, context) {
      this.parent = parent;
      this.sibling = sibling;
      this.context = context;

      var childParent = this,
          childSibling = null,
          childContext = this.getChildContext() || context,
          childOrChildren = this.render();

      this.children = childOrChildren instanceof Array ? childOrChildren : [childOrChildren];

      this.children.forEach(function (child) {
        childSibling = child.mount(childParent, childSibling, childContext);
      });

      this.componentDidMount(context);

      return this;
    }
  }, {
    key: 'unmount',
    value: function unmount(context) {
      this.context = context;

      this.componentWillUnmount();

      var childContext = this.getChildContext() || context;

      this.children.forEach(function (child) {
        child.unmount(childContext);
      });
    }
  }, {
    key: 'remount',
    value: function remount() {
      var context = this.context,
          childParent = this,
          childSibling = null,
          childContext = this.getChildContext() || context,
          childOrChildren = this.render(context);

      this.children = childOrChildren instanceof Array ? childOrChildren : [childOrChildren];

      this.children.forEach(function (child) {
        childSibling = child.mount(childParent, childSibling, childContext);
      });
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.children.forEach(function (child) {
        child.remove();
      });
    }
  }, {
    key: 'forceUpdate',
    value: function forceUpdate() {
      this.remove();

      this.remount();
    }
  }]);

  return ReactElement;
}();

module.exports = ReactElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNO0FBQ0osV0FESSxZQUNKLENBQVksS0FBWixFQUFtQjswQkFEZixjQUNlOztBQUNqQixTQUFLLEtBQUwsR0FBYSxLQUFiLENBRGlCOztBQUdqQixTQUFLLE1BQUwsR0FBYyxTQUFkLENBSGlCO0FBSWpCLFNBQUssT0FBTCxHQUFlLFNBQWYsQ0FKaUI7QUFLakIsU0FBSyxPQUFMLEdBQWUsU0FBZixDQUxpQjs7QUFPakIsU0FBSyxRQUFMLEdBQWdCLE1BQU0sUUFBTjtBQVBDLEdBQW5COztlQURJOztvQ0FXWTtBQUNkLGFBQU8sSUFBUCxDQURjOzs7O2dDQUlKO0FBQ1YsYUFBTyxLQUFLLE1BQUwsQ0FERzs7OztpQ0FJQztBQUNYLGFBQU8sS0FBSyxPQUFMLENBREk7Ozs7a0NBSUM7QUFDWixhQUFPLEtBQUssUUFBTCxDQURLOzs7OzBCQUlSLFFBQVEsU0FBUyxTQUFTO0FBQzlCLFdBQUssTUFBTCxHQUFjLE1BQWQsQ0FEOEI7QUFFOUIsV0FBSyxPQUFMLEdBQWUsT0FBZixDQUY4QjtBQUc5QixXQUFLLE9BQUwsR0FBZSxPQUFmLENBSDhCOztBQUs5QixVQUFJLGNBQWMsSUFBZDtVQUNBLGVBQWUsSUFBZjtVQUNBLGVBQWUsS0FBSyxlQUFMLE1BQTBCLE9BQTFCO1VBQ2Ysa0JBQWtCLEtBQUssTUFBTCxFQUFsQixDQVIwQjs7QUFVOUIsV0FBSyxRQUFMLEdBQWdCLGVBQUMsWUFBMkIsS0FBM0IsR0FDQyxlQURGLEdBRUksQ0FBQyxlQUFELENBRkosQ0FWYzs7QUFjOUIsV0FBSyxRQUFMLENBQWMsT0FBZCxDQUFzQixVQUFTLEtBQVQsRUFBZ0I7QUFDcEMsdUJBQWUsTUFBTSxLQUFOLENBQVksV0FBWixFQUF5QixZQUF6QixFQUF1QyxZQUF2QyxDQUFmLENBRG9DO09BQWhCLENBQXRCLENBZDhCOztBQWtCOUIsV0FBSyxpQkFBTCxDQUF1QixPQUF2QixFQWxCOEI7O0FBb0I5QixhQUFPLElBQVAsQ0FwQjhCOzs7OzRCQXVCeEIsU0FBUztBQUNmLFdBQUssT0FBTCxHQUFlLE9BQWYsQ0FEZTs7QUFHZixXQUFLLG9CQUFMLEdBSGU7O0FBS2YsVUFBSSxlQUFlLEtBQUssZUFBTCxNQUEwQixPQUExQixDQUxKOztBQU9mLFdBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsVUFBUyxLQUFULEVBQWdCO0FBQ3BDLGNBQU0sT0FBTixDQUFjLFlBQWQsRUFEb0M7T0FBaEIsQ0FBdEIsQ0FQZTs7Ozs4QkFZUDtBQUNSLFVBQUksVUFBVSxLQUFLLE9BQUw7VUFDVixjQUFjLElBQWQ7VUFDQSxlQUFlLElBQWY7VUFDQSxlQUFlLEtBQUssZUFBTCxNQUEwQixPQUExQjtVQUNmLGtCQUFrQixLQUFLLE1BQUwsQ0FBWSxPQUFaLENBQWxCLENBTEk7O0FBT1IsV0FBSyxRQUFMLEdBQWdCLGVBQUMsWUFBMkIsS0FBM0IsR0FDQyxlQURGLEdBRUksQ0FBQyxlQUFELENBRkosQ0FQUjs7QUFXUixXQUFLLFFBQUwsQ0FBYyxPQUFkLENBQXNCLFVBQVMsS0FBVCxFQUFnQjtBQUNwQyx1QkFBZSxNQUFNLEtBQU4sQ0FBWSxXQUFaLEVBQXlCLFlBQXpCLEVBQXVDLFlBQXZDLENBQWYsQ0FEb0M7T0FBaEIsQ0FBdEIsQ0FYUTs7Ozs2QkFnQkQ7QUFDUCxXQUFLLFFBQUwsQ0FBYyxPQUFkLENBQXNCLFVBQVMsS0FBVCxFQUFnQjtBQUNwQyxjQUFNLE1BQU4sR0FEb0M7T0FBaEIsQ0FBdEIsQ0FETzs7OztrQ0FNSztBQUNaLFdBQUssTUFBTCxHQURZOztBQUdaLFdBQUssT0FBTCxHQUhZOzs7O1NBcEZWOzs7QUEyRk4sT0FBTyxPQUFQLEdBQWlCLFlBQWpCIiwiZmlsZSI6InJlYWN0RWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XG5cbiAgICB0aGlzLnBhcmVudCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNpYmxpbmcgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jb250ZXh0ID0gdW5kZWZpbmVkO1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuOyAvLy9cbiAgfVxuICBcbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBcbiAgZ2V0UGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudDtcbiAgfVxuICBcbiAgZ2V0U2libGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zaWJsaW5nO1xuICB9XG4gIFxuICBnZXRDaGlsZHJlbigpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbjtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgc2libGluZywgY29udGV4dCkge1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMuc2libGluZyA9IHNpYmxpbmc7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIHZhciBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgIGNoaWxkU2libGluZyA9IG51bGwsXG4gICAgICAgIGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KCkgfHwgY29udGV4dCxcbiAgICAgICAgY2hpbGRPckNoaWxkcmVuID0gdGhpcy5yZW5kZXIoKTtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSAoY2hpbGRPckNoaWxkcmVuIGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgICAgICAgICAgICBjaGlsZE9yQ2hpbGRyZW4gOlxuICAgICAgICAgICAgICAgICAgICAgICAgW2NoaWxkT3JDaGlsZHJlbl07XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkU2libGluZyA9IGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFNpYmxpbmcsIGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbXBvbmVudERpZE1vdW50KGNvbnRleHQpO1xuICAgIFxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQoKTtcblxuICAgIHZhciBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dCgpIHx8IGNvbnRleHQ7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW91bnQoKSB7XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgY2hpbGRTaWJsaW5nID0gbnVsbCxcbiAgICAgICAgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoKSB8fCBjb250ZXh0LFxuICAgICAgICBjaGlsZE9yQ2hpbGRyZW4gPSB0aGlzLnJlbmRlcihjb250ZXh0KTtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSAoY2hpbGRPckNoaWxkcmVuIGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgICAgICAgICAgICBjaGlsZE9yQ2hpbGRyZW4gOlxuICAgICAgICAgICAgICAgICAgICAgICAgW2NoaWxkT3JDaGlsZHJlbl07XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkU2libGluZyA9IGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFNpYmxpbmcsIGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmUoKSB7XG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC5yZW1vdmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZvcmNlVXBkYXRlKCkge1xuICAgIHRoaXMucmVtb3ZlKCk7XG5cbiAgICB0aGlzLnJlbW91bnQoKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0RWxlbWVudDtcbiJdfQ==