'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var helpers = require('./helpers'),
    Element = require('./element');

var ReactElement = function (_Element) {
  _inherits(ReactElement, _Element);

  function ReactElement(props) {
    _classCallCheck(this, ReactElement);

    var domElement = null;

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactElement).call(this, domElement, props));

    _this.state = undefined;

    _this.context = undefined;
    return _this;
  }

  _createClass(ReactElement, [{
    key: 'mount',
    value: function mount(parent, reference, context) {
      _get(Object.getPrototypeOf(ReactElement.prototype), 'mount', this).call(this, parent, reference);

      this.context = context;

      this.children = helpers.guaranteeArray(this.render());

      var childParent = this,
          childReference = reference,
          childContext = this.getChildContext(context) || context;

      this.children.forEach(function (child) {
        child.mount(childParent, childReference, childContext);
      });

      this.componentDidMount();
    }
  }, {
    key: 'remount',
    value: function remount() {
      var childParent = this,
          childReference = this.getChildReference(),
          childContext = this.getChildContext(this.context) || this.context;

      this.children.forEach(function (child) {
        child.unmount(childContext);
      });

      this.children = helpers.guaranteeArray(this.render());

      this.children.forEach(function (child) {
        child.mount(childParent, childReference, childContext);
      }.bind(this));
    }
  }, {
    key: 'unmount',
    value: function unmount(context) {
      this.context = context;

      this.componentWillUnmount();

      var childContext = this.getChildContext(context) || context;

      this.children.forEach(function (child) {
        child.unmount(childContext);
      });

      _get(Object.getPrototypeOf(ReactElement.prototype), 'unmount', this).call(this);
    }
  }, {
    key: 'forceUpdate',
    value: function forceUpdate() {
      this.remount();
    }
  }, {
    key: 'setState',
    value: function setState(state) {
      this.state = state;

      this.remount();
    }
  }, {
    key: 'spliceChildren',
    value: function spliceChildren(start, removeCount, addedChildren) {
      var context = arguments.length <= 3 || arguments[3] === undefined ? this.context : arguments[3];

      var firstChild = first(this.children),
          childContext = this.getChildContext(context) || context;

      firstChild.spliceChildren(start, removeCount, addedChildren, childContext);
    }
  }, {
    key: 'addChild',
    value: function addChild(child) {
      var context = arguments.length <= 1 || arguments[1] === undefined ? this.context : arguments[1];

      var firstChild = first(this.children),
          childContext = this.getChildContext(context) || context;

      firstChild.addChild(child, childContext);
    }
  }, {
    key: 'removeChild',
    value: function removeChild(child) {
      var context = arguments.length <= 1 || arguments[1] === undefined ? this.context : arguments[1];

      var firstChild = first(this.children),
          childContext = this.getChildContext(context) || context;

      firstChild.removeChild(child, childContext);
    }
  }, {
    key: 'setAttribute',
    value: function setAttribute(name, value) {
      var firstChild = first(this.children);

      return firstChild.setAttribute(name, value);
    }
  }, {
    key: 'getAttribute',
    value: function getAttribute(name) {
      var firstChild = first(this.children);

      return firstChild.getAttribute(name);
    }
  }, {
    key: 'clearAttribute',
    value: function clearAttribute(name) {
      var firstChild = first(this.children);

      firstChild.clearAttribute(name);
    }
  }, {
    key: 'setClass',
    value: function setClass(className) {
      var firstChild = first(this.children);

      firstChild.setClass(className);
    }
  }, {
    key: 'addClass',
    value: function addClass(className) {
      var firstChild = first(this.children);

      firstChild.addClass(className);
    }
  }, {
    key: 'removeClass',
    value: function removeClass(className) {
      var firstChild = first(this.children);

      firstChild.removeClass(className);
    }
  }, {
    key: 'toggleClass',
    value: function toggleClass(className) {
      var firstChild = first(this.children);

      firstChild.toggleClass(className);
    }
  }, {
    key: 'clearClasses',
    value: function clearClasses() {
      var firstChild = first(this.children);

      firstChild.clearClasses();
    }
  }, {
    key: 'getChildReference',
    value: function getChildReference() {
      var parent = this.getParent(),
          child = this;

      return reference(parent, child);
    }
  }]);

  return ReactElement;
}(Element);

module.exports = ReactElement;

function reference(parent, child) {
  var reference = findReference(parent, child),
      parentDOMElement = parent.getDOMElement();

  while (reference === null && parentDOMElement === null) {
    child = parent;
    parent = parent.getParent();

    reference = findReference(parent, child);
    parentDOMElement = parent.getDOMElement();
  }

  return reference;
}

