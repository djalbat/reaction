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
      var childOrChildren = this.render(context),
          childContext = this.getChildContext() || context;

      this.children = childOrChildren instanceof Array ? childOrChildren : [childOrChildren];

      this.children.forEach(function (child) {
        child.mount(parent, childContext);
      });

      this.componentDidMount(context);
    }
  }, {
    key: 'remount',
    value: function remount(previousSibling, context) {
      var childOrChildren = this.render(context),
          childContext = this.getChildContext() || context;

      this.children = childOrChildren instanceof Array ? childOrChildren : [childOrChildren];

      this.children.forEach(function (child) {
        child.remount(previousSibling, childContext);
      });
    }
  }, {
    key: 'unmount',
    value: function unmount(context) {
      this.componentWillUnmount(context);

      var childContext = this.getChildContext() || context;

      this.children.forEach(function (child) {
        child.unmount(context, childContext);
      });
    }
  }, {
    key: 'forceUpdate',
    value: function forceUpdate() {
      var previousChildren = this.children,
          lastPreviousChild = last(previousChildren);

      this.remount(lastPreviousChild);

      previousChildren.forEach(function (previousChild) {
        previousChild.remove();
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
  }]);

  return ReactElement;
}();

module.exports = ReactElement;

function last(array) {
  return array[array.length - 1];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNO0FBQ0osV0FESSxZQUNKLENBQVksVUFBWixFQUF3QixRQUF4QixFQUFrQzswQkFEOUIsY0FDOEI7O0FBQ2hDLFFBQU0sUUFBUSxjQUFjLEVBQWQ7UUFDUixjQUFjLEtBQUssV0FBTCxDQUFpQixJQUFqQixDQUFzQixJQUF0QixDQUFkLENBRjBCOztBQUloQyxTQUFLLFFBQUwsR0FBZ0IsUUFBaEIsQ0FKZ0M7O0FBTWhDLFVBQU0sUUFBTixHQUFpQixRQUFqQixDQU5nQzs7QUFRaEMsU0FBSyxRQUFMLEdBQWdCO0FBQ2QsYUFBTyxLQUFQO0FBQ0EsbUJBQWEsV0FBYjtLQUZGLENBUmdDO0dBQWxDOztlQURJOzswQkFlRSxRQUFRLFNBQVM7QUFDckIsVUFBTSxrQkFBa0IsS0FBSyxNQUFMLENBQVksT0FBWixDQUFsQjtVQUNBLGVBQWUsS0FBSyxlQUFMLE1BQTBCLE9BQTFCLENBRkE7O0FBSXJCLFdBQUssUUFBTCxHQUFnQixlQUFDLFlBQTJCLEtBQTNCLEdBQ0MsZUFERixHQUVJLENBQUMsZUFBRCxDQUZKLENBSks7O0FBUXJCLFdBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsVUFBUyxLQUFULEVBQWdCO0FBQ3BDLGNBQU0sS0FBTixDQUFZLE1BQVosRUFBb0IsWUFBcEIsRUFEb0M7T0FBaEIsQ0FBdEIsQ0FScUI7O0FBWXJCLFdBQUssaUJBQUwsQ0FBdUIsT0FBdkIsRUFacUI7Ozs7NEJBZWYsaUJBQWlCLFNBQVM7QUFDaEMsVUFBTSxrQkFBa0IsS0FBSyxNQUFMLENBQVksT0FBWixDQUFsQjtVQUNBLGVBQWUsS0FBSyxlQUFMLE1BQTBCLE9BQTFCLENBRlc7O0FBSWhDLFdBQUssUUFBTCxHQUFnQixlQUFDLFlBQTJCLEtBQTNCLEdBQ0MsZUFERixHQUVJLENBQUMsZUFBRCxDQUZKLENBSmdCOztBQVFoQyxXQUFLLFFBQUwsQ0FBYyxPQUFkLENBQXNCLFVBQVMsS0FBVCxFQUFnQjtBQUNwQyxjQUFNLE9BQU4sQ0FBYyxlQUFkLEVBQStCLFlBQS9CLEVBRG9DO09BQWhCLENBQXRCLENBUmdDOzs7OzRCQWExQixTQUFTO0FBQ2YsV0FBSyxvQkFBTCxDQUEwQixPQUExQixFQURlOztBQUdmLFVBQU0sZUFBZSxLQUFLLGVBQUwsTUFBMEIsT0FBMUIsQ0FITjs7QUFLZixXQUFLLFFBQUwsQ0FBYyxPQUFkLENBQXNCLFVBQVMsS0FBVCxFQUFnQjtBQUNwQyxjQUFNLE9BQU4sQ0FBYyxPQUFkLEVBQXVCLFlBQXZCLEVBRG9DO09BQWhCLENBQXRCLENBTGU7Ozs7a0NBVUg7QUFDWixVQUFJLG1CQUFtQixLQUFLLFFBQUw7VUFDbkIsb0JBQW9CLEtBQUssZ0JBQUwsQ0FBcEIsQ0FGUTs7QUFJWixXQUFLLE9BQUwsQ0FBYSxpQkFBYixFQUpZOztBQU1aLHVCQUFpQixPQUFqQixDQUF5QixVQUFTLGFBQVQsRUFBd0I7QUFDL0Msc0JBQWMsTUFBZCxHQUQrQztPQUF4QixDQUF6QixDQU5ZOzs7OzZCQVdMO0FBQ1AsV0FBSyxRQUFMLENBQWMsT0FBZCxDQUFzQixVQUFTLEtBQVQsRUFBZ0I7QUFDcEMsY0FBTSxNQUFOLEdBRG9DO09BQWhCLENBQXRCLENBRE87Ozs7MkJBTUYsUUFBUTtBQUNiLFdBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsVUFBUyxLQUFULEVBQWdCO0FBQ3BDLGNBQU0sTUFBTixDQUFhLE1BQWIsRUFEb0M7T0FBaEIsQ0FBdEIsQ0FEYTs7OztnQ0FNSCxpQkFBaUI7QUFDM0IsV0FBSyxRQUFMLENBQWMsT0FBZCxDQUFzQixVQUFTLEtBQVQsRUFBZ0I7QUFDcEMsY0FBTSxXQUFOLENBQWtCLGVBQWxCLEVBRG9DO09BQWhCLENBQXRCLENBRDJCOzs7O1NBNUV6Qjs7O0FBbUZOLE9BQU8sT0FBUCxHQUFpQixZQUFqQjs7QUFFQSxTQUFTLElBQVQsQ0FBYyxLQUFkLEVBQXFCO0FBQUUsU0FBTyxNQUFNLE1BQU0sTUFBTixHQUFlLENBQWYsQ0FBYixDQUFGO0NBQXJCIiwiZmlsZSI6InJlYWN0RWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcGVydGllcywgY2hpbGRyZW4pIHtcbiAgICBjb25zdCBwcm9wcyA9IHByb3BlcnRpZXMgfHwge30sXG4gICAgICAgICAgZm9yY2VVcGRhdGUgPSB0aGlzLmZvcmNlVXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuXG4gICAgdGhpcy5pbnN0YW5jZSA9IHtcbiAgICAgIHByb3BzOiBwcm9wcyxcbiAgICAgIGZvcmNlVXBkYXRlOiBmb3JjZVVwZGF0ZVxuICAgIH07XG4gIH1cbiAgXG4gIG1vdW50KHBhcmVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkT3JDaGlsZHJlbiA9IHRoaXMucmVuZGVyKGNvbnRleHQpLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KCkgfHwgY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSAoY2hpbGRPckNoaWxkcmVuIGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgICAgICAgICAgICBjaGlsZE9yQ2hpbGRyZW4gOlxuICAgICAgICAgICAgICAgICAgICAgICAgW2NoaWxkT3JDaGlsZHJlbl07IFxuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC5tb3VudChwYXJlbnQsIGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbXBvbmVudERpZE1vdW50KGNvbnRleHQpO1xuICB9XG5cbiAgcmVtb3VudChwcmV2aW91c1NpYmxpbmcsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE9yQ2hpbGRyZW4gPSB0aGlzLnJlbmRlcihjb250ZXh0KSxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dCgpIHx8IGNvbnRleHQ7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gKGNoaWxkT3JDaGlsZHJlbiBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICAgICAgICAgICAgY2hpbGRPckNoaWxkcmVuIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjaGlsZE9yQ2hpbGRyZW5dO1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC5yZW1vdW50KHByZXZpb3VzU2libGluZywgY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHVubW91bnQoY29udGV4dCkge1xuICAgIHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQoY29udGV4dCk7XG5cbiAgICBjb25zdCBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dCgpIHx8IGNvbnRleHQ7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLnVubW91bnQoY29udGV4dCwgY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZvcmNlVXBkYXRlKCkge1xuICAgIHZhciBwcmV2aW91c0NoaWxkcmVuID0gdGhpcy5jaGlsZHJlbixcbiAgICAgICAgbGFzdFByZXZpb3VzQ2hpbGQgPSBsYXN0KHByZXZpb3VzQ2hpbGRyZW4pO1xuXG4gICAgdGhpcy5yZW1vdW50KGxhc3RQcmV2aW91c0NoaWxkKTtcblxuICAgIHByZXZpb3VzQ2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihwcmV2aW91c0NoaWxkKSB7XG4gICAgICBwcmV2aW91c0NoaWxkLnJlbW92ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQucmVtb3ZlKCk7XG4gICAgfSk7XG4gIH1cblxuICBhcHBlbmQocGFyZW50KSB7XG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC5hcHBlbmQocGFyZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIGFwcGVuZEFmdGVyKHByZXZpb3VzU2libGluZykge1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQuYXBwZW5kQWZ0ZXIocHJldmlvdXNTaWJsaW5nKTtcbiAgICB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0RWxlbWVudDtcblxuZnVuY3Rpb24gbGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cbiJdfQ==