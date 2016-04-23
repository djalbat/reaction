'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactElement = function () {
  function ReactElement(properties, children) {
    _classCallCheck(this, ReactElement);

    var props = properties || {},
        forceUpdate = this.forceUpdate.bind(this);

    this.children = children;

    props.children = children;

    this.instance = {
      props: props,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNO0FBQ0osV0FESSxZQUNKLENBQVksVUFBWixFQUF3QixRQUF4QixFQUFrQzswQkFEOUIsY0FDOEI7O0FBQ2hDLFFBQU0sUUFBUSxjQUFjLEVBQWQ7UUFDUixjQUFjLEtBQUssV0FBTCxDQUFpQixJQUFqQixDQUFzQixJQUF0QixDQUFkLENBRjBCOztBQUloQyxTQUFLLFFBQUwsR0FBZ0IsUUFBaEIsQ0FKZ0M7O0FBTWhDLFVBQU0sUUFBTixHQUFpQixRQUFqQixDQU5nQzs7QUFRaEMsU0FBSyxRQUFMLEdBQWdCO0FBQ2QsYUFBTyxLQUFQO0FBQ0EsbUJBQWEsV0FBYjtLQUZGLENBUmdDO0dBQWxDOztlQURJOzswQkFlRSxRQUFRLFNBQVM7QUFDckIsVUFBTSxrQkFBa0IsS0FBSyxNQUFMLENBQVksT0FBWixDQUFsQixDQURlOztBQUdyQixVQUFJLGVBQWUsS0FBSyxlQUFMLEVBQWYsQ0FIaUI7O0FBS3JCLHFCQUFlLGdCQUFnQixPQUFoQixDQUxNOztBQU9yQixXQUFLLFFBQUwsR0FBZ0IsZUFBQyxZQUEyQixLQUEzQixHQUNDLGVBREYsR0FFSSxDQUFDLGVBQUQsQ0FGSixDQVBLOztBQVdyQixXQUFLLFFBQUwsQ0FBYyxPQUFkLENBQXNCLFVBQVMsS0FBVCxFQUFnQjtBQUNwQyxjQUFNLEtBQU4sQ0FBWSxNQUFaLEVBQW9CLFlBQXBCLEVBRG9DO09BQWhCLENBQXRCLENBWHFCOztBQWVyQixXQUFLLGlCQUFMLENBQXVCLE9BQXZCLEVBZnFCOzs7OzRCQWtCZixpQkFBaUIsU0FBUztBQUNoQyxVQUFNLGtCQUFrQixLQUFLLE1BQUwsQ0FBWSxPQUFaLENBQWxCLENBRDBCOztBQUdoQyxVQUFJLGVBQWUsS0FBSyxlQUFMLEVBQWYsQ0FINEI7O0FBS2hDLHFCQUFlLGdCQUFnQixPQUFoQixDQUxpQjs7QUFPaEMsV0FBSyxRQUFMLEdBQWdCLGVBQUMsWUFBMkIsS0FBM0IsR0FDQyxlQURGLEdBRUksQ0FBQyxlQUFELENBRkosQ0FQZ0I7O0FBV2hDLFdBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsVUFBUyxLQUFULEVBQWdCO0FBQ3BDLDBCQUFrQixNQUFNLE9BQU4sQ0FBYyxlQUFkLEVBQStCLFlBQS9CLENBQWxCLENBRG9DO09BQWhCLENBQXRCLENBWGdDOztBQWVoQyxhQUFPLElBQVAsQ0FmZ0M7Ozs7NEJBa0IxQixTQUFTO0FBQ2YsV0FBSyxvQkFBTCxDQUEwQixPQUExQixFQURlOztBQUdmLFVBQUksZUFBZSxLQUFLLGVBQUwsRUFBZixDQUhXOztBQUtmLHFCQUFlLGdCQUFnQixPQUFoQixDQUxBOztBQU9mLFdBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsVUFBUyxLQUFULEVBQWdCO0FBQ3BDLGNBQU0sT0FBTixDQUFjLE9BQWQsRUFBdUIsWUFBdkIsRUFEb0M7T0FBaEIsQ0FBdEIsQ0FQZTs7Ozs2QkFZUjtBQUNQLFdBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsVUFBUyxLQUFULEVBQWdCO0FBQ3BDLGNBQU0sTUFBTixHQURvQztPQUFoQixDQUF0QixDQURPOzs7OzJCQU1GLFFBQVE7QUFDYixXQUFLLFFBQUwsQ0FBYyxPQUFkLENBQXNCLFVBQVMsS0FBVCxFQUFnQjtBQUNwQyxjQUFNLE1BQU4sQ0FBYSxNQUFiLEVBRG9DO09BQWhCLENBQXRCLENBRGE7Ozs7Z0NBTUgsaUJBQWlCO0FBQzNCLFdBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsVUFBUyxLQUFULEVBQWdCO0FBQ3BDLGNBQU0sV0FBTixDQUFrQixlQUFsQixFQURvQztPQUFoQixDQUF0QixDQUQyQjs7OztrQ0FNZjtBQUNaLFVBQUksbUJBQW1CLEtBQUssUUFBTDtVQUNuQixvQkFBb0IsS0FBSyxnQkFBTCxDQUFwQjtVQUNBLGtCQUFrQixpQkFBbEI7O0FBQ0EsZ0JBQVUsS0FBSyxRQUFMLENBQWMsT0FBZCxDQUpGOztBQU1aLFdBQUssT0FBTCxDQUFhLGVBQWIsRUFBOEIsT0FBOUIsRUFOWTs7QUFRWix1QkFBaUIsT0FBakIsQ0FBeUIsVUFBUyxhQUFULEVBQXdCO0FBQy9DLHNCQUFjLE1BQWQsR0FEK0M7T0FBeEIsQ0FBekIsQ0FSWTs7OztTQWpGVjs7O0FBK0ZOLE9BQU8sT0FBUCxHQUFpQixZQUFqQjs7QUFFQSxTQUFTLElBQVQsQ0FBYyxLQUFkLEVBQXFCO0FBQUUsU0FBTyxNQUFNLE1BQU0sTUFBTixHQUFlLENBQWYsQ0FBYixDQUFGO0NBQXJCIiwiZmlsZSI6InJlYWN0RWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcGVydGllcywgY2hpbGRyZW4pIHtcbiAgICBjb25zdCBwcm9wcyA9IHByb3BlcnRpZXMgfHwge30sXG4gICAgICAgICAgZm9yY2VVcGRhdGUgPSB0aGlzLmZvcmNlVXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuXG4gICAgdGhpcy5pbnN0YW5jZSA9IHtcbiAgICAgIHByb3BzOiBwcm9wcyxcbiAgICAgIGZvcmNlVXBkYXRlOiBmb3JjZVVwZGF0ZVxuICAgIH07XG4gIH1cbiAgXG4gIG1vdW50KHBhcmVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkT3JDaGlsZHJlbiA9IHRoaXMucmVuZGVyKGNvbnRleHQpO1xuXG4gICAgdmFyIGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KCk7XG5cbiAgICBjaGlsZENvbnRleHQgPSBjaGlsZENvbnRleHQgfHwgY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSAoY2hpbGRPckNoaWxkcmVuIGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgICAgICAgICAgICBjaGlsZE9yQ2hpbGRyZW4gOlxuICAgICAgICAgICAgICAgICAgICAgICAgW2NoaWxkT3JDaGlsZHJlbl07XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLm1vdW50KHBhcmVudCwgY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuY29tcG9uZW50RGlkTW91bnQoY29udGV4dCk7XG4gIH1cblxuICByZW1vdW50KHByZXZpb3VzU2libGluZywgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkT3JDaGlsZHJlbiA9IHRoaXMucmVuZGVyKGNvbnRleHQpO1xuXG4gICAgdmFyIGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KCk7XG5cbiAgICBjaGlsZENvbnRleHQgPSBjaGlsZENvbnRleHQgfHwgY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSAoY2hpbGRPckNoaWxkcmVuIGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgICAgICAgICAgICBjaGlsZE9yQ2hpbGRyZW4gOlxuICAgICAgICAgICAgICAgICAgICAgICAgW2NoaWxkT3JDaGlsZHJlbl07XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIHByZXZpb3VzU2libGluZyA9IGNoaWxkLnJlbW91bnQocHJldmlvdXNTaWJsaW5nLCBjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudChjb250ZXh0KTtcblxuICAgIHZhciBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dCgpO1xuXG4gICAgY2hpbGRDb250ZXh0ID0gY2hpbGRDb250ZXh0IHx8IGNvbnRleHQ7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLnVubW91bnQoY29udGV4dCwgY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLnJlbW92ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgYXBwZW5kKHBhcmVudCkge1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQuYXBwZW5kKHBhcmVudCk7XG4gICAgfSk7XG4gIH1cblxuICBhcHBlbmRBZnRlcihwcmV2aW91c1NpYmxpbmcpIHtcbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLmFwcGVuZEFmdGVyKHByZXZpb3VzU2libGluZyk7XG4gICAgfSk7XG4gIH1cblxuICBmb3JjZVVwZGF0ZSgpIHtcbiAgICB2YXIgcHJldmlvdXNDaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4sXG4gICAgICAgIGxhc3RQcmV2aW91c0NoaWxkID0gbGFzdChwcmV2aW91c0NoaWxkcmVuKSxcbiAgICAgICAgcHJldmlvdXNTaWJsaW5nID0gbGFzdFByZXZpb3VzQ2hpbGQsICAvLy9cbiAgICAgICAgY29udGV4dCA9IHRoaXMuaW5zdGFuY2UuY29udGV4dDtcblxuICAgIHRoaXMucmVtb3VudChwcmV2aW91c1NpYmxpbmcsIGNvbnRleHQpO1xuXG4gICAgcHJldmlvdXNDaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKHByZXZpb3VzQ2hpbGQpIHtcbiAgICAgIHByZXZpb3VzQ2hpbGQucmVtb3ZlKCk7XG4gICAgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdEVsZW1lbnQ7XG5cbmZ1bmN0aW9uIGxhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG4iXX0=