function findReference(parent, child) {
  var children = parent.getChildren(),
      remainingChildren = helpers.remaining(child, children);

  return remainingChildren.reduce(function (reference, remainingChild) {
    if (reference === null) {
      var remainingChildDOMElement = remainingChild.getDOMElement();

      if (remainingChildDOMElement !== null) {
        reference = remainingChild;
      } else {
        child = null;
        parent = remainingChild;

        reference = findReference(parent, child);
      }
    }

    return reference;
  }, null);
}

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWFjdEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU0sVUFBVSxRQUFRLFdBQVIsQ0FBVjtJQUNBLFVBQVUsUUFBUSxXQUFSLENBQVY7O0lBRUE7OztBQUNKLFdBREksWUFDSixDQUFZLEtBQVosRUFBbUI7MEJBRGYsY0FDZTs7QUFDakIsUUFBTSxhQUFhLElBQWIsQ0FEVzs7dUVBRGYseUJBSUksWUFBWSxRQUhEOztBQUtqQixVQUFLLEtBQUwsR0FBYSxTQUFiLENBTGlCOztBQU9qQixVQUFLLE9BQUwsR0FBZSxTQUFmLENBUGlCOztHQUFuQjs7ZUFESTs7MEJBV0UsUUFBUSxXQUFXLFNBQVM7QUFDaEMsaUNBWkUsbURBWVUsUUFBUSxVQUFwQixDQURnQzs7QUFHaEMsV0FBSyxPQUFMLEdBQWUsT0FBZixDQUhnQzs7QUFLaEMsV0FBSyxRQUFMLEdBQWdCLFFBQVEsY0FBUixDQUF1QixLQUFLLE1BQUwsRUFBdkIsQ0FBaEIsQ0FMZ0M7O0FBT2hDLFVBQU0sY0FBYyxJQUFkO1VBQ0EsaUJBQWlCLFNBQWpCO1VBQ0EsZUFBZSxLQUFLLGVBQUwsQ0FBcUIsT0FBckIsS0FBaUMsT0FBakMsQ0FUVzs7QUFXaEMsV0FBSyxRQUFMLENBQWMsT0FBZCxDQUFzQixVQUFTLEtBQVQsRUFBZ0I7QUFDcEMsY0FBTSxLQUFOLENBQVksV0FBWixFQUF5QixjQUF6QixFQUF5QyxZQUF6QyxFQURvQztPQUFoQixDQUF0QixDQVhnQzs7QUFlaEMsV0FBSyxpQkFBTCxHQWZnQzs7Ozs4QkFrQnhCO0FBQ1IsVUFBTSxjQUFjLElBQWQ7VUFDQSxpQkFBaUIsS0FBSyxpQkFBTCxFQUFqQjtVQUNBLGVBQWUsS0FBSyxlQUFMLENBQXFCLEtBQUssT0FBTCxDQUFyQixJQUFzQyxLQUFLLE9BQUwsQ0FIbkQ7O0FBS1IsV0FBSyxRQUFMLENBQWMsT0FBZCxDQUFzQixVQUFTLEtBQVQsRUFBZ0I7QUFDcEMsY0FBTSxP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QyxvQkFBWSxjQUFaLENBRHFDO09BQXZDLE1BRU87QUFDTCxnQkFBUSxJQUFSLENBREs7QUFFTCxpQkFBUyxjQUFULENBRks7O0FBSUwsb0JBQVksY0FBYyxNQUFkLEVBQXNCLEtBQXRCLENBQVosQ0FKSztPQUZQO0tBSEY7O0FBYUEsV0FBTyxTQUFQLENBZGtFO0dBQXBDLEVBZTdCLElBZkksQ0FBUCxDQUpvQztDQUF0Qzs7QUFzQkEsU0FBUyxLQUFULENBQWUsS0FBZixFQUFzQjtBQUFFLFNBQU8sTUFBTSxDQUFOLENBQVAsQ0FBRjtDQUF0QiIsImZpbGUiOiJyZWFjdEVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGhlbHBlcnMgPSByZXF1aXJlKCcuL2hlbHBlcnMnKSxcbiAgICAgIEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3RFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IG51bGw7XG5cbiAgICBzdXBlcihkb21FbGVtZW50LCBwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0gdW5kZWZpbmVkO1xuXG4gICAgdGhpcy5jb250ZXh0ID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpIHtcbiAgICBzdXBlci5tb3VudChwYXJlbnQsIHJlZmVyZW5jZSk7XG5cbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IGhlbHBlcnMuZ3VhcmFudGVlQXJyYXkodGhpcy5yZW5kZXIoKSk7XG5cbiAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgY2hpbGRSZWZlcmVuY2UgPSByZWZlcmVuY2UsXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCkgfHwgY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb21wb25lbnREaWRNb3VudCgpOyBcbiAgfVxuXG4gIHJlbW91bnQoKSB7XG4gICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gdGhpcy5nZXRDaGlsZFJlZmVyZW5jZSgpLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KHRoaXMuY29udGV4dCkgfHwgdGhpcy5jb250ZXh0O1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gaGVscGVycy5ndWFyYW50ZWVBcnJheSh0aGlzLnJlbmRlcigpKTtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuXG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCkgfHwgY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuICAgIFxuICAgIHN1cGVyLnVubW91bnQoKTtcbiAgfVxuXG4gIGZvcmNlVXBkYXRlKCkge1xuICAgIHRoaXMucmVtb3VudCgpO1xuICB9XG5cbiAgc2V0U3RhdGUoc3RhdGUpIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG5cbiAgICB0aGlzLnJlbW91bnQoKTtcbiAgfVxuXG4gIHNwbGljZUNoaWxkcmVuKHN0YXJ0LCByZW1vdmVDb3VudCwgYWRkZWRDaGlsZHJlbiwgY29udGV4dCA9IHRoaXMuY29udGV4dCkge1xuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKSxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dChjb250ZXh0KSB8fCBjb250ZXh0O1xuXG4gICAgZmlyc3RDaGlsZC5zcGxpY2VDaGlsZHJlbihzdGFydCwgcmVtb3ZlQ291bnQsIGFkZGVkQ2hpbGRyZW4sIGNoaWxkQ29udGV4dCk7XG4gIH1cblxuICBhZGRDaGlsZChjaGlsZCwgY29udGV4dCA9IHRoaXMuY29udGV4dCkge1xuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKSxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dChjb250ZXh0KSB8fCBjb250ZXh0O1xuXG4gICAgZmlyc3RDaGlsZC5hZGRDaGlsZChjaGlsZCwgY2hpbGRDb250ZXh0KTtcbiAgfVxuXG4gIHJlbW92ZUNoaWxkKGNoaWxkLCBjb250ZXh0ID0gdGhpcy5jb250ZXh0KSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHx8IGNvbnRleHQ7XG5cbiAgICBmaXJzdENoaWxkLnJlbW92ZUNoaWxkKGNoaWxkLCBjaGlsZENvbnRleHQpO1xuICB9XG5cbiAgc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pO1xuXG4gICAgcmV0dXJuIGZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgfVxuXG4gIGdldEF0dHJpYnV0ZShuYW1lKSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pO1xuXG4gICAgcmV0dXJuIGZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKG5hbWUpO1xuICB9XG5cbiAgY2xlYXJBdHRyaWJ1dGUobmFtZSkge1xuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKTtcblxuICAgIGZpcnN0Q2hpbGQuY2xlYXJBdHRyaWJ1dGUobmFtZSk7XG4gIH1cblxuICBzZXRDbGFzcyhjbGFzc05hbWUpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgICBmaXJzdENoaWxkLnNldENsYXNzKGNsYXNzTmFtZSk7XG4gIH1cblxuICBhZGRDbGFzcyhjbGFzc05hbWUpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgICBmaXJzdENoaWxkLmFkZENsYXNzKGNsYXNzTmFtZSk7XG4gIH1cblxuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgICBmaXJzdENoaWxkLnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7XG4gIH1cblxuICB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgICBmaXJzdENoaWxkLnRvZ2dsZUNsYXNzKGNsYXNzTmFtZSk7XG4gIH1cblxuICBjbGVhckNsYXNzZXMoKSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pO1xuXG4gICAgZmlyc3RDaGlsZC5jbGVhckNsYXNzZXMoKTtcbiAgfVxuXG4gIGdldENoaWxkUmVmZXJlbmNlKCkge1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuZ2V0UGFyZW50KCksXG4gICAgICAgICAgY2hpbGQgPSB0aGlzO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0RWxlbWVudDtcblxuZnVuY3Rpb24gcmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpIHtcbiAgbGV0IHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCksXG4gICAgICBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcblxuICB3aGlsZSAoKHJlZmVyZW5jZSA9PT0gbnVsbCkgJiYgKHBhcmVudERPTUVsZW1lbnQgPT09IG51bGwpKSB7XG4gICAgY2hpbGQgPSBwYXJlbnQ7XG4gICAgcGFyZW50ID0gcGFyZW50LmdldFBhcmVudCgpO1xuXG4gICAgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKTtcbiAgICBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcbiAgfVxuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmZ1bmN0aW9uIGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCkge1xuICBjb25zdCBjaGlsZHJlbiA9IHBhcmVudC5nZXRDaGlsZHJlbigpLFxuICAgICAgICByZW1haW5pbmdDaGlsZHJlbiA9IGhlbHBlcnMucmVtYWluaW5nKGNoaWxkLCBjaGlsZHJlbik7XG5cbiAgcmV0dXJuIHJlbWFpbmluZ0NoaWxkcmVuLnJlZHVjZShmdW5jdGlvbihyZWZlcmVuY2UsIHJlbWFpbmluZ0NoaWxkKSB7XG4gICAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgcmVtYWluaW5nQ2hpbGRET01FbGVtZW50ID0gcmVtYWluaW5nQ2hpbGQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgICBpZiAocmVtYWluaW5nQ2hpbGRET01FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHJlZmVyZW5jZSA9IHJlbWFpbmluZ0NoaWxkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSBudWxsO1xuICAgICAgICBwYXJlbnQgPSByZW1haW5pbmdDaGlsZDtcblxuICAgICAgICByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH0sIG51bGwpO1xufVxuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxuIl19