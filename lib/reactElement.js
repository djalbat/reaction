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
          context = this.instance.context;

      this.remount(lastPreviousChild, context);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNO0FBQ0osV0FESSxZQUNKLENBQVksVUFBWixFQUF3QixRQUF4QixFQUFrQzswQkFEOUIsY0FDOEI7O0FBQ2hDLFFBQU0sUUFBUSxjQUFjLEVBQWQ7UUFDUixjQUFjLEtBQUssV0FBTCxDQUFpQixJQUFqQixDQUFzQixJQUF0QixDQUFkLENBRjBCOztBQUloQyxTQUFLLFFBQUwsR0FBZ0IsUUFBaEIsQ0FKZ0M7O0FBTWhDLFVBQU0sUUFBTixHQUFpQixRQUFqQixDQU5nQzs7QUFRaEMsU0FBSyxRQUFMLEdBQWdCO0FBQ2QsYUFBTyxLQUFQO0FBQ0EsbUJBQWEsV0FBYjtLQUZGLENBUmdDO0dBQWxDOztlQURJOzswQkFlRSxRQUFRLFNBQVM7QUFDckIsVUFBTSxrQkFBa0IsS0FBSyxNQUFMLENBQVksT0FBWixDQUFsQjtVQUNBLGVBQWUsS0FBSyxlQUFMLE1BQTBCLE9BQTFCLENBRkE7O0FBSXJCLFdBQUssUUFBTCxHQUFnQixlQUFDLFlBQTJCLEtBQTNCLEdBQ0MsZUFERixHQUVJLENBQUMsZUFBRCxDQUZKLENBSks7O0FBUXJCLFdBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsVUFBUyxLQUFULEVBQWdCO0FBQ3BDLGNBQU0sS0FBTixDQUFZLE1BQVosRUFBb0IsWUFBcEIsRUFEb0M7T0FBaEIsQ0FBdEIsQ0FScUI7O0FBWXJCLFdBQUssaUJBQUwsQ0FBdUIsT0FBdkIsRUFacUI7Ozs7NEJBZWYsaUJBQWlCLFNBQVM7QUFDaEMsVUFBTSxrQkFBa0IsS0FBSyxNQUFMLENBQVksT0FBWixDQUFsQjtVQUNBLGVBQWUsS0FBSyxlQUFMLE1BQTBCLE9BQTFCLENBRlc7O0FBSWhDLFdBQUssUUFBTCxHQUFnQixlQUFDLFlBQTJCLEtBQTNCLEdBQ0MsZUFERixHQUVJLENBQUMsZUFBRCxDQUZKLENBSmdCOztBQVFoQyxXQUFLLFFBQUwsQ0FBYyxPQUFkLENBQXNCLFVBQVMsS0FBVCxFQUFnQjtBQUNwQyxjQUFNLE9BQU4sQ0FBYyxlQUFkLEVBQStCLFlBQS9CLEVBRG9DO09BQWhCLENBQXRCLENBUmdDOzs7OzRCQWExQixTQUFTO0FBQ2YsV0FBSyxvQkFBTCxDQUEwQixPQUExQixFQURlOztBQUdmLFVBQU0sZUFBZSxLQUFLLGVBQUwsTUFBMEIsT0FBMUIsQ0FITjs7QUFLZixXQUFLLFFBQUwsQ0FBYyxPQUFkLENBQXNCLFVBQVMsS0FBVCxFQUFnQjtBQUNwQyxjQUFNLE9BQU4sQ0FBYyxPQUFkLEVBQXVCLFlBQXZCLEVBRG9DO09BQWhCLENBQXRCLENBTGU7Ozs7NkJBVVI7QUFDUCxXQUFLLFFBQUwsQ0FBYyxPQUFkLENBQXNCLFVBQVMsS0FBVCxFQUFnQjtBQUNwQyxjQUFNLE1BQU4sR0FEb0M7T0FBaEIsQ0FBdEIsQ0FETzs7OzsyQkFNRixRQUFRO0FBQ2IsV0FBSyxRQUFMLENBQWMsT0FBZCxDQUFzQixVQUFTLEtBQVQsRUFBZ0I7QUFDcEMsY0FBTSxNQUFOLENBQWEsTUFBYixFQURvQztPQUFoQixDQUF0QixDQURhOzs7O2dDQU1ILGlCQUFpQjtBQUMzQixXQUFLLFFBQUwsQ0FBYyxPQUFkLENBQXNCLFVBQVMsS0FBVCxFQUFnQjtBQUNwQyxjQUFNLFdBQU4sQ0FBa0IsZUFBbEIsRUFEb0M7T0FBaEIsQ0FBdEIsQ0FEMkI7Ozs7a0NBTWY7QUFDWixVQUFJLG1CQUFtQixLQUFLLFFBQUw7VUFDbkIsb0JBQW9CLEtBQUssZ0JBQUwsQ0FBcEI7VUFDQSxVQUFVLEtBQUssUUFBTCxDQUFjLE9BQWQsQ0FIRjs7QUFLWixXQUFLLE9BQUwsQ0FBYSxpQkFBYixFQUFnQyxPQUFoQyxFQUxZOztBQU9aLHVCQUFpQixPQUFqQixDQUF5QixVQUFTLGFBQVQsRUFBd0I7QUFDL0Msc0JBQWMsTUFBZCxHQUQrQztPQUF4QixDQUF6QixDQVBZOzs7O1NBdkVWOzs7QUFvRk4sT0FBTyxPQUFQLEdBQWlCLFlBQWpCOztBQUVBLFNBQVMsSUFBVCxDQUFjLEtBQWQsRUFBcUI7QUFBRSxTQUFPLE1BQU0sTUFBTSxNQUFOLEdBQWUsQ0FBZixDQUFiLENBQUY7Q0FBckIiLCJmaWxlIjoicmVhY3RFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBSZWFjdEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzLCBjaGlsZHJlbikge1xuICAgIGNvbnN0IHByb3BzID0gcHJvcGVydGllcyB8fCB7fSxcbiAgICAgICAgICBmb3JjZVVwZGF0ZSA9IHRoaXMuZm9yY2VVcGRhdGUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcblxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG5cbiAgICB0aGlzLmluc3RhbmNlID0ge1xuICAgICAgcHJvcHM6IHByb3BzLFxuICAgICAgZm9yY2VVcGRhdGU6IGZvcmNlVXBkYXRlXG4gICAgfTtcbiAgfVxuICBcbiAgbW91bnQocGFyZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGRPckNoaWxkcmVuID0gdGhpcy5yZW5kZXIoY29udGV4dCksXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoKSB8fCBjb250ZXh0O1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IChjaGlsZE9yQ2hpbGRyZW4gaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgICAgICAgICAgIGNoaWxkT3JDaGlsZHJlbiA6XG4gICAgICAgICAgICAgICAgICAgICAgICBbY2hpbGRPckNoaWxkcmVuXTsgXG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLm1vdW50KHBhcmVudCwgY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuY29tcG9uZW50RGlkTW91bnQoY29udGV4dCk7XG4gIH1cblxuICByZW1vdW50KHByZXZpb3VzU2libGluZywgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkT3JDaGlsZHJlbiA9IHRoaXMucmVuZGVyKGNvbnRleHQpLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KCkgfHwgY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSAoY2hpbGRPckNoaWxkcmVuIGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgICAgICAgICAgICBjaGlsZE9yQ2hpbGRyZW4gOlxuICAgICAgICAgICAgICAgICAgICAgICAgW2NoaWxkT3JDaGlsZHJlbl07XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLnJlbW91bnQocHJldmlvdXNTaWJsaW5nLCBjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuICB9XG5cbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudChjb250ZXh0KTtcblxuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KCkgfHwgY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQudW5tb3VudChjb250ZXh0LCBjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQucmVtb3ZlKCk7XG4gICAgfSk7XG4gIH1cblxuICBhcHBlbmQocGFyZW50KSB7XG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC5hcHBlbmQocGFyZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIGFwcGVuZEFmdGVyKHByZXZpb3VzU2libGluZykge1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQuYXBwZW5kQWZ0ZXIocHJldmlvdXNTaWJsaW5nKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZvcmNlVXBkYXRlKCkge1xuICAgIHZhciBwcmV2aW91c0NoaWxkcmVuID0gdGhpcy5jaGlsZHJlbixcbiAgICAgICAgbGFzdFByZXZpb3VzQ2hpbGQgPSBsYXN0KHByZXZpb3VzQ2hpbGRyZW4pLFxuICAgICAgICBjb250ZXh0ID0gdGhpcy5pbnN0YW5jZS5jb250ZXh0O1xuXG4gICAgdGhpcy5yZW1vdW50KGxhc3RQcmV2aW91c0NoaWxkLCBjb250ZXh0KTtcblxuICAgIHByZXZpb3VzQ2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihwcmV2aW91c0NoaWxkKSB7XG4gICAgICBwcmV2aW91c0NoaWxkLnJlbW92ZSgpO1xuICAgIH0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RFbGVtZW50O1xuXG5mdW5jdGlvbiBsYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuIl19