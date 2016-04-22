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
    value: function mount(parent) {
      var childOrChildren = this.render();

      this.children = childOrChildren instanceof Array ? childOrChildren : [childOrChildren];

      this.children.forEach(function (child) {
        child.mount(parent);
      });

      this.componentDidMount();
    }
  }, {
    key: 'remount',
    value: function remount(lastPreviousChild) {
      var childOrChildren = this.render();

      this.children = childOrChildren instanceof Array ? childOrChildren : [childOrChildren];

      this.children.forEach(function (child) {
        var previousSibling = lastPreviousChild; ///

        child.remount(previousSibling);
      });
    }
  }, {
    key: 'forceUpdate',
    value: function forceUpdate() {
      var previousChildren = this.children,
          ///
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNO0FBQ0osV0FESSxZQUNKLENBQVksVUFBWixFQUF3QixRQUF4QixFQUFrQzswQkFEOUIsY0FDOEI7O0FBQ2hDLFFBQU0sUUFBUSxjQUFjLEVBQWQ7UUFDUixjQUFjLEtBQUssV0FBTCxDQUFpQixJQUFqQixDQUFzQixJQUF0QixDQUFkLENBRjBCOztBQUloQyxTQUFLLFFBQUwsR0FBZ0IsUUFBaEIsQ0FKZ0M7O0FBTWhDLFVBQU0sUUFBTixHQUFpQixRQUFqQixDQU5nQzs7QUFRaEMsU0FBSyxRQUFMLEdBQWdCO0FBQ2QsYUFBTyxLQUFQO0FBQ0EsbUJBQWEsV0FBYjtLQUZGLENBUmdDO0dBQWxDOztlQURJOzswQkFlRSxRQUFRO0FBQ1osVUFBSSxrQkFBa0IsS0FBSyxNQUFMLEVBQWxCLENBRFE7O0FBR1osV0FBSyxRQUFMLEdBQWdCLGVBQUMsWUFBMkIsS0FBM0IsR0FDQyxlQURGLEdBRUksQ0FBQyxlQUFELENBRkosQ0FISjs7QUFPWixXQUFLLFFBQUwsQ0FBYyxPQUFkLENBQXNCLFVBQVMsS0FBVCxFQUFnQjtBQUNwQyxjQUFNLEtBQU4sQ0FBWSxNQUFaLEVBRG9DO09BQWhCLENBQXRCLENBUFk7O0FBV1osV0FBSyxpQkFBTCxHQVhZOzs7OzRCQWNOLG1CQUFtQjtBQUN6QixVQUFJLGtCQUFrQixLQUFLLE1BQUwsRUFBbEIsQ0FEcUI7O0FBR3pCLFdBQUssUUFBTCxHQUFnQixlQUFDLFlBQTJCLEtBQTNCLEdBQ0MsZUFERixHQUVJLENBQUMsZUFBRCxDQUZKLENBSFM7O0FBT3pCLFdBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsVUFBUyxLQUFULEVBQWdCO0FBQ3BDLFlBQUksa0JBQWtCLGlCQUFsQjs7QUFEZ0MsYUFHcEMsQ0FBTSxPQUFOLENBQWMsZUFBZCxFQUhvQztPQUFoQixDQUF0QixDQVB5Qjs7OztrQ0FjYjtBQUNaLFVBQUksbUJBQW1CLEtBQUssUUFBTDs7QUFDbkIsMEJBQW9CLEtBQUssZ0JBQUwsQ0FBcEIsQ0FGUTs7QUFJWixXQUFLLE9BQUwsQ0FBYSxpQkFBYixFQUpZOztBQU1aLHVCQUFpQixPQUFqQixDQUF5QixVQUFTLGFBQVQsRUFBd0I7QUFDL0Msc0JBQWMsTUFBZCxHQUQrQztPQUF4QixDQUF6QixDQU5ZOzs7OzZCQVdMO0FBQ1AsV0FBSyxRQUFMLENBQWMsT0FBZCxDQUFzQixVQUFTLEtBQVQsRUFBZ0I7QUFDcEMsY0FBTSxNQUFOLEdBRG9DO09BQWhCLENBQXRCLENBRE87Ozs7MkJBTUYsUUFBUTtBQUNiLFdBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsVUFBUyxLQUFULEVBQWdCO0FBQ3BDLGNBQU0sTUFBTixDQUFhLE1BQWIsRUFEb0M7T0FBaEIsQ0FBdEIsQ0FEYTs7OztnQ0FNSCxpQkFBaUI7QUFDM0IsV0FBSyxRQUFMLENBQWMsT0FBZCxDQUFzQixVQUFTLEtBQVQsRUFBZ0I7QUFDcEMsY0FBTSxXQUFOLENBQWtCLGVBQWxCLEVBRG9DO09BQWhCLENBQXRCLENBRDJCOzs7O1NBbEV6Qjs7O0FBeUVOLE9BQU8sT0FBUCxHQUFpQixZQUFqQjs7QUFFQSxTQUFTLElBQVQsQ0FBYyxLQUFkLEVBQXFCO0FBQUUsU0FBTyxNQUFNLE1BQU0sTUFBTixHQUFlLENBQWYsQ0FBYixDQUFGO0NBQXJCIiwiZmlsZSI6InJlYWN0RWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcGVydGllcywgY2hpbGRyZW4pIHtcbiAgICBjb25zdCBwcm9wcyA9IHByb3BlcnRpZXMgfHwge30sXG4gICAgICAgICAgZm9yY2VVcGRhdGUgPSB0aGlzLmZvcmNlVXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuXG4gICAgdGhpcy5pbnN0YW5jZSA9IHtcbiAgICAgIHByb3BzOiBwcm9wcyxcbiAgICAgIGZvcmNlVXBkYXRlOiBmb3JjZVVwZGF0ZVxuICAgIH07XG4gIH1cbiAgXG4gIG1vdW50KHBhcmVudCkge1xuICAgIHZhciBjaGlsZE9yQ2hpbGRyZW4gPSB0aGlzLnJlbmRlcigpO1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IChjaGlsZE9yQ2hpbGRyZW4gaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgICAgICAgICAgIGNoaWxkT3JDaGlsZHJlbiA6XG4gICAgICAgICAgICAgICAgICAgICAgICBbY2hpbGRPckNoaWxkcmVuXTtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQubW91bnQocGFyZW50KTtcbiAgICB9KTtcblxuICAgIHRoaXMuY29tcG9uZW50RGlkTW91bnQoKTtcbiAgfVxuXG4gIHJlbW91bnQobGFzdFByZXZpb3VzQ2hpbGQpIHtcbiAgICB2YXIgY2hpbGRPckNoaWxkcmVuID0gdGhpcy5yZW5kZXIoKTtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSAoY2hpbGRPckNoaWxkcmVuIGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgICAgICAgICAgICBjaGlsZE9yQ2hpbGRyZW4gOlxuICAgICAgICAgICAgICAgICAgICAgICAgW2NoaWxkT3JDaGlsZHJlbl07XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIHZhciBwcmV2aW91c1NpYmxpbmcgPSBsYXN0UHJldmlvdXNDaGlsZDsgIC8vL1xuXG4gICAgICBjaGlsZC5yZW1vdW50KHByZXZpb3VzU2libGluZyk7XG4gICAgfSk7XG4gIH1cblxuICBmb3JjZVVwZGF0ZSgpIHtcbiAgICB2YXIgcHJldmlvdXNDaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4sIC8vL1xuICAgICAgICBsYXN0UHJldmlvdXNDaGlsZCA9IGxhc3QocHJldmlvdXNDaGlsZHJlbik7XG4gICAgXG4gICAgdGhpcy5yZW1vdW50KGxhc3RQcmV2aW91c0NoaWxkKTtcblxuICAgIHByZXZpb3VzQ2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihwcmV2aW91c0NoaWxkKSB7XG4gICAgICBwcmV2aW91c0NoaWxkLnJlbW92ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQucmVtb3ZlKCk7XG4gICAgfSk7XG4gIH1cbiAgXG4gIGFwcGVuZChwYXJlbnQpIHtcbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLmFwcGVuZChwYXJlbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgYXBwZW5kQWZ0ZXIocHJldmlvdXNTaWJsaW5nKSB7XG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC5hcHBlbmRBZnRlcihwcmV2aW91c1NpYmxpbmcpO1xuICAgIH0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RFbGVtZW50O1xuXG5mdW5jdGlvbiBsYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuIl19