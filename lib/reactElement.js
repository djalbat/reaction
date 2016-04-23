'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactElement = function () {
  function ReactElement(props, children) {
    _classCallCheck(this, ReactElement);

    var forceUpdate = this.forceUpdate.bind(this);

    this.children = children;

    this.instance = {
      props: props,
      children: children,
      forceUpdate: forceUpdate
    };
  }

  _createClass(ReactElement, [{
    key: 'mount',
    value: function mount(parent, context) {
      var childOrChildren = this.render(context);

      var childContext = this.getChildContext();

      childContext = childContext || context;

      this.children = childOrChildren instanceof Array ? childOrChildren : [childOrChildren];

      this.children.forEach(function (child) {
        child.mount(parent, childContext);
      });

      this.componentDidMount(context);
    }
  }, {
    key: 'remount',
    value: function remount(previousSibling, context) {
      var childOrChildren = this.render(context);

      var childContext = this.getChildContext();

      childContext = childContext || context;

      this.children = childOrChildren instanceof Array ? childOrChildren : [childOrChildren];

      this.children.forEach(function (child) {
        previousSibling = child.remount(previousSibling, childContext);
      });

      return this;
    }
  }, {
    key: 'unmount',
    value: function unmount(context) {
      this.componentWillUnmount(context);

      var childContext = this.getChildContext();

      childContext = childContext || context;

      this.children.forEach(function (child) {
        child.unmount(context, childContext);
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
    key: 'append',
    value: function append(parent) {
      this.children.forEach(function (child) {
        child.append(parent);
      });
    }
  }, {
    key: 'appendAfter',
    value: function appendAfter(previousSibling) {
      this.children.forEach(function (child) {
        child.appendAfter(previousSibling);
      });
    }
  }, {
    key: 'forceUpdate',
    value: function forceUpdate() {
      var previousChildren = this.children,
          lastPreviousChild = last(previousChildren),
          previousSibling = lastPreviousChild,
          ///
      context = this.instance.context;

      this.remount(previousSibling, context);

      previousChildren.forEach(function (previousChild) {
        previousChild.remove();
      });
    }
  }]);

  return ReactElement;
}();

module.exports = ReactElement;

function last(array) {
  return array[array.length - 1];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNO0FBQ0osV0FESSxZQUNKLENBQVksS0FBWixFQUFtQixRQUFuQixFQUE2QjswQkFEekIsY0FDeUI7O0FBQzNCLFFBQU0sY0FBYyxLQUFLLFdBQUwsQ0FBaUIsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBZCxDQURxQjs7QUFHM0IsU0FBSyxRQUFMLEdBQWdCLFFBQWhCLENBSDJCOztBQUszQixTQUFLLFFBQUwsR0FBZ0I7QUFDZCxhQUFPLEtBQVA7QUFDQSxnQkFBVSxRQUFWO0FBQ0EsbUJBQWEsV0FBYjtLQUhGLENBTDJCO0dBQTdCOztlQURJOzswQkFhRSxRQUFRLFNBQVM7QUFDckIsVUFBTSxrQkFBa0IsS0FBSyxNQUFMLENBQVksT0FBWixDQUFsQixDQURlOztBQUdyQixVQUFJLGVBQWUsS0FBSyxlQUFMLEVBQWYsQ0FIaUI7O0FBS3JCLHFCQUFlLGdCQUFnQixPQUFoQixDQUxNOztBQU9yQixXQUFLLFFBQUwsR0FBZ0IsZUFBQyxZQUEyQixLQUEzQixHQUNDLGVBREYsR0FFSSxDQUFDLGVBQUQsQ0FGSixDQVBLOztBQVdyQixXQUFLLFFBQUwsQ0FBYyxPQUFkLENBQXNCLFVBQVMsS0FBVCxFQUFnQjtBQUNwQyxjQUFNLEtBQU4sQ0FBWSxNQUFaLEVBQW9CLFlBQXBCLEVBRG9DO09BQWhCLENBQXRCLENBWHFCOztBQWVyQixXQUFLLGlCQUFMLENBQXVCLE9BQXZCLEVBZnFCOzs7OzRCQWtCZixpQkFBaUIsU0FBUztBQUNoQyxVQUFNLGtCQUFrQixLQUFLLE1BQUwsQ0FBWSxPQUFaLENBQWxCLENBRDBCOztBQUdoQyxVQUFJLGVBQWUsS0FBSyxlQUFMLEVBQWYsQ0FINEI7O0FBS2hDLHFCQUFlLGdCQUFnQixPQUFoQixDQUxpQjs7QUFPaEMsV0FBSyxRQUFMLEdBQWdCLGVBQUMsWUFBMkIsS0FBM0IsR0FDQyxlQURGLEdBRUksQ0FBQyxlQUFELENBRkosQ0FQZ0I7O0FBV2hDLFdBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsVUFBUyxLQUFULEVBQWdCO0FBQ3BDLDBCQUFrQixNQUFNLE9BQU4sQ0FBYyxlQUFkLEVBQStCLFlBQS9CLENBQWxCLENBRG9DO09BQWhCLENBQXRCLENBWGdDOztBQWVoQyxhQUFPLElBQVAsQ0FmZ0M7Ozs7NEJBa0IxQixTQUFTO0FBQ2YsV0FBSyxvQkFBTCxDQUEwQixPQUExQixFQURlOztBQUdmLFVBQUksZUFBZSxLQUFLLGVBQUwsRUFBZixDQUhXOztBQUtmLHFCQUFlLGdCQUFnQixPQUFoQixDQUxBOztBQU9mLFdBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsVUFBUyxLQUFULEVBQWdCO0FBQ3BDLGNBQU0sT0FBTixDQUFjLE9BQWQsRUFBdUIsWUFBdkIsRUFEb0M7T0FBaEIsQ0FBdEIsQ0FQZTs7Ozs2QkFZUjtBQUNQLFdBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsVUFBUyxLQUFULEVBQWdCO0FBQ3BDLGNBQU0sTUFBTixHQURvQztPQUFoQixDQUF0QixDQURPOzs7OzJCQU1GLFFBQVE7QUFDYixXQUFLLFFBQUwsQ0FBYyxPQUFkLENBQXNCLFVBQVMsS0FBVCxFQUFnQjtBQUNwQyxjQUFNLE1BQU4sQ0FBYSxNQUFiLEVBRG9DO09BQWhCLENBQXRCLENBRGE7Ozs7Z0NBTUgsaUJBQWlCO0FBQzNCLFdBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsVUFBUyxLQUFULEVBQWdCO0FBQ3BDLGNBQU0sV0FBTixDQUFrQixlQUFsQixFQURvQztPQUFoQixDQUF0QixDQUQyQjs7OztrQ0FNZjtBQUNaLFVBQUksbUJBQW1CLEtBQUssUUFBTDtVQUNuQixvQkFBb0IsS0FBSyxnQkFBTCxDQUFwQjtVQUNBLGtCQUFrQixpQkFBbEI7O0FBQ0EsZ0JBQVUsS0FBSyxRQUFMLENBQWMsT0FBZCxDQUpGOztBQU1aLFdBQUssT0FBTCxDQUFhLGVBQWIsRUFBOEIsT0FBOUIsRUFOWTs7QUFRWix1QkFBaUIsT0FBakIsQ0FBeUIsVUFBUyxhQUFULEVBQXdCO0FBQy9DLHNCQUFjLE1BQWQsR0FEK0M7T0FBeEIsQ0FBekIsQ0FSWTs7OztTQS9FVjs7O0FBNkZOLE9BQU8sT0FBUCxHQUFpQixZQUFqQjs7QUFFQSxTQUFTLElBQVQsQ0FBYyxLQUFkLEVBQXFCO0FBQUUsU0FBTyxNQUFNLE1BQU0sTUFBTixHQUFlLENBQWYsQ0FBYixDQUFGO0NBQXJCIiwiZmlsZSI6InJlYWN0RWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMsIGNoaWxkcmVuKSB7XG4gICAgY29uc3QgZm9yY2VVcGRhdGUgPSB0aGlzLmZvcmNlVXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG5cbiAgICB0aGlzLmluc3RhbmNlID0ge1xuICAgICAgcHJvcHM6IHByb3BzLFxuICAgICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgICAgZm9yY2VVcGRhdGU6IGZvcmNlVXBkYXRlXG4gICAgfTtcbiAgfVxuICBcbiAgbW91bnQocGFyZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGRPckNoaWxkcmVuID0gdGhpcy5yZW5kZXIoY29udGV4dCk7XG5cbiAgICB2YXIgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoKTtcblxuICAgIGNoaWxkQ29udGV4dCA9IGNoaWxkQ29udGV4dCB8fCBjb250ZXh0O1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IChjaGlsZE9yQ2hpbGRyZW4gaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgICAgICAgICAgIGNoaWxkT3JDaGlsZHJlbiA6XG4gICAgICAgICAgICAgICAgICAgICAgICBbY2hpbGRPckNoaWxkcmVuXTtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQubW91bnQocGFyZW50LCBjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb21wb25lbnREaWRNb3VudChjb250ZXh0KTtcbiAgfVxuXG4gIHJlbW91bnQocHJldmlvdXNTaWJsaW5nLCBjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGRPckNoaWxkcmVuID0gdGhpcy5yZW5kZXIoY29udGV4dCk7XG5cbiAgICB2YXIgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoKTtcblxuICAgIGNoaWxkQ29udGV4dCA9IGNoaWxkQ29udGV4dCB8fCBjb250ZXh0O1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IChjaGlsZE9yQ2hpbGRyZW4gaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgICAgICAgICAgIGNoaWxkT3JDaGlsZHJlbiA6XG4gICAgICAgICAgICAgICAgICAgICAgICBbY2hpbGRPckNoaWxkcmVuXTtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgcHJldmlvdXNTaWJsaW5nID0gY2hpbGQucmVtb3VudChwcmV2aW91c1NpYmxpbmcsIGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50KGNvbnRleHQpO1xuXG4gICAgdmFyIGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KCk7XG5cbiAgICBjaGlsZENvbnRleHQgPSBjaGlsZENvbnRleHQgfHwgY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQudW5tb3VudChjb250ZXh0LCBjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQucmVtb3ZlKCk7XG4gICAgfSk7XG4gIH1cblxuICBhcHBlbmQocGFyZW50KSB7XG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC5hcHBlbmQocGFyZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIGFwcGVuZEFmdGVyKHByZXZpb3VzU2libGluZykge1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQuYXBwZW5kQWZ0ZXIocHJldmlvdXNTaWJsaW5nKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZvcmNlVXBkYXRlKCkge1xuICAgIHZhciBwcmV2aW91c0NoaWxkcmVuID0gdGhpcy5jaGlsZHJlbixcbiAgICAgICAgbGFzdFByZXZpb3VzQ2hpbGQgPSBsYXN0KHByZXZpb3VzQ2hpbGRyZW4pLFxuICAgICAgICBwcmV2aW91c1NpYmxpbmcgPSBsYXN0UHJldmlvdXNDaGlsZCwgIC8vL1xuICAgICAgICBjb250ZXh0ID0gdGhpcy5pbnN0YW5jZS5jb250ZXh0O1xuXG4gICAgdGhpcy5yZW1vdW50KHByZXZpb3VzU2libGluZywgY29udGV4dCk7XG5cbiAgICBwcmV2aW91c0NoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24ocHJldmlvdXNDaGlsZCkge1xuICAgICAgcHJldmlvdXNDaGlsZC5yZW1vdmUoKTtcbiAgICB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0RWxlbWVudDtcblxuZnVuY3Rpb24gbGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cbiJdfQ==